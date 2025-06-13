"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/product-card/productCard";
import { mapProductListToViewModel, ProductCardViewModel } from "../../adapters/product-list/productList";
import Loader from "@/features/shared/presentation/components/loader/loader";

function HomePageTemplate() {
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

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Error loading products</div>}
      <ul>
        {products.map((product) => (

          <ProductCard
            key={product.id}
            image={product.imageUrl || ""}
            title={product.title}
            price={product.maxPrice}
            onAddToCart={() => alert('Added to cart!')}
          />
        ))}
      </ul>
    </>
  );
}

export default HomePageTemplate;