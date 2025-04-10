import React from 'react'

function PostCardSkeleton() {
    return (
        <div className="flex h-[300px] w-96 flex-col gap-4">
            <div className="skeleton h-60 w-full"></div>
            <div className="skeleton self-end mt-2 h-6 w-full"></div>
            <div className="skeleton h-10 w-full"></div>
            <div className="skeleton h-10 self-end w-28"></div>
        </div>
    )
}

export default PostCardSkeleton