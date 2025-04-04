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
        async function fetchData() {

            setIsLoading(true);
            try {
                const response = await useCase.execute();
                if (isMounted) {
                    setData(response);
                }
            }
            catch (error: any) {
                if (isMounted) {
                    setError(error);
                }
                
                console.log('error', error)
            }
            finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }
        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return { data, isLoading, error };

};