"use client";
import { useGetPostBySlug } from '@/hooks/get-post-by-slug/useGetPostBySlug';
import React from 'react'
import Loader from '../../components/loader/loader';
import PostTemplate from '../../templates/blog-post-page/postTemplate';

type BlogPostPageProps = {
  postSlug: string
}

function BlogPostPage({ postSlug }: BlogPostPageProps) {

  const { data: post, isLoading, error } = useGetPostBySlug(postSlug);

  return (
    <div className='w-full min-h-screen overflow-y-auto' data-theme='dark' >

      {isLoading && !error && <Loader />}

      {!isLoading && !error && post &&
        <PostTemplate post={post} />
      
    }


    </div>
  )
}

export default BlogPostPage;