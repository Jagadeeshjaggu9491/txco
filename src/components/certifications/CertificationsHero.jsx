'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { certificationsHeroData } from '@/data/certificationsData';

export default function CertificationsHero() {
  return (
    <PageHero
      title={certificationsHeroData.title}
      subtitle={certificationsHeroData.subtitle}
      bgImage="/images/title-section/certificates-page-banner.avif"
      bgMobileImage="/images/title-section/certificates-page-banner-mobile.avif"
      bgPosition="center bottom"
    />
  );
}
