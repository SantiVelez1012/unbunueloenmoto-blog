import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { extractShopifyNumericId, formatThousands } from '../../../domain/utils/productUtils';

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
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const goToProductDetail = () => {
    if (productId) {
      const numericId = extractShopifyNumericId(productId);
      router.push(`/shop/products/${numericId}`);
    }
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate loading
      onAddToCart();
      setIsLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-lg hover-lift group cursor-pointer border border-base-300">
      <figure className="relative overflow-hidden aspect-square">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={300}
          height={300}
          priority={false}
          onClick={goToProductDetail}
        />
        
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            className="btn btn-circle btn-primary btn-sm glass-card"
            onClick={goToProductDetail}
            aria-label={`Ver detalles de ${title}`}
          >
            <Eye size={16} />
          </button>
          <button
            className={`btn btn-circle btn-sm glass-card ${isLiked ? 'btn-error' : 'btn-ghost'}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            aria-label={isLiked ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <div className="badge badge-primary badge-sm">Nuevo</div>
        </div>
      </figure>

      <div className="card-body p-4">
        <h3 
          className="card-title text-base font-semibold line-clamp-2 cursor-pointer hover:text-primary transition-colors"
          onClick={goToProductDetail}
        >
          {title}
        </h3>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">
              ${formatThousands(price)}
            </span>
            <span className="text-sm text-base-content/60 line-through">
              ${formatThousands(Math.floor(price * 1.2))}
            </span>
          </div>
          
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name={`rating-${productId}`}
                className="mask mask-star-2 bg-warning"
                defaultChecked={star === 4}
                readOnly
              />
            ))}
          </div>
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-sm text-base-content/60">
            <span>🏍️</span>
            <span>Para motociclistas</span>
          </div>
          
          {onAddToCart && (
            <button
              className={`btn btn-primary btn-sm btn-modern gap-2 ${isLoading ? 'loading' : ''}`}
              onClick={handleAddToCart}
              disabled={isLoading}
            >
              {!isLoading && <ShoppingCart size={14} />}
              {isLoading ? 'Agregando...' : 'Agregar'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};