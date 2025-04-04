import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";
import { PostsRepositoryImpl } from "../../domain/repositories/postsRepositoryImpl";
import { ContentfulHttpClient } from '@/core/infrastructure/api/http/contentful/contentful-http-client';
import { PostListed } from "@/core/domain/entities/postListed";

export class GetLatestPostsUseCase{
    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());

    constructor() {}

    execute(): Promise<PostListed[]> {        
        const response:any= this.postsRepository.getLatestPosts();
        return response.data.postCollection.items;
    }
}
