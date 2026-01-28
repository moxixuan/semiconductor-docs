#!/usr/bin/env node

/**
 * PDF 处理管道 CLI 工具
 * 用于将 PDF 转换为 Markdown 文档
 */

const { Command } = require('commander');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs').promises;

const PDFToMarkdownConverter = require('./converters/pdf-to-markdown');
const MetadataExtractor = require('./extractors/metadata-extractor');
const GitHubReleasesUploader = require('./uploaders/github-releases-uploader');
const TierClassifier = require('./utils/tier-classifier');
const PDFSplitter = require('./utils/pdf-splitter');

const program = new Command();

// ============================================================================
// 命令配置
// ============================================================================

program
  .name('pdf-pipeline')
  .description('半导体文档 PDF 处理管道')
  .version('1.0.0');

// ============================================================================
// convert 命令 - 转换单个 PDF
// ============================================================================

program
  .command('convert <pdfFile>')
  .description('将 PDF 转换为 Markdown')
  .option('-o, --output <file>', '输出 Markdown 文件路径')
  .option('--ocr', '启用 OCR 处理（扫描版 PDF）')
  .option('--extract-images', '提取图片')
  .option('--preserve-formatting', '保留格式')
  .action(async (pdfFile, options) => {
    try {
      console.log(chalk.blue.bold('\n🚀 PDF 转 Markdown 转换器\n'));

      // 验证输入文件
      const pdfPath = path.resolve(pdfFile);
      await fs.access(pdfPath);

      // 配置转换选项
      const convertOptions = {
        ocrEnabled: options.ocr || false,
        preserveFormatting: options.preserveFormatting || false,
      };

      // 创建转换器
      const converter = new PDFToMarkdownConverter(convertOptions);

      // 执行转换
      console.log(chalk.gray(`📄 输入文件: ${pdfFile}`));
      const result = await converter.convert(pdfPath, options);

      // 提取元数据
      const extractor = new MetadataExtractor();
      const metadata = await extractor.extract(pdfPath, result.markdown);

      // 生成输出文件名
      let outputPath;
      if (options.output) {
        outputPath = path.resolve(options.output);
      } else {
        const outputDir = path.join(process.cwd(), 'data', 'markdown', 'drafts');
        await fs.mkdir(outputDir, { recursive: true });
        outputPath = path.join(outputDir, `${metadata.file.name}.md`);
      }

      // 添加 frontmatter 到 Markdown
      const finalMarkdown = addFrontmatter(result.markdown, metadata);

      // 保存文件
      await fs.writeFile(outputPath, finalMarkdown, 'utf-8');

      console.log(chalk.green(`✅ 转换成功！`));
      console.log(chalk.gray(`   输出文件: ${outputPath}`));
      console.log(chalk.gray(`   章节数: ${result.metadata.chapters.length}`));
      console.log(chalk.gray(`   代码块: ${result.metadata.codeBlocks.length}`));
      console.log(chalk.gray(`   表格数: ${result.metadata.tables.length}`));

      if (result.metadata.ocrProcessed) {
        console.log(chalk.yellow(`   ⚠️  已使用 OCR 处理`));
      }

    } catch (error) {
      console.error(chalk.red(`❌ 错误: ${error.message}`));
      process.exit(1);
    }
  });

// ============================================================================
// batch 命令 - 批量转换 PDF
// ============================================================================

program
  .command('batch <directory>')
  .description('批量转换目录中的所有 PDF')
  .option('-o, --output <dir>', '输出目录')
  .option('-p, --parallel <number>', '并发处理数量', '2')
  .option('--ocr', '启用 OCR 处理')
  .action(async (directory, options) => {
    try {
      console.log(chalk.blue.bold('\n📦 批量 PDF 转换\n'));

      const inputDir = path.resolve(directory);
      const outputDir = options.output
        ? path.resolve(options.output)
        : path.join(process.cwd(), 'data', 'markdown', 'drafts');

      await fs.mkdir(outputDir, { recursive: true });

      // 查找所有 PDF 文件
      const pdfFiles = await findPDFFiles(inputDir);

      if (pdfFiles.length === 0) {
        console.log(chalk.yellow('⚠️  未找到 PDF 文件'));
        return;
      }

      console.log(chalk.gray(`找到 ${pdfFiles.length} 个 PDF 文件\n`));

      // 批量处理
      const concurrency = parseInt(options.parallel) || 2;
      let completed = 0;
      let failed = 0;

      for (let i = 0; i < pdfFiles.length; i += concurrency) {
        const batch = pdfFiles.slice(i, i + concurrency);

        await Promise.all(
          batch.map(async (pdfFile) => {
            try {
              console.log(chalk.gray(`[${i + 1}/${pdfFiles.length}] ${path.basename(pdfFile)}`));

              const converter = new PDFToMarkdownConverter({
                ocrEnabled: options.ocr || false,
              });

              const result = await converter.convert(pdfFile);
              const extractor = new MetadataExtractor();
              const metadata = await extractor.extract(pdfFile, result.markdown);

              const outputPath = path.join(
                outputDir,
                `${metadata.file.name}.md`
              );

              const finalMarkdown = addFrontmatter(result.markdown, metadata);
              await fs.writeFile(outputPath, finalMarkdown, 'utf-8');

              completed++;
              console.log(chalk.green(`  ✅ 完成`));
            } catch (error) {
              failed++;
              console.error(chalk.red(`  ❌ 失败: ${error.message}`));
            }
          })
        );
      }

      console.log(chalk.blue.bold('\n📊 批量转换完成'));
      console.log(chalk.gray(`成功: ${completed}`));
      console.log(chalk.gray(`失败: ${failed}`));

    } catch (error) {
      console.error(chalk.red(`❌ 错误: ${error.message}`));
      process.exit(1);
    }
  });

