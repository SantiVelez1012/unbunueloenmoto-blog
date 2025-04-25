import React from 'react'
import HeroBanner from '../../components/hero-banner/heroBanner';
import { useGetLatestPosts } from '@/hooks/get-latest-posts/useGetLatestPosts';
import PostCard from '../../components/post-card/postCard';
import LatestPostsSkeleton from '../../components/latest-posts-skeleton/latestPostsSkeleton';
import { Copies } from '../../constants/copies/copies';
import SubscribersCount from '../../components/subscribers-count/subscribersCount';
import { useGetSubscribersCount } from '@/hooks/get-subscribers-count/useGetSubscribersCount';
import { useRouter } from 'next/navigation';

function BlogHomePage() {

    const { data: posts, isLoading } = useGetLatestPosts();
    const { count, isLoading: isCountLoading } = useGetSubscribersCount();
    const router = useRouter();

    const handleAllPostsClick = () => {
        router.push('/blog/all');
    }

    return (
        <div className='w-full overflow-y-auto' data-theme="dark">
            <HeroBanner info={Copies.homeBannerInfo} />

            <SubscribersCount isLoading={isCountLoading} count={count!} />
            <div className='flex justify-center items-center mt-10 h-full'>
                <h3 className='text-2xl text-white'>Últimas Publicaciones</h3>
            </div>
            <div className='flex justify-center items-center mt-5 self-center md:mx-0 min-h-[250px]'>
                {isLoading && <LatestPostsSkeleton />}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                    {!isLoading &&
                        posts.map((post) => (
                            <div key={post.urlSlug} className='flex justify-center'>
                                <PostCard post={post} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center items-center my-10'>
                <button className='btn btn-primary' onClick={handleAllPostsClick} >Ver todas las publicaciones</button>
            </div>

        </div>
    );
}

export default BlogHomePage