import React from 'react';
import Image from 'next/image';

function HeroBanner() {
    return (
        <div
            className="hero min-h-[600px] h-full bg-base-300 relative"
        >
            <Image src={'/imgs/hero-banner.jpg'} alt={'Hero banner'} fill priority className='min-h-[600px] z-0 bg-cover object-cover' loading='eager'  />
            <div className="hero-overlay z-1"></div>
            <div className="hero-content text-neutral-content text-center z-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-amber-50">El Blog de Un Buñuelo en Moto</h1>
                    <p className="mb-5 text-amber-50">
                        Aquí próximamente encontrarás diversas páginas relacionadas a las motos, a los viajes y temas variados!!, espera mucho más en esta web!!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner