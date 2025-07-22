export function extractShopifyNumericId(gid: string): string {
  const match = gid.match(/(\d+)$/);
  return match ? match[1] : gid;
}


export function formatThousands(price: number): string {
  return price.toLocaleString('es-ES');
}