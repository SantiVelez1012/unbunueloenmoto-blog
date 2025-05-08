import { GetPostBySlugUseCase } from "@/core/application/use-cases/get-post-by-slug/getPostBySlugUseCase";
import { BlogPost } from "@/core/domain/entities/post";
import { cache } from "react";

export const getPostBySlug = cache(async (slug: string) : Promise<BlogPost | null> => {

    const useCase = new GetPostBySlugUseCase();
    try {
      const post = await useCase.execute(slug);
      return post ?? null;
    } catch (error) {
      console.error("Error al obtener el post:", error);
      return null;
    }

});