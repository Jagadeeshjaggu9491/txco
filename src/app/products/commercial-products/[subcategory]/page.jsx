import React from 'react';
import SubcategoryProductsGridPage from '@/components/products/SubcategoryProductsGridPage';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const commCategory = productCategoriesHierarchy.find((c) => c.slug === 'commercial-products');
  return commCategory.subcategories.map((sub) => ({
    subcategory: sub.slug,
  }));
}

export default async function CommercialSubcategoryProductsPage({ params }) {
  const { subcategory } = await params;
  const commCategory = productCategoriesHierarchy.find((c) => c.slug === 'commercial-products');
  const subcategoryData =
    commCategory?.subcategories.find((s) => s.slug === subcategory) ||
    commCategory?.subcategories[0];

  return (
    <SubcategoryProductsGridPage
      categorySlug="commercial-products"
      categoryTitle="COMMERCIAL PRODUCTS"
      categoryHref="/products/commercial-products"
      subcategoryData={subcategoryData}
    />
  );
}
