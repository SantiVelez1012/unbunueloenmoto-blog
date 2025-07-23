import React from 'react';
import Link from 'next/link';

function NavbarLinks() {
  return (
      <div className="block flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </div>
  )
}

export default NavbarLinks;