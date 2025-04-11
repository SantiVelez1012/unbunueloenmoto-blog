import React from 'react'
import HeroBanner from '../../components/hero-banner/heroBanner';
import { useGetLatestPosts } from '@/hooks/get-latest-posts/useGetLatestPosts';
import PostCard from '../../components/post-card/postCard';
import LatestPostsSkeleton from '../../components/latest-posts-skeleton/latestPostsSkeleton';

function BlogHomePage() {

    const { data: posts, isLoading, error } = useGetLatestPosts();

    return (
        <div className='w-full overflow-y-auto' data-theme="dark">
            <HeroBanner />
            <div className='flex justify-center items-center mt-10'>
                <h2 className='text-2xl text-white'>Últimas Publicaciones</h2>
            </div>
            {isLoading && <LatestPostsSkeleton />}
            {!isLoading && <div className='flex justify-center items-center mt-5 self-center md:mx-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                    {posts.map((post) => (
                        <div key={post.urlSlug} className='flex justify-center'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </div>}

            <div className='flex justify-center items-center my-10'>
                <button className='btn btn-primary'>Ver todas las publicaciones</button>
            </div>

        </div>
    );
}

export default BlogHomePage