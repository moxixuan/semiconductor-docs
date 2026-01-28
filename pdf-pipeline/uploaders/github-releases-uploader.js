const { Octokit } = require('@octokit/rest');
const fs = require('fs').promises;
const path = require('path');

/**
 * GitHub Releases 上传器
 * 用于将PDF文件上传到GitHub Releases，绕过GitHub Pages的1GB限制
 */
class GitHubReleasesUploader {
  /**
   * @param {string} token - GitHub Personal Access Token
   * @param {string} repo - Repository format: 'owner/repo'
   */
  constructor(token, repo) {
    if (!token) {
      throw new Error('GitHub token is required');
    }
    if (!repo || !repo.includes('/')) {
      throw new Error('Repository must be in format "owner/repo"');
    }

    this.octokit = new Octokit({ auth: token });
    this.repo = repo;
    this.owner = repo.split('/')[0];
    this.repoName = repo.split('/')[1];
  }

  /**
   * 获取或创建Release
   * @param {string} tag - Release tag (e.g., 'v1.0-pdfs')
   * @returns {Promise<object>} Release对象
   */
  async getOrCreateRelease(tag) {
    try {
      // 尝试获取已存在的Release
      const { data: release } = await this.octokit.repos.getReleaseByTag({
        owner: this.owner,
        repo: this.repoName,
        tag,
      });

      console.log(`✅ 找到已存在的Release: ${tag}`);
      return release;
    } catch (error) {
      if (error.status === 404) {
        // Release不存在，创建新的
        console.log(`📦 创建新Release: ${tag}`);

        const { data: release } = await this.octokit.repos.createRelease({
          owner: this.owner,
          repo: this.repoName,
          tag_name: tag,
          name: tag,
          body: 'PDF文档自动上传',
          draft: false,
          prerelease: false,
        });

        console.log(`✅ Release创建成功: ${tag}`);
        return release;
      }

      throw error;
    }
  }

  /**
   * 上传PDF文件到Release
   * @param {string} pdfPath - PDF文件路径
   * @param {string} releaseTag - Release tag (默认: 'latest-pdfs')
   * @returns {Promise<object>} 上传结果
   */
  async uploadPDF(pdfPath, releaseTag = 'latest-pdfs') {
    try {
      // 验证文件存在
      const stats = await fs.stat(pdfPath);
      const fileName = path.basename(pdfPath);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

      console.log(`\n📤 准备上传: ${fileName}`);
      console.log(`   文件大小: ${sizeMB}MB`);

      // 获取或创建Release
      const release = await this.getOrCreateRelease(releaseTag);

      // 检查是否已存在同名文件
      const existingAsset = release.assets.find(asset => asset.name === fileName);
      if (existingAsset) {
        console.log(`⚠️  文件已存在，删除旧版本...`);
        await this.octokit.repos.deleteReleaseAsset({
          owner: this.owner,
          repo: this.repoName,
          asset_id: existingAsset.id,
        });
      }

      // 读取文件
      console.log(`📖 读取文件...`);
      const fileData = await fs.readFile(pdfPath);

      // 上传文件
      console.log(`⬆️  上传中... (可能需要几分钟)`);
      const { data: asset } = await this.octokit.repos.uploadReleaseAsset({
        owner: this.owner,
        repo: this.repoName,
        release_id: release.id,
        name: fileName,
        data: fileData,
      });

      console.log(`✅ 上传成功！`);
      console.log(`   下载链接: ${asset.browser_download_url}`);

      return {
        success: true,
        fileName,
        downloadUrl: asset.browser_download_url,
        apiUrl: asset.url,
        size: sizeMB,
        sizeBytes: stats.size,
        releaseTag,
        uploadedAt: new Date().toISOString(),
      };
    } catch (error) {
      console.error(`❌ 上传失败: ${error.message}`);

      // 提供更详细的错误信息
      if (error.status === 401) {
        throw new Error('GitHub Token无效或已过期，请检查token权限');
      } else if (error.status === 404) {
        throw new Error('Repository不存在或无访问权限');
      } else if (error.status === 422) {
        throw new Error('文件太大或格式不支持');
      }

      throw error;
    }
  }

  /**
   * 批量上传多个PDF文件
   * @param {string[]} pdfPaths - PDF文件路径数组
   * @param {string} releaseTag - Release tag
   * @returns {Promise<object[]>} 上传结果数组
   */
  async uploadBatch(pdfPaths, releaseTag = 'latest-pdfs') {
    const results = [];

    for (const pdfPath of pdfPaths) {
      try {
        const result = await this.uploadPDF(pdfPath, releaseTag);
        results.push(result);
      } catch (error) {
        console.error(`❌ ${pdfPath} 上传失败: ${error.message}`);
        results.push({
          success: false,
          path: pdfPath,
          error: error.message,
        });
      }
    }

    return results;
  }

  /**
   * 删除Release中的资产
   * @param {string} assetName - 资产名称
   * @param {string} releaseTag - Release tag
   */
  async deleteAsset(assetName, releaseTag = 'latest-pdfs') {
    const release = await this.getOrCreateRelease(releaseTag);
    const asset = release.assets.find(a => a.name === assetName);

    if (!asset) {
      throw new Error(`资产不存在: ${assetName}`);
    }

    await this.octokit.repos.deleteReleaseAsset({
      owner: this.owner,
      repo: this.repoName,
      asset_id: asset.id,
    });

    console.log(`✅ 删除资产: ${assetName}`);
  }

  /**
   * 列出Release中的所有资产
   * @param {string} releaseTag - Release tag
   * @returns {Promise<object[]>} 资产列表
   */
  async listAssets(releaseTag = 'latest-pdfs') {
    const release = await this.getOrCreateRelease(releaseTag);

    return release.assets.map(asset => ({
      name: asset.name,
      size: (asset.size / 1024 / 1024).toFixed(2) + 'MB',
      downloadCount: asset.download_count,
      downloadUrl: asset.browser_download_url,
      createdAt: asset.created_at,
      updatedAt: asset.updated_at,
    }));
  }
}

module.exports = GitHubReleasesUploader;
