import { ContentfulHttpClient } from "@/features/blog/infrastructure/api/http/contentful/contentful-http-client";
import { PostsResponse } from "@/features/blog/infrastructure/entities/posts-response";
import { PostsRepository } from "@/features/blog/infrastructure/repositories/postsRepository";
import { PostsRepositoryImpl } from "../../repositories/postsRepositoryImpl";


export class GetLatestPostsUseCase{
    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());

    constructor() {}

    async execute(): Promise<PostsResponse> {        
        return this.postsRepository.getLatestPosts().then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    }
}
