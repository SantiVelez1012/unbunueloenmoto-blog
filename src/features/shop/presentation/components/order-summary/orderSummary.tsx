"use client";

import { useCartStore } from '@/features/shop/infrastructure/state/cartStore'
import React from 'react'
import SummaryCartItem from '../cart-item/summaryCartItem';
import { formatThousands } from '../../../domain/utils/productUtils';

function OrderSummary() {
    const cartItems = useCartStore(state => state.items);
    const total = useCartStore(state => state.total());

    return (
        <section className="bg-base-200 p-6 rounded-box space-y-4">
            <h2 className="text-2xl font-bold">Resumen del pedido</h2>

            {cartItems.map(item => (
                <SummaryCartItem key={item.id} cartItem={item} />
            ))}

            <div className="divider my-2" />
            <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$ {formatThousands(total)}</span>
            </div>
        </section>
    )
}

export default OrderSummary