import { mapProductDetailsToViewModel, ProductViewModel } from "@/features/shop/presentation/adapters/product-details/productDetails";
import React from "react";
import ProductDetailsTemplate from "@/features/shop/presentation/templates/product-details-template/productDetailsTemplate";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>
};

async function getProduct(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const res = await fetch(
    `${baseUrl}/api/products/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("No se pudo cargar el producto");
  return res.json();
}

export default async function Page({ params }: ProductDetailPageProps) {
  const { id } = await params;
  let product: ProductViewModel;
  try {
    const productResponse = await getProduct(id);
    product = mapProductDetailsToViewModel(productResponse);
  } catch {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="alert alert-error">
          <span>No se pudo cargar el producto.</span>
        </div>
      </div>
    );
  }

  return (
    <ProductDetailsTemplate product={product} />
  );
}