"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, MapPin } from 'lucide-react';
import Navbar from '@/features/shared/presentation/components/navbar/navbar';
import { Copies } from '@/features/blog/presentation/constants/copies/copies';

const fadeIn = { opacity: 0, y: 20 };
const fadeInVisible = { opacity: 1, y: 0 };

export default function NotFound() {
  return (
    <>
      <Navbar links={Copies.navbarLinks}></Navbar>
      <main className='relative min-h-screen w-full overflow-hidden bg-base-100 flex items-center justify-center'>
        <div className="absolute inset-0 bg-gradient-to-b from-base-200 via-base-100 to-base-200" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className='relative z-10 flex flex-col items-center justify-center gap-8 px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 backdrop-blur-md border border-error/20 shadow-lg"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-error" />
            </span>
            <span className="text-sm font-medium font-mono text-error tracking-wide">ERROR 404</span>
          </motion.div>

          <motion.div
            initial={fadeIn}
            animate={fadeInVisible}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64"
          >
            <Image
              src="/imgs/not-found.png"
              alt="Página no encontrada"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-50" />
          </motion.div>

          <motion.div
            initial={fadeIn}
            animate={fadeInVisible}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white tracking-tight'>
              Buñuelo no encontrado
            </h1>
            <div className="flex items-center justify-center gap-2 text-primary/60">
              <MapPin className="w-5 h-5" />
              <span className="text-base sm:text-lg font-mono">Ruta desconocida</span>
            </div>
          </motion.div>

          <motion.p
            initial={fadeIn}
            animate={fadeInVisible}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-base sm:text-lg text-gray-400 max-w-2xl font-sans leading-relaxed'
          >
            Parece que tomaste un desvío equivocado. La página que estás buscando no existe
            o fue movida a otra ruta. No te preocupes, te ayudamos a encontrar el camino de regreso.
          </motion.p>

          <motion.div
            initial={fadeIn}
            animate={fadeInVisible}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
          >
            <Link
              href="/"
              className="font-display btn btn-primary border-none rounded-full px-8 h-14 text-lg normal-case font-bold shadow-orange-500/20 shadow-xl hover:scale-105 transition-transform w-full sm:w-auto group"
            >
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Volver al Inicio
            </Link>

            <Link
              href="/blog"
              className="font-display btn btn-ghost bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 h-14 text-lg normal-case hover:bg-white/20 w-full sm:w-auto group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Ver el Blog
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8 text-xs text-gray-600 font-mono"
          >
            ¿Crees que esto es un error? <Link href="/blog" className="text-primary hover:underline">Contáctanos</Link>
          </motion.p>
        </div>
      </main>
    </>)
}