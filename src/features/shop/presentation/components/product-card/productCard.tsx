import React from 'react';
// import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description?: string;
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  // image,
  title,
  price,
  description,
  onAddToCart,
}) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-4 max-w-xs flex flex-col items-center">
    {/* <Image
      src={image}
      alt={title}
      className="w-full h-44 object-cover rounded-md mb-3"
      width={176}
      height={176}
    /> */}
    <div className="text-lg font-semibold mb-1 text-center text-gray-100">{title}</div>
    <div className="text-green-400 font-bold text-base mb-2">${price.toFixed(2)}</div>
    {description && (
      <div className="text-gray-300 text-sm mb-3 text-center">{description}</div>
    )}
    {onAddToCart && (
      <button
        className="mt-auto px-4 py-2 bg-blue-500 text-gray-100 rounded hover:bg-blue-600 font-semibold transition-colors"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
    )}
  </div>
);
