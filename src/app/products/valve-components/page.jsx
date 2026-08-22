'use client';

import React from 'react';
import SubcategoryListPage from '@/components/products/SubcategoryListPage';
import { subcategoriesByCategory } from '@/data/subcategoriesData';

export default function ValveComponentsCategoryPage() {
  const data = subcategoriesByCategory['valve-components'];

  return <SubcategoryListPage categoryData={data} />;
}
