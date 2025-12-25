"use client";

import React from 'react';

import PostCard from '../../components/post-card/postCard';
import LatestPostsSkeleton from '../../components/latest-posts-skeleton/latestPostsSkeleton';
import { Copies } from '../../constants/copies/copies';

import { useRouter } from 'next/navigation';

import SocialMedia from '../../components/social-media/socialMedia';
import { useGetLatestPosts } from '../../hooks/get-latest-posts/useGetLatestPosts';
import HeroBanner from '@/features/shared/presentation/components/hero-banner/heroBanner';

function BlogHomePage() {

    const { data: posts, isLoading } = useGetLatestPosts();

    const router = useRouter();

    const handleAllPostsClick = () => {
        router.push('/blog/all');
    }

    return (
        <div className='w-full font-sans overflow-y-auto'>
            <HeroBanner info={Copies.homeBannerInfo} />

            <div className="flex justify-center items-center w-full pt-8 px-2">
                <SocialMedia />
            </div>

            <div className="w-full max-w-6xl mx-auto mb-10">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className='flex justify-center items-center self-center min-h-[200px] pt-8'>
                <h3 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300 font-display'>El Blog de Un Buñuelo en Moto</h3>
            </div>

            <div className='flex justify-center items-center self-center min-h-[250px] relative'>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
                {isLoading ? (
                    <LatestPostsSkeleton />
                ) : (
                    <div className='grid justify-center grid-cols-1 md:grid-cols-3 gap-4 my-5 max-w-6xl mx-10 md:mx-0'>
                        {posts.map((post) => (
                            <div key={post.urlSlug} className='flex justify-center'>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='flex justify-center items-center my-10'>
                <button className='btn btn-primary' onClick={handleAllPostsClick} >Ver todas las publicaciones</button>
            </div>
        </div>
    );
}

export default BlogHomePage;