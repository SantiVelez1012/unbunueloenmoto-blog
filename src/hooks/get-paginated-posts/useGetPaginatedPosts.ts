import { GetPaginatedPostsUseCase } from "@/core/application/use-cases/get-paginated-posts/getPaginatedPostsUseCase";
import { PostListed } from "@/core/domain/entities/postListed";
import { useEffect, useRef, useState } from "react";

export function useGetPaginatedPosts() {

    const useCase = useRef(new GetPaginatedPostsUseCase());
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const [data, setData] = useState<PostListed[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchData();
        function fetchData() {

            const skip = (currentPage - 1) * pageSize;

            setIsLoading(true);
            try {
                useCase.current.execute(pageSize, skip).then((response) => {
                    setData(response.blogPostCollection.items);
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
    }, [isLoading]);

    return { data, isLoading, error, currentPage, setCurrentPage, pageSize };

};