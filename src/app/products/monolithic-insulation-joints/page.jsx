'use client';

import React from 'react';
import SubcategoryListPage from '@/components/products/SubcategoryListPage';
import { subcategoriesByCategory } from '@/data/subcategoriesData';

export default function MonolithicInsulationJointsCategoryPage() {
  const data = subcategoriesByCategory['monolithic-insulation-joints'];

  return <SubcategoryListPage categoryData={data} />;
}
