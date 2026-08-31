import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const gasketSlugs = ['metallic-gaskets', 'semi-metallic-gaskets', 'non-metallic-gaskets', 'steel-inserted-gaskets'];
  return gasketSlugs.map((slug) => ({
    subcategory: slug,
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
