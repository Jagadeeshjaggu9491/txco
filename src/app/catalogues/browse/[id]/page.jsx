import React from 'react';
import CatalogueFlipbookViewer from '@/components/catalogues/CatalogueFlipbookViewer';
import { cataloguesList } from '@/data/cataloguesData';

export async function generateStaticParams() {
  return cataloguesList.map((c) => ({
    id: c.id,
  }));
}

export default async function CatalogueBrowsePage({ params }) {
  const { id } = await params;
  const catalogueItem =
    cataloguesList.find((c) => c.id === id) || cataloguesList[0];

  return <CatalogueFlipbookViewer catalogueItem={catalogueItem} />;
}
