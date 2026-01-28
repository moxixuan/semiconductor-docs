const pdfParse = require('pdf-parse');
const fs = require('fs').promises;
const path = require('path');

/**
 * PDF 转 Markdown 转换器
 * 支持文本型 PDF 和扫描型 PDF（需要 OCR）
 */
class PDFToMarkdownConverter {
  constructor(options = {}) {
    this.ocrEnabled = options.ocrEnabled || false;
    this.ocrThreshold = options.ocrThreshold || 0.3; // 文本密度低于 30% 时启用 OCR
    this.preserveFormatting = options.preserveFormatting !== false;
  }

  /**
   * 主转换方法
   * @param {string} pdfPath - PDF 文件路径
   * @param {object} options - 转换选项
   * @returns {Promise<object>} 转换结果
   */
  async convert(pdfPath, options = {}) {
    try {
      // 1. 验证 PDF 文件
      await this.validatePDF(pdfPath);

      // 2. 检测 PDF 类型
      const pdfType = await this.detectPDFType(pdfPath);
      console.log(`📄 检测到 PDF 类型: ${pdfType === 'scanned' ? '扫描型 (需要 OCR)' : '文本型'}`);

      // 3. 提取文本
      let extractedText;
      if (pdfType === 'scanned' && this.ocrEnabled) {
        extractedText = await this.performOCR(pdfPath, options.ocrConfig);
      } else {
        extractedText = await this.extractText(pdfPath);
      }

      // 4. 识别文档结构
      const structure = await this.detectStructure(extractedText);
      console.log(`📋 识别到 ${structure.chapters.length} 个章节`);

      // 5. 转换为 Markdown
      const markdown = this.transformToMarkdown(extractedText, structure);

      // 6. 提取图片信息（如果有）
      const images = await this.extractImages(pdfPath);

      const result = {
        success: true,
        markdown,
        metadata: {
          type: pdfType,
          chapters: structure.chapters,
          codeBlocks: structure.codeBlocks,
          tables: structure.tables,
          pageCount: structure.pageCount,
          imageCount: images.length,
        },
        images,
        sourceFile: path.basename(pdfPath),
      };

      console.log('✅ PDF 转换完成');
      return result;
    } catch (error) {
      console.error(`❌ 转换失败: ${error.message}`);
      throw error;
    }
  }

  /**
   * 验证 PDF 文件
   */
  async validatePDF(pdfPath) {
    try {
      await fs.access(pdfPath);
      const stats = await fs.stat(pdfPath);

      // 检查文件大小（限制 100MB）
      if (stats.size > 100 * 1024 * 1024) {
        throw new Error(`PDF 文件过大 (${(stats.size / 1024 / 1024).toFixed(2)}MB)，请确保小于 100MB`);
      }

      // 检查文件扩展名
      if (!pdfPath.toLowerCase().endsWith('.pdf')) {
        throw new Error('文件不是 PDF 格式');
      }
    } catch (error) {
      throw new Error(`PDF 验证失败: ${error.message}`);
    }
  }

  /**
   * 检测 PDF 类型（文本型 vs 扫描型）
   */
  async detectPDFType(pdfPath) {
    try {
      const dataBuffer = await fs.readFile(pdfPath);
      const data = await pdfParse(dataBuffer);

      // 计算文本密度
      const textDensity = data.text.trim().length / (data.numpages * 1000); // 每页平均字符数

      // 如果文本密度低于阈值，认为是扫描版
      if (textDensity < this.ocrThreshold) {
        return 'scanned';
      }

      // 检查是否有可提取的文本
      if (!data.text || data.text.trim().length < 100) {
        return 'scanned';
      }

      return 'text';
    } catch (error) {
      console.warn('⚠️  无法检测 PDF 类型，默认为文本型');
      return 'text';
    }
  }

  /**
   * 从文本型 PDF 提取文本
   */
  async extractText(pdfPath) {
    try {
      const dataBuffer = await fs.readFile(pdfPath);
      const data = await pdfParse(dataBuffer);

      return {
        text: data.text,
        pageCount: data.numpages,
        info: data.info,
      };
    } catch (error) {
      throw new Error(`文本提取失败: ${error.message}`);
    }
  }

  /**
   * 执行 OCR（占位符，实际 OCR 需要在第二阶段实现）
   */
  async performOCR(pdfPath, ocrConfig = {}) {
    console.log('🔍 OCR 功能将在第二阶段实现，当前使用基础文本提取');
    // 暂时使用基础提取
    return await this.extractText(pdfPath);
  }

  /**
   * 检测文档结构
   */
  async detectStructure(extractedData) {
    const text = extractedData.text;
    const pageCount = extractedData.pageCount;

    // 提取章节（识别标题）
    const chapters = this.extractChapters(text);

    // 提取代码块
    const codeBlocks = this.extractCodeBlocks(text);

    // 提取表格
    const tables = this.extractTables(text);

    return {
      chapters,
      codeBlocks,
      tables,
      pageCount,
    };
  }

