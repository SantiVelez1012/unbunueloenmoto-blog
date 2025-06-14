import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarLinks from './nav-links/navbarLinks';

function Navbar({ children }: { children: React.ReactNode }) {
    return (
        <div data-theme="dark">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="navbar bg-base-300 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex flex-1 flex-row justify-items-center">
                            <Link href="/shop" className="btn btn-ghost">
                                <Image width={40} height={50} src="/logos/channel-logo.png" priority alt="logo" className="w-[100%] h-[40px]" />
                            </Link>
                            <div className="mx-0 my-auto">Buñuelo Shop</div>
                        </div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal">
                                <li>
                                    <Link href="/">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-none">
                            <label htmlFor="cart-drawer" className="btn btn-ghost btn-circle mr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                            </label>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        <NavbarLinks />
                    </ul>
                </div>
            </div>
            <div className="drawer drawer-end">
                <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content"></div>
                <div className="drawer-side z-20">
                    <label htmlFor="cart-drawer" aria-label="close cart" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 min-h-full w-80 p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Carrito de compras</h2>
                            <label htmlFor="cart-drawer" className="btn btn-sm btn-ghost">✕</label>
                        </div>
                        <div className="text-center text-gray-500">Tu carrito está vacío.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;