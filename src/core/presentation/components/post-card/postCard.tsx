import { PostListed } from '@/core/domain/entities/postListed'
import React from 'react'
import Image from 'next/image';
import { PostTag } from '../../../domain/entities/postListed';
import { useRouter } from 'next/navigation';


interface PostCardProps {
    post: PostListed;
}

function PostCard({ post }: PostCardProps) {

    const postTags: PostTag[] = post.tagsCollection.items;
    const router = useRouter();

    const handlePostClick = () => {
        router.push(`/blog/${post.urlSlug}`);
    }

    return (

        <div className="card bg-base-300 w-96 shadow-md">
            <figure>
                <Image
                    src={post.coverImage.url}
                    alt={post.coverImage.title}
                    width={384}
                    height={216}
                    style={{ height: 'auto' }} />
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
                    <button onClick={handlePostClick} className="btn btn-primary"> Ver Publicación </button>
                </div>
            </div>
        </div>
    )
}

export default PostCard