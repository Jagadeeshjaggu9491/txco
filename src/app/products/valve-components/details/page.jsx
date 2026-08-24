import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';

export const metadata = {
  title: 'Valve Components & Sealing Trims | TXCO',
  description:
    'Precision CNC valve trims, API 622/624 low-emission valve packing, body-to-bonnet pressure seals, and spring-energized PTFE lip seals.',
};

export default function ValveComponentsDetailsPage() {
  const subcategoryData = subcategoryDetailCatalog['valve-components'];

  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>
          Loading valve component specifications...
        </div>
      }
    >
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
