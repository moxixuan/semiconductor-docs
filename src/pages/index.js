import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function KnowledgeCategory({icon, title, count, items, to, color}) {
  return (
    <Link to={to} className={styles.categoryCard}>
      <div className={styles.categoryHeader} style={{background: color}}>
        <span className={styles.categoryIcon}>{icon}</span>
        <h2 className={styles.categoryTitle}>{title}</h2>
        <span className={styles.categoryCount}>{count} 篇文档</span>
      </div>
      <ul className={styles.categoryItems}>
        {items.map((item, index) => (
          <li key={index} className={styles.categoryItem}>
            <span className={styles.itemBullet}>▸</span>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.categoryFooter}>
        <span>浏览全部</span>
        <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function QuickAccess() {
  const quickLinks = [
    {title: 'IC 设计概述', to: '/docs/ic-design/intro', tag: '入门'},
    {title: '工艺技术节点', to: '/docs/process/nodes/7nm-5nm', tag: '热门'},
    {title: 'Virtuoso 教程', to: '/docs/eda-tools/cadence/virtuoso', tag: '工具'},
    {title: 'AMBA 总线协议', to: '/docs/standards/bus/amba-axi', tag: '协议'},
  ];

  return (
    <section className={styles.quickAccess}>
      <div className="container">
        <h2 className={styles.sectionTitle}>📚 快速访问</h2>
        <div className={styles.quickLinks}>
          {quickLinks.map((link, index) => (
            <Link key={index} to={link.to} className={styles.quickLink}>
              <span className={styles.linkTitle}>{link.title}</span>
              <span className={styles.linkTag} style={{
                background: index === 0 ? '#00d4ff' :
                           index === 1 ? '#a855f7' :
                           index === 2 ? '#3b82f6' : '#10b981'
              }}>{link.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="半导体知识库" description="专业的半导体技术文档知识库">
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleGradient}>半导体知识库</span>
              </h1>
              <p className={styles.heroDescription}>
                系统化的半导体技术文档，涵盖芯片设计、工艺制造、EDA 工具、协议标准
              </p>
            </div>
          </div>
        </section>

        {/* Knowledge Categories */}
        <section className={styles.categories}>
          <div className="container">
            <div className={styles.categoryGrid}>
              <KnowledgeCategory
                icon="⚡"
                title="芯片设计"
                count={3}
                color="linear-gradient(135deg, #00d4ff, #0891b2)"
                to="/docs/ic-design/intro"
                items={['数字电路设计', '设计规则与约束', '时序分析', 'IP 核概述']}
              />
              <KnowledgeCategory
                icon="🏭"
                title="工艺制造"
                count={4}
                color="linear-gradient(135deg, #a855f7, #7c3aed)"
                to="/docs/process/intro"
                items={['工艺技术节点', 'FinFET 工艺', '7nm/5nm 先进工艺', 'SiP 封装技术']}
              />
              <KnowledgeCategory
                icon="🛠️"
                title="EDA 工具"
                count={4}
                color="linear-gradient(135deg, #3b82f6, #2563eb)"
                to="/docs/eda-tools/intro"
                items={['Cadence Virtuoso', 'Synopsys DC', 'PrimeTime', 'OpenROAD']}
              />
              <KnowledgeCategory
                icon="📡"
                title="协议标准"
                count={4}
                color="linear-gradient(135deg, #10b981, #059669)"
                to="/docs/standards/intro"
                items={['AMBA AXI 总线', 'I2C/SPI 接口', 'DDR4/DDR5', 'PCIe 总线']}
              />
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <QuickAccess />

        {/* Search Hint */}
        <section className={styles.searchHint}>
          <div className="container">
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <div className={styles.searchText}>
                <strong>快速搜索</strong>
                <p>使用搜索功能快速定位你需要的半导体技术文档</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
