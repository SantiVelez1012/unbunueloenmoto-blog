import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { extractShopifyNumericId, formatThousands } from '../../../domain/utils/productUtils';
import { ShoppingCart } from 'lucide-react';

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
      router.push(`/shop/products/${numericId}`);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
      <figure className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={256}
          priority={true}
        />
      </figure>

      <div className="card-body p-6">
        <h3
          className="card-title text-lg font-bold text-base-content line-clamp-2 cursor-pointer hover:text-base-content/60 transition-colors duration-200"
          onClick={goToProductDetail}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              goToProductDetail();
            }
          }}
        >
          {title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-base-content">
              ${formatThousands(price)}
            </span>
            <span className="text-sm text-base-content/60">COP</span>
          </div>
        </div>
        <div className="card-actions justify-between items-center mt-4">
          <button
            className="btn btn-outline btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              goToProductDetail();
            }}
          >
            Ver detalles
          </button>
          {onAddToCart && (
            <button
              className="btn btn-primary btn-sm gap-2 flex-1 ml-2"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart();
              }}
            >
              <ShoppingCart size={16} />
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};