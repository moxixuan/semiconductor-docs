/**
 * 文档分级工具
 * 根据PDF元数据自动判断文档级别(Tier)和存储策略
 */
class TierClassifier {
  constructor(options = {}) {
    // 配置参数
    this.sizeThreshold = options.sizeThreshold || 5; // MB
    this.pageCountThreshold = options.pageCountThreshold || 100;
    this.imageDensityThreshold = options.imageDensityThreshold || 0.3; // 图片密度阈值

    // Tier关键词配置
    this.tier1Keywords = [
      '教程', '指南', '入门', 'getting started', 'tutorial', 'guide',
      '快速开始', '快速上手', 'quick start', 'introduction',
      '基础', 'basic', 'beginner'
    ];

    this.tier2Keywords = [
      '标准', 'standard', '规范', 'specification',
      '数据手册', 'datasheet', 'data sheet',
      '参考', 'reference', '手册', 'manual',
      '协议', 'protocol', 'PCIe', 'DDR', 'I2C', 'SPI'
    ];

    this.tier3Keywords = [
      '存档', 'archive', '历史', 'history',
      '旧版', 'legacy', '过时', 'deprecated'
    ];
  }

  /**
   * 分类PDF文档
   * @param {string} pdfPath - PDF文件路径
   * @param {object} metadata - PDF元数据
   * @returns {object} 分类结果
   */
  classify(pdfPath, metadata) {
    const classification = {
      tier: 2, // 默认Tier 2
      storage: 'github-releases',
      needsUpload: true,
      needsFullConversion: false,
      reasoning: [],
    };

    // 1. 检查文件大小
    const sizeResult = this.checkFileSize(metadata.file.sizeMB);
    Object.assign(classification, sizeResult);

    // 2. 检查标题关键词
    const titleResult = this.checkTitleKeywords(metadata.structure.title);
    if (titleResult.tier) {
      classification.tier = titleResult.tier;
      classification.reasoning.push(titleResult.reason);
    }

    // 3. 检查内容类型
    const contentTypeResult = this.checkContentType(metadata);
    Object.assign(classification, contentTypeResult);

    // 4. 检查页数和图片
    const structureResult = this.checkStructure(metadata);
    Object.assign(classification, structureResult);

    // 5. 特殊规则覆盖
    this.applySpecialRules(classification, metadata);

    return classification;
  }

  /**
   * 检查文件大小，决定存储位置
   * @private
   */
  checkFileSize(sizeMB) {
    if (sizeMB > 50) {
      return {
        storage: 'cdn', // 需要外部CDN
        needsUpload: true,
        warning: `文件很大(${sizeMB}MB)，建议使用CDN`,
      };
    } else if (sizeMB > this.sizeThreshold) {
      return {
        storage: 'github-releases',
        needsUpload: true,
      };
    } else {
      return {
        storage: 'static',
        needsUpload: false,
      };
    }
  }

  /**
   * 检查标题中的关键词
   * @private
   */
  checkTitleKeywords(title) {
    const lowerTitle = title.toLowerCase();

    // Tier 1关键词
    for (const keyword of this.tier1Keywords) {
      if (lowerTitle.includes(keyword.toLowerCase())) {
        return {
          tier: 1,
          needsFullConversion: true,
          reason: `标题包含Tier 1关键词: "${keyword}"`,
        };
      }
    }

    // Tier 3关键词
    for (const keyword of this.tier3Keywords) {
      if (lowerTitle.includes(keyword.toLowerCase())) {
        return {
          tier: 3,
          needsFullConversion: false,
          reason: `标题包含Tier 3关键词: "${keyword}"`,
        };
      }
    }

    // Tier 2关键词
    for (const keyword of this.tier2Keywords) {
      if (lowerTitle.includes(keyword.toLowerCase())) {
        return {
          tier: 2,
          needsFullConversion: false,
          reason: `标题包含Tier 2关键词: "${keyword}"`,
        };
      }
    }

    return { tier: null };
  }

