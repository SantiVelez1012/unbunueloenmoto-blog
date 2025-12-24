"use client";

import React from 'react';
import NavbarLinks from './navbarLinks';

function MobileMenu() {

  return (
      <span className='menu menu-compact p-4 w-52 absolute mt-[300px] items-center gap-2 px-4 py-2 mb-8 rounded-lg
       bg-base-100/80 backdrop-blur-md border border-white/20 shadow-lg flex'>
        <NavbarLinks links={[]}></NavbarLinks>
      </span>
  )
}

export default MobileMenu;