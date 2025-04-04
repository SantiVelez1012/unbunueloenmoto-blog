import { PostListed } from '@/core/domain/entities/postListed'
import React from 'react'
import { PostTag } from '../../../domain/entities/postListed';


interface PostCardProps {
    post: PostListed;
}

function PostCard({ post }: PostCardProps) {

    const postTags: PostTag[] = post.tagsCollection.items;
    return (

        <div className="card bg-base-300 w-96 shadow-md">
            <figure>
                <img
                    src={post.coverImage.url}
                    alt={post.coverImage.title} />
            </figure>
            <div className="card-body">
                <div className="card-actions justify-end">
                    {postTags.map((tag) => (
                        <div key={tag.name} className='flex justify-center'>
                            <div className="badge badge-primary badge-outline">{tag.name}</div>
                        </div>
                    ))}
                </div>
                <h2 className="card-title">{post.title}</h2>
                <p>{post.postSummary}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"> Ver Publicación </button>
                </div>
            </div>
        </div>
    )
}

export default PostCard