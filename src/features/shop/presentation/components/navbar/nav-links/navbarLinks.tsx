import React from 'react';
import Link from 'next/link';
import { Home, BookOpen } from 'lucide-react';

function NavbarLinks() {
  const links = [
    { href: '/shop', label: 'Tienda', icon: Home, disabled: false },
    { href: '/', label: 'Blog', icon: BookOpen, disabled: false },
  ];

  const disabledLinks = [
    { label: 'Nosotros', disabled: true },
    { label: 'Contacto', disabled: true },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-1">
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="btn btn-ghost btn-sm lg:btn-md justify-start lg:justify-center gap-2 text-base-content hover:text-primary transition-colors"
          >
            <IconComponent size={16} />
            <span>{link.label}</span>
          </Link>
        );
      })}
      
      {disabledLinks.map((link, index) => (
        <button
          key={index}
          disabled
          className="btn btn-ghost btn-sm lg:btn-md justify-start lg:justify-center gap-2 text-base-content/40 cursor-not-allowed"
          title="Próximamente disponible"
        >
          <span>{link.label}</span>
        </button>
      ))}
    </div>
  );
}

export default NavbarLinks;