import { PostListed } from "../../domain/entities/postListed";
import { BlogPostCollection, BlogPostCollectionTotal } from "./blog-post-collection";

export type PostsResponse = {
    blogPostCollection: BlogPostCollection<PostListed>;
}

export type PostCountResponse = {
    blogPostCollection: BlogPostCollectionTotal;
};