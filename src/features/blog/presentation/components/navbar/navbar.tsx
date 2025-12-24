"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu } from 'lucide-react';
import MobileMenu from './components/mobileMenu';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    const { scrollY } = useScroll();
    const navbarStyle = isScrolled
        ? "bg-base-100/80 backdrop-blur-md shadow-lg border-b border-white/5 py-2"
        : "bg-transparent py-4";

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 15) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <nav className={`navbar bg-base-100 flex font-mono gap-3 ${navbarStyle} fixed top-0 z-50 w-full px-4 md:px-8 transition-all duration-300`}>

            <div className="md:hidden ml-2">
                <motion.span
                    whileTap={{ scale: 1.5 }}
                    className="btn btn-ghost p-0 hover:bg-transparent"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu size={30} />
                </motion.span>
            </div>
            <div className="flex">
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
                <Link href="/" className="text-lg font-bold text-white transition-colors hover:text-primary">
                    unbunueloenmoto.com
                </Link>
            </div>


            {isOpen && (
                <motion.div
                    className="absolute flex-grow flex justify-start mr-2 md:hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    
                >
                    <MobileMenu />
                </motion.div>
            )}

        </nav>
    )
}

export default Navbar;