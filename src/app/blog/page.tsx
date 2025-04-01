"use client";
import PostCard from '@/components/post-card/post-card';
import { PostListed } from '@/lib/models/posts/postListed';
import { getPosts } from '@/lib/use-cases/getPostsUseCase';
import { useRouter } from 'next/navigation';
import React from 'react';

const BlogPage = () => {

    const postsGraph = getPosts();
    console.log(postsGraph);

    const router = useRouter();
    const posts = [
        { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
        { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
        { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
    ];

    const posts2: PostListed[] = [
        { slug: '1', title: 'First Blog Post', summary: 'This is the content of the first blog post.', image: '', createdAt: '' },
        { slug: '', title: 'Second Blog Post', summary: 'This is the content of the second blog post.', image: '', createdAt: ''  },
        { slug: '', title: 'Third Blog Post', summary: 'This is the content of the third blog post.', image: '', createdAt: ''  },
    ];

    return (
        <div className='h-300' data-theme="dark">
            <h1>Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {posts2.map((post) => (
                    <PostCard post={post}/>
                ))}
            </div>

        </div>
    );
};

export default BlogPage;