import React from 'react';
import styles from './styles.module.css';

/**
 * SplitPane - 单个面板组件
 * @param {Object} props
 * @param {ReactNode} props.children - 面板内容
 * @param {string} props.className - 额外的CSS类名
 * @param {boolean} props.collapsed - 是否折叠
 * @param {string} props.id - 面板ID (用于无障碍)
 */
function SplitPane({ children, className = '', collapsed = false, id = '' }) {
  return (
    <div
      id={id}
      className={`${styles.splitPane} ${collapsed ? styles.collapsed : ''} ${className}`}
      aria-hidden={collapsed}
    >
      {children}
    </div>
  );
}

export default SplitPane;
