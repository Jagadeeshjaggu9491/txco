import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const gasketsCategory = productCategoriesHierarchy.find((c) => c.slug === 'gaskets');
  return gasketsCategory.subcategories.map((sub) => ({
    subcategory: sub.slug,
  }));
}

export default async function GasketProductDetailsPage({ params }) {
  const { subcategory } = await params;
  const subcategoryData =
    subcategoryDetailCatalog[subcategory] || subcategoryDetailCatalog['metallic-gaskets'];

  return (
    <Suspense fallback={<div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>Loading product details...</div>}>
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
