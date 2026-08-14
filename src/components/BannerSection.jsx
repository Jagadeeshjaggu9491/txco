'use client';

import React from 'react';

export default function BannerSection() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#1d2744', // Exact dark navy solid color from reference image
        padding: '3.2rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <h2
        style={{
          fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: 'clamp(1.4rem, 2.6vw, 2.3rem)',
          fontWeight: '300',
          color: '#ffffff',
          letterSpacing: '0.015em',
          margin: 0,
          lineHeight: '1.35',
        }}
      >
        Custom Gasket, Bolt & Seal Manufacturer
      </h2>
    </section>
  );
}
