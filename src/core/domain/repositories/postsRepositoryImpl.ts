import { contentfulApiClient } from "@/core/infrastructure/api/http/contentful/contentful-http-client";
import { Queries } from "@/core/infrastructure/constants/queries/queries";
import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";

export class PostsRepositoryImpl implements PostsRepository {

    constructor() {
        
    }

    async getLatestPosts(): Promise<any[]> {
        const response:any = await contentfulApiClient.get(Queries.getLatestPosts, {headers: {
            "Authorization": `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        }});
        return response.data.postCollection.items;
    }

    async getPostBySlug(slug: string): Promise<any> {
        return;
    }
}