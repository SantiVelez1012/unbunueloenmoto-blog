import React from 'react';
import { HeroBannerInfo } from '../../entities/hero-banner-info/heroBannerInfo';
import HeroBanner from '../hero-banner/heroBanner';

type parallaxHeroBannerProps = {
    bannerInfo: HeroBannerInfo[];
};

function ParallaxHeroBanner({ bannerInfo } : Readonly<parallaxHeroBannerProps> ) {
  return (
    <div className="parallax-hero-banner">
        {bannerInfo.map((info, index) => (
            <HeroBanner key={index + 1} info={info} />
        ))}
    </div>
  );
};

export default ParallaxHeroBanner;