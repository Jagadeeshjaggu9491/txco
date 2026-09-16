'use client';

import React, { useEffect, useMemo, useRef, memo } from 'react';
import { gsap } from 'gsap';
import './FoldText.css';

// Interpolates smoothly along linear-gradient(90deg, #018F5D 0%, #0D284D 65%)
function getGradientColor(index, total) {
  const ratio = Math.min(1, index / Math.max(1, (total - 1) * 0.65));
  const r = Math.round(1 + ratio * (13 - 1));
  const g = Math.round(143 + ratio * (40 - 143));
  const b = Math.round(93 + ratio * (77 - 93));
  return `rgb(${r}, ${g}, ${b})`;
}

const FoldText = memo(function FoldText({
  text = 'PRECISION SEALING. PROVEN PERFORMANCE.',
  duration = 0.65,
  stagger = 0.035,
  ease = 'power3.out',
  perspective = 700,
  fontSize = 'clamp(2.2rem, 3.8vw, 3rem)',
  fontWeight = 800,
  useGradient = true,
  color = '#0D284D',
  className = '',
  style = {},
  isTriggered = true,
  onComplete
}) {
  const rootRef = useRef(null);
  const timelineRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const safePerspective = Math.max(120, perspective);

  // Group characters into words so line wraps remain visually cohesive
  const segments = useMemo(() => {
    let globalCharIndex = 0;
    const totalChars = text.length;
    const words = text.split(' ');

    return words.map((word, wordIdx) => {
      const chars = Array.from(word).map((char, charIdx) => {
        const currentCharIndex = globalCharIndex;
        globalCharIndex += 1;

        const charColor = useGradient
          ? getGradientColor(currentCharIndex, totalChars)
          : color;

        return (
          <span
            key={`char-${wordIdx}-${charIdx}`}
            className="fold-text-segment"
            style={{ '--fold-perspective': `${safePerspective}px` }}
          >
            <span
              className="fold-text-piece"
              style={{
                transformOrigin: '50% 0%',
                color: charColor
              }}
            >
              {char}
            </span>
          </span>
        );
      });

      if (wordIdx < words.length - 1) {
        globalCharIndex += 1;
      }

      return (
        <span key={`word-${wordIdx}`} className="fold-text-word-group">
          {chars}
          {wordIdx < words.length - 1 && (
            <span className="fold-text-space">&nbsp;</span>
          )}
        </span>
      );
    });
  }, [text, safePerspective, useGradient, color]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = rootRef.current;
    if (!root) return;

    const pieces = Array.from(root.querySelectorAll('.fold-text-piece'));
    if (!pieces.length) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const activeDuration = reduceMotion ? 0.15 : duration;
    const activeStagger = reduceMotion ? 0.01 : stagger;

    // If already animated once, ensure pieces remain visible and do NOT restart
    if (hasAnimatedRef.current) {
      gsap.set(pieces, {
        opacity: 1,
        rotateX: 0,
        clearProps: 'transform,rotateX'
      });
      return;
    }

    // If not triggered yet (e.g. preloader is still running), hold hidden in folded state
    if (!isTriggered) {
      gsap.set(pieces, {
        opacity: 0,
        rotateX: -88,
        transformOrigin: '50% 0%',
        force3D: true
      });
      return;
    }

    // Mark as animated so it only runs ONCE!
    hasAnimatedRef.current = true;

    // Kill any existing tween
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    gsap.killTweensOf(pieces);

    const tl = gsap.timeline({
      delay: 0.1,
      onComplete: () => {
        gsap.set(pieces, { clearProps: 'transform,rotateX' });
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    });

    tl.fromTo(
      pieces,
      {
        opacity: 0,
        rotateX: reduceMotion ? 0 : -88,
        transformOrigin: '50% 0%',
        force3D: true
      },
      {
        opacity: 1,
        rotateX: 0,
        duration: activeDuration,
        ease: reduceMotion ? 'power1.out' : ease,
        stagger: activeStagger
      }
    );

    timelineRef.current = tl;

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      gsap.killTweensOf(pieces);
    };
  }, [isTriggered, duration, stagger, ease]);

  const rootStyle = {
    '--fold-text-font-size': typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
    '--fold-text-font-weight': fontWeight,
    ...style
  };

  return (
    <span
      ref={rootRef}
      className={`fold-text ${className}`.trim()}
      style={rootStyle}
    >
      <span className="fold-text-sr-only">{text}</span>
      <span className="fold-text-visual" aria-hidden="true">
        {segments}
      </span>
    </span>
  );
});

export default FoldText;
