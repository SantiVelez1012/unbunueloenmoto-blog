import { LatestPostsRespone } from "../entities/latest-posts-response";

export interface PostsRepository{
    getLatestPosts(): Promise<LatestPostsRespone>;
    getPostBySlug(slug: string): Promise<any>;
}