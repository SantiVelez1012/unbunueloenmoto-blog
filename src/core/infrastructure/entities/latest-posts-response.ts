import { PostListed } from "@/core/domain/entities/postListed";
import { BlogPostCollection } from "./blog-post-collection";

export type LatestPostsRespone = {
    blogPostCollection: BlogPostCollection<PostListed>;
}