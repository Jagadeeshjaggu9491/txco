'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { aboutHeroData } from '@/data/aboutData';

export default function AboutHero() {
  return (
    <PageHero
      title={aboutHeroData.title}
      subtitle={aboutHeroData.subtitle}
      bgImage="/images/title-section/about-us-banner.avif"
      bgMobileImage="/images/title-section/about-us-banner-mobile.avif"
      bgPosition="center bottom"
    />
  );
}
