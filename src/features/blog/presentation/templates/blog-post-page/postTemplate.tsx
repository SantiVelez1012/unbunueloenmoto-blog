
import React from 'react';

import { renderRichText } from '@/lib/richTextRenderer';
import { BlogPost } from '@/features/blog/domain/entities/post';

type PostTemplateProps = {
    post: BlogPost
}

function PostTemplate({ post }: Readonly<PostTemplateProps>) {
    return (
        <div>
            {renderRichText(post.content.json, post.content.links)}
        </div>
    )
}

export default PostTemplate;