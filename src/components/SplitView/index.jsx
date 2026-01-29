import React, { useState, useRef, useCallback, useEffect } from 'react';
import SplitPane from './SplitPane';
import Resizer from './Resizer';
import useLocalStorage from './hooks/useLocalStorage';
import useMediaQuery from './hooks/useMediaQuery';
import styles from './styles.module.css';

/**
 * SplitView - 可调整的双栏布局组件
 * @param {Object} props
 * @param {ReactNode} props.leftContent - 左侧内容 (Markdown)
 * @param {ReactNode} props.rightContent - 右侧内容 (PDF)
 * @param {number} props.defaultWidth - 初始宽度百分比 (默认50)
 * @param {number} props.minWidth - 最小宽度百分比 (默认30)
 * @param {number} props.maxWidth - 最大宽度百分比 (默认70)
 * @param {string} props.storageKey - localStorage键名
 * @param {boolean} props.showControls - 是否显示控制按钮
 */
function SplitView({
  leftContent,
  rightContent,
  defaultWidth = 50,
  minWidth = 30,
  maxWidth = 70,
  storageKey = 'splitview-preferences',
  showControls = true
}) {
  // 检测是否为移动端
  const isMobile = useMediaQuery('(max-width: 996px)');

  // 从localStorage读取偏好设置
  const [preferences, setPreferences] = useLocalStorage(storageKey, {
    defaultWidth,
    leftCollapsed: false,
    rightCollapsed: false
  });

  // 组件状态
  const [leftWidth, setLeftWidth] = useState(preferences.defaultWidth);
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(preferences.leftCollapsed);
  const [isRightCollapsed, setIsRightCollapsed] = useState(preferences.rightCollapsed);
  const [isDragging, setIsDragging] = useState(false);

  // Refs
  const containerRef = useRef(null);
  const resizerRef = useRef(null);
  const dragStartX = useRef(0);
  const dragStartWidth = useRef(0);

  // 保存偏好设置到localStorage
  useEffect(() => {
    setPreferences({
      defaultWidth: leftWidth,
      leftCollapsed: isLeftCollapsed,
      rightCollapsed: isRightCollapsed
    });
  }, [leftWidth, isLeftCollapsed, isRightCollapsed, setPreferences]);

  // 处理拖拽开始
  const handleMouseDown = useCallback((e) => {
    if (isMobile) return; // 移动端禁用拖拽

    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartWidth.current = leftWidth;

    // 禁用文本选择
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'col-resize';

    // 添加全局事件监听
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [leftWidth, isMobile]);

  // 处理拖拽中
  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;

    const deltaX = e.clientX - dragStartX.current;
    const containerWidth = containerRef.current.offsetWidth;
    const newWidth = dragStartWidth.current + (deltaX / containerWidth * 100);

    // 限制在最小和最大宽度之间
    const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
    setLeftWidth(clampedWidth);
  }, [isDragging, minWidth, maxWidth]);

  // 处理拖拽结束
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);

    // 恢复文本选择
    document.body.style.userSelect = '';
    document.body.style.cursor = '';

    // 移除全局事件监听
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  // 双击重置宽度
  const handleDoubleClick = useCallback(() => {
    if (isMobile) return;
    setLeftWidth(defaultWidth);
  }, [defaultWidth, isMobile]);

  // 折叠/展开左侧面板
  const toggleLeft = useCallback(() => {
    if (isLeftCollapsed) {
      setIsLeftCollapsed(false);
      setIsRightCollapsed(false);
    } else {
      setIsLeftCollapsed(true);
    }
  }, [isLeftCollapsed]);

  // 折叠/展开右侧面板
  const toggleRight = useCallback(() => {
    if (isRightCollapsed) {
      setIsRightCollapsed(false);
      setIsLeftCollapsed(false);
    } else {
      setIsRightCollapsed(true);
    }
  }, [isRightCollapsed]);

  // 重置为默认状态
  const reset = useCallback(() => {
    setLeftWidth(defaultWidth);
    setIsLeftCollapsed(false);
    setIsRightCollapsed(false);
  }, [defaultWidth]);

  // 计算实际宽度
  const actualLeftWidth = isLeftCollapsed ? 0 : leftWidth;
  const actualRightWidth = isRightCollapsed ? 0 : (100 - leftWidth);

  return (
    <div
      ref={containerRef}
      className={`${styles.splitViewContainer} ${isMobile ? styles.mobile : ''}`}
    >
      {/* 控制栏 */}
      {showControls && (
        <div className={styles.controlBar}>
          <div className={styles.controlGroup}>
            <button
              className={`${styles.controlButton} ${isLeftCollapsed ? styles.collapsed : ''}`}
              onClick={toggleLeft}
              aria-label={isLeftCollapsed ? '展开左侧面板' : '折叠左侧面板'}
              title={isLeftCollapsed ? '展开Markdown' : '折叠Markdown'}
            >
              📝
            </button>
            <button
              className={`${styles.controlButton} ${isRightCollapsed ? styles.collapsed : ''}`}
              onClick={toggleRight}
              aria-label={isRightCollapsed ? '展开右侧面板' : '折叠右侧面板'}
              title={isRightCollapsed ? '展开PDF' : '折叠PDF'}
            >
              📄
            </button>
            <button
              className={styles.controlButton}
              onClick={reset}
              aria-label="重置布局"
              title="重置为默认布局"
            >
              🔄
            </button>
          </div>
          <div className={styles.hint}>
            💡 拖拽分隔条调整宽度
          </div>
        </div>
      )}

      {/* 主容器 */}
      <div className={styles.panesContainer}>
        {/* 左侧面板 - Markdown */}
        <SplitPane
          id="split-pane-left"
          collapsed={isLeftCollapsed}
          className={styles.leftPane}
          style={{ flex: isLeftCollapsed ? '0' : `0 0 ${actualLeftWidth}%` }}
        >
          {leftContent}
        </SplitPane>

        {/* 分隔条 */}
        {!isMobile && !isLeftCollapsed && !isRightCollapsed && (
          <Resizer
            ref={resizerRef}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
            isDragging={isDragging}
            disabled={isMobile}
          />
        )}

        {/* 拖拽时的遮罩层 */}
        {isDragging && <div className={styles.dragOverlay} />}

        {/* 右侧面板 - PDF */}
        <SplitPane
          id="split-pane-right"
          collapsed={isRightCollapsed}
          className={styles.rightPane}
          style={{ flex: isRightCollapsed ? '0' : `0 0 ${actualRightWidth}%` }}
        >
          {rightContent}
        </SplitPane>
      </div>
    </div>
  );
}

export default SplitView;
