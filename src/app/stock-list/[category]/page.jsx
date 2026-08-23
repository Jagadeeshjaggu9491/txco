import React from 'react';
import StockListPage from '@/components/stock/StockListPage';

export async function generateStaticParams() {
  return [
    { category: 'ring-joints-rtj' },
    { category: 'spiral-wound-gaskets' },
    { category: 'kammprofile-jacketed' },
    { category: 'gasket-sheets' },
    { category: 'flanges-valve-trims' },
  ];
}

const categoryMap = {
  'ring-joints-rtj': 'Metallic Gaskets',
  'spiral-wound-gaskets': 'Semi-Metallic Gaskets',
  'kammprofile-jacketed': 'Semi-Metallic Gaskets',
  'gasket-sheets': 'Non-Metallic Gaskets',
  'flanges-valve-trims': 'Flanges',
};

export default async function StockListCategoryPage({ params }) {
  const { category } = await params;
  const initialCategory = categoryMap[category] || 'All Categories';

  return <StockListPage initialCategory={initialCategory} />;
}
