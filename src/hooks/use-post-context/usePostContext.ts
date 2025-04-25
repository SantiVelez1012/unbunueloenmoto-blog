import { PostsContext, PostsContextType } from "@/context/post-context/postContext";
import { useContext } from "react";

export const usePostsContext = (): PostsContextType => {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error('usePostsContext must be used within a PostsProvider');
    }
    return context;
};