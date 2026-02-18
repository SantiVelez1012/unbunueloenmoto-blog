import { PostCount } from "@/features/blog/domain/entities/postCount";
import { GetTotalPostsCountUseCase } from "@/features/blog/domain/use-cases/get-total-post-count/getTotalPostCountUseCase";
import { useEffect, useRef, useState } from "react";

export function useGetTotalPostCount() {

    const useCase = useRef(new GetTotalPostsCountUseCase());
    const [totalPostCount, setTotalPostCount] = useState<PostCount | null>(null);

    useEffect(() => {
        useCase.current.execute().then((response) => {
            setTotalPostCount(response.blogPostCollection);
         }).catch((error) => {
            console.log(error);
        });
    }, []);

    return { totalPostCount };

};