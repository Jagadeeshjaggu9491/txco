import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';

export const metadata = {
  title: 'Flange Products & Technical Specifications | TXCO',
  description:
    'Forged industrial flanges including Weld Neck, Slip-On, Blind, Socket Weld, Lap Joint, Threaded, Orifice, and Custom Subsea Flanges conforming to ASME B16.5 and API 6A.',
};

export default function FlangeProductDetailsPage() {
  const subcategoryData = subcategoryDetailCatalog['flanges'];

  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>
          Loading flange specifications...
        </div>
      }
    >
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
