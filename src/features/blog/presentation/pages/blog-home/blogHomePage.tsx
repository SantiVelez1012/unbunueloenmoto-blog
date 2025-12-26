"use client";

import React from 'react';

import PostCard from '../../components/post-card/postCard';
import LatestPostsSkeleton from '../../components/latest-posts-skeleton/latestPostsSkeleton';
import { Copies } from '../../constants/copies/copies';

import SocialMedia from '../../components/social-media/socialMedia';
import { useGetLatestPosts } from '../../hooks/get-latest-posts/useGetLatestPosts';
import HeroBanner from '@/features/shared/presentation/components/hero-banner/heroBanner';

function BlogHomePage() {

    const { data: posts, isLoading } = useGetLatestPosts();

    return (
        <div className='w-full font-sans'>
            <HeroBanner info={Copies.homeBannerInfo} />

            <div className="flex justify-center items-center w-full px-2">
                <SocialMedia />
            </div>

            <div className="w-full max-w-6xl mx-auto mb-10">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className='flex justify-center items-center self-center min-h-[200px] pt-8 px-4'>
                <h3 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300 font-display text-center'>Publicaciones recientes</h3>
            </div>

            <div className='flex justify-center items-center self-center min-h-[300px] relative overflow-hidden mb-[200px]'>
                {isLoading && <LatestPostsSkeleton />}

                {!isLoading && (
                    <div className='grid justify-center grid-cols-1 md:grid-cols-3 gap-4 my-5 max-w-6xl mx-10 md:mx-0'>
                        {posts.map((post) => (
                            <div key={post.urlSlug} className='flex justify-center'>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}

export default BlogHomePage;