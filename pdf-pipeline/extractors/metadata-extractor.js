const pdfParse = require('pdf-parse');
const fs = require('fs').promises;
const path = require('path');

/**
 * PDF 元数据提取器
 * 从 PDF 中提取结构化元数据
 */
class MetadataExtractor {
  constructor() {
    this.categoryKeywords = {
      'ic-design': ['芯片', '集成电路', 'IC', '晶体管', '工艺', '设计'],
      'eda-tools': ['Cadence', 'Synopsys', 'Mentor', 'EDA', '工具', '仿真'],
      'process': ['工艺', '制造', '封装', '测试', 'FinFET', 'CMOS'],
      'standards': ['协议', '标准', '总线', '接口', 'PCIe', 'DDR', 'AMBA'],
    };
  }

  /**
   * 提取完整的元数据
   * @param {string} pdfPath - PDF 文件路径
   * @param {string} markdown - 转换后的 Markdown 内容
   * @returns {Promise<object>} 元数据对象
   */
  async extract(pdfPath, markdown) {
    try {
      const dataBuffer = await fs.readFile(pdfPath);
      const pdfData = await pdfParse(dataBuffer);
      const stats = await fs.stat(pdfPath);

      const metadata = {
        // 文件信息
        file: {
          name: path.basename(pdfPath, '.pdf'),
          path: pdfPath,
          size: stats.size,
          sizeMB: (stats.size / 1024 / 1024).toFixed(2),
          created: stats.birthtime,
          modified: stats.mtime,
        },

        // PDF 原始元数据
        raw: await this.extractPDFMetadata(pdfData),

        // 文档结构
        structure: await this.extractStructure(markdown),

        // 技术内容
        technical: this.extractTechnicalContent(markdown),

        // 分类和标签
        classification: this.classifyDocument(markdown, pdfData),

        // 处理信息
        processing: {
          date: new Date().toISOString(),
          tool: 'semiconductor-docs-pdf-pipeline',
          version: '1.0.0',
        },
      };

      console.log('📊 元数据提取完成');
      return metadata;
    } catch (error) {
      console.error(`❌ 元数据提取失败: ${error.message}`);
      throw error;
    }
  }

  /**
   * 提取 PDF 原始元数据
   */
  async extractPDFMetadata(pdfData) {
    return {
      title: pdfData.info.Title || '未命名文档',
      author: pdfData.info.AuthorName || '未知',
      subject: pdfData.info.Subject || '',
      keywords: pdfData.info.Keywords || '',
      creator: pdfData.info.Creator || '',
      producer: pdfData.info.Producer || '',
      creationDate: pdfData.info.CreationDate || '',
      modificationDate: pdfData.info.ModDate || '',
      pageCount: pdfData.numpages,
    };
  }

  /**
   * 提取文档结构
   */
  async extractStructure(markdown) {
    // 提取标题层级
    const headings = this.extractHeadings(markdown);

    // 提取章节结构
    const chapters = this.extractChapterStructure(markdown);

    // 统计信息
    const stats = {
      wordCount: markdown.split(/\s+/).length,
      lineCount: markdown.split('\n').length,
      charCount: markdown.length,
      headingCount: headings.length,
    };

    return {
      title: headings[0]?.text || '未命名文档',
      headings,
      chapters,
      stats,
    };
  }

  /**
   * 提取标题
   */
  extractHeadings(markdown) {
    const headings = [];
    const headingRegex = /^(#{1,6})\s+(.+?)(?:\s+#+|$)/gm;
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length;
      const text = match[2] ? match[2].trim() : '';

      if (!text) continue; // 跳过空标题

      headings.push({
        level: `H${level}`,
        text,
        position: match.index,
      });
    }

    return headings;
  }