// ============================================================================
// 辅助函数
// ============================================================================

/**
 * 查找目录中的所有 PDF 文件
 */
async function findPDFFiles(directory) {
  const files = [];

  async function scan(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.pdf')) {
        files.push(fullPath);
      }
    }
  }

  await scan(directory);
  return files;
}

/**
 * 添加 Docusaurus frontmatter
 */
function addFrontmatter(markdown, metadata) {
  const frontmatter = [
    '---',
    `title: "${metadata.structure.title}"`,
    `description: "${metadata.classification.summary}"`,
    `sidebar_label: "${metadata.classification.shortTitle}"`,
    `sidebar_position: ${metadata.classification.position}`,
    `tags: [${metadata.classification.tags.map(t => `'${t}'`).join(', ')}]`,
    'custom_props:',
    '  source_type: \'pdf\'',
    `  source_file: '${metadata.file.name}'`,
    `  processing_date: '${metadata.processing.date}'`,
    `  page_count: ${metadata.raw.pageCount}`,
    `  file_size_mb: ${metadata.file.sizeMB}`,
    '---',
    '',
  ].join('\n');

  return frontmatter + markdown;
}

// ============================================================================
// upload 命令 - 上传PDF到GitHub Releases
// ============================================================================

program
  .command('upload <pdfFile>')
  .description('上传PDF到GitHub Releases')
  .option('--token <token>', 'GitHub Personal Access Token (或设置GITHUB_TOKEN环境变量)')
  .option('--repo <repo>', 'GitHub仓库 (格式: owner/repo)')
  .option('--tag <tag>', 'Release tag (默认: latest-pdfs)', 'latest-pdfs')
  .action(async (pdfFile, options) => {
    try {
      console.log(chalk.blue.bold('\n📤 PDF 上传到 GitHub Releases\n'));

      const token = options.token || process.env.GITHUB_TOKEN;
      if (!token) {
        throw new Error('GitHub Token未提供。请使用 --token 参数或设置 GITHUB_TOKEN 环境变量');
      }

      const repo = options.repo || process.env.GITHUB_REPOSITORY;
      if (!repo) {
        throw new Error('GitHub仓库未指定。请使用 --repo 参数或设置 GITHUB_REPOSITORY 环境变量');
      }

      const pdfPath = path.resolve(pdfFile);
      await fs.access(pdfPath);

      console.log(chalk.gray(`📄 文件: ${pdfFile}`));
      console.log(chalk.gray(`📦 仓库: ${repo}`));
      console.log(chalk.gray(`🏷️  Tag: ${options.tag}\n`));

      const uploader = new GitHubReleasesUploader(token, repo);
      const result = await uploader.uploadPDF(pdfPath, options.tag);

      if (result.success) {
        console.log(chalk.green(`\n✅ 上传成功！`));
        console.log(chalk.gray(`下载链接: ${result.downloadUrl}`));
      }
    } catch (error) {
      console.error(chalk.red(`❌ 错误: ${error.message}`));
      process.exit(1);
    }
  });

// ============================================================================
// smart-upload 命令 - 智能上传（自动判断大小）
// ============================================================================

