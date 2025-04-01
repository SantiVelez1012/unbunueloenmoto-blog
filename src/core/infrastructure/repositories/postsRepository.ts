export interface PostsRepository{
    getLatestPosts(): Promise<any[]>;
    getPostBySlug(slug: string): Promise<any>;
}