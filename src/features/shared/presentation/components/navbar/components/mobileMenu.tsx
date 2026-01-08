"use client";

import React from 'react';
import NavbarLinks from './navbarLinks';
import { NavbarLink } from '../../../entities/navbar-link/navbar-link';

interface MobileMenuProps {
    links: NavbarLink[];
}
function MobileMenu({links} : Readonly<MobileMenuProps>) {

  return (
      <span className='menu menu-compact w-52 absolute mt-24 items-center gap-2 px-4 mb-8 rounded-lg
       bg-base-100/80 backdrop-blur-md border border-white/20 shadow-lg flex'>
        <NavbarLinks links={links}></NavbarLinks>
      </span>
  )
}

export default MobileMenu;