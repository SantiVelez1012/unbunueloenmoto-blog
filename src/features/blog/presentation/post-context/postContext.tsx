import { PostListed } from "@/features/blog/domain/entities/postListed";
import { createContext, ReactNode, useState } from "react";

export type PostsContextType = {
    postsByPage: PostsByPage;
    currentPage: number;
    isLastPage: boolean;
    setCurrentPage: (page: number) => void;
    setPostsForPage: (page: number, posts: PostListed[]) => void;
    setIsLastPage: (page: boolean) => void;
}

export type PostsByPage = {
    [key: number]: PostListed[];
};

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
    const [postsByPage, setPostsByPage] = useState<PostsByPage>({});
    const [currentPage, setCurrentPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);

    const setPostsForPage = (page: number, posts: PostListed[]) => {
        setPostsByPage(prev => ({
            ...prev,
            [page]: posts,
        }));
    };

    return (
        <PostsContext.Provider
            value={{ postsByPage, currentPage, isLastPage, setCurrentPage, setPostsForPage, setIsLastPage }}
        >
            {children}
        </PostsContext.Provider>
    );
};