import { LatestPostsRespone } from "../entities/latest-posts-response";
import { PostResponse } from "../entities/post";

export interface PostsRepository{
    getLatestPosts(): Promise<LatestPostsRespone>;
    getPostBySlug(slug: string): Promise<PostResponse>;
    getPaginatedPosts(pageSize: number, skip: number): Promise<LatestPostsRespone>;
}