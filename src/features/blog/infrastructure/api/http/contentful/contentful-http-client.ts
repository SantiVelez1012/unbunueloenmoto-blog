import { HttpClient } from "@/features/shared/infrastructure/api/httpClient";
import { Queries } from "../../../constants/queries/queries";
import { BlogBaseResponse } from "../../../entities/base-response";
import { PostResponse } from "../../../entities/post";
import { PostsResponse } from "../../../entities/posts-response";


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

    async getLatestPosts(): Promise<PostsResponse> {
        const response: BlogBaseResponse<PostsResponse> = await this.client.post('', { query: Queries.getLatestPosts }, this.requestHeaders);
        console.log(CONTENTFUL_API_URL);
        return response.data;
    }
    
    async getPostBySlug(slug: string): Promise<PostResponse> {
        const response: BlogBaseResponse<PostResponse> = await this.client.post('', { query: Queries.getPostBySlug(slug) }, this.requestHeaders);
        return response.data;
    }

    async getPaginatedPosts(pageSize: number, skip: number): Promise<PostsResponse> {
        const response: BlogBaseResponse<PostsResponse> = await this.client.post('', {variables: { limit: pageSize, skip }, query: Queries.getPaginatedPosts()}, this.requestHeaders);
        return response.data;
    }


}


