'use client';

import React from 'react';

export function AssemblyCrossSectionDiagram({ type = 'weld-lip' }) {
  return (
    <div style={{ width: '100%', margin: '2rem 0', display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #edf2f7' }}>
      <svg viewBox="0 0 650 180" style={{ width: '100%', maxWidth: '620px', height: 'auto' }}>
        {/* Panel 1: Membrane Seal */}
        <g transform="translate(10, 10)">
          {/* Top Bolt & Nut */}
          <rect x="25" y="10" width="30" height="24" rx="2" fill="#718096" stroke="#2d3748" strokeWidth="1.5" />
          <line x1="25" y1="22" x2="55" y2="22" stroke="#4a5568" strokeWidth="1" />
          {/* Bolt Shank */}
          <rect x="35" y="34" width="10" height="92" fill="#a0aec0" stroke="#4a5568" strokeWidth="1" />
          {/* Bottom Nut */}
          <rect x="25" y="126" width="30" height="24" rx="2" fill="#718096" stroke="#2d3748" strokeWidth="1.5" />
          <line x1="25" y1="138" x2="55" y2="138" stroke="#4a5568" strokeWidth="1" />

          {/* Upper Flange */}
          <path d="M 50 35 L 140 35 L 170 35 L 170 78 L 50 78 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />
          {/* Lower Flange */}
          <path d="M 50 82 L 170 82 L 170 125 L 140 125 L 50 125 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />

          {/* Gasket & Weld Seam */}
          <rect x="50" y="78" width="65" height="4" fill="#d69e2e" stroke="#b7791f" strokeWidth="1" />
          <path d="M 115 78 L 140 80 L 115 82 Z" fill="#dd6b20" stroke="#c05621" strokeWidth="1" />
        </g>

        {/* Panel 2: Profiled Solid Lip */}
        <g transform="translate(220, 10)">
          {/* Top Bolt & Nut */}
          <rect x="25" y="10" width="30" height="24" rx="2" fill="#718096" stroke="#2d3748" strokeWidth="1.5" />
          <line x1="25" y1="22" x2="55" y2="22" stroke="#4a5568" strokeWidth="1" />
          {/* Bolt Shank */}
          <rect x="35" y="34" width="10" height="92" fill="#a0aec0" stroke="#4a5568" strokeWidth="1" />
          {/* Bottom Nut */}
          <rect x="25" y="126" width="30" height="24" rx="2" fill="#718096" stroke="#2d3748" strokeWidth="1.5" />
          <line x1="25" y1="138" x2="55" y2="138" stroke="#4a5568" strokeWidth="1" />

          {/* Upper Flange */}
          <path d="M 50 35 L 140 35 L 170 35 L 170 75 L 50 75 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />
          {/* Lower Flange */}
          <path d="M 50 85 L 170 85 L 170 125 L 140 125 L 50 125 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />

          {/* Profiled Lip Gasket */}
          <rect x="50" y="75" width="55" height="10" fill="#4a5568" stroke="#2d3748" strokeWidth="1" />
          <polygon points="105,75 125,80 105,85" fill="#ecc94b" stroke="#d69e2e" strokeWidth="1" />
        </g>

        {/* Panel 3: Hollow-Lip Seal */}
        <g transform="translate(430, 10)">
          {/* Top Bolt & Nut */}
          <rect x="25" y="10" width="30" height="24" rx="2" fill="#718096" stroke="#2d3748" strokeWidth="1.5" />
          <line x1="25" y1="22" x2="55" y2="22" stroke="#4a5568" strokeWidth="1" />
          {/* Bolt Shank */}
          <rect x="35" y="34" width="10" height="92" fill="#a0aec0" stroke="#4a5568" strokeWidth="1" />
          {/* Bottom Nut */}
          <rect x="25" y="126" width="30" height="24" rx="2" fill="#718096" stroke="#2d3748" strokeWidth="1.5" />
          <line x1="25" y1="138" x2="55" y2="138" stroke="#4a5568" strokeWidth="1" />

          {/* Upper Flange */}
          <path d="M 50 35 L 140 35 L 170 35 L 170 72 L 50 72 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />
          {/* Lower Flange */}
          <path d="M 50 88 L 170 88 L 170 125 L 140 125 L 50 125 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />

          {/* Hollow Gasket Body */}
          <rect x="50" y="72" width="60" height="16" rx="2" fill="#2d3748" stroke="#1a202c" strokeWidth="1" />
          <circle cx="80" cy="80" r="4.5" fill="#edf2f7" stroke="#718096" strokeWidth="1" />
          {/* Welded Lip */}
          <line x1="110" y1="80" x2="140" y2="80" stroke="#ecc94b" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

export function TableFigureIcon({ type = 'membrane' }) {
  switch (type) {
    case 'membrane':
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <polygon points="10,25 25,10 55,10 70,25" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />
          <line x1="25" y1="10" x2="55" y2="10" stroke="#2b6cb0" strokeWidth="2" />
        </svg>
      );
    case 'profiled':
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <path d="M 10 25 L 10 10 L 45 10 Q 55 18 65 18 L 70 18 Q 55 25 45 25 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />
          <circle cx="68" cy="18" r="2.5" fill="#dd6b20" />
        </svg>
      );
    case 'hollow-1':
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <path d="M 10 28 L 10 8 L 40 8 Q 55 8 68 18 Q 55 28 40 28 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />
          <circle cx="35" cy="18" r="4" fill="#ffffff" stroke="#4a5568" strokeWidth="1" />
          <line x1="68" y1="18" x2="75" y2="18" stroke="#dd6b20" strokeWidth="2" />
        </svg>
      );
    case 'hollow-2':
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <path d="M 10 30 L 10 6 L 45 6 Q 60 12 70 18 Q 60 24 45 30 Z" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />
          <polygon points="45,18 35,12 35,24" fill="#ffffff" stroke="#4a5568" strokeWidth="1" />
          <circle cx="70" cy="18" r="3" fill="#dd6b20" />
        </svg>
      );
    case 'rtj-oval':
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <ellipse cx="40" cy="17.5" rx="18" ry="12" fill="#cbd5e0" stroke="#2d3748" strokeWidth="1.5" />
        </svg>
      );
    case 'rtj-octagonal':
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <polygon points="30,6 50,6 60,12 60,23 50,29 30,29 20,23 20,12" fill="#cbd5e0" stroke="#2d3748" strokeWidth="1.5" />
        </svg>
      );
    case 'rtj-rx':
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <polygon points="28,5 48,5 58,10 62,25 48,30 28,30 22,20 22,12" fill="#cbd5e0" stroke="#2d3748" strokeWidth="1.5" />
          <line x1="28" y1="5" x2="48" y2="5" stroke="#2b6cb0" strokeWidth="1.5" />
        </svg>
      );
    case 'rtj-bx':
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <rect x="25" y="6" width="30" height="23" rx="3" fill="#cbd5e0" stroke="#2d3748" strokeWidth="1.5" />
          <circle cx="40" cy="17.5" r="2.5" fill="#ffffff" stroke="#2d3748" strokeWidth="1" />
        </svg>
      );
    default:
      return (
        <svg width="80" height="35" viewBox="0 0 80 35">
          <rect x="20" y="8" width="40" height="19" rx="2" fill="#cbd5e0" stroke="#4a5568" strokeWidth="1.5" />
        </svg>
      );
  }
}
