import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";
import { PostsRepositoryImpl } from "../../domain/repositories/postsRepositoryImpl";
import { ContentfulHttpClient } from '@/core/infrastructure/api/http/contentful/contentful-http-client';

export class GetLatestPostsUseCase{
    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());

    constructor() {}

    execute() {        
        const response : any = this.postsRepository.getLatestPosts();
        console.log('Hola', response);
        return response.data.postCollection.items;
    }
}