program
  .command('smart-upload <pdfFile>')
  .description('智能上传PDF（自动判断存储位置）')
  .option('--token <token>', 'GitHub Token')
  .option('--repo <repo>', 'GitHub仓库')
  .option('--tag <tag>', 'Release tag', 'latest-pdfs')
  .option('--static-dir <dir>', 'Static文件目录 (默认: static/pdfs/)', 'static/pdfs/')
  .action(async (pdfFile, options) => {
    try {
      console.log(chalk.blue.bold('\n🤖 智能PDF上传\n'));

      // 提取元数据
      const pdfPath = path.resolve(pdfFile);
      const stats = await fs.stat(pdfPath);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

      console.log(chalk.gray(`📄 文件: ${pdfFile}`));
      console.log(chalk.gray(`📏 大小: ${sizeMB}MB\n`));

      // 判断存储位置
      const threshold = 5; // 5MB阈值
      if (parseFloat(sizeMB) > threshold) {
        console.log(chalk.yellow(`⚠️  文件大于${threshold}MB，将上传到GitHub Releases\n`));

        const token = options.token || process.env.GITHUB_TOKEN;
        const repo = options.repo || process.env.GITHUB_REPOSITORY;

        if (!token || !repo) {
          throw new Error('上传到GitHub需要 --token 和 --repo 参数');
        }

        const uploader = new GitHubReleasesUploader(token, repo);
        const result = await uploader.uploadPDF(pdfPath, options.tag);

        console.log(chalk.green(`\n✅ 上传到GitHub Releases成功！`));
        console.log(chalk.gray(`下载链接: ${result.downloadUrl}\n`));
        console.log(chalk.cyan(`💡 添加到Markdown:`));
        console.log(chalk.gray(`pdf_link: "${result.downloadUrl}"`));
      } else {
        console.log(chalk.green(`✅ 文件较小，将复制到static目录\n`));

        const staticDir = path.resolve(options.staticDir);
        await fs.mkdir(staticDir, { recursive: true });

        const fileName = path.basename(pdfFile);
        const destPath = path.join(staticDir, fileName);

        await fs.copyFile(pdfPath, destPath);

        console.log(chalk.green(`✅ 已复制到: ${destPath}\n`));
        console.log(chalk.cyan(`💡 添加到Markdown:`));
        console.log(chalk.gray(`pdf_link: "/pdfs/${fileName}"`));
      }
    } catch (error) {
      console.error(chalk.red(`❌ 错误: ${error.message}`));
      process.exit(1);
    }
  });

// ============================================================================
// classify 命令 - 文档分级
// ============================================================================

program
  .command('classify <pdfFile>')
  .description('分析PDF并建议分级')
  .action(async (pdfFile, options) => {
    try {
      console.log(chalk.blue.bold('\n🔍 PDF文档分级分析\n'));

      const pdfPath = path.resolve(pdfFile);
      await fs.access(pdfPath);

      // 转换并提取元数据
      const converter = new PDFToMarkdownConverter();
      const result = await converter.convert(pdfPath);
      const extractor = new MetadataExtractor();
      const metadata = await extractor.extract(pdfPath, result.markdown);

      // 分级
      const classifier = new TierClassifier();
      const classification = classifier.classify(pdfPath, metadata);

      console.log(chalk.gray(`📄 文件: ${metadata.file.name}`));
      console.log(chalk.gray(`📏 大小: ${metadata.file.sizeMB}MB`));
      console.log(chalk.gray(`📄 页数: ${metadata.raw.pageCount}\n`));

      console.log(chalk.bold(`分级结果: Tier ${classification.tier}`));
      console.log(chalk.gray(`存储位置: ${classification.storage}`));
      console.log(chalk.gray(`需要上传: ${classification.needsUpload ? '是' : '否'}`));
      console.log(chalk.gray(`完全转换: ${classification.needsFullConversion ? '是' : '否'}\n`));

      if (classification.reasoning.length > 0) {
        console.log(chalk.bold('原因:'));
        classification.reasoning.forEach(reason => {
          console.log(chalk.gray(`  • ${reason}`));
        });
        console.log();
      }

      console.log(chalk.bold('处理建议:\n'));
      console.log(classifier.generateRecommendation(classification));

    } catch (error) {
      console.error(chalk.red(`❌ 错误: ${error.message}`));
      process.exit(1);
    }
  });

// ============================================================================
// split 命令 - 分割大型PDF
// ============================================================================

program
  .command('split <pdfFile>')
  .description('按章节分割大型PDF并转换为Markdown')
  .option('--pages-per-chapter <num>', '每章节页数', '50')
  .option('--output-dir <dir>', 'PDF输出目录', './data/pdfs/split')
  .option('--markdown-dir <dir>', 'Markdown输出目录', './data/markdown/split')
  .action(async (pdfFile, options) => {
    try {
      console.log(chalk.blue.bold('\n✂️  PDF分割处理\n'));

      const pdfPath = path.resolve(pdfFile);
      await fs.access(pdfPath);

      const splitter = new PDFSplitter({
        outputDir: options.outputDir,
        markdownDir: options.markdownDir,
      });

      await splitter.process(pdfPath);

    } catch (error) {
      console.error(chalk.red(`❌ 错误: ${error.message}`));
      process.exit(1);
    }
  });

// ============================================================================
// 解析并执行命令
// ============================================================================

program.parse(process.argv);

// 如果没有提供参数，显示帮助
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
