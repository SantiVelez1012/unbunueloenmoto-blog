"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { PostListed } from "@/features/blog/domain/entities/postListed";
import { DateFormatter } from "@/features/shared/presentation/utils/dateFormatter";


interface BlogCardProps {
  post: PostListed;
}

export default function BlogCard({ post }: Readonly<BlogCardProps>) {
  const formattedDate = DateFormatter.formatDateToSpanishColombia(post.createdAt);
    return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group font-sans flex flex-col h-full bg-base-200 rounded-2xl overflow-hidden border border-base-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
    >
      <Link href={`/blog/${post.urlSlug}`} className="flex flex-col h-full">
        
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-base-300">
          <Image
            src={post.coverImage.url} 
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          <div className="absolute top-4 left-4 flex gap-2">
            {post.tagsCollection.items.slice(0, 1).map((tag) => (
              <span 
                key={tag.tagId}
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-base-100 bg-primary rounded-lg shadow-md"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col flex-grow p-6">
          
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <time dateTime={post.createdAt}>{formattedDate}</time>
          </div>

          <h3 className="text-xl font-display font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow font-sans">
            {post.postSummary}
          </p>

          <div className="pt-4 border-t border-base-300 flex items-center justify-between mt-auto">
            <span className="text-sm font-bold text-primary flex items-center gap-2">
              Leer más
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <Tag className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}