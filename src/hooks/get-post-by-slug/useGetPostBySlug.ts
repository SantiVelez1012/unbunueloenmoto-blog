import { BlogPost } from "@/core/domain/entities/post";
import { getPostBySlug } from "@/lib/posts";
import { useEffect, useState } from "react";

export function useGetPostBySlug(slug: string) {

    const [data, setData] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchData();
        async function fetchData() {

            setIsLoading(true);
            try {
                const response = await getPostBySlug(slug);
                setData(response);
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
    }, [slug]);

    return { data, isLoading, error };

};