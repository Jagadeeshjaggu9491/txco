'use client';

import React from 'react';
import SubcategoryListPage from '@/components/products/SubcategoryListPage';
import { subcategoriesByCategory } from '@/data/subcategoriesData';

export default function GasketsCategoryPage() {
  const data = subcategoriesByCategory['gaskets'];

  return <SubcategoryListPage categoryData={data} />;
}
