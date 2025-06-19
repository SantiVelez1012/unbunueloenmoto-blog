import { ShopifyHttpClient } from "../../infrastructure/api/shopify-http-client";
import { ShopifyQueries } from "../../infrastructure/constants/queries";
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



    async getProductById(id: string): Promise<ProductListResponse> {

        const response = await this.shopifyHttpClient.client.request(ShopifyQueries.getProductByIdQuery, {
            variables: {
                id: id
            }
        });

        return {
            data: response.data,
            pageInfo: response.data.product.pageInfo,
            hasNextPage: response.data.product.pageInfo.hasNextPage,
            endCursor: response.data.product.pageInfo.endCursor
        };


    }
        
}