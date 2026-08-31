import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';

export const metadata = {
  title: 'Monolithic Insulation Joints (MIJ) | TXCO',
  description:
    'Solid-state forged monolithic insulation joints for Cathodic Protection (CP) isolation in buried and aboveground pipeline networks from NPS 2" to 60".',
};

export default function MonolithicInsulationJointsDetailsPage() {
  const subcategoryData = subcategoryDetailCatalog['monolithic-insulation-joints'];

  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>
          Loading monolithic insulation joints specifications...
        </div>
      }
    >
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
