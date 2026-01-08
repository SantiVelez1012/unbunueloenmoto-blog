"use client";

import { PostListed } from "@/features/blog/domain/entities/postListed";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PostHero from "../post-hero/postHero";

interface PostLayoutProps {
    post: PostListed;
    children: React.ReactNode;
}

export default function PostLayout({ post, children }: Readonly<PostLayoutProps>) {
    return (
        <article className="min-h-screen bg-base-100 pb-20 font-sans">

            <div className="relative w-full z-0 mb-24">
                <PostHero post={post} />
            </div>

            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-base-100 border border-white/5 shadow-2xl shadow-black/50 rounded-t-[2.5rem] -mt-20 md:-mt-32 p-8 md:p-12 lg:p-16 relative overflow-hidden">

                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="flex justify-between items-center mb-12 pb-8 border-b border-white/5">
                            <Link
                                href="/blog"
                                className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                            >
                                <div className="p-2 rounded-full bg-base-200 group-hover:bg-primary/10 transition-colors">
                                    <ArrowLeft size={16} />
                                </div>
                                Volver al Blog
                            </Link>
                        </div>

                        <div className="prose prose-lg prose-bunuelo max-w-none font-sans leading-relaxed">
                            {children}
                        </div>

                        <div className="mt-16 pt-10 border-t border-white/5">
                            <div className="flex items-center gap-4 bg-base-200/50 p-6 rounded-2xl border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    B
                                </div>
                                <div>
                                    <p className="text-white font-bold font-display">Un Buñuelo en Moto</p>
                                    <p className="text-sm text-gray-400">Escrito con gasolina y café.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </article>
    );
}