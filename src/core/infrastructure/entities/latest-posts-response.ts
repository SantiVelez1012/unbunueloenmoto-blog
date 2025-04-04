import { PostListed } from "@/core/domain/entities/postListed";

export type LatestPostsRespone = {
    blogPostCollection: BlogPostCollection;
}


type BlogPostCollection = {
    items: PostListed[];
}
