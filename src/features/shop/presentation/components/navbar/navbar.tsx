"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '@/features/shared/presentation/hooks/useScroll/useScroll';
import NavbarLinks from './nav-links/navbarLinks';
import { useCartStore } from '@/features/shop/infrastructure/state/cartStore';
import Cart from '../cart/cart';

function Navbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isScrolled = useScroll();
    const countItems = useCartStore(state => state.items.length);
    const displayCount = countItems > 10 ? '10+' : countItems;

    const navbarStyle = isScrolled
        ? "bg-base-100/80 backdrop-blur-md shadow-lg border-b border-white/5 py-2"
        : "bg-transparent py-4";

    return (
        <>
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

                        <div className="flex-none flex items-center gap-2">
                            <div className="hidden lg:block">
                                <ul className="menu menu-horizontal px-1 text-current text-md">
                                    <NavbarLinks />
                                </ul>
                            </div>
                            <label htmlFor="cart-drawer" className="btn btn-ghost btn-circle relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="8" cy="21" r="1" />
                                    <circle cx="19" cy="21" r="1" />
                                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                </svg>
                                {countItems > 0 && (
                                    <span className="absolute -bottom-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-base-300 animate-bounce" aria-label={`${displayCount} items in cart`}>
                                        {displayCount}
                                    </span>
                                )}
                            </label>
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

            <div className="drawer drawer-end">
                <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side z-[100]">
                    <label htmlFor="cart-drawer" aria-label="close cart" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 min-h-full w-80 p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Carrito de compras</h2>
                            <label htmlFor="cart-drawer" className="btn btn-sm btn-ghost">✕</label>
                        </div>
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;