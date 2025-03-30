"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const BlogPage = () => {

    const router = useRouter();
    const posts = [
        { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
        { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
        { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
    ];

    return (
        <div className='' data-theme="dark">
            <h1>Blog</h1>
            <div>
                {posts.map((post) => (
                    <div key={post.id} style={{ marginBottom: '20px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <button type="button" onClick={() => router.push(`/blog/${post.id}`)}>
                            Go to Post: {post.id}
                        </button>
                        
                    </div>
                ))}
            </div>

        </div>
    );
};

export default BlogPage;