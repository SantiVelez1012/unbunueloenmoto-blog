import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroBannerInfo } from '@/features/shared/presentation/entities/hero-banner-info/heroBannerInfo';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';


type HeroBannerProps = {
    info: HeroBannerInfo;
}

function HeroBanner({ info }: Readonly<HeroBannerProps>) {
    return (
        <section className='relative w-full h-screen overflow-hidden'>

            <div className="absolute inset-0 z-0">
                <Image
                    src={info.imageUrl}
                    alt={info.imageAlt}
                    fill
                    className="object-cover object-center w-full h-full"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/400 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center sm:px-6 lg:px-8 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium font-sans text-white tracking-wide">
                        {info.topInfo}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl text-3xl font-display font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl drop-shadow-sm"
                >
                    {info.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl font-light font-mono"
                >
                    {info.description}
                </motion.p>

                {info.actions && <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-col w-full sm:w-auto gap-4 sm:flex-row items-center"
                >
                    <Link href={info.actions.primary.url} className="font-display btn btn-primary border-none rounded-full px-8 h-14 text-lg normal-case font-bold shadow-orange-500/20 shadow-xl hover:scale-105 transition-transform w-full sm:w-auto">
                        {info.actions.primary.label}
                    </Link>

                    {info.actions.secondary && <Link href={info.actions.secondary.url} target={info.actions.secondary.blank ? "_blank" : undefined} className="font-display btn btn-ghost bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 h-14 text-lg normal-case hover:bg-white/20 w-full sm:w-auto">
                        <ChevronRight className="w-5 h-5 ml-1" />
                        {info.actions.secondary.label}
                    </Link>}
                </motion.div>}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-center"
            >
                <span className="text-xs font-display uppercase tracking-widest">{info.footerInfo}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>

        </section>
    );
}

export default HeroBanner;