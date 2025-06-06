"use client";

import React from 'react'
import Loader from '../../components/loader/loader';
import PostTemplate from '../../templates/blog-post-page/postTemplate';
import Link from 'next/link';
import { useGetPostBySlug } from '../../hooks/get-post-by-slug/useGetPostBySlug';

type BlogPostPageProps = {
  postSlug: string
}

function BlogPostPage({ postSlug }: BlogPostPageProps) {

  const { data: post, isLoading, error } = useGetPostBySlug(postSlug);
  return (
    <div className="w-full min-h-dvh bg-base-200 py-10 px-4" data-theme='dark'>
      {
        !(post && 'title' in post) && !isLoading &&
        <div className='flex flex-col align-middle items-center justify-center h-dvh mx-10'>
          <h1 className='text-2xl font-bold text-center'>No se encontró la publicación</h1>
          <p className='text-lg my-5 text-center'>Parece que no hemos podido encontrar la publicación que buscas. Por favor, revisa la URL o vuelve a la página de inicio.</p>
          <Link href={'/blog/all'} className="btn btn-warning btn-lg">Volver al Listado de Publicaciones</Link>
        </div>
      }
      {isLoading && !error && <Loader />}
      {
        !isLoading && post != null &&
        <article className="max-w-6xl mx-auto bg-base-300 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">{post.title}</h1>
          <section className="prose prose-invert max-w-none">
            <PostTemplate post={post} />
          </section>
        </article>
      }
    </div>
  )
}

export default BlogPostPage;