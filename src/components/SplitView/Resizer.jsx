import React from 'react';
import styles from './styles.module.css';

/**
 * Resizer - 可拖拽分隔条组件
 * @param {Object} props
 * @param {Function} props.onMouseDown - 鼠标按下事件处理
 * @param {boolean} props.isDragging - 是否正在拖拽
 * @param {boolean} props.disabled - 是否禁用 (移动端)
 * @param {Function} props.onDoubleClick - 双击重置
 */
function Resizer({ onMouseDown, isDragging = false, disabled = false, onDoubleClick }) {
  return (
    <div
      className={`${styles.resizer} ${isDragging ? styles.isDragging : ''} ${disabled ? styles.disabled : ''}`}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
      role="separator"
      aria-orientation="vertical"
      aria-label="拖拽调整面板宽度"
      tabIndex={disabled ? -1 : 0}
      style={{
        cursor: disabled ? 'default' : 'col-resize'
      }}
    />
  );
}

export default Resizer;
