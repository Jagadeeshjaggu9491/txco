'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PreFooter() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }

      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="prefooter-section">
      <div className="prefooter-container">
        {/* Left Column: Headline & Description */}
        <div ref={leftColRef} className="prefooter-left-col">
          <h2 className="prefooter-title">We&apos;re here to help.</h2>
          <p className="prefooter-description">
            Whether you need a hard-to-find component to keep your operations running
            or ongoing training to fine-tune your team&apos;s skill set, services like
            our proprietary reverse engineering and training gives your equipment and
            team a leading edge.
          </p>
        </div>

        {/* Right Column: 2 Cards Side by Side */}
        <div className="prefooter-cards-grid">
          {/* Card 1: Expert Support */}
          <div ref={addToCardsRef} className="prefooter-card">
            <div className="prefooter-card-body">
              <div className="prefooter-card-header">
                <img
                  src="/images/message-icon.png"
                  alt="Expert Support Icon"
                  className="prefooter-card-icon prefooter-icon-message"
                />
                <h3 className="prefooter-card-title">Expert Support</h3>
              </div>
              <p className="prefooter-card-text">
                If you have a technical question or need insights from a specialist, we can help.
              </p>
            </div>

            <Link href="/contact" className="prefooter-card-action">
              <span className="prefooter-action-text">Contact an Expert</span>
              <span className="prefooter-action-arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Card 2: Career Paths */}
          <div ref={addToCardsRef} className="prefooter-card">
            <div className="prefooter-card-body">
              <div className="prefooter-card-header">
                <img
                  src="/favicon-txco.png"
                  alt="Career Paths Icon"
                  className="prefooter-card-icon prefooter-icon-txco"
                />
                <h3 className="prefooter-card-title">Career Paths</h3>
              </div>
              <p className="prefooter-card-text">
                Use your expertise and ingenuity to help solve our customers&apos; sustainability challenges.
              </p>
            </div>

            <Link href="/careers" className="prefooter-card-action">
              <span className="prefooter-action-text">Join our Team</span>
              <span className="prefooter-action-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
