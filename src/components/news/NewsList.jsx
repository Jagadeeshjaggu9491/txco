'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { newsCategories, newsArticlesList } from '@/data/newsData';
import { Calendar, MapPin, ArrowRight, Clock, Download } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NewsList() {
  const [selectedCategory, setSelectedCategory] = useState('All News');
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

  const filteredNews =
    selectedCategory === 'All News'
      ? newsArticlesList
      : newsArticlesList.filter((item) => item.category === selectedCategory);

  const featuredArticle = filteredNews.find((n) => n.featured) || filteredNews[0];
  const remainingArticles = filteredNews.filter((n) => n.id !== featuredArticle?.id);

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
    <section ref={sectionRef} className="news-main-section">
      <div className="news-container">
        {/* Category Filter Pills */}
        <div ref={pillsRef} className="news-categories-bar">
          {newsCategories.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`news-category-pill ${isActive ? 'active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured News Card Banner */}
        {featuredArticle && (
          <div ref={featuredRef} className="news-featured-card">
            <div className="news-featured-img-box">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="news-featured-img"
                onError={(e) => {
                  e.currentTarget.src = '/images/home-products.png';
                }}
              />
            </div>

            <div className="news-featured-content">
              <div className="news-meta-row">
                <span className="news-badge">
                  {featuredArticle.badge}
                </span>
                <span>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={14} />
                  <span>{featuredArticle.date}</span>
                </div>
                <span>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={14} />
                  <span>{featuredArticle.location}</span>
                </div>
              </div>

              <h2 className="news-featured-title">
                {featuredArticle.title}
              </h2>

              <p className="news-featured-excerpt">
                {featuredArticle.excerpt}
              </p>

              <div>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button className="txco-btn txco-btn-primary">
                    <span>Contact Media Desk</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Grid of News Cards */}
        <div className="news-cards-grid">
          {remainingArticles.map((article) => (
            <div key={article.id} ref={addToCardsRef} className="news-card-item">
              <div className="news-card-img-frame">
                <img
                  src={article.image}
                  alt={article.title}
                  className="news-card-img"
                  onError={(e) => {
                    e.currentTarget.src = '/images/home-products.png';
                  }}
                />
              </div>

              <div className="news-card-body">
                <div>
                  <div className="news-meta-row">
                    <span className="news-badge" style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}>
                      {article.badge}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#64748b', marginBottom: '0.4rem' }}>
                    <MapPin size={12} />
                    <span>{article.location}</span>
                  </div>

                  <h3 className="news-card-headline">
                    {article.title}
                  </h3>

                  <p className="news-card-summary">
                    {article.excerpt}
                  </p>
                </div>

                <div className="news-card-footer">
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </span>

                  <Link href="/contact" style={{ textDecoration: 'none' }}>
                    <span className="news-read-link">
                      <span>Inquire</span>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
