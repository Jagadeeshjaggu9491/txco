/**
 * TXCO Stock Management Utility
 * Keeps live inventory in sync between localStorage, the Admin Panel, and the public Stock List.
 * Optionally syncs with Hostinger PHP API (/api/admin/stock.php).
 */

import { stockItemsList as defaultStockItems } from '../data/stockListData.js';

const STOCK_STORAGE_KEY = 'txco_stock_inventory';

export function getApiBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL;
  if (typeof window !== 'undefined') {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return `${window.location.origin}/backend/api`;
    }
  }
  return 'https://txco.iadesigns.in/backend/api';
}

const API_BASE_URL = getApiBaseUrl();

/**
 * Get all current stock items
 */
export function getStockItems() {
  if (typeof window === 'undefined') return defaultStockItems;
  try {
    const raw = localStorage.getItem(STOCK_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify(defaultStockItems));
      return defaultStockItems;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify(defaultStockItems));
      return defaultStockItems;
    }

    // Auto-migrate: check if stored items are old mock data missing product names or with old IDs
    const isOutdated = parsed.some(
      (item) => !item.product || item.itemCode === 'TX-RTJ-RX24-316' || item.id === 'TX-STK-001'
    );
    if (isOutdated) {
      localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify(defaultStockItems));
      return defaultStockItems;
    }

    return parsed;
  } catch (e) {
    console.error('Error reading stock items:', e);
    return defaultStockItems;
  }
}

/**
 * Save stock items to localStorage and notify listeners
 */
export function saveStockItems(items) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STOCK_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('stock-updated'));
    window.dispatchEvent(new CustomEvent('txco_stock_updated', { detail: items }));
  } catch (e) {
    console.error('Error saving stock items:', e);
  }
}

/**
 * Fetch live stock items from Hostinger PHP MySQL API and sync locally
 */
export async function syncRemoteStockItems() {
  if (typeof window === 'undefined') return defaultStockItems;

  const apiBase = getApiBaseUrl();
  if (apiBase) {
    try {
      const response = await fetch(`${apiBase}/admin/stock.php`, {
        cache: 'no-store',
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.success && Array.isArray(data.items) && data.items.length > 0) {
          const normalized = data.items.map((item) => {
            const matchDefault = defaultStockItems.find(
              (d) => d.itemCode === (item.itemCode || item.item_code)
            );
            return {
              id: item.id || item.item_code,
              itemCode: item.itemCode || item.item_code || `TX-${item.id}`,
              product: item.product || matchDefault?.product || 'Industrial Sealing Product',
              category: item.category || matchDefault?.category || 'Metallic Gaskets',
              profile: item.profile || matchDefault?.profile || '-',
              material: item.material || matchDefault?.material || '-',
              pressureClass: item.pressureClass || item.pressure_class || matchDefault?.pressureClass || 'Class 150',
              npsSize: item.npsSize || item.nps_size || matchDefault?.npsSize || '2"',
              ringNumber: item.ringNumber || item.ring_number || matchDefault?.ringNumber || '-',
              quantity: parseInt(item.quantity, 10) || 0,
              status: item.status || matchDefault?.status || 'In Stock',
              location: item.location || matchDefault?.location || 'Warehouse A - Bay 12',
              standard: item.standard || matchDefault?.standard || 'ASME B16.20',
              hardness: item.hardness || matchDefault?.hardness || 'Certified Standard',
              leadTime: item.leadTime || matchDefault?.leadTime || (item.status === 'In Stock' ? 'Ready to Ship' : item.status),
            };
          });
          saveStockItems(normalized);
          return normalized;
        }
      }
    } catch (err) {
      console.warn('Hostinger PHP MySQL API sync skipped/offline, using cached stock items:', err);
    }
  }

  return getStockItems();
}

/**
 * Add a new stock item
 */
export async function addStockItem(newItem) {
  const items = getStockItems();
  const formattedItem = {
    id: newItem.id || `TX-STK-${Date.now().toString().slice(-4)}`,
    itemCode: newItem.itemCode || `TX-${Date.now()}`,
    product: newItem.product || 'New Industrial Sealing Product',
    category: newItem.category || 'Metallic Gaskets',
    profile: newItem.profile || '-',
    material: newItem.material || '-',
    pressureClass: newItem.pressureClass || 'Class 150',
    npsSize: newItem.npsSize || '2"',
    ringNumber: newItem.ringNumber || '-',
    quantity: parseInt(newItem.quantity, 10) || 0,
    status: newItem.status || 'In Stock',
    location: newItem.location || 'Warehouse A - Bay 12',
    standard: newItem.standard || 'ASME B16.20 / API 6A',
    hardness: newItem.hardness || 'Certified Standard',
    leadTime: newItem.leadTime || (newItem.status === 'In Stock' ? 'Ready to Ship' : newItem.status),
  };

  // If remote Hostinger PHP API is active, send POST request
  const apiBase = getApiBaseUrl();
  if (apiBase) {
    try {
      await fetch(`${apiBase}/admin/stock.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedItem),
      });
    } catch (err) {
      console.warn('PHP API sync failed, updated local cache:', err);
    }
  }

  const updated = [formattedItem, ...items];
  saveStockItems(updated);
  return formattedItem;
}

/**
 * Update an existing stock item
 */
export async function updateStockItem(id, updatedFields) {
  const items = getStockItems();
  const index = items.findIndex((item) => item.id === id || item.itemCode === id);

  if (index === -1) return null;

  const current = items[index];
  const updatedItem = {
    ...current,
    ...updatedFields,
    quantity:
      updatedFields.quantity !== undefined
        ? parseInt(updatedFields.quantity, 10) || 0
        : current.quantity,
    leadTime:
      updatedFields.leadTime ||
      (updatedFields.status === 'In Stock' ? 'Ready to Ship' : updatedFields.status || current.leadTime),
  };

  // If remote Hostinger PHP API is active, send PUT request
  const apiBase = getApiBaseUrl();
  if (apiBase) {
    try {
      await fetch(`${apiBase}/admin/stock.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updatedFields }),
      });
    } catch (err) {
      console.warn('PHP API sync failed, updated local cache:', err);
    }
  }

  items[index] = updatedItem;
  saveStockItems(items);
  return updatedItem;
}

/**
 * Delete a stock item
 */
export async function deleteStockItem(id) {
  const items = getStockItems();
  const filtered = items.filter((item) => item.id !== id && item.itemCode !== id);

  // If remote Hostinger PHP API is active, send DELETE request
  const apiBase = getApiBaseUrl();
  if (apiBase) {
    try {
      await fetch(`${apiBase}/admin/stock.php?id=${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.warn('PHP API sync failed, updated local cache:', err);
    }
  }

  saveStockItems(filtered);
  return filtered;
}

/**
 * Reset stock inventory to canonical default 15 items
 */
export function resetStockItems() {
  saveStockItems(defaultStockItems);
  return defaultStockItems;
}
