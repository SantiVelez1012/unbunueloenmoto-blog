import React from 'react';
import Image from 'next/image';
import { HeroBannerInfo } from '../../models/hero-banner-info/heroBannerInfo';

type HeroBannerProps = {
    info: HeroBannerInfo;
}

function HeroBanner({ info }: HeroBannerProps) {
    return (
        <div
            className="hero min-h-[600px] h-full bg-base-300 relative"
        >
            <Image src={info.imageUrl} alt={info.imageAlt} fill priority className='min-h-[600px] w-full z-0 bg-cover object-cover' />
            <div className="hero-overlay z-1"></div>
            <div className="hero-content text-neutral-content text-center z-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-amber-50"> {info.title} </h1>
                    <p className="mb-5 text-amber-50">
                        {info.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner