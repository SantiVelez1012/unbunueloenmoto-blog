import React from 'react'
import HeroBanner from '../../components/hero-banner/heroBanner';
import { useGetLatestPosts } from '@/hooks/use-get-latest-posts/useGetLatestPosts';

function BlogHomePage() {

    const { data: posts, isLoading, error } = useGetLatestPosts();

    return (
        <div className='w-full' data-theme="dark">

            <HeroBanner />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                

            </div>

        </div>
    );
}

export default BlogHomePage