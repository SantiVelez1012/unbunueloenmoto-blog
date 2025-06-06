
import { useEffect, useRef, useState } from "react";
import { usePostsContext } from "../use-post-context/usePostContext";
import { GetPaginatedPostsUseCase } from "@/features/blog/domain/use-cases/get-paginated-posts/getPaginatedPostsUseCase";


export function useGetPaginatedPosts() {

    const useCase = useRef(new GetPaginatedPostsUseCase());
    const pageSize = 6;
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);
    const { postsByPage, currentPage, setCurrentPage, setPostsForPage, isLastPage, setIsLastPage } = usePostsContext();
    
    
    useEffect(() => {
        setIsLastPage(false);
        let isMounted = true;
        const skip = (currentPage - 1) * pageSize;

        if (postsByPage[currentPage]) {
            if(postsByPage[currentPage].length < pageSize) {
                setIsLastPage(true);
            }
            return;
        }

        fetchData();
        function fetchData() {
            setIsLoading(true);
            try {
                useCase.current.execute(pageSize, skip).then((response) => {
                    if(response.blogPostCollection.items.length < pageSize) {
                        setIsLastPage(true);
                    }
                    if(response.blogPostCollection.items.length === 0) {
                        setIsLastPage(true);
                        return;
                    }
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
    }, [currentPage, postsByPage, setPostsForPage, setIsLastPage, pageSize]);

    const posts = postsByPage[currentPage] || [];

    return { posts, isLoading, error, currentPage, setCurrentPage, pageSize, isLastPage };

};