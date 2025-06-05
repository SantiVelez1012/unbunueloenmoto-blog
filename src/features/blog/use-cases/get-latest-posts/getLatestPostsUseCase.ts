import { PostsRepositoryImpl } from "../../domain/repositories/postsRepositoryImpl";
import { ContentfulHttpClient } from "../../infrastructure/api/http/contentful/contentful-http-client";
import { PostsResponse } from "../../infrastructure/entities/posts-response";
import { PostsRepository } from "../../infrastructure/repositories/postsRepository";


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
