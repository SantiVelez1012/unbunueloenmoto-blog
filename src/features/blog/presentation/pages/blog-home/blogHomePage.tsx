"use client";

import React from 'react'
import HeroBanner from '../../components/hero-banner/heroBanner';

import PostCard from '../../components/post-card/postCard';
import LatestPostsSkeleton from '../../components/latest-posts-skeleton/latestPostsSkeleton';
import { Copies } from '../../constants/copies/copies';
import SubscribersCount from '../../components/subscribers-count/subscribersCount';

import { useRouter } from 'next/navigation';

import SocialMedia from '../../components/social-media/socialMedia';
import { useGetLatestPosts } from '../../hooks/get-latest-posts/useGetLatestPosts';
import { useGetSubscribersCount } from '../../hooks/get-subscribers-count/useGetSubscribersCount';

function BlogHomePage() {

    const { data: posts, isLoading } = useGetLatestPosts();
    const { count, isLoading: isCountLoading } = useGetSubscribersCount();
    const router = useRouter();

    const handleAllPostsClick = () => {
        router.push('/blog/all');
    }

    return (
        <div className='w-full bg-base-200 overflow-y-auto' data-theme="dark">
            <HeroBanner info={Copies.homeBannerInfo} />
            <div className="flex justify-center items-center w-full my-4 px-2">
                <SocialMedia />
            </div>
            <SubscribersCount isLoading={isCountLoading} count={count!} />

            <div className='flex justify-center items-center px-5 text-center mt-10 h-full'>
                <h3 className='text-4xl text-white'>Últimas Publicaciones</h3>
            </div>
            <div className='flex justify-center items-center m-5 self-center md:mx-0 min-h-[250px]'>
                {isLoading && <LatestPostsSkeleton />}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-5'>
                    {!isLoading &&
                        posts.map((post) => (
                            <div key={post.urlSlug} className='flex justify-center'>
                                <PostCard post={post} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center items-center my-10'>
                <button className='btn btn-primary' onClick={handleAllPostsClick} >Ver todas las publicaciones</button>
            </div>
        </div>
    );
}

export default BlogHomePage;