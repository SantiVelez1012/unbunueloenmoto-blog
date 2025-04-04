import { GetLatestPostsUseCase } from "@/core/application/use-cases/getLatestPostsUseCase";
import { PostListed } from "@/core/domain/entities/postListed";
import { useEffect, useState } from "react";

export function useGetLatestPosts() {

    const useCase = new GetLatestPostsUseCase();

    const [data, setData] = useState<PostListed[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchData();
        function fetchData() {

            setIsLoading(true);
            try {
                useCase.execute().then((response) => {
                    setData(response.blogPostCollection.items);
                });

            }
            catch (error: any) {
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