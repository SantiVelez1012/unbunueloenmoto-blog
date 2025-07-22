"use client";

import { useCartStore } from '@/features/shop/infrastructure/state/cartStore';
import Image from 'next/image';
import React from 'react';
import { ProductViewModel } from '../../adapters/product-details/productDetails';
import { CartItem } from '@/features/shop/domain/entities/cartItem';
import { showToast } from '@/features/shared/presentation/utils/triggerToast';

type ProductDetailsTemplateProps = {
    product: ProductViewModel;
}

function ProductDetailsTemplate({ product }: ProductDetailsTemplateProps) {

    const addItem = useCartStore(state => state.addItem);


    return (
        <div className="min-h-[100dvh] bg-base-200 flex items-center justify-center pb-10">
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
                            onClick={() => {
                                const cartItem: CartItem = {
                                    id: product.id,
                                    title: product.title,
                                    handle: product.handle || "",
                                    imageUrl: product.imageUrl || "",
                                    imageAlt: product.imageAlt || null,
                                    price: product.price.max as unknown as number,
                                    currency: product.price.currency,
                                    quantity: 1
                                };
                                addItem(cartItem);
                                showToast("Producto agregado al carrito");
                            }}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsTemplate