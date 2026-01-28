/**
 * PDF下载卡片组件
 * 用于在文档页面显示PDF下载链接
 */
import React from 'react';
import './styles.css';

function PdfDownloadCard({ pdfLink, pdfSize, title, description }) {
  if (!pdfLink) {
    return null;
  }

  // 格式化文件大小
  const formatSize = (size) => {
    if (typeof size === 'string') {
      return size;
    }
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)}KB`;
    }
    return `${(size / 1024 / 1024).toFixed(1)}MB`;
  };

  // 判断是否为外部链接
  const isExternal = pdfLink.startsWith('http');

  return (
    <div className="pdf-download-card">
      <div className="pdf-download-card__header">
        <div className="pdf-download-card__icon">📥</div>
        <div className="pdf-download-card__title">
          <h3>下载完整PDF</h3>
          {title && <p className="pdf-download-card__doc-title">{title}</p>}
        </div>
      </div>

      <div className="pdf-download-card__info">
        <div className="pdf-download-card__meta">
          <span className="pdf-download-card__label">文件大小:</span>
          <span className="pdf-download-card__value">{formatSize(pdfSize)}</span>
        </div>

        {description && (
          <div className="pdf-download-card__description">
            {description}
          </div>
        )}

        {isExternal && (
          <div className="pdf-download-card__notice">
            <span className="pdf-download-card__notice-icon">ℹ️</span>
            <span>此文件托管在GitHub Releases，可能需要GitHub账号</span>
          </div>
        )}
      </div>

      <div className="pdf-download-card__actions">
        <a
          href={pdfLink}
          className="pdf-download-card__button pdf-download-card__button--primary"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          download={!isExternal}
        >
          <span className="pdf-download-card__button-icon">⬇️</span>
          下载PDF
        </a>

        {isExternal && (
          <a
            href={pdfLink}
            className="pdf-download-card__button pdf-download-card__button--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pdf-download-card__button-icon">🔗</span>
            在新窗口打开
          </a>
        )}
      </div>
    </div>
  );
}

export default PdfDownloadCard;
