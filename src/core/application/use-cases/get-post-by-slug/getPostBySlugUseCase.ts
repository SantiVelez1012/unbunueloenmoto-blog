import { PostsRepositoryImpl } from "@/core/domain/repositories/postsRepositoryImpl";
import { ContentfulHttpClient } from "@/core/infrastructure/api/http/contentful/contentful-http-client";
import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";

export class GetPostBySlugUseCase {


    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());
    constructor() {}

    async execute(slug: string): Promise<any> {
        return this.postsRepository.getPostBySlug(slug).then((response) => {
            console.log(response);
            return response;
        }).catch((error) => {
            return error;
        });
    }
}