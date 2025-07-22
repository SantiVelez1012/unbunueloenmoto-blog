"use client"

import React from 'react'
import OrderSummary from '../../components/order-summary/orderSummary'
import CheckoutForm from '../../components/checkout-form/checkoutForm'
import { useCartStore } from '@/features/shop/infrastructure/state/cartStore'
import Link from 'next/link'

function CheckoutPageTemplate() {
    const itemsCount = useCartStore((state) => state.items).length;


    if(itemsCount === 0) {
        return (
            <section className='min-h-[80dvh] flex flex-col items-center justify-center gap-0 mt-10'>
                <h1 className="text-3xl font-bold mb-10 text-center">Tu carrito está vacío</h1>
                <p className='text-lg font-medium mb-10 text-center'>Agrega productos a tu carrito para proceder con la compra.</p>
                <Link href={'/shop'} className='btn btn-warning'> Volver al inicio </Link>
            </section>
        )
    }

    return (
        <section className='my-10'>
            <h1 className="text-3xl font-bold mb-10 text-center">Finalización de compra</h1>

            <span>
                <p className='text-lg font-medium mb-10 text-center'>Recuerda que todos los envíos son contraentrega, asi que el pago lo haces cuando recibas tu pedido</p>
            </span>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                <CheckoutForm />
                <OrderSummary />
            </div>
        </section>
    )
}

export default CheckoutPageTemplate