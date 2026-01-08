"use client";

import React from 'react'
import BlogPostList from './blogPostList'
import { PostsProvider } from '../../post-context/postContext';

function BlogPostListProvider() {
  return (
    <PostsProvider>
      <div className="container mx-auto">
        <BlogPostList />
      </div>
    </PostsProvider>
  )
}

export default BlogPostListProvider;