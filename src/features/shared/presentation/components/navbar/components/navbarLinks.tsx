import Link from 'next/link';
import React from 'react';
import { NavbarLink } from '../../../entities/navbar-link/navbar-link';

interface NavbarLinksProps {
  links: NavbarLink[];
}

export default function NavbarLinks({ links }: Readonly<NavbarLinksProps>) {
  return (<>
    {links.map((link) => (
      <li key={link.href} className="mx-2 list-none">
        <Link
          href={link.href}
          target=''
          className="text-white hover:text-primary transition-colors"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </>
  )
}
