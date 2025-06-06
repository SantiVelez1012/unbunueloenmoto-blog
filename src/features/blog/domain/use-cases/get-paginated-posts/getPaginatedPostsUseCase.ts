import { ContentfulHttpClient } from "@/features/blog/infrastructure/api/http/contentful/contentful-http-client";
import { PostsResponse } from "@/features/blog/infrastructure/entities/posts-response";
import { PostsRepository } from "@/features/blog/infrastructure/repositories/postsRepository";
import { PostsRepositoryImpl } from "../../repositories/postsRepositoryImpl";


export class GetPaginatedPostsUseCase {

    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());

    async execute(pageSize: number, skip: number): Promise<PostsResponse> {
        return this.postsRepository.getPaginatedPosts(pageSize, skip).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }

}