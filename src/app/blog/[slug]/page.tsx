import BlogPostPage from "@/core/presentation/pages/blog-post/blogPostPage"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    return <BlogPostPage postSlug={slug} />
}