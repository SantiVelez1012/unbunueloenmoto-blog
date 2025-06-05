import { ContentfulHttpClient } from '@/core/infrastructure/api/http/contentful/contentful-http-client';
import { PostsResponse } from '@/core/infrastructure/entities/posts-response';
import { PostResponse } from '@/core/infrastructure/entities/post';
import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";

export class PostsRepositoryImpl implements PostsRepository {

    private contentfulHttpClient: ContentfulHttpClient;

    constructor(contentfulHttpClient: ContentfulHttpClient) {
        this.contentfulHttpClient = contentfulHttpClient;
    }
    
    async getLatestPosts(): Promise<PostsResponse> {
        const response: PostsResponse = await this.contentfulHttpClient.getLatestPosts();
        return response;
    }
    
    async getPostBySlug(slug: string): Promise<PostResponse> {
        const response: PostResponse = await this.contentfulHttpClient.getPostBySlug(slug);
        return response;

    }

    async getPaginatedPosts(pageSize: number, skip:number): Promise<PostsResponse> {
        const response: PostsResponse = await this.contentfulHttpClient.getPaginatedPosts(pageSize, skip );
        return response;
    }
}