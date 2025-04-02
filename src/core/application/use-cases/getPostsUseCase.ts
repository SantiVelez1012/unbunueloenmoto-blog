import { PostsRepositoryImpl } from "../../domain/repositories/postsRepositoryImpl";

export class getPostsUseCase{
    constructor(private readonly postsRepositoryImpl: PostsRepositoryImpl) {}

    getLatestPosts() {        
        const response : any = this.postsRepositoryImpl.getLatestPosts();
        console.log(response);
        return response.data.postCollection.items;
    }
}
