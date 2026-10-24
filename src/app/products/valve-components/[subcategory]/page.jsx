import React from 'react';
import SubcategoryProductsGridPage from '@/components/products/SubcategoryProductsGridPage';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const valveCategory = productCategoriesHierarchy.find((c) => c.slug === 'valve-components');
  const subs = (valveCategory?.subcategories || []).map((sub) => ({
    subcategory: sub.slug,
  }));
  const items = [
    'precision-o-rings',
    'valve-packing',
    'valve-seats-inserts',
  ].map((slug) => ({ subcategory: slug }));

  return [...subs, ...items];
}

export default async function ValveSubcategoryProductsPage({ params }) {
  const { subcategory } = await params;
  const valveCategory = productCategoriesHierarchy.find((c) => c.slug === 'valve-components');
  const subcategoryData =
    valveCategory?.subcategories.find((s) => s.slug === subcategory) ||
    valveCategory?.subcategories[0] || {
      name: 'Valve Components',
      slug: subcategory || 'valve-components',
      products: [],
    };

  return (
    <SubcategoryProductsGridPage
      categorySlug="valve-components"
      categoryTitle="VALVE COMPONENTS"
      categoryHref="/products/valve-components"
      subcategoryData={subcategoryData}
    />
  );
}
