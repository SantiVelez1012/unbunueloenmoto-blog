export function extractShopifyNumericId(gid: string): string {
  const match = gid.match(/(\d+)$/);
  return match ? match[1] : gid;
}

export function addShopifyNumericIdPrefix(productId: string): string {
  return `gid://shopify/Product/${productId}`;
}


export function formatThousands(price: number): string {
  const number = Math.floor(price);
  return number.toLocaleString('es-ES');
}