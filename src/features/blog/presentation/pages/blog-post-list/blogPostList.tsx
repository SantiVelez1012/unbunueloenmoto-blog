
import React from 'react'
import PostCard from '../../components/post-card/postCard';
import { useGetPaginatedPosts } from '../../hooks/get-paginated-posts/useGetPaginatedPosts';
import SimplePagination from '../../components/simple-pagination/simplePagination';
import { PostListed } from '@/features/blog/domain/entities/postListed';


function BlogPostList() {
    const { posts, currentPage, setCurrentPage, isLastPage } = useGetPaginatedPosts();

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }
    return (
        <div className="min-h-screen pb-20 pt-32">

            <header className="container mx-auto px-6 mb-16 text-center">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block animate-pulse font-sans">
                    El Archivo del Buñuelo
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                    Explora todas <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        las rutas y consejos
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg font-sans">
                    Todo lo que necesitas para dejar de ser un buñuelo.
                </p>

                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 rounded-full" />
            </header>

            <section className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: PostListed) => (
                        <PostCard key={post.urlSlug} post={post} />
                    ))}

                    {posts.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500">No hay publicaciones en esta página.</p>
                        </div>
                    )}
                </div>
                <SimplePagination
                    currentPage={currentPage}
                    isLastPage={isLastPage}
                    onPageChange={handlePageChange}
                />
            </section>
        </div>


    )
}

export default BlogPostList;