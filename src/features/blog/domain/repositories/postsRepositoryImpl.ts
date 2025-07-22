import { ContentfulHttpClient } from "../../infrastructure/api/http/contentful/contentful-http-client";
import { PostResponse } from "../../infrastructure/entities/post";
import { PostsResponse } from "../../infrastructure/entities/posts-response";
import { PostsRepository } from "../../infrastructure/repositories/postsRepository";


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