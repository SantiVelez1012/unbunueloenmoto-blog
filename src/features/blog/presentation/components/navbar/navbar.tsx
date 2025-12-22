"use client";

import React from 'react';
import NavbarLinks from './components/navbarLinks';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '@/features/shared/presentation/hooks/useScroll/useScroll';

function Navbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isScrolled = useScroll();

    const navbarStyle = isScrolled
        ? "bg-base-100/80 backdrop-blur-md shadow-lg border-b border-white/5 py-2"
        : "bg-transparent py-4";

    return (
        <div className="drawer font-display">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-content flex flex-col">
                <div className={`navbar w-full fixed top-0 z-50 transition-all duration-300 ${navbarStyle}`}>
                    
                    <div className="flex-none lg:hidden">
                        <label 
                            htmlFor="my-drawer-3" 
                            aria-label="open sidebar" 
                            className="btn btn-square btn-ghost text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>

                    <div className="flex flex-1 items-center gap-2">
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

                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal px-1 text-current text-md">
                            <NavbarLinks />
                        </ul>
                    </div>
                </div>

                <main className="min-h-screen">
                    {children}
                </main>
            </div>

            <div className="drawer-side z-[100]">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4 pt-20">
                    <NavbarLinks />
                </ul>
            </div>
        </div>
    )
}

export default Navbar;