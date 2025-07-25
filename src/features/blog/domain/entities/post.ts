
import { Content } from "../../infrastructure/entities/post";
import { AssetImage } from "./assets";
import { PostTags } from "./postListed";

export type BlogPost = {
    title: string;
    postSummary: string;
    urlSlug: string;
    coverImage: AssetImage;
    createdAt: string;
    tagsCollection: PostTags;
    content: Content;
}