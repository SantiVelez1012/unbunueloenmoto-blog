import { ClientResponse } from "@shopify/admin-api-client";
import { AdminHttpClient } from "../../infrastructure/api/admin-http-client";
import { ShopifyHttpClient } from "../../infrastructure/api/shopify-http-client";
import { ShopifyQueries } from "../../infrastructure/constants/queries";
import { ProductDetailsResponse } from "../../infrastructure/entities/product-details/productDetailsResponse";
import { ProductListResponse } from "../../infrastructure/entities/product-list/productsListResponse";
import { ProductsRepository } from "../../infrastructure/repositories/productsRepository";

export class ProductsRepositoryImpl implements ProductsRepository {
    private shopifyHttpClient = ShopifyHttpClient.getInstance();
    private adminHttpClient = AdminHttpClient.getInstance();

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

    async getProductsVariantIds(productIds: string[]): Promise<Record<string, string>> {
        const response: ClientResponse = await this.adminHttpClient.client.request(ShopifyQueries.getVariantIdsQuery, {
            variables: {
                ids: productIds
            }
        });

        const result: Record<string, string> = {};

        for (const node of response.data.nodes) {
            if (node?.variants?.edges?.length > 0) {
                result[node.id] = node.variants.edges[0].node.id;
            }
        }

        return result;
    }

}