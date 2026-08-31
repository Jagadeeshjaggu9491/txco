'use client';

import React from 'react';
import SubcategoryListPage from '@/components/products/SubcategoryListPage';
import { subcategoriesByCategory } from '@/data/subcategoriesData';

export default function PlugGasketsCategoryPage() {
  const data = subcategoriesByCategory['plug-gaskets'];

  return <SubcategoryListPage categoryData={data} />;
}
