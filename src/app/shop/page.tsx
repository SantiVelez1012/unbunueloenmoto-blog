'use client';
import { ProductCard } from '@/features/shop/presentation/components/product-card/productCard';

function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <ProductCard
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nnnGOgNY-TlLlrN_UsOTllJDWbjflnGIHg&s"
        title="Delicious Bun"
        price={4.99}
        description="A freshly baked bun, perfect for your morning coffee. Soft, warm, and irresistible!"
        onAddToCart={() => alert('Added to cart!')}
      />
    </div>
  );
}

export default Page;