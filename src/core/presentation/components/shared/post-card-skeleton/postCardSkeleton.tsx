import React from 'react'

function PostCardSkeleton() {
    return (
        <div className="flex h-[300px] lg:w-96 md:w-80 sm:w-72 w-64 flex-col gap-3">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton self-end mt-2 h-6 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 self-end w-28"></div>
        </div>
    )
}

export default PostCardSkeleton