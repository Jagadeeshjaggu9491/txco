'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { faqsHeroData } from '@/data/faqsData';

export default function FaqsHero() {
  return (
    <PageHero
      title={faqsHeroData.title}
      subtitle={faqsHeroData.subtitle}
      bgImage="/images/banner/txco-page-banner.avif"
      bgPosition="center bottom"
    />
  );
}
