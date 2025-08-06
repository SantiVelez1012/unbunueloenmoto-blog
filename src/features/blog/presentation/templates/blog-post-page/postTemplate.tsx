
import React from 'react';

import { renderRichText } from '@/lib/richTextRenderer';
import { BlogPost } from '@/features/blog/domain/entities/post';
import HeroBanner from '@/features/shared/presentation/components/hero-banner/heroBanner';

type PostTemplateProps = {
    post: BlogPost
}

function PostTemplate({ post }: PostTemplateProps) {
    return (
        <div>
            <HeroBanner info={{
                title: '',
                description: '',
                imageUrl: post.coverImage.url,
                imageAlt: post.coverImage.title
            }} />

            <section className='flex justify-center my-10 w-full min-h-dvh'>

                <div className='w-full max-w-5xl px-6 py-2'>
                    <h1 className='text-3xl font-bold my-6'>{post.title}</h1>

                    <div className='flex items-center gap-4 mb-10'>
                        {post.tagsCollection.items.map((tag) => (
                            <div key={tag.name} className='flex justify-center'>
                                <div className="badge badge-primary badge-outline">{tag.name}</div>
                            </div>
                        ))}
                    </div>

                    {renderRichText(post.content.json, post.content.links)}

                </div>

            </section>

        </div>
    )
}

export default PostTemplate