"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/product-card/productCard";
import { mapProductListToViewModel, ProductCardViewModel } from "../../adapters/product-list/productList";
import Loader from "@/features/shared/presentation/components/loader/loader";
import { useCartStore } from "@/features/shop/infrastructure/state/cartStore";
import { CartItem } from "@/features/shop/domain/entities/cartItem";
import { showToast } from "@/features/shared/presentation/utils/triggerToast";

function HomePageTemplate() {

  const addItem = useCartStore(state => state.addItem);

  const [products, setProducts] = useState<ProductCardViewModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(mapProductListToViewModel(data));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Error loading products. Please try again later.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center mb-10">
      <div className="hero bg-base-200 mt-12 mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bienvenid@ a la Tienda Buñuela</h1>
            <p className="mt-6 mb-2">Descubre nuestra amplia colección de productos para tus recorridos en moto</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} image={product.imageUrl || ""} productId={product.id} title={product.title} price={product.maxPrice} onAddToCart={() => {
              const cartItem: CartItem = {
                id: product.id,
                title: product.title,
                price: product.maxPrice,
                quantity: 1,
                imageUrl: product.imageUrl || "",
                imageAlt: product.imageAlt || null,
                handle: product.handle || "",
                currency: product.currency || "COP",
              };
              addItem(cartItem);
              showToast("Producto agregado al carrito");
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageTemplate;