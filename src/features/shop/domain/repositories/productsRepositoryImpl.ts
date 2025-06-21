import { ShopifyHttpClient } from "../../infrastructure/api/shopify-http-client";
import { ShopifyQueries } from "../../infrastructure/constants/queries";
import { ProductDetailsResponse } from "../../infrastructure/entities/product-details/productDetailsResponse";
import { ProductListResponse } from "../../infrastructure/entities/product-list/productsListResponse";
import { ProductsRepository } from "../../infrastructure/repositories/productsRepository";

export class ProductsRepositoryImpl implements ProductsRepository {
    private shopifyHttpClient = ShopifyHttpClient.getInstance();

    async getAllProducts(
        first: number = 20,
        after?: string
    ): Promise<ProductListResponse> {
        const response = await this.shopifyHttpClient.client.request(ShopifyQueries.getAllProductsQuery, {
            variables: {
                first: first,
                after: after
            }
        });

        return {
            data: response.data,
            pageInfo: response.data.products.pageInfo,
            hasNextPage: response.data.products.pageInfo.hasNextPage,
            endCursor: response.data.products.pageInfo.endCursor
        };
    }



    async getProductById(id: string): Promise<ProductDetailsResponse> {

        const response = await this.shopifyHttpClient.client.request(ShopifyQueries.getProductByIdQuery, {
            variables: {
                id: `gid://shopify/Product/${id}`
            }
        });

        return {
            data: response.data,
        };


    }
        
}