import { BlogPost } from "@/core/domain/entities/post";
import { PostsRepositoryImpl } from "@/core/domain/repositories/postsRepositoryImpl";
import { ContentfulHttpClient } from "@/core/infrastructure/api/http/contentful/contentful-http-client";
import { PostsRepository } from "@/core/infrastructure/repositories/postsRepository";

export class GetPostBySlugUseCase {

    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());
    constructor() {}

    async execute(slug: string): Promise<BlogPost> {
        return this.postsRepository.getPostBySlug(slug).then((response) => {
            return response.blogPostCollection.items[0] || null;
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }
}