  /**
   * 检查内容类型
   * @private
   */
  checkContentType(metadata) {
    const technical = metadata.technical;

    // 如果有大量代码块，可能是教程或指南 → Tier 1
    if (technical.hasCode && technical.codeBlocks.length > 10) {
      return {
        tier: 1,
        needsFullConversion: true,
      };
    }

    // 如果有大量表格，可能是参考文档 → Tier 2
    if (technical.hasTables && technical.tables.length > 20) {
      return {
        tier: 2,
        needsFullConversion: false,
      };
    }

    return {};
  }

  /**
   * 检查文档结构
   * @private
   */
  checkStructure(metadata) {
    const pageCount = metadata.raw.pageCount;
    const structure = metadata.structure;

    // 页数很少的文档，可能是快速参考 → Tier 2
    if (pageCount < 20) {
      return {
        tier: 2,
        needsFullConversion: false,
      };
    }

    // 页数很多的文档，如果是教程 → Tier 1
    if (pageCount > 100 && structure.chapters.length > 10) {
      return {
        tier: 1,
        needsFullConversion: true,
      };
    }

    return {};
  }

  /**
   * 应用特殊规则
   * @private
   */
  applySpecialRules(classification, metadata) {
    // 规则1: SECS/E5等半导体标准 → Tier 2
    if (metadata.structure.title.includes('SECS') ||
        metadata.structure.title.includes('JEDEC') ||
        metadata.structure.title.includes('PCI-SIG')) {
      classification.tier = 2;
      classification.reasoning.push('半导体标准文档 → Tier 2');
    }

    // 规则2: 如果文档很旧(2010年之前) → Tier 3
    const creationYear = metadata.raw.creationDate;
    if (creationYear && creationYear < '2010') {
      classification.tier = Math.max(classification.tier, 3);
      classification.reasoning.push('历史文档(2010年前) → Tier 3');
    }

    // 规则3: 强制转换质量高的文档
    if (metadata.classification &&
        metadata.classification.tags.includes('教程')) {
      classification.tier = 1;
      classification.needsFullConversion = true;
      classification.reasoning.push('标记为教程 → Tier 1');
    }
  }

  /**
   * 生成处理建议
   * @param {object} classification - 分类结果
   * @returns {string} 处理建议
   */
  generateRecommendation(classification) {
    const recommendations = [];

    switch (classification.tier) {
      case 1:
        recommendations.push('✅ 完全转换为Markdown');
        recommendations.push('📝 需要人工审核和编辑');
        recommendations.push('🔍 重点优化代码示例');
        recommendations.push('📚 添加到导航和搜索');
        break;

      case 2:
        recommendations.push('📄 转换为Markdown摘要');
        recommendations.push('🔗 保留完整PDF下载');
        recommendations.push('📋 提取章节目录');
        recommendations.push('🤖 生成AI摘要');
        break;

      case 3:
        recommendations.push('💾 仅保留PDF');
        recommendations.push('📝 创建元数据卡片');
        recommendations.push('🏷️ 添加标签和分类');
        break;
    }

    // 存储相关建议
    if (classification.storage === 'github-releases') {
      recommendations.push('📦 上传到GitHub Releases');
    } else if (classification.storage === 'static') {
      recommendations.push('📂 复制到static目录');
    } else if (classification.storage === 'cdn') {
      recommendations.push('☁️ 使用外部CDN存储');
    }

    // 警告
    if (classification.warning) {
      recommendations.push(`⚠️  ${classification.warning}`);
    }

    return recommendations.join('\n');
  }

  /**
   * 批量分类多个PDF
   * @param {Array} pdfList - PDF列表 [{path, metadata}]
   * @returns {Array} 分类结果数组
   */
  classifyBatch(pdfList) {
    return pdfList.map(({ path, metadata }) => {
      const classification = this.classify(path, metadata);
      return {
        path,
        fileName: metadata.file.name,
        ...classification,
        recommendation: this.generateRecommendation(classification),
      };
    });
  }
}

module.exports = TierClassifier;
