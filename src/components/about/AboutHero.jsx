'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { aboutHeroData } from '@/data/aboutData';

export default function AboutHero() {
  return (
    <PageHero
      title={aboutHeroData.title}
      subtitle={aboutHeroData.subtitle}
      bgImage="/images/banner/txco-page-banner.avif"
      bgPosition="center bottom"
    />
  );
}
