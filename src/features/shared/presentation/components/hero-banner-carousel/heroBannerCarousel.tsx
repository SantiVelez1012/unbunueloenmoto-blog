import React from 'react';
import { HeroBannerInfo } from '../../entities/hero-banner-info/heroBannerInfo';
import HeroBanner from '../hero-banner/heroBanner';
import { Carousel } from '../carousel';

type HeroBannerCarouselProps = {
    banners: HeroBannerInfo[];
}

function HeroBannerCarousel({ banners }: HeroBannerCarouselProps) {
    return (
        <Carousel>
            {banners.map((banner, index) => (
                <HeroBanner info={banner} key={index} />
            ))}

        </Carousel>
    )
}

export default HeroBannerCarousel;