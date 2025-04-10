import { Queries } from "@/core/infrastructure/constants/queries/queries";
import { HttpClient } from "../httpClient";
import { LatestPostsRespone } from "@/core/infrastructure/entities/latest-posts-response";

const CONTENTFUL_API_URL = `${process.env.NEXT_PUBLIC_CONTENTFUL_API_URL}${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

const contentfulApiClient = new HttpClient(CONTENTFUL_API_URL);


export class ContentfulHttpClient {
    private client: HttpClient;

    private requestHeaders: RequestInit = {
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        }
    }

    constructor() {
        this.client = contentfulApiClient;
    }

    async getLatestPosts(): Promise<LatestPostsRespone> {
        const response: any = await this.client.post('', JSON.stringify({ query: Queries.getLatestPosts }), this.requestHeaders,);
        return response.data;
    }


}


