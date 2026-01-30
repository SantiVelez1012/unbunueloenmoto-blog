import React from 'react';
import { PostListed } from '@/features/blog/domain/entities/postListed';
import { DateFormatter } from '@/features/shared/presentation/utils/dateFormatter';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Tag } from 'lucide-react';

interface PostCardHorizontalProps {
    post: PostListed;
}

function PostCardHorizontal({ post }: Readonly<PostCardHorizontalProps>) {

    const formattedDate = DateFormatter.formatDateToSpanishColombia(post.createdAt);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className='flex min-w-[500px] md:max-w-[768px] lg:max-w-[1024px] mx-16 h-[400px] group font-sans bg-base-200 rounded-2xl overflow-hidden border border-base-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300'
        >
            <Link href={`/blog/${post.urlSlug}`} className="flex h-full flex-row gap-4 w-full">

                <div className='w-2/4 relative aspect-video overflow-hidden rounded-lg'>
                    <Image src={post.coverImage.url} alt={post.coverImage.title} fill className="object-cover" sizes='(max-width: 1024px) 33vw, 500px' />
                </div>
                <div className='w-2/4 max-w-2/4 flex flex-col justify-center gap-4 pr-4 mt-4'>
                    <span>{formattedDate}</span>
                    <div className="top-4 flex gap-2">
                        {post.tagsCollection.items.map((tag) => (
                            <span
                                key={tag.tagId}
                                className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-base-100 bg-primary rounded-lg shadow-md"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                    <h3 className='text-xl font-display font-bold text-white leading-snug group-hover:text-primary transition-colors'>
                        {post.title}
                    </h3>
                    <p className='text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-sans'>
                        {post.postSummary}
                    </p>

                    <div className="py-4 border-t border-base-300 flex items-center justify-between mt-auto">
                        <span className="text-sm font-bold text-primary flex items-center gap-2">
                            Leer más
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <Tag className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </div>
                </div>
            </Link>

        </motion.div>

    );
}

export default PostCardHorizontal;
