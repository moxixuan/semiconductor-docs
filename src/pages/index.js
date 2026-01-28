import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrapper}>
          <span className={styles.featureIcon}>{Icon}</span>
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
        <div className={styles.featureGlow}></div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.particleContainer}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle} style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>
      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleText}>{siteConfig.title}</span>
            <div className={styles.titleGlow}></div>
          </h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroCta}>
            <Link className={styles.primaryButton} to="/docs/intro">
              <span>开始浏览文档</span>
              <svg className={styles.buttonArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link className={styles.secondaryButton} to="/blog">
              技术博客
            </Link>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>文档页面</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4</div>
            <div className={styles.statLabel}>主要领域</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>AI</div>
            <div className={styles.statLabel}>智能检索</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎来到 ${siteConfig.title}`}
      description="专业的半导体技术文档检索平台">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <section className={styles.features}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>核心功能</h2>
              <p className={styles.sectionSubtitle}>探索半导体技术的全方位知识库</p>
            </div>
            <div className="row">
              <Feature
                Icon="⚡"
                title="芯片设计"
                description="涵盖数字、模拟、FPGA/ASIC设计的完整技术文档，从基础理论到实践案例"
              />
              <Feature
                Icon="🏭"
                title="工艺制造"
                description="从7nm到成熟工艺节点的制造技术详解，深入了解半导体工艺演进"
              />
              <Feature
                Icon="🛠️"
                title="EDA工具"
                description="Cadence、Synopsys及开源工具使用指南，提升设计效率"
              />
            </div>
            <div className="row" style={{marginTop: '2rem'}}>
              <Feature
                Icon="📚"
                title="协议标准"
                description="AMBA、PCIe、DDR等主流接口协议文档，快速查找技术规范"
              />
              <Feature
                Icon="🔍"
                title="智能检索"
                description="基于Meilisearch的毫秒级全文检索，精准定位所需信息"
              />
              <Feature
                Icon="🤖"
                title="AI集成"
                description="支持AI助手通过API和MCP协议访问，智能问答更便捷"
              />
            </div>
          </div>
        </section>

        <section className={styles.techStack}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>技术亮点</h2>
              <p className={styles.sectionSubtitle}>现代化的文档平台架构</p>
            </div>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <div className={styles.techIcon}>⚛️</div>
                <h3>Docusaurus</h3>
                <p>基于 React 的现代文档框架</p>
              </div>
              <div className={styles.techCard}>
                <div className={styles.techIcon}>🔎</div>
                <h3>Meilisearch</h3>
                <p>高性能全文搜索引擎</p>
              </div>
              <div className={styles.techCard}>
                <div className={styles.techIcon}>🐳</div>
                <h3>Docker</h3>
                <p>容器化部署方案</p>
              </div>
              <div className={styles.techCard}>
                <div className={styles.techIcon}>🤖</div>
                <h3>MCP Protocol</h3>
                <p>AI 模型上下文协议集成</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
