import React from 'react';
import SplitView from './SplitView';
import PdfViewer from './PdfViewer';

/**
 * PdfSplitView - PDF和Markdown的并排查看器
 * 简化了在MDX中使用SplitView和PdfViewer的组合
 *
 * @param {Object} props
 * @param {string} props.pdfPath - PDF文件路径
 * @param {ReactNode} props.children - Markdown内容 (显示在左侧)
 * @param {number} props.defaultWidth - 初始宽度百分比 (默认50)
 * @param {number} props.minWidth - 最小宽度百分比 (默认30)
 * @param {number} props.maxWidth - 最大宽度百分比 (默认70)
 * @param {string} props.storageKey - localStorage键名
 * @param {boolean} props.showControls - 是否显示控制按钮
 */
function PdfSplitView({
  pdfPath,
  children,
  defaultWidth = 50,
  minWidth = 30,
  maxWidth = 70,
  storageKey = 'splitview-preferences',
  showControls = true
}) {
  return (
    <SplitView
      leftContent={children}
      rightContent={<PdfViewer pdfPath={pdfPath} height="100%" />}
      defaultWidth={defaultWidth}
      minWidth={minWidth}
      maxWidth={maxWidth}
      storageKey={storageKey}
      showControls={showControls}
    />
  );
}

export default PdfSplitView;
