import React from 'react';
import styles from './PdfViewer.module.css';

/**
 * PdfViewer - PDF查看器组件
 * @param {Object} props
 * @param {string} props.pdfPath - PDF文件路径
 * @param {string} props.height - 高度 (默认'100%')
 * @param {string} props.className - 额外的CSS类名
 * @param {boolean} props.showHeader - 是否显示头部 (默认true)
 * @param {boolean} props.showDownload - 是否显示下载按钮 (默认true)
 */
function PdfViewer({
  pdfPath,
  height = '100%',
  className = '',
  showHeader = true,
  showDownload = true
}) {
  return (
    <div
      className={`${styles.pdfViewer} ${className}`}
      style={{ height }}
    >
      {/* 头部 */}
      {showHeader && (
        <div className={styles.pdfHeader}>
          <div className={styles.headerContent}>
            <h3 className={styles.headerTitle}>📖 PDF原文档查看器</h3>
            <p className={styles.headerDescription}>
              包含完整的图表、表格和格式
            </p>
          </div>
          {showDownload && (
            <a
              href={pdfPath}
              download
              className={styles.downloadButton}
            >
              ⬇️ 下载PDF
            </a>
          )}
        </div>
      )}

      {/* PDF容器 */}
      <div className={styles.pdfContainer}>
        <iframe
          src={pdfPath}
          className={styles.pdfIframe}
          title="PDF Viewer"
        />
        {/* 加载指示器 */}
        <div className={styles.loadingIndicator}>
          <div className={styles.loadingIcon}>📄</div>
          <div className={styles.loadingText}>正在加载PDF...</div>
        </div>
      </div>

      {/* 底部提示 */}
      <div className={styles.pdfFooter}>
        💡 提示：如果无法查看PDF，请点击右上角的"下载PDF"按钮下载后查看。
        部分浏览器可能需要安装PDF查看器插件。
      </div>
    </div>
  );
}

export default PdfViewer;
