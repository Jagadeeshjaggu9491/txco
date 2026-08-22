import React, { Suspense } from 'react';
import ProductDetailsLayout from '@/components/products/ProductDetailsLayout';
import { subcategoryDetailCatalog } from '@/data/productsDetailCatalog';
import { productCategoriesHierarchy } from '@/data/productsCatalogData';

export async function generateStaticParams() {
  const flangesCategory = productCategoriesHierarchy.find((c) => c.slug === 'flanges');
  return flangesCategory.subcategories.map((sub) => ({
    subcategory: sub.slug,
  }));
}

export default async function FlangeProductDetailsPage({ params }) {
  const { subcategory } = await params;
  const subcategoryData =
    subcategoryDetailCatalog[subcategory] || {
      parentCategoryTitle: 'FLANGES',
      parentCategoryHref: '/products/flanges',
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
                'Forged and precision CNC-machined industrial flanges conforming to ASME B16.5, ASME B16.47, and API 6A specifications for high-pressure piping systems.',
              ],
              showAssemblyDiagram: true,
              diagramType: 'weld-lip',
            },
          ],
        },
      },
    };

  return (
    <Suspense fallback={<div style={{ minHeight: '80vh', padding: '5rem', textAlign: 'center' }}>Loading flange specifications...</div>}>
      <ProductDetailsLayout subcategoryData={subcategoryData} />
    </Suspense>
  );
}
