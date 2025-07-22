import { AssetImage } from "./assets";

export type PostListed = {
    title: string;
    postSummary: string;
    urlSlug: string;
    coverImage: AssetImage;
    createdAt: string;
    tagsCollection: PostTags;
}

export type PostTags = {
    items: PostTag[];
}


export type PostTag = {
        name: string;
        tagId: string;
}


