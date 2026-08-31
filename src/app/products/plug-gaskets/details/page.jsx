import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';

export const metadata = {
  title: 'Plug Gaskets Technical Specifications | TXCO',
  description:
    'High-pressure metallic and non-metallic plug gaskets designed to provide reliable containment for equipment and piping plugs.',
};

export default function PlugGasketsDetailsPage() {
  const subcategoryData = subcategoryDetailCatalog['plug-gaskets'];

  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>
          Loading plug gaskets specifications...
        </div>
      }
    >
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
