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
    <div className='w-full min-h-dvh overflow-y-auto bg-base-200' data-theme='dark'>
      {
        !(post && 'title' in post) && !isLoading &&
        <div className='flex flex-col align-middle items-center justify-center h-dvh mx-10'>
          <h1 className='text-2xl font-bold text-center'>No se encontró la publicación</h1>
          <p className='text-lg text-center'>Parece que no hemos podido encontrar la publicación que buscas. Por favor, revisa la URL o vuelve a la página de inicio.</p>
        </div>
      }

      {isLoading && !error && <Loader />}


      {
        !isLoading && post != null &&
        <>
          <PostTemplate post={post} />
        </>
      }
    </div>
  )
}

export default BlogPostPage;