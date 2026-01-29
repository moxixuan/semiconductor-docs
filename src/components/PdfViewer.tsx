import React from 'react';

interface PdfViewerProps {
  pdfPath: string;
}

export default function PdfViewer({ pdfPath }: PdfViewerProps): JSX.Element {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
      <div style={{ padding: '16px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '16px', color: '#333' }}>📖 PDF原文档查看器</h3>
          <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#666' }}>
            包含完整的图表、表格和格式
          </p>
        </div>
        <a
          href={pdfPath}
          download
          style={{
            padding: '8px 16px',
            backgroundColor: '#27ae60',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            display: 'inline-block',
            fontWeight: 500
          }}
        >
          ⬇️ 下载PDF
        </a>
      </div>
      <div style={{ position: 'relative', paddingTop: '75vh', minHeight: '600px', backgroundColor: '#f5f5f5' }}>
        <iframe
          src={pdfPath}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          title="PDF Viewer"
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          zIndex: -1
        }}>
          <div style={{ textAlign: 'center', color: '#999' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
            <div>正在加载PDF...</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '12px 16px', backgroundColor: '#f0f0f0', borderTop: '1px solid #ddd', fontSize: '12px', color: '#666' }}>
        💡 提示：如果无法查看PDF，请点击右上角的"下载PDF"按钮下载后查看。部分浏览器可能需要安装PDF查看器插件。
      </div>
    </div>
  );
}
