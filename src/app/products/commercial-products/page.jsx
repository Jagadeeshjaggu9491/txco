'use client';

import React from 'react';
import SubcategoryListPage from '@/components/products/SubcategoryListPage';
import { subcategoriesByCategory } from '@/data/subcategoriesData';

export default function CommercialProductsCategoryPage() {
  const data = subcategoriesByCategory['commercial-products'];

  return <SubcategoryListPage categoryData={data} />;
}
