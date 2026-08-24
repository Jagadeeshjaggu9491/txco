import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';

export const metadata = {
  title: 'Commercial Supply & Industrial Bolting | TXCO',
  description:
    'High-tensile heavy hex stud bolts, ASME B16.11 forged pipe fittings, dielectric flange insulation kits, and industrial maintenance supplies.',
};

export default function CommercialProductsDetailsPage() {
  const subcategoryData = subcategoryDetailCatalog['commercial-products'];

  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>
          Loading commercial product specifications...
        </div>
      }
    >
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
