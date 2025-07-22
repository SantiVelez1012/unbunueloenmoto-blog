import React from 'react'
import PostCardSkeleton from '../shared/post-card-skeleton/postCardSkeleton';

export const PostsSkeleton = () => {
    return (

        <div className='flex justify-center items-center mt-5 self-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-5 max-w-full">
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
            </div>
        </div>
    )
}
