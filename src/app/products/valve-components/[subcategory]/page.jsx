import React from 'react';
import SubcategoryProductsGridPage from '@/components/products/SubcategoryProductsGridPage';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const valveCategory = productCategoriesHierarchy.find((c) => c.slug === 'valve-components');
  return valveCategory.subcategories.map((sub) => ({
    subcategory: sub.slug,
  }));
}

export default async function ValveSubcategoryProductsPage({ params }) {
  const { subcategory } = await params;
  const valveCategory = productCategoriesHierarchy.find((c) => c.slug === 'valve-components');
  const subcategoryData =
    valveCategory?.subcategories.find((s) => s.slug === subcategory) ||
    valveCategory?.subcategories[0];

  return (
    <SubcategoryProductsGridPage
      categorySlug="valve-components"
      categoryTitle="VALVE COMPONENTS"
      categoryHref="/products/valve-components"
      subcategoryData={subcategoryData}
    />
  );
}
