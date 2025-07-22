import { PostListed } from "../../domain/entities/postListed";
import { BlogPostCollection } from "./blog-post-collection";

export type PostsResponse = {
    blogPostCollection: BlogPostCollection<PostListed>;
}