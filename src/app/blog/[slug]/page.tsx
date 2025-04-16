import Loader from "@/core/presentation/components/loader/loader"
import BlogPostPage from "@/core/presentation/pages/blog-post/blogPostPage"
import { Suspense } from "react"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    return <>
    
        <Suspense fallback={<Loader />}>
            <BlogPostPage postSlug={slug} />
        </Suspense>

    </>
}