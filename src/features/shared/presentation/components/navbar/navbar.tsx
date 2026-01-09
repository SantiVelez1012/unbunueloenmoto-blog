"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'; // Ajustado a framer-motion o motion/react según tu versión
import { Menu } from 'lucide-react';
import MobileMenu from './components/mobileMenu';
import { NavbarLink } from '@/features/shared/presentation/entities/navbar-link/navbar-link';
import NavbarLinks from './components/navbarLinks'; // Importamos el nuevo componente

interface NavbarProps {
    links?: NavbarLink[];
}

function Navbar({ links }: Readonly<NavbarProps>) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 15);
    });

    const navbarStyle = isScrolled
        ? "bg-base-100/90 backdrop-blur-md shadow-lg border-b border-white/5 py-2"
        : "bg-transparent py-4";

    return (
        <>
            <nav className={`navbar flex font-mono gap-3 ${navbarStyle} fixed top-0 z-50 w-full px-4 md:px-8 transition-all duration-300`}>

                <div className="flex-1 flex items-center gap-2">
                    <div className="lg:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="btn btn-ghost btn-circle text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={24} />
                        </motion.button>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href="/" className="btn btn-ghost p-0 hover:bg-transparent">
                            <Image
                                width={40}
                                height={40}
                                src="/logos/channel-logo.png"
                                alt="Buñuelo Logo"
                                className="w-10 h-10 object-contain"
                                priority
                            />
                        </Link>
                        <Link href="/" className="text-lg font-bold text-white transition-colors hover:text-primary hidden sm:block">
                            unbunueloenmoto.com
                        </Link>
                    </div>
                </div>

                <div className='hidden lg:flex'>
                    <NavbarLinks links={links!} />
                </div>

                {isMobileMenuOpen && (
                    <motion.div className="absolute top-full left-4 w-full lg:hidden shadow-2xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}>
                        <MobileMenu links={links!} />
                    </motion.div>
                )}
            </nav>
        </>
    );
}

export default Navbar;