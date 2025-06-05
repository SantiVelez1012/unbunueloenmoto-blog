import { useGetPaginatedPosts } from '@/hooks/get-paginated-posts/useGetPaginatedPosts';
import React from 'react'
import { PostsSkeleton } from '../../components/posts-skeleton/postsSkeleton';
import PostCard from '../../components/post-card/postCard';


function BlogPostList() {
    const { posts, isLoading, currentPage, setCurrentPage, isLastPage } = useGetPaginatedPosts();

    const handlePageChange = (page: number) => () => {
        setCurrentPage(page);
    }
    return (
        <div className='flex flex-col gap-5 justify-center bg-base-200 items-center m-10 h-full min-h-dvh'>
            <span className="md:mb-5 text-center"> <h1 className='text-3xl'> Todas las publicaciones </h1> </span>
            {isLoading && <PostsSkeleton />}
            {!isLoading && posts.length > 0 && (
                <>
                    <div className='flex justify-center items-center mt-5 self-center'>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-5 max-w-full">
                            {posts.map((post) => (
                                <div key={post.urlSlug} className='flex justify-center'>
                                    <PostCard post={post} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <div className="join mt-10">
                {currentPage > 1 && (<button className="join-item btn-primary btn btn-lg rounded-sm mr-5" onClick={handlePageChange(currentPage - 1)}>«</button>)}
                <button className="join-item btn btn-lg cursor-default btn-primary rounded-sm">Página {currentPage}</button>
                {!isLastPage && <button className="join-item btn btn-lg btn-primary rounded-sm ml-5" onClick={handlePageChange(currentPage + 1)}>»</button>}
            </div>
        </div>
    )
}

export default BlogPostList