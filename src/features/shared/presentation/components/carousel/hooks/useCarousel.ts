import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselOptions {
  totalSlides: number;
  autoSlideInterval?: number;
  loop?: boolean;
}

export function useCarousel({ 
  totalSlides, 
  autoSlideInterval = 5000, 
  loop = true 
}: UseCarouselOptions) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (loop) {
        return (prev + 1) % totalSlides;
      }
      return prev < totalSlides - 1 ? prev + 1 : prev;
    });
  }, [totalSlides, loop]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (loop) {
        return (prev - 1 + totalSlides) % totalSlides;
      }
      return prev > 0 ? prev - 1 : prev;
    });
  }, [totalSlides, loop]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying && !isHovered && autoSlideInterval > 0 && totalSlides > 1) {
      intervalRef.current = setInterval(nextSlide, autoSlideInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide, autoSlideInterval, isPlaying, isHovered, totalSlides]);

  return {
    currentSlide,
    isPlaying,
    isHovered,
    setIsHovered,
    nextSlide,
    prevSlide,
    goToSlide,
    play,
    pause,
    toggle,
    canGoNext: loop || currentSlide < totalSlides - 1,
    canGoPrev: loop || currentSlide > 0,
  };
}