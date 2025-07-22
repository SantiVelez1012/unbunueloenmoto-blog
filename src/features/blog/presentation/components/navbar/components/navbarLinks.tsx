import Link from 'next/link'
import React from 'react'

export default function NavbarLinks() {
  return (
    <>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/blog/all'>Articulos de blog</Link></li>
      <li><Link href='/shop'>Tienda Buñuela</Link></li>
    </>
  )
}
