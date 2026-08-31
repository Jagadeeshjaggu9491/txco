import React from 'react';
import SubcategoryProductsGridPage from '@/components/products/SubcategoryProductsGridPage';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const gasketSlugs = ['metallic-gaskets', 'semi-metallic-gaskets', 'non-metallic-gaskets', 'steel-inserted-gaskets'];
  return gasketSlugs.map((slug) => ({
    subcategory: slug,
  }));
}

export default async function GasketSubcategoryProductsPage({ params }) {
  const { subcategory } = await params;
  const categoryData = productCategoriesHierarchy.find((c) => c.slug === subcategory);
  const subcategoryData = categoryData?.subcategories?.[0] || {
    name: categoryData?.name || 'Gaskets',
    slug: subcategory,
    products: [],
  };

  return (
    <SubcategoryProductsGridPage
      categorySlug="gaskets"
      categoryTitle="GASKETS"
      categoryHref="/products/gaskets"
      subcategoryData={subcategoryData}
    />
  );
}
