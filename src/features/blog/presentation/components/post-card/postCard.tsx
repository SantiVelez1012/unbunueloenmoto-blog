"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { PostListed } from "@/features/blog/domain/entities/postListed";


interface BlogCardProps {
  post: PostListed;
}

export default function BlogCard({ post }: Readonly<BlogCardProps>) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col h-full rounded-[2rem] overflow-hidden border border-white/5 bg-base-100/40 backdrop-blur-xl shadow-lg hover:shadow-orange-500/10 hover:border-white/10 transition-colors"
    >
      <Link href={`/blog/${post.urlSlug}`} className="flex flex-col h-full">
        
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={post.coverImage.url} 
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/20 to-transparent opacity-90" />
          
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {post.tagsCollection.items.slice(0, 2).map((tag) => (
              <span 
                key={tag.tagId}
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col flex-grow p-6 pt-2">
          
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-3">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <time dateTime={post.createdAt}>{formattedDate}</time>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
            {post.postSummary}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
            <span className="text-sm font-bold text-primary flex items-center gap-2 group/btn">
              Leer artículo
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </span>
            
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
               <Tag className="w-3.5 h-3.5 text-gray-500 group-hover:text-primary" />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      </Link>
    </motion.article>
  );
}