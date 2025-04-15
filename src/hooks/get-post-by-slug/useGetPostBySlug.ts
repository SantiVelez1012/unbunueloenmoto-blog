import { GetPostBySlugUseCase } from "@/core/application/use-cases/get-post-by-slug/getPostBySlugUseCase";
import { BlogPost } from "@/core/domain/entities/post";
import { useEffect, useState } from "react";

export function useGetPostBySlug(slug: string) {

    const useCase = new GetPostBySlugUseCase();

    const [data, setData] = useState<BlogPost>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchData();
        function fetchData() {

            setIsLoading(true);
            try {
                useCase.execute(slug).then((response) => {
                    setData(response);
                    console.log('blog post', response);
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