  /**
   * 提取章节结构
   */
  extractChapterStructure(markdown) {
    const chapters = [];
    const lines = markdown.split('\n');
    let currentChapter = null;

    lines.forEach((line, index) => {
      // 检测章节标题
      if (line.match(/^#{1,3}\s+(.+)/)) {
        const headingMatch = line.match(/^(#{1,3})\s+(.+)/);
        if (headingMatch) {
          const hashes = headingMatch[1];
          const level = hashes.length;
          const title = headingMatch[2] ? headingMatch[2].trim() : '';

          if (!title) return;

          if (level === 1) {
            // 一级标题作为新章节
            currentChapter = {
              title,
              level: 1,
              lineNumber: index + 1,
              subsections: [],
            };
            chapters.push(currentChapter);
          } else if (currentChapter && level === 2) {
            // 二级标题作为子章节
            currentChapter.subsections.push({
              title,
              level: 2,
              lineNumber: index + 1,
            });
          }
        }
      }
    });

    return chapters;
  }

  /**
   * 提取技术内容
   */
  extractTechnicalContent(markdown) {
    // 提取代码块
    const codeBlocks = this.extractCodeBlocks(markdown);

    // 提取表格
    const tables = this.extractTables(markdown);

    // 提取数学公式
    const formulas = this.extractFormulas(markdown);

    return {
      codeBlocks,
      tables,
      formulas,
      hasCode: codeBlocks.length > 0,
      hasTables: tables.length > 0,
      hasFormulas: formulas.length > 0,
    };
  }

  /**
   * 提取代码块
   */
  extractCodeBlocks(markdown) {
    const codeBlocks = [];
    const codeRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let match;

    while ((match = codeRegex.exec(markdown)) !== null) {
      const language = match[1] || 'text';
      const code = match[2];

      codeBlocks.push({
        language,
        lineCount: code.split('\n').length,
        charCount: code.length,
      });
    }

    return codeBlocks;
  }

  /**
   * 提取表格
   */
  extractTables(markdown) {
    const tables = [];
    const tableRegex = /\|.+?\|/g;
    let match;

    while ((match = tableRegex.exec(markdown)) !== null) {
      const cells = match[0].split('|').filter(c => c.trim());
      tables.push({
        columnCount: cells.length,
      });
    }

    return tables;
  }

  /**
   * 提取公式
   */
  extractFormulas(markdown) {
    // LaTeX 风格公式
    const inlineMath = /\$([^$]+)\$/g;
    const blockMath = /\$\$([^$]+)\$\$/g;

    const inlineMatches = markdown.match(inlineMath) || [];
    const blockMatches = markdown.match(blockMath) || [];

    return {
      inlineCount: inlineMatches.length,
      blockCount: blockMatches.length,
      totalCount: inlineMatches.length + blockMatches.length,
    };
  }

  /**
   * 分类文档
   */
  classifyDocument(markdown, pdfData) {
    // 基于关键词自动分类
    const category = this.detectCategory(markdown);

    // 生成标签
    const tags = this.generateTags(markdown, pdfData);

    // 生成简短标题
    const shortTitle = this.generateShortTitle(markdown);

    // 确定侧边栏位置
    const position = this.determinePosition(markdown);

    // 生成摘要
    const summary = this.generateSummary(markdown);

    return {
      category,
      tags,
      shortTitle,
      position,
      summary,
    };
  }

  /**
   * 检测文档分类
   */
  detectCategory(markdown) {
    const scores = {};

    for (const [category, keywords] of Object.entries(this.categoryKeywords)) {
      scores[category] = keywords.reduce((score, keyword) => {
        const regex = new RegExp(keyword, 'gi');
        const matches = markdown.match(regex);
        return score + (matches ? matches.length : 0);
      }, 0);
    }

    // 返回得分最高的分类
    const detectedCategory = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    return detectedCategory ? detectedCategory[0] : 'other';
  }

  /**
   * 生成标签
   */
  generateTags(markdown, pdfData) {
    const tags = new Set();

    // 从 PDF 元数据提取关键词
    if (pdfData.info.Keywords) {
      const keywords = pdfData.info.Keywords.split(/[,;]/).map(k => k.trim());
      keywords.forEach(k => {
        if (k) tags.add(k);
      });
    }

    // 从文档内容提取技术术语
    const technicalTerms = ['Verilog', 'VHDL', 'SystemVerilog', 'FinFET', 'CMOS', 'PCIe', 'DDR', 'I2C', 'SPI'];
    technicalTerms.forEach(term => {
      if (markdown.includes(term)) {
        tags.add(term);
      }
    });

    // 根据代码语言添加标签
    const codeLanguages = ['verilog', 'vhdl', 'python', 'javascript', 'cpp'];
    codeLanguages.forEach(lang => {
      if (markdown.toLowerCase().includes(`\`\`\`${lang}`)) {
        tags.add(lang.toUpperCase());
      }
    });

    return Array.from(tags).slice(0, 10); // 限制最多 10 个标签
  }

  /**
   * 生成简短标题
   */
  generateShortTitle(markdown) {
    // 提取第一个标题
    const titleMatch = markdown.match(/^#\s+(.+?)(?:\n|$)/m);
    if (titleMatch) {
      let title = titleMatch[1].trim();
      // 限制长度
      if (title.length > 30) {
        title = title.substring(0, 27) + '...';
      }
      return title;
    }

    return '未命名文档';
  }

  /**
   * 确定侧边栏位置
   */
  determinePosition(markdown) {
    // 根据内容或元数据确定位置
    // 暂时返回自动（让 Docusaurus 自动排序）
    return 999; // 使用 999 表示自动排序
  }

  /**
   * 生成摘要
   */
  generateSummary(markdown) {
    // 提取前几段作为摘要
    const paragraphs = markdown.split(/\n\n+/).filter(p => p.trim());

    if (paragraphs.length > 0) {
      // 跳过第一个标题（通常是文档标题）
      let startIndex = 0;
      if (paragraphs[0].startsWith('#')) {
        startIndex = 1;
      }

      const summaryParagraphs = paragraphs.slice(startIndex, startIndex + 2);
      const summary = summaryParagraphs.join('\n\n').replace(/\n/g, ' ');

      // 限制长度
      if (summary.length > 200) {
        return summary.substring(0, 197) + '...';
      }

      return summary;
    }

    return '暂无摘要';
  }
}

module.exports = MetadataExtractor;
