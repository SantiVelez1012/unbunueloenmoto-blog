import React from 'react';
import Image from 'next/image';

interface LoaderProps {
  fullScreen?: boolean;
}

function Loader({ fullScreen = true }: Readonly<LoaderProps>) {
  return (
    <div 
      className={`w-full flex justify-center items-center bg-base-100/50 backdrop-blur-sm z-50
        ${fullScreen ? 'min-h-[100dvh] fixed inset-0' : 'h-full min-h-[200px]'}
      `}
    >
      <div className="relative flex items-center justify-center">
        
        <div className="absolute w-24 h-24 rounded-full border-4 border-white/5 border-t-primary animate-spin duration-[1.5s]" />
        
        <div className="absolute w-16 h-16 rounded-full border-2 border-white/5 border-b-white/20 animate-spin direction-reverse duration-[3s]" style={{ animationDirection: 'reverse' }} />

        <div className="relative w-10 h-10 animate-pulse">
           <Image 
             src="/logos/channel-logo.png" 
             alt="Cargando..." 
             fill
             className="object-contain"
             priority
           />
        </div>

        <span className="absolute text-center font-display mt-60 text-xs font-bold tracking-[0.2em] text-gray-500 animate-pulse">
          CALENTANDO MOTORES...
        </span>

      </div>
    </div>
  )
}

export default Loader;