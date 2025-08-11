"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/product-card/productCard";
import { mapProductListToViewModel, ProductCardViewModel } from "../../adapters/product-list/productList";
import Loader from "@/features/shared/presentation/components/loader/loader";
import { useCartStore } from "@/features/shop/infrastructure/state/cartStore";
import { CartItem } from "@/features/shop/domain/entities/cartItem";
import { showToast } from "@/features/shared/presentation/utils/triggerToast";
import HeroBannerCarousel from '../../../../shared/presentation/components/hero-banner-carousel/heroBannerCarousel';
import { ShopCopies } from "../../constants/copies";
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
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="text-center">
          <Loader />
          <p className="mt-4 text-base-content/60">Cargando productos increíbles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="alert alert-error max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-bold">Error al cargar productos</h3>
            <div className="text-xs">Intenta de nuevo más tarde</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Banner */}
      <div className="w-full mb-12">
        <HeroBannerCarousel banners={ShopCopies.SHOP_BANNER_CAROUSEL} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Los mejores productos</span>
          </h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Encuentra todo lo que necesitas para acompañar tus recorridos en moto
          </p>
          <div className="flex justify-center mt-6">
            <div className="stats shadow-lg">
              <div className="stat">
                <div className="stat-title">Productos</div>
                <div className="stat-value text-primary">{products.length}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Envío</div>
                <div className="stat-value text-success text-2xl">Gratis</div>
              </div>
              <div className="stat">
                <div className="stat-title">Garantía</div>
                <div className="stat-value text-accent text-2xl">30 días</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple product count */}
        <div className="text-center mb-8">
          <p className="text-base-content/60">
            Mostrando {products.length} productos disponibles
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              image={product.imageUrl || ""} 
              productId={product.id} 
              title={product.title} 
              price={product.maxPrice} 
              onAddToCart={() => {
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
                showToast("¡Producto agregado al carrito!");
              }} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card bg-gradient-primary text-primary-content max-w-2xl mx-auto">
            <div className="card-body text-center">
              <h2 className="card-title text-2xl justify-center">¿No encuentras lo que buscas?</h2>
              <p>Contáctanos y te ayudamos a encontrar el producto perfecto para ti</p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-secondary">Contactar ahora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageTemplate;