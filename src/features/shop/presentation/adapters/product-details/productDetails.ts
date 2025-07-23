import { ProductDetailsResponse } from "@/features/shop/infrastructure/entities/product-details/productDetailsResponse";

export interface ProductViewModel {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml?: string;
  isAvailable: boolean;
  imageUrl: string | null;
  imageAlt: string | null;
  price: {
    min: number;
    max: number;
    currency: string;
  };
  variant: {
    id: string;
    price: string;
    currency: string;
    isAvailable: boolean;
  } | null;
}

export function mapProductDetailsToViewModel(response: ProductDetailsResponse): ProductViewModel {
  const { product } = response.data;
  
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    isAvailable: product.availableForSale,
    imageUrl: product.images.edges[0]?.node.url ?? null,
    imageAlt: product.images.edges[0]?.node.altText ?? null,
    price: {
      min: Math.floor(Number(product.priceRange.minVariantPrice.amount)),
      max: Math.floor(Number(product.priceRange.maxVariantPrice.amount)),
      currency: product.priceRange.minVariantPrice.currencyCode
    },
    variant: product.variants.edges[0] ? {
      id: product.variants.edges[0].node.id,
      price: product.variants.edges[0].node.price.amount,
      currency: product.variants.edges[0].node.price.currencyCode,
      isAvailable: product.variants.edges[0].node.availableForSale
    } : null
  };
}