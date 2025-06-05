"use client";
import { PostsProvider } from '@/context/post-context/postContext'
import React from 'react'
import BlogPostList from './blogPostList'

function BlogPostListProvider() {
  return (
    <PostsProvider>
      <div className="container mx-auto">
        <BlogPostList />
      </div>
    </PostsProvider>
  )
}

export default BlogPostListProvider