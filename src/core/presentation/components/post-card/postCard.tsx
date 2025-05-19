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
                    src={post.coverImage?.url || '/imgs/stock-post-image.jpg'}
                    alt={post.coverImage?.title || 'Fallback-Image'}
                    width={400}
                    height={240}
                    className=' h-[210px] md:h-[250px] opacity-85' />
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