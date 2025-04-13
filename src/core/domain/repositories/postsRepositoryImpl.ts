import { ContentfulHttpClient } from '@/core/infrastructure/api/http/contentful/contentful-http-client';
import { LatestPostsRespone } from '@/core/infrastructure/entities/latest-posts-response';
import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";

export class PostsRepositoryImpl implements PostsRepository {

    private contentfulHttpClient: ContentfulHttpClient;

    constructor(contentfulHttpClient: ContentfulHttpClient) {
        this.contentfulHttpClient = contentfulHttpClient;
    }

    async getLatestPosts(): Promise<LatestPostsRespone> {
        const response: LatestPostsRespone = await this.contentfulHttpClient.getLatestPosts();
        return response;
    }

    async getPostBySlug(slug: string): Promise<any> {
        const response: any = await this.contentfulHttpClient.getPostBySlug(slug);
        if (response?.blogPostCollection?.items?.length > 0) {
            return response?.blogPostCollection?.items[0];
        }
        throw Error(`Post with slug ${slug} not found`);
    }
}