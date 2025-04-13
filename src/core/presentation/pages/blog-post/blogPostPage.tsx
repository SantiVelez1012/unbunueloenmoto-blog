"use client";
import { useGetPostBySlug } from '@/hooks/get-post-by-slug/useGetPostBySlug';
import React from 'react'
import HeroBanner from '../../components/hero-banner/heroBanner';
import Loader from '../../components/loader/loader';

type BlogPostPageProps = {
  postSlug: string
}

function BlogPostPage({ postSlug }: BlogPostPageProps) {

  const { data: post, isLoading, error } = useGetPostBySlug(postSlug);

  return (
    <div className='w-full min-h-screen overflow-y-auto' data-theme='dark' >

      {isLoading && !error && <Loader />}

      {!isLoading && !error && post &&
        (<HeroBanner info={{
          title: '',
          description: '',
          imageUrl: post.coverImage.url,
          imageAlt: post.coverImage.title
        }} />
      )
    }


    </div>
  )
}

export default BlogPostPage;