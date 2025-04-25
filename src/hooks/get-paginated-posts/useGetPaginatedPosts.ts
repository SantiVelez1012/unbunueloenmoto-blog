import { GetPaginatedPostsUseCase } from "@/core/application/use-cases/get-paginated-posts/getPaginatedPostsUseCase";
import { useEffect, useRef, useState } from "react";
import { usePostsContext } from "../use-post-context/usePostContext";

export function useGetPaginatedPosts() {

    const useCase = useRef(new GetPaginatedPostsUseCase());
    const pageSize = 6;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);
    const { postsByPage, currentPage, setCurrentPage, setPostsForPage } = usePostsContext();
    
    
    useEffect(() => {
        let isMounted = true;

        const skip = (currentPage - 1) * pageSize;

        if (postsByPage[currentPage]) return;

        fetchData();
        function fetchData() {
            setIsLoading(true);
            try {
                useCase.current.execute(pageSize, skip).then((response) => {
                    setPostsForPage(currentPage, response.blogPostCollection.items);
                });
            }
            catch (error: unknown) {
                if (isMounted) {
                    setError(error);
                }
                
                console.error('error', error);
            }
            finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        return () => {
            isMounted = false;
        };
    }, [currentPage]);

    const posts = postsByPage[currentPage] || [];

    return { posts, isLoading, error, currentPage, setCurrentPage, pageSize };

};