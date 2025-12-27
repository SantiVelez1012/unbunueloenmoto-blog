"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SimplePaginationProps {
  currentPage: number;
  isLastPage: boolean;
  onPageChange: (page: number) => void;
}

export default function SimplePagination({ 
  currentPage, 
  isLastPage, 
  onPageChange 
}: Readonly<SimplePaginationProps>) {
  
  return (
    <div className="flex justify-center mt-16 mb-12">
      <div className="inline-flex items-center p-1 bg-base-200 border border-white/5 rounded-full shadow-2xl shadow-black/50">
        
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={`
            w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200
            ${currentPage <= 1 
              ? "text-gray-600 cursor-not-allowed" 
              : "text-white hover:bg-white/10 hover:text-primary active:scale-95"
            }
          `}
          aria-label="Página anterior"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="flex items-center gap-2 px-6 border-x border-white/5 mx-1">
          <span className="text-xs font-medium text-gray-500 tracking-widest font-sans">Página</span>
          <span className="text-xl font-display font-bold text-white min-w-[1.5rem] text-center">
            {currentPage}
          </span>
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          className={`
            w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200
            ${isLastPage 
              ? "text-gray-600 cursor-not-allowed" 
              : "text-white hover:bg-white/10 hover:text-primary active:scale-95"
            }
          `}
          aria-label="Página siguiente"
        >
          <ChevronRight size={22} />
        </button>

      </div>
    </div>
  );
}