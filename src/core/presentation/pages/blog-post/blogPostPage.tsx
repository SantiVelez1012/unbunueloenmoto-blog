"use client";
import { useGetPostBySlug } from '@/hooks/get-post-by-slug/useGetPostBySlug';
import React from 'react'

type BlogPostPageProps = {
    postSlug: string
}

function BlogPostPage(  { postSlug }: BlogPostPageProps ) {

  const { data: post, isLoading, error } = useGetPostBySlug(postSlug);

  return (
    <div className='w-full overflow-y-auto' data-theme='dark' >{postSlug}</div>
  )
}

export default BlogPostPage;