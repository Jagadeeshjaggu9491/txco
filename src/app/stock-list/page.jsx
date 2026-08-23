import React from 'react';
import StockListPage from '@/components/stock/StockListPage';

export const metadata = {
  title: 'Stock List & Live Inventory | TXCO Sealing Technologies',
  description:
    'Browse over 5,000+ certified metallic RTJ gaskets, spiral wound gaskets, and flange sealing items ready for immediate global dispatch.',
};

export default function StockListMainPage() {
  return <StockListPage initialCategory="All Categories" />;
}
