export const revalidate = 3600;
import BlogPostPage from "@/core/presentation/pages/blog-post/blogPostPage"
import { getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";


type PageProps = {
  params: Promise<{ slug: string }>
};

export default async function Page({
  params,
}: PageProps) {

  const { slug } = await params;
  return <>
    <BlogPostPage postSlug={slug} />
  </>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const slug = (await params).slug;

  if (!slug) {
    return {
      title: "Publicación no encontrada | Un Buñuelo en Moto Blog",
      description: "No se pudo encontrar esta publicación.",
    };
  }
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post no encontrado | Un Bunuelo en Moto Blog',
      description: 'No pudimos encontrar este artículo',
    };
  }

  const url = `https:unbunueloenmoto.com/blog/${post.urlSlug}`;

  return {
    title: `${post.title} | Un Bunuelo en Moto Blog`,
    description: post.postSummary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.postSummary,
      url,
      type: 'article',
      images: [
        {
          url: post.coverImage.url,
          width: 1200,
          height: 630,
          alt: `Imagen de ${post.title}`,
        },
      ],
    },
  };
}
