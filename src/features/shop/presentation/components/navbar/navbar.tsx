'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, ShoppingCart, X, User } from 'lucide-react';
import NavbarLinks from './nav-links/navbarLinks';
import Cart from '../cart/cart';
import ThemeToggle from '../theme-toggle/themeToggle';
import { useCartStore } from '@/features/shop/infrastructure/state/cartStore';

function Navbar({ children }: { children: React.ReactNode }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const itemsCount = useCartStore((state) => state.items.length);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Sticky Navbar */}
                    <div className={`navbar sticky-navbar transition-all duration-300 ${
                        isScrolled ? 'py-2 shadow-lg' : 'py-4'
                    }`}>
                        {/* Mobile menu button */}
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost btn-circle">
                                <Menu size={20} />
                            </label>
                        </div>

                        {/* Logo and brand */}
                        <div className="flex flex-1 items-center gap-3">
                            <Link href="/shop" className="btn btn-ghost hover:bg-transparent p-2">
                                <Image 
                                    width={40} 
                                    height={40} 
                                    src="/logos/channel-logo.png" 
                                    priority 
                                    alt="logo" 
                                    className="w-10 h-10 object-contain" 
                                />
                            </Link>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gradient">Buñuelo Shop</h1>
                                <p className="text-xs text-base-content/70">Equipamiento para motociclistas</p>
                            </div>
                        </div>

                        {/* Desktop navigation */}
                        <div className="hidden lg:flex flex-none">
                            <NavbarLinks />
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-none items-center gap-2">
                            {/* Theme toggle */}
                            <ThemeToggle />

                            {/* User account */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <User size={20} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border">
                                    <li><a>Mi cuenta</a></li>
                                    <li><a>Mis pedidos</a></li>
                                    <li><a>Configuración</a></li>
                                    <div className="divider my-1"></div>
                                    <li><a>Cerrar sesión</a></li>
                                </ul>
                            </div>

                            {/* Shopping cart */}
                            <div className="indicator">
                                {itemsCount > 0 && (
                                    <span className="indicator-item badge badge-primary badge-sm">{itemsCount}</span>
                                )}
                                <label htmlFor="cart-drawer" className="btn btn-ghost btn-circle">
                                    <ShoppingCart size={20} />
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <main className="flex-1">
                        {children}
                    </main>
                </div>

                {/* Mobile sidebar */}
                <div className="drawer-side z-40">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-100 min-h-full w-80 p-4 shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <Image 
                                    width={32} 
                                    height={32} 
                                    src="/logos/channel-logo.png" 
                                    alt="logo" 
                                    className="w-8 h-8" 
                                />
                                <span className="text-lg font-bold">Buñuelo Shop</span>
                            </div>
                            <label htmlFor="my-drawer-3" className="btn btn-ghost btn-sm btn-circle">
                                <X size={16} />
                            </label>
                        </div>
                        <NavbarLinks />
                        <div className="divider"></div>
                        <ul className="menu">
                            <li><a><User size={16} /> Mi cuenta</a></li>
                            <li><a>Mis pedidos</a></li>
                            <li><a>Ayuda</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Shopping cart drawer */}
            <div className="drawer drawer-end">
                <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content"></div>
                <div className="drawer-side z-50">
                    <label htmlFor="cart-drawer" aria-label="close cart" className="drawer-overlay"></label>
                    <div className="bg-base-100 min-h-full w-96 shadow-2xl">
                        <div className="sticky top-0 bg-base-100 border-b p-4 z-10">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <ShoppingCart size={20} />
                                    Carrito de compras
                                </h2>
                                <label htmlFor="cart-drawer" className="btn btn-ghost btn-sm btn-circle">
                                    <X size={16} />
                                </label>
                            </div>
                        </div>
                        <div className="p-4">
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;