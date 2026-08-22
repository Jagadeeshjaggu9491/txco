import React from 'react';
import CatalogueFlipbookViewer from '@/components/catalogues/CatalogueFlipbookViewer';
import { cataloguesList } from '@/data/cataloguesData';

export async function generateStaticParams() {
  const ids = cataloguesList.map((c) => ({ id: c.id }));
  ids.push({ id: '18' }, { id: '1' }, { id: '2' });
  return ids;
}

export default async function CatalogueSingleBrowsePage({ params }) {
  const { id } = await params;
  const catalogueItem =
    cataloguesList.find((c) => c.id === id) || cataloguesList[0];

  return <CatalogueFlipbookViewer catalogueItem={catalogueItem} />;
}
