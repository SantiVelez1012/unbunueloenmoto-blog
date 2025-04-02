import React from 'react'
import { useGetLatestPosts } from '@/hooks/use-get-latest-posts/useGetLatestPosts';
import HeroBanner from '../../components/hero-banner/heroBanner';

function BlogHomePage() {

    const {data, isLoading, error} = useGetLatestPosts();

    // const posts2: PostListed[] = [
    //     { slug: '1', title: 'First Blog Post', summary: 'This is the content of the first blog post.', image: '', createdAt: '' },
    //     { slug: '2', title: 'Second Blog Post', summary: 'This is the content of the second blog post.', image: '', createdAt: ''  },
    //     { slug: '3', title: 'Third Blog Post', summary: 'This is the content of the third blog post.', image: '', createdAt: ''  },
    // ];

    return (
        <div className='w-full h-300' data-theme="dark">

            <HeroBanner />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* {posts2.map((post) => (
                    // <PostCard key={post.slug} post={post}/>
                ))} */}
            </div>

        </div>
    );
}

export default BlogHomePage