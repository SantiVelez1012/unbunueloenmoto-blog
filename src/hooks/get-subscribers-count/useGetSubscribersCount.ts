

import { SubscriberCountStatistics } from "@/features/blog/infrastructure/entities/youtube-responses";
import { GetSubscribersCountUseCase } from "@/features/blog/use-cases/get-subscribers-count/getSubscribersCountUseCase";
import { useEffect, useRef, useState } from "react";

export function useGetSubscribersCount() {

    const useCase = useRef(new GetSubscribersCountUseCase());

    const [count, setCount] = useState<SubscriberCountStatistics | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetchData();
        function fetchData() {

            setIsLoading(true);
            try {
                useCase.current.execute().then((response) => {
                    setCount(response);
                });

            }
            catch (error: unknown) {
                if (isMounted) {
                    setError(error);
                }
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

    return { count, isLoading, error };

};