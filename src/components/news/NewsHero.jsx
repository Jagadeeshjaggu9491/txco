'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { newsHeroData } from '@/data/newsData';

export default function NewsHero() {
  return (
    <PageHero
      title={newsHeroData.title}
      subtitle={newsHeroData.subtitle}
      bgImage="/images/title-section/news-page-banner.avif"
      bgMobileImage="/images/title-section/news-page-banner-mobile.avif"
      bgPosition="center bottom"
    />
  );
}
