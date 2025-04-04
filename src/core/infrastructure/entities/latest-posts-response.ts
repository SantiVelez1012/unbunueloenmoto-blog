import { PostListed } from "@/core/domain/entities/postListed";

export type LatestPostsRespone = {
    data: BlogPostCollection;
}


type BlogPostCollection = {
    items: PostListed[];
}
