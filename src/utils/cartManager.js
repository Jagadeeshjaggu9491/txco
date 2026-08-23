/**
 * TXCO RFQ Cart Manager Utility
 * Handles localStorage persistence, quantity calculations, and real-time custom event dispatching.
 */

const CART_STORAGE_KEY = 'txco_cart';

export function getCart() {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Error reading cart:', e);
    return [];
  }
}

export function saveCart(cart) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
  } catch (e) {
    console.error('Error saving cart:', e);
  }
}

export function addToCart(item, qty = 1) {
  const cart = getCart();
  const quantityToAdd = Math.max(1, parseInt(qty, 10) || 1);

  const existingIndex = cart.findIndex((c) => c.itemCode === item.itemCode);
  if (existingIndex > -1) {
    cart[existingIndex].quantity = (Number(cart[existingIndex].quantity) || 1) + quantityToAdd;
  } else {
    cart.push({
      itemCode: item.itemCode || item.code || `TXCO-${Date.now()}`,
      product:
        item.product ||
        `${item.profile || 'Gasket'} (${item.ringNumber && item.ringNumber !== '-' ? item.ringNumber + ', ' : ''}${item.material || ''}${item.npsSize ? ', ' + item.npsSize : ''}${item.pressureClass ? ' ' + item.pressureClass : ''})`,
      profile: item.profile || '',
      ringNumber: item.ringNumber || '',
      material: item.material || '',
      npsSize: item.npsSize || '',
      pressureClass: item.pressureClass || '',
      standard: item.standard || '',
      quantity: quantityToAdd,
    });
  }

  saveCart(cart);
  return cart;
}

export function removeFromCart(itemCode) {
  const cart = getCart();
  const filtered = cart.filter((item) => item.itemCode !== itemCode);
  saveCart(filtered);
  return filtered;
}

export function updateCartQuantity(itemCode, quantity) {
  const cart = getCart();
  const qty = Math.max(1, parseInt(quantity, 10) || 1);
  const updated = cart.map((item) =>
    item.itemCode === itemCode ? { ...item, quantity: qty } : item
  );
  saveCart(updated);
  return updated;
}

export function clearCart() {
  saveCart([]);
  return [];
}

export function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (Number(item.quantity) || 1), 0);
}
