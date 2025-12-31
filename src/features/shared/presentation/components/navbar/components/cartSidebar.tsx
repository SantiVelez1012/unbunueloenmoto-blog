"use client";

import Cart from "@/features/shop/presentation/components/cart/cart";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: Readonly<CartSidebarProps>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. OVERLAY (FONDO OSCURO) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* 2. PANEL LATERAL (DRAWER) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[100] h-full w-full sm:w-[400px] bg-base-200 border-l border-white/5 shadow-2xl flex flex-col"
          >
            
            {/* Header del Carrito */}
            <div className="flex items-center justify-between p-5 border-b border-white/5 bg-base-200/50 backdrop-blur-xl sticky top-0 z-10">
              <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
                <ShoppingCart className="text-primary" size={20} />
                Tu Carrito
              </h2>
              <button 
                onClick={onClose}
                className="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-white hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Contenido Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              <Cart />
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}