  /**
   * 提取章节结构
   */
  extractChapters(text) {
    const chapters = [];

    // 匹配中文标题：第X章、X、X.X 等格式
    const chapterPatterns = [
      /第[一二三四五六七八九十\d]+章[\s\u3000]+(.+?)(?=\n|$)/g,
      /^(\d+)\.([\s\u3000]+)(.+?)(?=\n|\d+\.)/gm,
      /^(#{1,3})\s+(.+?)(?=\n|$)/gm,
    ];

    for (const pattern of chapterPatterns) {
      let match;
      while ((match = pattern.exec(text)) !== null) {
        const title = match[1] || match[3] || match[0];
        const level = match[1] ? 'H1' : match[2] ? 'H2' : match[0].startsWith('#') ? `H${match[0].match(/^#+/)[0].length}` : 'H2';

        chapters.push({
          title: title.trim(),
          level,
          position: match.index,
        });
      }
    }

    // 按位置排序并去重
    const uniqueChapters = chapters
      .filter((chapter, index, self) =>
        index === self.findIndex(c => c.title === chapter.title)
      )
      .sort((a, b) => a.position - b.position);

    return uniqueChapters;
  }

  /**
   * 提取代码块
   */
  extractCodeBlocks(text) {
    const codeBlocks = [];

    // 匹配 Markdown 代码块（如果文本中已有）
    const markdownCodeRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let match;

    while ((match = markdownCodeRegex.exec(text)) !== null) {
      codeBlocks.push({
        language: match[1] || 'text',
        code: match[2],
        position: match.index,
      });
    }

    // 尝试检测类似代码的段落（连续的缩进文本）
    if (codeBlocks.length === 0) {
      const indentedBlockRegex = /^(?:[ \t]{4,}.+(?:\n|$))+/gm;
      let indentedMatch;

      while ((indentedMatch = indentedBlockRegex.exec(text)) !== null) {
        const code = indentedMatch[0];
        // 简单的语言检测
        let language = 'text';
        if (code.includes('module ')) language = 'verilog';
        else if (code.includes('def ')) language = 'python';
        else if (code.includes('function ')) language = 'javascript';

        codeBlocks.push({
          language,
          code,
          position: indentedMatch.index,
        });
      }
    }

    return codeBlocks;
  }

  /**
   * 提取表格
   */
  extractTables(text) {
    const tables = [];
    const tableRegex = /\|.+?\|/g;
    let match;

    while ((match = tableRegex.exec(text)) !== null) {
      const row = match[0];
      const cells = row.split('|').filter(cell => cell.trim());

      if (cells.length >= 2) {
        tables.push({
          cells,
          position: match.index,
        });
      }
    }

    return tables;
  }

  /**
   * 转换为 Markdown 格式
   */
  transformToMarkdown(extractedData, structure) {
    let markdown = '';
    const text = extractedData.text;

    // 添加标题（从 PDF 元数据或第一行提取）
    const title = this.extractTitle(text, extractedData.info);
    markdown += `# ${title}\n\n`;

    // 根据章节结构添加标题
    let lastPos = 0;
    for (const chapter of structure.chapters) {
      // 添加章节之间的内容
      if (chapter.position > lastPos) {
        const contentBetween = text.substring(lastPos, chapter.position).trim();
        if (contentBetween) {
          markdown += contentBetween + '\n\n';
        }
      }

      // 添加章节标题
      const levelPrefix = '#'.repeat(chapter.level === 'H1' ? 1 : chapter.level === 'H2' ? 2 : 2);
      markdown += `${levelPrefix} ${chapter.title}\n\n`;
      lastPos = chapter.position;
    }

    // 添加剩余内容
    if (lastPos < text.length) {
      markdown += text.substring(lastPos).trim() + '\n';
    }

    // 清理格式
    markdown = this.cleanupMarkdown(markdown);

    return markdown;
  }

  /**
   * 提取文档标题
   */
  extractTitle(text, info) {
    // 优先使用 PDF 元数据中的标题
    if (info && info.Title) {
      return info.Title;
    }

    // 从第一行提取
    const firstLine = text.split('\n')[0].trim();
    if (firstLine && firstLine.length < 100) {
      return firstLine;
    }

    return '文档标题';
  }

  /**
   * 清理 Markdown 格式
   */
  cleanupMarkdown(markdown) {
    // 移除过多的空行
    markdown = markdown.replace(/\n{3,}/g, '\n\n');

    // 移除行首行尾空白
    markdown = markdown.split('\n').map(line => line.trim()).join('\n');

    // 确保列表格式正确
    markdown = markdown.replace(/^(\d+)\.([^\s])/gm, '$1. $2');

    return markdown;
  }

  /**
   * 提取图片信息（占位符）
   */
  async extractImages(pdfPath) {
    // 图片提取将在第二阶段实现
    return [];
  }
}

module.exports = PDFToMarkdownConverter;
