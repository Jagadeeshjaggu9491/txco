import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const commCategory = productCategoriesHierarchy.find((c) => c.slug === 'commercial-products');
  return commCategory.subcategories.map((sub) => ({
    subcategory: sub.slug,
  }));
}

export default async function CommercialProductDetailsPage({ params }) {
  const { subcategory } = await params;
  const subcategoryData =
    subcategoryDetailCatalog[subcategory] || {
      parentCategoryTitle: 'COMMERCIAL PRODUCTS',
      parentCategoryHref: '/products/commercial-products',
      subcategoryTitle: subcategory.replace(/-/g, ' ').toUpperCase(),
      productsList: [
        { id: subcategory, title: subcategory.replace(/-/g, ' ').toUpperCase() },
      ],
      productDetails: {
        [subcategory]: {
          title: subcategory.replace(/-/g, ' ').toUpperCase(),
          downloadTitle: subcategory.replace(/-/g, ' ').toUpperCase(),
          sections: [
            {
              heading: subcategory.replace(/-/g, ' ').toUpperCase(),
              paragraphs: [
                'Commercial heavy hex stud bolts, nuts, flange protectors, and pipeline maintenance hardware manufactured to ASTM and ISO standards.',
              ],
              showAssemblyDiagram: true,
              diagramType: 'weld-lip',
            },
          ],
        },
      },
    };

  return (
    <Suspense fallback={<div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>Loading commercial hardware specifications...</div>}>
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
