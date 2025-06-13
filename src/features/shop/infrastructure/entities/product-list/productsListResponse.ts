export interface ProductListResponse {
    data:        ProductData;
    pageInfo:    PageInfo;
    hasNextPage: boolean;
    endCursor:   string;
}

export interface ProductData {
    products: Products;
}

export interface Products {
    pageInfo: PageInfo;
    edges:    ProductsEdge[];
}

export interface ProductsEdge {
    node: PurpleNode;
}

export interface PurpleNode {
    id:          string;
    title:       string;
    handle:      string;
    description: string;
    images:      Images;
    priceRange:  PriceRange;
}

export interface Images {
    edges: ImagesEdge[];
}

export interface ImagesEdge {
    node: FluffyNode;
}

export interface FluffyNode {
    url:     string;
    altText: string;
}

export interface PriceRange {
    minVariantPrice: VariantPrice;
    maxVariantPrice: VariantPrice;
}

export interface VariantPrice {
    amount:       string;
    currencyCode: CurrencyCode;
}

export enum CurrencyCode {
    Cop = "COP",
}

export interface PageInfo {
    hasNextPage: boolean;
    endCursor:   string;
}