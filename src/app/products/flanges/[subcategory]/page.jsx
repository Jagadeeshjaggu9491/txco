import React from 'react';
import SubcategoryProductsGridPage from '@/components/products/SubcategoryProductsGridPage';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const flangesCategory = productCategoriesHierarchy.find((c) => c.slug === 'flanges');
  const subs = (flangesCategory?.subcategories || []).map((sub) => ({
    subcategory: sub.slug,
  }));
  const items = [
    'weld-neck-flanges',
    'slip-on-flanges',
    'blind-flanges',
    'socket-weld-flanges',
    'lap-joint-flanges',
    'threaded-screwed-flanges',
    'orifice-flanges',
    'custom-flanges',
  ].map((slug) => ({ subcategory: slug }));

  return [...subs, ...items];
}

export default async function FlangeSubcategoryProductsPage({ params }) {
  const { subcategory } = await params;
  const flangesCategory = productCategoriesHierarchy.find((c) => c.slug === 'flanges');
  const subcategoryData =
    flangesCategory?.subcategories.find((s) => s.slug === subcategory) ||
    flangesCategory?.subcategories[0] || {
      name: 'Flanges',
      slug: subcategory || 'flanges',
      products: [],
    };

  return (
    <SubcategoryProductsGridPage
      categorySlug="flanges"
      categoryTitle="FLANGES"
      categoryHref="/products/flanges"
      subcategoryData={subcategoryData}
    />
  );
}
