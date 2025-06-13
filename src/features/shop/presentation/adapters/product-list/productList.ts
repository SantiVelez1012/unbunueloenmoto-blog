import { ProductListResponse, PurpleNode } from "@/features/shop/infrastructure/entities/product-list/productsListResponse";

export interface ProductCardViewModel {
  id: string;
  title: string;
  handle: string;
  description: string;
  imageUrl: string | null;
  imageAlt: string | null;
  minPrice: string;
  maxPrice: string;
  currency: string;
}

export function mapProductListToViewModel(response: ProductListResponse): ProductCardViewModel[] {
  return response.data.products.edges.map(({ node }: { node: PurpleNode }) => ({
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description,
    imageUrl: node.images.edges[0]?.node.url ?? null,
    imageAlt: node.images.edges[0]?.node.altText ?? null,
    minPrice: node.priceRange.minVariantPrice.amount,
    maxPrice: node.priceRange.maxVariantPrice.amount,
    currency: node.priceRange.minVariantPrice.currencyCode,
  }));
}