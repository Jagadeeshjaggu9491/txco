'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { blogCategories, blogPostsList } from '@/data/blogData';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const sectionRef = useRef(null);
  const pillsRef = useRef(null);
  const featuredRef = useRef(null);
  const cardsRef = useRef([]);

  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const filteredPosts =
    selectedCategory === 'All Articles'
      ? blogPostsList
      : blogPostsList.filter((post) => post.category === selectedCategory);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const remainingPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  // Initial Entrance Animation triggered when ~30% into viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%', // 0.3 viewport trigger
          toggleActions: 'play none none reverse',
        },
      });

      if (pillsRef.current) {
        tl.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 20, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power3.out',
          }
        );
      }

      if (featuredRef.current) {
        tl.fromTo(
          featuredRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
          },
          '-=0.3'
        );
      }

      if (cardsRef.current.length > 0) {
        tl.fromTo(
          cardsRef.current,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.4'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Category switch re-animation
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
      );
    }
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [selectedCategory]);

  return (
    <section ref={sectionRef} className="blog-main-section">
      <div className="blog-container">
        {/* Category Filter Pills */}
        <div ref={pillsRef} className="blog-categories-bar">
          {blogCategories.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`blog-category-pill ${isActive ? 'active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Article Banner Card */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div ref={featuredRef} className="blog-featured-card">
              <div className="blog-featured-img-wrapper">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="blog-featured-img"
                  onError={(e) => {
                    e.currentTarget.src = '/images/home-products.png';
                  }}
                />
              </div>

              <div className="blog-featured-content">
                <div className="blog-card-meta">
                  <span className="blog-category-badge">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={14} />
                    <span>{featuredPost.publishedDate}</span>
                  </div>
                  <span>•</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="blog-featured-title">
                  {featuredPost.title}
                </h2>

                <p className="blog-featured-excerpt">
                  {featuredPost.excerpt}
                </p>

                <div className="blog-author-bar">
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#052c58',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <User size={18} />
                  </div>
                  <div>
                    <span className="blog-author-name">
                      {featuredPost.author.name}
                    </span>
                    <span className="blog-author-role" style={{ display: 'block' }}>
                      {featuredPost.author.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid of Remaining Articles */}
        <div className="blog-posts-grid">
          {remainingPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div ref={addToCardsRef} className="blog-card">
                <div className="blog-card-img-box">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card-img"
                    onError={(e) => {
                      e.currentTarget.src = '/images/home-products.png';
                    }}
                  />
                </div>

                <div className="blog-card-body">
                  <div>
                    <div className="blog-card-meta">
                      <span className="blog-category-badge">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="blog-card-title">
                      {post.title}
                    </h3>

                    <p className="blog-card-excerpt">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="blog-card-footer">
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                      {post.publishedDate}
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
  );
}
