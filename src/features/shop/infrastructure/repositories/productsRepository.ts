import { ProductListResponse } from "../entities/product-list/productsListResponse";

export abstract class ProductsRepository {
    
   abstract getAllProducts(first: number, after?: string): Promise<ProductListResponse>;

    abstract getProductById(id: string): Promise<ProductListResponse>;
};