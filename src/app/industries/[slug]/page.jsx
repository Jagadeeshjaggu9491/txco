import React from 'react';
import IndustryDetailsLayout from '@/components/industries/IndustryDetailsLayout';
import { industriesList } from '@/data/industriesData';

export async function generateStaticParams() {
  return industriesList.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industriesList.find((item) => item.slug === slug);

  if (!industry) {
    return {
      title: 'Industry Solutions | TXCO Sealing Technologies',
    };
  }

  return {
    title: `${industry.title} Solutions | TXCO Advanced Gaskets & Sealing`,
    description: industry.subtitle,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industryData =
    industriesList.find((item) => item.slug === slug) || industriesList[0];

  return <IndustryDetailsLayout industryData={industryData} />;
}
