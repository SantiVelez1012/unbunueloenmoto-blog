'use client';

import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useCarousel } from './hooks/useCarousel';

interface CarouselProps {
  children: React.ReactNode[];
  autoSlideInterval?: number;
  showNavigation?: boolean;
  showIndicators?: boolean;
  showPlayPause?: boolean;
  showProgress?: boolean;
  loop?: boolean;
  className?: string;
}

function Carousel({ 
  children, 
  autoSlideInterval = 5000, 
  showNavigation = true, 
  showIndicators = false,
  showPlayPause = false,
  showProgress = false,
  loop = true,
  className = '' 
}: CarouselProps) {
  const totalSlides = children.length;
  
  const {
    currentSlide,
    isPlaying,
    isHovered,
    setIsHovered,
    nextSlide,
    prevSlide,
    goToSlide,
    toggle,
    canGoNext,
    canGoPrev
  } = useCarousel({ 
    totalSlides, 
    autoSlideInterval, 
    loop 
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && canGoPrev) {
        prevSlide();
      } else if (event.key === 'ArrowRight' && canGoNext) {
        nextSlide();
      } else if (event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggle, canGoNext, canGoPrev]);

  if (totalSlides === 0) {
    return null;
  }

  return (
    <div 
      className={`relative w-full overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main carousel container */}
      <div className="relative w-full h-full">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {showNavigation && totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`btn btn-circle absolute left-4 top-1/2 -translate-y-1/2 z-20 
              bg-black/30 hover:bg-black/50 border-none text-white
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              ${!canGoPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`btn btn-circle absolute right-4 top-1/2 -translate-y-1/2 z-20 
              bg-black/30 hover:bg-black/50 border-none text-white
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              ${!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Play/Pause button */}
      {showPlayPause && totalSlides > 1 && (
        <button
          onClick={toggle}
          className="btn btn-circle absolute top-4 right-4 z-20 
            bg-black/30 hover:bg-black/50 border-none text-white
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      )}

      {/* Slide indicators */}
      {showIndicators && totalSlides > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Progress indicator */}
      {showProgress && autoSlideInterval > 0 && isPlaying && !isHovered && totalSlides > 1 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
          <div 
            className="h-full bg-gradient-to-r from-white/60 to-white/80 transition-all duration-100 ease-linear"
            style={{
              animation: `carousel-progress ${autoSlideInterval}ms linear infinite`
            }}
          />
        </div>
      )}

      {/* Slide counter */}
      {totalSlides > 1 && (
        <div className="absolute top-4 left-4 z-20 
          bg-black/30 text-white px-3 py-1 rounded-full text-sm font-medium
          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}
    </div>
  );
}

export default Carousel;