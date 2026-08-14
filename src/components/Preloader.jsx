'use client';

import React, { useState, useEffect } from 'react';

const NUM_COLUMNS = 5;

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Brief initial hold before the shutter grid begins opening from left to right
    const startTimer = setTimeout(() => {
      setFadeOut(true);
    }, 400);

    // Unmount component after all 5 columns finish sliding away
    const finishTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: fadeOut ? 'none' : 'all',
        overflow: 'hidden',
      }}
    >
      {/* 5 Vertical Grid Columns Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: `repeat(${NUM_COLUMNS}, 1fr)`,
          width: '100vw',
          height: '100vh',
        }}
      >
        {Array.from({ length: NUM_COLUMNS }).map((_, i) => {
          // Staggered left-to-right delay (Col 0 opens first, Col 4 opens last)
          const delay = i * 0.12;

          return (
            <div
              key={i}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              {/* Vertical Gradient Border Line on Right Edge */}
              {i < NUM_COLUMNS - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '1px',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 210, 255, 0.4) 50%, rgba(255, 255, 255, 0.02) 100%)',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* TOP HALF: Slides UP from center line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '50%',
                  backgroundColor: '#1d2744', // Solid color
                  transition: `transform 0.85s cubic-bezier(0.77, 0, 0.175, 1) ${fadeOut ? delay : 0}s`,
                  transform: fadeOut ? 'translateY(-100%)' : 'translateY(0%)',
                }}
              >
                {/* Horizontal Gradient Border Line at Bottom of Top Panel */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 210, 255, 0.6) 50%, rgba(0, 102, 255, 0.1) 100%)',
                  }}
                />
              </div>

              {/* BOTTOM HALF: Slides DOWN from center line */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '50%',
                  backgroundColor: '#1d2744', // Solid color
                  transition: `transform 0.85s cubic-bezier(0.77, 0, 0.175, 1) ${fadeOut ? delay : 0}s`,
                  transform: fadeOut ? 'translateY(100%)' : 'translateY(0%)',
                }}
              >
                {/* Horizontal Gradient Border Line at Top of Bottom Panel */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 210, 255, 0.6) 50%, rgba(0, 102, 255, 0.1) 100%)',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
