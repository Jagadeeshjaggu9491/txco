'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { certificationsHeroData } from '@/data/certificationsData';

export default function CertificationsHero() {
  return (
    <PageHero
      title={certificationsHeroData.title}
      subtitle={certificationsHeroData.subtitle}
      bgImage="/images/banner/txco-page-banner.avif"
      bgPosition="center bottom"
    />
  );
}
