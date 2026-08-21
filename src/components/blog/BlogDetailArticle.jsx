'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogDetailArticle({ post, relatedPosts }) {
  const containerRef = useRef(null);
  const backBtnRef = useRef(null);
  const headerRef = useRef(null);
  const heroImgRef = useRef(null);
  const contentRef = useRef(null);
  const tagsRef = useRef(null);
  const authorBioRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header intro timeline
      const headerTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (backBtnRef.current) {
        headerTl.fromTo(
          backBtnRef.current,
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.6 }
        );
      }

      if (headerRef.current) {
        headerTl.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          '-=0.3'
        );
      }

      if (heroImgRef.current) {
        headerTl.fromTo(
          heroImgRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.5'
        );
      }

      // 2. Article Content blocks with 0.3 viewport trigger
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 70%', // 0.3 viewport trigger
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 3. Tags Bar
      if (tagsRef.current) {
        gsap.fromTo(
          tagsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: tagsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 4. Author Bio Card
      if (authorBioRef.current) {
        gsap.fromTo(
          authorBioRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: authorBioRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 5. Related Articles Grid
      if (relatedRef.current) {
        gsap.fromTo(
          relatedRef.current.querySelectorAll('.blog-card'),
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: relatedRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <article className="blog-details-section">
        <div className="blog-details-container">
          {/* Back Button Breadcrumb */}
          <div ref={backBtnRef}>
            <Link href="/blog" className="blog-back-btn">
              <ChevronLeft size={16} strokeWidth={2.8} />
              <span>BACK TO ALL ARTICLES</span>
            </Link>
          </div>

          {/* Article Header */}
          <div ref={headerRef} className="blog-details-header">
            <div>
              <span className="blog-category-badge">
                {post.category}
              </span>
            </div>

            <h1 className="blog-details-title">
              {post.title}
            </h1>

            {/* Metadata & Author Row */}
            <div className="blog-details-author-box">
              <div className="blog-author-bar">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#052c58',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <User size={20} />
                </div>
                <div>
                  <span className="blog-author-name" style={{ fontSize: '0.98rem' }}>
                    {post.author.name}
                  </span>
                  <span className="blog-author-role">
                    {post.author.role} • TXCO Engineering
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: '#64748b', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={16} />
                  <span>{post.publishedDate}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Hero Image Box */}
            <div ref={heroImgRef} className="blog-details-hero-img-box">
              <img
                src={post.image}
                alt={post.title}
                className="blog-details-hero-img"
              />
            </div>
          </div>

          {/* Article Body Content */}
          <div ref={contentRef} className="blog-article-content">
            {post.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="blog-content-heading">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'paragraph') {
                return (
                  <p key={idx} className="blog-content-p">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'callout') {
                return (
                  <div key={idx} className="blog-callout-box">
                    <p style={{ margin: 0 }}>"{block.text}"</p>
                  </div>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={idx} className="blog-content-list">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* Article Tags */}
          {post.tags && post.tags.length > 0 && (
            <div ref={tagsRef} className="blog-tags-bar">
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b', marginRight: '0.5rem' }}>
                TOPICS:
              </span>
              {post.tags.map((t, idx) => (
                <span key={idx} className="blog-tag-pill">
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Author Bio Card */}
          <div ref={authorBioRef} className="blog-author-bio-card">
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#052c58',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <User size={30} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#052C58', marginBottom: '0.3rem' }}>
                Written by {post.author.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: '1.5' }}>
                {post.author.role} at TXCO Sealing Products. Specializing in advanced metallic materials, high-pressure flange joint integrity, and zero-emission critical sealing systems.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section ref={relatedRef} className="blog-related-section">
          <div className="txco-container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge" style={{ color: 'var(--slate-blue)' }}>
                FURTHER READING
              </span>
              <h2 className="section-title section-title-center">
                Related Engineering Articles
              </h2>
            </div>

            <div className="blog-posts-grid">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  href={`/blog/${rPost.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="blog-card">
                    <div className="blog-card-img-box">
                      <img
                        src={rPost.image}
                        alt={rPost.title}
                        className="blog-card-img"
                      />
                    </div>

                    <div className="blog-card-body">
                      <div>
                        <div className="blog-card-meta">
                          <span className="blog-category-badge">
                            {rPost.category}
                          </span>
                          <span>•</span>
                          <span>{rPost.readTime}</span>
                        </div>

                        <h3 className="blog-card-title">
                          {rPost.title}
                        </h3>

                        <p className="blog-card-excerpt">
                          {rPost.excerpt}
                        </p>
                      </div>

                      <div className="blog-card-footer">
                        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                          {rPost.publishedDate}
                        </span>

                        <span className="blog-card-read-link">
                          <span>Read Article</span>
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
