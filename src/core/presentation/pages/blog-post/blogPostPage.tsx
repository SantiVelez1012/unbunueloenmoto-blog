import React from 'react'

type BlogPostPageProps = {
    postSlug: string
}

function BlogPostPage(  { postSlug }: BlogPostPageProps ) {
  return (
    <div className='w-full overflow-y-auto' data-theme='dark' >{postSlug}</div>
  )
}

export default BlogPostPage;