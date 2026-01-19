"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { AboutCopies } from "../../constants/copies/copies";
import { StorySectionData } from "../../entities/storySection";

interface StorySectionProps {
  data: StorySectionData;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function StorySection({ data, index, total, scrollYProgress }: Readonly<StorySectionProps>) {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  let opacityRange = [0, 1, 1, 0];
  if (isFirst) opacityRange = [1, 1, 1, 0];
  if (isLast) opacityRange = [0, 1, 1, 1];

  const opacity = useTransform(
    scrollYProgress,
    [start, start + (step * 0.1), end - (step * 0.1), end],
    opacityRange
  );
  
  const scale = useTransform(scrollYProgress, [start, end], [1, 1.05]);

  return (
    <motion.div
      style={{ opacity, zIndex: index }}
      className="absolute inset-0 w-full h-full"
    >
      <div className="absolute inset-0 bg-base-100">
        <motion.div style={{ scale }} className="relative w-full h-full">
          <Image
            src={data.img}
            alt={data.title}
            fill
            className={`object-cover opacity-60`}
            priority={isFirst}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
      </div>

      <div className={`relative z-10 container mx-auto h-full flex flex-col ${data.align} px-6 pb-20 md:pb-0 justify-center`}>
        <div className="max-w-xl">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {data.title}
            </h3>
            <p className="text-lg font-sans md:text-xl text-gray-200 leading-relaxed font-light drop-shadow-md">
                {data.text}
            </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function StoryScroller() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          
        {AboutCopies.STORY_SECTIONS.map((section, index) => (
          <StorySection
            key={section.id}
            data={section}
            index={index}
            total={AboutCopies.STORY_SECTIONS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}

        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/10 rounded-full overflow-hidden hidden md:block z-20">
            <motion.div 
                style={{ scaleY: scrollYProgress }} 
                className="w-full h-full bg-primary origin-top"
            />
        </div>

      </div>
    </div>
  );
}