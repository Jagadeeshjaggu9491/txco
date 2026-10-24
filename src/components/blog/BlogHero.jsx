'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { blogHeroData } from '@/data/blogData';

export default function BlogHero() {
  return (
    <PageHero
      title={blogHeroData?.title || 'TXCO BLOG & INSIGHTS'}
      subtitle={
        blogHeroData?.subtitle ||
        'Expert engineering perspectives, technical whitepapers, and industry trends on high-performance industrial sealing, bolting integrity, and sustainable energy transitions.'
      }
      bgImage="/images/title-section/page-hero-banner-new.avif"
      bgPosition="center bottom"
    />
  );
}
