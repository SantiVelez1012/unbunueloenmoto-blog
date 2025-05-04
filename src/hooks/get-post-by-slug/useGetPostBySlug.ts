import { GetPostBySlugUseCase } from "@/core/application/use-cases/get-post-by-slug/getPostBySlugUseCase";
import { BlogPost } from "@/core/domain/entities/post";
import { useEffect, useRef, useState } from "react";

export function useGetPostBySlug(slug: string) {

    const useCase = useRef(new GetPostBySlugUseCase());

    const [data, setData] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchData();
        function fetchData() {

            setIsLoading(true);
            try {
                useCase.current.execute(slug).then((response) => {
                    setData(response);
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
    }, [isLoading, slug]);

    return { data, isLoading, error };

};