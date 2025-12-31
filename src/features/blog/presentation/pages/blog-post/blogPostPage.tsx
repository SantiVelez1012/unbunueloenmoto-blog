"use client";

import React from 'react'
import PostTemplate from '../../templates/blog-post-page/postTemplate';
import Link from 'next/link';
import { useGetPostBySlug } from '../../hooks/get-post-by-slug/useGetPostBySlug';
import Loader from '@/features/shared/presentation/components/loader/loader';
import { ArrowLeft, FileQuestion, Home } from 'lucide-react';
import PostLayout from '../../components/post-layout/postLayout';

type BlogPostPageProps = {
  postSlug: string
}

function BlogPostPage({ postSlug }: Readonly<BlogPostPageProps>) {


  const { data: post, isLoading, error } = useGetPostBySlug(postSlug);


  if ((!post || !('title' in post) && !isLoading)) {
    return (
      <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 rounded-full bg-base-200 border border-base-300 flex items-center justify-center mb-6 shadow-2xl shadow-primary/5">
          <FileQuestion className="w-10 h-10 text-gray-600" />
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Ruta no encontrada
        </h1>

        <p className="text-gray-400 max-w-md text-lg mb-8 leading-relaxed font-sans">
          Parece que nos salimos del mapa. La publicación que buscas no existe o fue movida a otro garaje.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 font-sans">
          <Link
            href="/blog/all"
            className="btn btn-primary rounded-full px-8 font-bold text-base-100 shadow-lg shadow-orange-500/20"
          >
            <ArrowLeft size={20} />
            Volver al Blog
          </Link>

          <Link
            href="/blog"
            className="btn btn-ghost rounded-full px-8 text-white hover:bg-white/10"
          >
            <Home size={20} className="mr-2" />
            Ir al Inicio
          </Link>
        </div>
      </div>
    );
  }
  return (
    <PostLayout post={post}>
      {isLoading && !error && <Loader fullScreen={true} />}
      {
        !isLoading && post != null &&
        <PostTemplate post={post} />
      }
    </PostLayout>
  )
}

export default BlogPostPage;