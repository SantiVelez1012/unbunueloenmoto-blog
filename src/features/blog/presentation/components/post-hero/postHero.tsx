"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import { PostListed } from "@/features/blog/domain/entities/postListed";


interface BlogPostHeroProps {
  post: PostListed;
}

export default function PostHero({ post }: Readonly<BlogPostHeroProps>) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] min-h-[400px] bg-base-100 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src={post.coverImage.url}
          alt={post.title}
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/80 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto max-w-5xl"
        >
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
            {post.tagsCollection.items.map((tag) => (
              <span 
                key={tag.tagId}
                className="inline-flex font-sans items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm"
              >
                <Tag size={12} />
                {tag.name}
              </span>
            ))}
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-sm"
          >
            {post.title}
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium"
          >
            <div className="flex items-center gap-2 font-sans">
              <Calendar size={16} className="text-primary" />
              <time dateTime={post.createdAt}>{formattedDate}</time>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}