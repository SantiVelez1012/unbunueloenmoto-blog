import { AssetImage } from "./assets";

export type PostListed = {
    title: string;
    postSummary: string;
    urlSlug: string;
    image: AssetImage;
    createdAt: string;
    tagsCollecton: PostTag[];
}


export type PostTag = {
    name: string;
    tagId: string;
}


