
import { PostListed } from "@/features/blog/domain/entities/postListed";
import { GetLatestPostsUseCase } from "@/features/blog/domain/use-cases/get-latest-posts/getLatestPostsUseCase";
import { useEffect, useRef, useState } from "react";

export function useGetLatestPosts() {

    const useCase = useRef(new GetLatestPostsUseCase());

    const [data, setData] = useState<PostListed[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchData();
        function fetchData() {

            setIsLoading(true);
            try {
                useCase.current.execute().then((response) => {
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

    return { data, isLoading, error };

};