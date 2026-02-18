import { ContentfulHttpClient } from "@/features/blog/infrastructure/api/http/contentful/contentful-http-client";
import { PostsRepositoryImpl } from "../../repositories/postsRepositoryImpl";
import { PostsRepository } from "@/features/blog/infrastructure/repositories/postsRepository";
import { PostCountResponse } from "@/features/blog/infrastructure/entities/posts-response";

export class GetTotalPostsCountUseCase{
    private readonly postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());


    async execute(): Promise<PostCountResponse>{
        return this.postsRepository.getTotalPostsCount().then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }

}