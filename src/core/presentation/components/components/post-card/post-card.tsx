import { PostListed } from '@/core/domain/entities/postListed'
import React from 'react'

function PostCard({post} : any ) {
    return (
        <div className="card bg-base-100 image-full w-90 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.summary}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"> Ver Publicación </button>
                </div>
            </div>
        </div>
    )
}

export default PostCard