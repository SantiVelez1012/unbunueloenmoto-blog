import { BlogPost } from '@/core/domain/entities/post'
import React from 'react'
import HeroBanner from '../../components/hero-banner/heroBanner'
import { renderRichText } from '@/lib/richTextRenderer'

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
            
            <section className='flex justify-center my-10 w-full min-h-screen'>
                
                <div className='w-full max-w-5xl px-6 py-8'>
                    <h1 className='text-3xl font-bold mb-20'>{post.title}</h1>
                    
                    {renderRichText(post.content.json, post.content.links)}

                </div>

            </section>

        </div>
    )
}

export default PostTemplate