import { ContentfulHttpClient } from '@/core/infrastructure/api/http/contentful/contentful-http-client';
import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";

export class PostsRepositoryImpl implements PostsRepository {

    private contentfulHttpClient: ContentfulHttpClient;

    constructor(contentfulHttpClient: ContentfulHttpClient) {
        this.contentfulHttpClient = contentfulHttpClient;
    }

    async getLatestPosts(): Promise<any[]> {
        const response:any = await this.contentfulHttpClient.getLatestPosts();
        return response;
    }

    async getPostBySlug(slug: string): Promise<any> {
        return;
    }
}