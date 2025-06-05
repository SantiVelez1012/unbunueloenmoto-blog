

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PostListed, PostTag } from '../../../blog/domain/entities/postListed';


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
        <div
            className="w-full max-w-xs md:max-w-sm bg-gray-900/90 border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 cursor-pointer flex flex-col"
            onClick={handlePostClick}
        >
            <div className="relative w-full aspect-[16/9] rounded-t-xl overflow-hidden">
                <Image
                    src={post.coverImage?.url || '/imgs/stock-post-image.jpg'}
                    alt={post.coverImage?.title || 'Fallback-Image'}
                    fill
                    className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={false}
                />
            </div>
            <div className="p-4 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                    {postTags.map((tag) => (
                        <span key={tag.name} className="badge badge-primary badge-outline text-xs px-2 py-1 rounded-full">
                            {tag.name}
                        </span>
                    ))}
                </div>
                <h2 className="text-lg font-bold mb-1 text-white line-clamp-2">{post.title}</h2>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.postSummary}</p>
                <button
                    onClick={e => { e.stopPropagation(); handlePostClick(); }}
                    className="mt-auto btn btn-primary w-full hover:scale-105 transition-transform"
                    aria-label={`Ver publicación: ${post.title}`}
                >
                    Ver Publicación
                </button>
            </div>
        </div>
    )
}

export default PostCard