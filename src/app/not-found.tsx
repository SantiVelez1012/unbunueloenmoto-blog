import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function NotFound() {
  return (
    <main className='min-h-100dvh min-h-screen items-center gap-10 justify-center flex flex-col'>

      <Image src={'/imgs/not-found.png'} alt={'Página no encontrada'} width={200} height={300} priority/>


      <div className='flex flex-col self-center items-center justify-center'>
        <h1 className='text-4xl font-bold'>Error 404 - Buñuelo no encontrado</h1>
        <p className='my-4 text-lg'>La página que estás buscando no existe.</p>

        <Link href={'/'} className="btn btn-warning btn-lg">Volver al Inicio</Link>

      </div>

    </main>
  )
}

export default NotFound