import { PostsResponse } from "../entities/posts-response";
import { PostResponse } from "../entities/post";

export interface PostsRepository{
    getLatestPosts(): Promise<PostsResponse>;
    getPostBySlug(slug: string): Promise<PostResponse>;
    getPaginatedPosts(pageSize: number, skip: number): Promise<PostsResponse>;
}