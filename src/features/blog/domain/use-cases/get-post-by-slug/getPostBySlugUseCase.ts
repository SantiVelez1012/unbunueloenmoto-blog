import { ContentfulHttpClient } from "@/features/blog/infrastructure/api/http/contentful/contentful-http-client";
import { PostsRepository } from "@/features/blog/infrastructure/repositories/postsRepository";
import { BlogPost } from "../../entities/post";
import { PostsRepositoryImpl } from "../../repositories/postsRepositoryImpl";


export class GetPostBySlugUseCase {

    private postsRepository: PostsRepository = new PostsRepositoryImpl(new ContentfulHttpClient());
    constructor() {}

    async execute(slug: string): Promise<BlogPost> {
        return this.postsRepository.getPostBySlug(slug).then((response) => {
            return response.blogPostCollection.items[0];
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }
}