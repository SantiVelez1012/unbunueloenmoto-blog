import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export class ShopifyHttpClient {
    private static instance: ShopifyHttpClient;
    public client;

    private constructor() {
        this.client = createStorefrontApiClient({
            storeDomain: process.env.SHOPIFY_SHOP_URL!,
            apiVersion: process.env.SHOPIFY_API_VERSION!,
            publicAccessToken: process.env.SHOPIFY_ACCESS_TOKEN!,
        });
    }

    public static getInstance(): ShopifyHttpClient {
        if (!ShopifyHttpClient.instance) {
            ShopifyHttpClient.instance = new ShopifyHttpClient();
        }
        return ShopifyHttpClient.instance;
    }
}