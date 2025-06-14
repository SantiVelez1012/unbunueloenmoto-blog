import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  onAddToCart,
}) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-4 max-w-xs flex flex-col items-center">
    <Image
      src={image}
      alt={title}
      className="w-full h-[250px] object-cover rounded-md mb-3"
      width={176}
      height={176}
      priority={true}
    />
    <div className="text-lg font-semibold mb-1 text-center text-gray-100">{title}</div>
    <div className="text-green-400 font-bold text-base my-2">${price}</div>
    {onAddToCart && (
      <button
        className="mt-auto px-4 py-2 bg-blue-500 text-gray-100 rounded hover:bg-blue-600 font-semibold transition-colors"
        onClick={onAddToCart}
      >
        Agregar al carrito
      </button>
    )}
  </div>
);
