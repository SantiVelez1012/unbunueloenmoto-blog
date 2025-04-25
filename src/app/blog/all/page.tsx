"use client"
import { PostsProvider } from '@/context/post-context/postContext'
import BlogPostList from '@/core/presentation/pages/blog-post-list/blogPostList'
import React from 'react'

function Page() {

  return (

    <PostsProvider>
      <div className="container mx-auto">
        <BlogPostList />
      </div>
    </PostsProvider>
  )
}

export default Page