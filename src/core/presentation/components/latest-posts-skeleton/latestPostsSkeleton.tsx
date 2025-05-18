import React from 'react'
import PostCardSkeleton from '../shared/post-card-skeleton/postCardSkeleton'

function LatestPostsSkeleton() {
    return (
        <div className='flex justify-center items-center mt-5 self-center mx-5 md:mx-0'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-5">
                <PostCardSkeleton />
                <PostCardSkeleton />
            </div>
        </div>
    )
}

export default LatestPostsSkeleton