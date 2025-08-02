import { createAdminApiClient } from '@shopify/admin-api-client';

export class AdminHttpClient {

    private static instance: AdminHttpClient;
    public client;

    private constructor() {
        this.client = createAdminApiClient({
            storeDomain: process.env.SHOPIFY_ADMIN_URL!,
            apiVersion: process.env.SHOPIFY_API_VERSION!,
            accessToken: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!,
        })
    }

    public static getInstance(): AdminHttpClient {
        if (!AdminHttpClient.instance) {
            AdminHttpClient.instance = new AdminHttpClient();
        }
        return AdminHttpClient.instance;
    }

};