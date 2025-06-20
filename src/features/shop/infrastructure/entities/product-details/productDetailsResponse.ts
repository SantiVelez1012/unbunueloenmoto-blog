export interface ProductImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface Price {
  amount: string;
  currencyCode: string;
}

export interface PriceRange {
  minVariantPrice: Price;
  maxVariantPrice: Price;
}

export interface ProductVariant {
  id: string;
  price: Price;
  availableForSale: boolean;
}

export interface ProductDetails {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  images: {
    edges: Array<{
      node: ProductImage;
    }>;
  };
  priceRange: PriceRange;
  variants: {
    edges: Array<{
      node: ProductVariant;
    }>;
  };
}

export interface ProductDetailsResponse {
  data: {
    product: ProductDetails;
  };
}