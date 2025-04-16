import React from 'react'
import NavbarLinks from './components/navbar-links';
import Image from 'next/image';

function Navbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="drawer" data-theme="dark">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
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
                    <div className="flex flex-1 flex-row justify-items-center">
                    
                            <a href="/" className="btn btn-ghost normal-case text-xl">
                                <Image width={40} height={40} src="/logos/channel-logo.png" alt="" className='w-[40px] h-[40px]'/>
                            </a>
                        <div className="mx-0 my-auto">El Blog de Un Buñuelo En Moto</div>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">

                            <NavbarLinks />
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    <NavbarLinks />
                </ul>
            </div>
        </div>
    )
}

export default Navbar