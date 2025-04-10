import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";
import { PostsRepositoryImpl } from "../../domain/repositories/postsRepositoryImpl";
import { ContentfulHttpClient } from '@/core/infrastructure/api/http/contentful/contentful-http-client';
import { PostListed } from "@/core/domain/entities/postListed";

export class GetLatestPostsUseCase{
    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());

    constructor() {}

    async execute(): Promise<any> {        
        return this.postsRepository.getLatestPosts().then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    }
}
