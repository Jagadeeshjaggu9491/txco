'use client';

import React from 'react';
import PageHero from '@/components/PageHero';
import { resourcesHeroData } from '@/data/resourcesData';

export default function ResourcesHero() {
  return (
    <PageHero
      title={resourcesHeroData.title}
      subtitle={resourcesHeroData.subtitle}
      bgImage="/images/resources-pages-banner-img.avif"
      bgPosition="center"
    />
  );
}
