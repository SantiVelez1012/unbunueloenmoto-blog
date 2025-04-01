import { fetchGraphQL } from "../../../lib/content-delivery/postsDatasource";

export class getPostsUseCase{

    constructor(private readonly postsDatasource: any) {}

}

export async function getPosts() {
    
    const response = await fetchGraphQL('');
    console.log(response);
    return response.data.postCollection.items;
}