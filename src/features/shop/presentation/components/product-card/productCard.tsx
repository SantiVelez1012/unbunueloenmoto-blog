import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { extractShopifyNumericId, formatThousands } from '../../utils/productUtils';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  productId?: string;
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  productId,
  onAddToCart,
}) => {
  const router = useRouter();

  const goToProductDetail = () => {
    if (productId) {
      const numericId = extractShopifyNumericId(productId);
      router.push(`/products/${numericId}`);
    }
  };

  return (
    <div
      className="bg-gray-900 border border-gray-700 rounded-lg shadow-md p-4 max-w-xs flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={goToProductDetail}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${title}`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToProductDetail();
        }
      }}
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover rounded-md mb-3 group-hover:opacity-90 transition-opacity"
        width={176}
        height={176}
        priority={true}
      />
      <div className="text-lg font-semibold mb-1 text-center text-gray-100">{title}</div>
      <div className="text-green-400 font-bold text-base my-2">${formatThousands(price)}</div>
      {onAddToCart && (
        <button
          className="mt-auto px-4 py-2 cursor-pointer bg-blue-500 text-gray-100 rounded hover:bg-blue-600 font-semibold transition-colors z-10"
          onClick={e => {
            e.stopPropagation();
            onAddToCart();
          }}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
