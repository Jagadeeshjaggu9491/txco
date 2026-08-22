'use client';

import React from 'react';
import SubcategoryListPage from '@/components/products/SubcategoryListPage';
import { subcategoriesByCategory } from '@/data/subcategoriesData';

export default function FlangesCategoryPage() {
  const data = subcategoriesByCategory['flanges'];

  return <SubcategoryListPage categoryData={data} />;
}
