import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { extractShopifyNumericId, formatThousands } from '../../../domain/utils/productUtils';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="group font-sans flex flex-col h-full bg-base-200 rounded-2xl overflow-hidden border border-base-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
      >

        <button className="flex flex-col h-full" onClick={goToProductDetail}>
          <div className="relative w-full aspect-[1/1] overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={400}
              height={256}
              priority={true}
            />

          </div>
          <section className='flex flex-col left-4 right-4 bottom-4 pt-4 pb-6 px-2 bg-base-100/90 backdrop-blur-md rounded-t-lg mt-auto'>
            <span
              className="text-lg font-bold cursor-pointer hover:text-base-content/60 transition-colors duration-200">
              {title}
            </span>

            <div className="flex flex-col font-display mt-2">
              <span className="text-2xl font-bold text-base-content">
                ${formatThousands(price)}
              </span>
              <span className="text-sm text-base-content/60">COP</span>
            </div>

            {onAddToCart && (
              <button
                className="btn btn-primary btn-md gap-2 flex-1 ml-2 z-10 mt-4 font-display"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart();
                }}
              >
                <ShoppingCart size={16} />
                Agregar al carrito
              </button>
            )}

          </section>
        </button>
      </motion.div>



      {/* <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
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
          <span
            className="card-title text-lg font-bold text-base-content line-clamp-2 cursor-pointer hover:text-base-content/60 transition-colors duration-200">
            {title}
          </span>
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
      </div> */}
    </>
  );
};