import React from 'react';
import SubcategoryProductsGridPage from '@/components/products/SubcategoryProductsGridPage';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const flangesCategory = productCategoriesHierarchy.find((c) => c.slug === 'flanges');
  return flangesCategory.subcategories.map((sub) => ({
    subcategory: sub.slug,
  }));
}

export default async function FlangeSubcategoryProductsPage({ params }) {
  const { subcategory } = await params;
  const flangesCategory = productCategoriesHierarchy.find((c) => c.slug === 'flanges');
  const subcategoryData =
    flangesCategory?.subcategories.find((s) => s.slug === subcategory) ||
    flangesCategory?.subcategories[0];

  return (
    <SubcategoryProductsGridPage
      categorySlug="flanges"
      categoryTitle="FLANGES"
      categoryHref="/products/flanges"
      subcategoryData={subcategoryData}
    />
  );
}
