import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const products = [
  {
    title: 'DocketFlow',
    tagline: 'Onsite workflow automation for boutique survey firms.',
    href: '/docketflow/',
    status: 'Live docs',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 16h16M16 24h16M16 32h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M30 30l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Wattline',
    tagline: 'AI-powered energy analytics for manufacturing.',
    href: '/wattline/',
    status: 'Coming soon',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 4L10 28h10l-2 16 18-26H26l2-14z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Resona',
    tagline: 'AI-powered consumer reviews platform for travel & leisure.',
    href: '/resona/',
    status: 'Coming soon',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6l4.9 10.4 11.1 1.5-8.2 8 2 11.4L24 32l-9.8 5.3 2-11.4-8.2-8 11.1-1.5L24 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Kayeli',
    tagline: 'AI customer-service agent for travel & leisure.',
    href: '/kayeli/',
    status: 'Coming soon',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12a4 4 0 014-4h24a4 4 0 014 4v16a4 4 0 01-4 4H20l-8 8V32h-0a4 4 0 01-4-4V12z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="17" cy="20" r="1.8" fill="currentColor"/>
        <circle cx="24" cy="20" r="1.8" fill="currentColor"/>
        <circle cx="31" cy="20" r="1.8" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <Layout
      title="Cuebit Systems Docs"
      description="Documentation for DocketFlow, Wattline, Resona, and Kayeli">
      <header className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <p className={styles.eyebrow}>Cuebit Systems</p>
          <h1 className={styles.heroTitle}>Documentation, all in one place</h1>
          <p className={styles.heroSubtitle}>
            Guides and references for every product we build. Pick one below to get started.
          </p>
        </div>
      </header>

      <main>
        <div className="container">
          <div className={styles.grid}>
            {products.map((p) => (
              <Link key={p.title} to={p.href} className={styles.card}>
                <div className={styles.cardIcon}>{p.icon}</div>
                <div className={styles.cardBody}>
                  <div className={styles.cardHeaderRow}>
                    <h2>{p.title}</h2>
                    <span
                      className={
                        p.status === 'Live docs'
                          ? styles.statusLive
                          : styles.statusSoon
                      }>
                      {p.status}
                    </span>
                  </div>
                  <p>{p.tagline}</p>
                  <span className={styles.cardLink}>
                    View docs
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 11L11 3M11 3H4M11 3V10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
