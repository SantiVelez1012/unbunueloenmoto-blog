export function extractShopifyNumericId(gid: string): string {
  const match = gid.match(/(\d+)$/);
  return match ? match[1] : gid;
}


export function formatThousands(price: number): string {
  const number = Math.floor(price);
  return number.toLocaleString('es-ES');
}