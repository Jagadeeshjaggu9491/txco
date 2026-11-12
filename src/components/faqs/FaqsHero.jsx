'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { faqsHeroData } from '@/data/faqsData';

export default function FaqsHero() {
  return (
    <PageHero
      title={faqsHeroData.title}
      subtitle={faqsHeroData.subtitle}
      bgImage="/images/title-section/faq-page-banner.avif"
      bgMobileImage="/images/title-section/faq-page-banner-mobile.avif"
      bgPosition="center bottom"
    />
  );
}
