'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { blogHeroData } from '@/data/blogData';

export default function BlogHero() {
  return (
    <PageHero
      title={blogHeroData.title}
      subtitle={blogHeroData.subtitle}
      bgImage="/images/banner/txco-page-banner.avif"
      bgPosition="center bottom"
    />
  );
}
