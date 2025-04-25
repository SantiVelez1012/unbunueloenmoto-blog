import { PostListed } from "@/core/domain/entities/postListed";
import { createContext, ReactNode, useState } from "react";

export type PostsContextType = {
    postsByPage: PostsByPage;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    setPostsForPage: (page: number, posts: PostListed[]) => void;
}

export type PostsByPage = {
    [key: number]: PostListed[];
};

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
    const [postsByPage, setPostsByPage] = useState<PostsByPage>({});
    const [currentPage, setCurrentPage] = useState(1);

    const setPostsForPage = (page: number, posts: PostListed[]) => {
        setPostsByPage(prev => ({
            ...prev,
            [page]: posts,
        }));
    };

    return (
        <PostsContext.Provider
            value={{ postsByPage, currentPage, setCurrentPage, setPostsForPage }}
        >
            {children}
        </PostsContext.Provider>
    );
};