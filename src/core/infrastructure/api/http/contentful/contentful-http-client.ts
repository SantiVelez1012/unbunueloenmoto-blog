import { Queries } from "@/core/infrastructure/constants/queries/queries";
import { HttpClient } from "../httpClient";
import { BlogBaseResponse } from "@/core/infrastructure/entities/base-response";
import { LatestPostsRespone } from '../../../entities/latest-posts-response';
import { PostResponse } from "@/core/infrastructure/entities/post";

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
        const response: BlogBaseResponse<LatestPostsRespone> = await this.client.post('', { query: Queries.getLatestPosts }, this.requestHeaders);
        return response.data;
    }
    
    async getPostBySlug(slug: string): Promise<PostResponse> {
        const response: BlogBaseResponse<PostResponse> = await this.client.post('', { query: Queries.getPostBySlug(slug) }, this.requestHeaders);
        return response.data;
    }

    async getPaginatedPosts(pageSize: number, skip: number): Promise<any> {
        const response: any = await this.client.post('', {variables: { limit: pageSize, skip }, query: Queries.getPaginatedPosts()}, this.requestHeaders);
        console.log(response);
        return response.data;
    }


}


