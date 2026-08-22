import React from 'react';
import SubcategoryProductsGridPage from '@/components/products/SubcategoryProductsGridPage';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const gasketsCategory = productCategoriesHierarchy.find((c) => c.slug === 'gaskets');
  return gasketsCategory.subcategories.map((sub) => ({
    subcategory: sub.slug,
  }));
}

export default async function GasketSubcategoryProductsPage({ params }) {
  const { subcategory } = await params;
  const gasketsCategory = productCategoriesHierarchy.find((c) => c.slug === 'gaskets');
  const subcategoryData =
    gasketsCategory?.subcategories.find((s) => s.slug === subcategory) ||
    gasketsCategory?.subcategories[0];

  return (
    <SubcategoryProductsGridPage
      categorySlug="gaskets"
      categoryTitle="GASKETS"
      categoryHref="/products/gaskets"
      subcategoryData={subcategoryData}
    />
  );
}
