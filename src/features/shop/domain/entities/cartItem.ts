export interface CartItem {
  id: string;
  title: string;
  handle: string;
  imageUrl: string | null;
  imageAlt: string | null;
  price: number;
  currency: string;
  quantity: number;
}