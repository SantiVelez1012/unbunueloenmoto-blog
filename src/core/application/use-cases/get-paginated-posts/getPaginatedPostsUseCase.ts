import { PostsRepositoryImpl } from "@/core/domain/repositories/postsRepositoryImpl";
import { ContentfulHttpClient } from "@/core/infrastructure/api/http/contentful/contentful-http-client";
import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";

export class GetPaginatedPostsUseCase {

    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());

    async execute(pageSize: number, skip: number): Promise<any> {

        return this.postsRepository.getPaginatedPosts(pageSize, skip).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }

}