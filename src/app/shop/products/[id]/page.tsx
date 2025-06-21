import { mapProductDetailsToViewModel, ProductViewModel } from "@/features/shop/presentation/adapters/product-details/productDetails";
import React from "react";
import Image from "next/image";

interface ProductDetailPageProps {
  params: { id: string };
}

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
  let product: ProductViewModel;
  try {
    const productResponse = await getProduct(params.id);
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
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-10">
      <div className="container mx-auto max-w-6xl bg-base-100 rounded-lg shadow-lg border border-base-300 p-0 md:p-8 flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="bg-base-100 rounded-lg border border-base-300 shadow p-4 w-full max-w-lg">
            <Image src={product.imageUrl || "/placeholder.png"} width={600} height={600}
              alt={product.imageAlt || product.title} className="rounded-lg w-full object-contain aspect-square bg-white" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-3 mt-4 w-full max-w-lg">

            <div className="mb-2 flex items-center gap-2">
              {product.isAvailable ? (
                <span className="badge badge-success badge-outline">Disponible</span>
              ) : (
                <span className="badge badge-error badge-outline">Agotado</span>
              )}
              <span className="text-xs text-gray-400">SKU: {product.id.split("/").pop()}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              ${product.price.max} {product.price.currency}
            </div>

          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start px-2 md:sticky md:top-10">

          <div className="mb-6">
            {product.descriptionHtml ? (
              <div
                className="prose prose-invert max-w-none text-base"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml || "" }}
              />
            ) : (
              <p className="text-base">{product.description}</p>
            )}
          </div>
          <div className="flex items-center gap-3 mb-6">
            <label htmlFor="quantity" className="text-sm font-medium">Cantidad:</label>
            <input
              id="quantity"
              type="number"
              min={1}
              defaultValue={1}
              className="input input-bordered input-sm w-20"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="btn btn-outline btn-lg w-full font-bold text-lg"
              disabled={!product.isAvailable}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}