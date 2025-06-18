export interface CartItem {
  id: string;
  title: string;
  handle: string;
  imageUrl: string | null;
  imageAlt: string | null;
  price: string;
  currency: string;
  quantity: number;
}