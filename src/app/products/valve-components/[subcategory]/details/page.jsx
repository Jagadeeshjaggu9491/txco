import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const valveCategory = productCategoriesHierarchy.find((c) => c.slug === 'valve-components');
  return valveCategory.subcategories.map((sub) => ({
    subcategory: sub.slug,
  }));
}

export default async function ValveProductDetailsPage({ params }) {
  const { subcategory } = await params;
  const subcategoryData =
    subcategoryDetailCatalog[subcategory] || {
      parentCategoryTitle: 'VALVE COMPONENTS',
      parentCategoryHref: '/products/valve-components',
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
                'Engineered valve trims, compression packings, and precision sealing components meeting API 622, API 624, and ISO 15848-1 low-emission standards.',
              ],
              showAssemblyDiagram: true,
              diagramType: 'weld-lip',
            },
          ],
        },
      },
    };

  return (
    <Suspense fallback={<div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>Loading valve specifications...</div>}>
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
