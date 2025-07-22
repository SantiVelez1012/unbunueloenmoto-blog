
import { BlogPost } from '../../domain/entities/post';
import { BlogPostCollection } from './blog-post-collection';
import { Document } from '@contentful/rich-text-types';

export interface PostResponse{
    blogPostCollection: BlogPostCollection<BlogPost>
}

export interface TagsCollection {
    items: Item[]
}

export interface Item {
    name: string
    tagId: string
}

export interface CoverImage {
    url: string
    fileName: string
    contentType: string
    title: string
}

export interface Content {
    json: Document
    links: Links
}

export interface Json {
    nodeType: string
    data: Data
    content: Content2[]
}

export interface Data {
    [key: string]: unknown;
 }

export interface Content2 {
    nodeType: string
    data: Data2
    content: Content3[]
}

export interface Data2 {
    target?: Target
}

export interface Target {
    sys: Sys
}

export interface Sys {
    id: string
    type: string
    linkType: string
}

export interface Content3 {
    nodeType: string
    value?: string
    marks?: unknown[]
    data: Data3
    content?: Content4[]
}

export interface Data3 {
    uri?: string
}

export interface Content4 {
    nodeType: string
    value: string
    marks: unknown[]
    data: Data4
}

export interface Data4 {
    [key: string]: unknown;
}

export interface Links {
    assets: Assets
}

export interface Assets {
    block: Block[]
}

export interface Block {
    title: string;
    description: string;
    sys: Sys2
    url: string
}

export interface Sys2 {
    id: string
}
