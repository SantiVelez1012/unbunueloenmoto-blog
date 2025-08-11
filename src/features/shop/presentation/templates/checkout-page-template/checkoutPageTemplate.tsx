"use client"

import React, { useState } from 'react'
import { ShoppingBag, ArrowLeft, CreditCard, CheckCircle, AlertCircle } from 'lucide-react'
import OrderSummary from '../../components/order-summary/orderSummary'
import CheckoutForm from '../../components/checkout-form/checkoutForm'
import { useCartStore } from '@/features/shop/infrastructure/state/cartStore'
import Link from 'next/link'
import { CheckoutFormInputs } from '../../models/checkoutModel';
import { useRouter } from 'next/navigation';
import { showToast } from '@/features/shared/presentation/utils/triggerToast';

function CheckoutPageTemplate() {
    const itemsCount = useCartStore((state) => state.items).length;
    const items = useCartStore(state => state.items);
    const { clearCart } = useCartStore(state => state);

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [orderStatus, setOrderStatus] = useState<'idle' | 'success' | 'error'>('idle');

    function sendInfo(data: CheckoutFormInputs) {
        setIsLoading(true);
        setOrderStatus('idle');
        
        // Simulate order processing
        setTimeout(() => {
            try {
                // Mock successful order creation
                console.log('Order data:', { customerData: data, items });
                
                setOrderStatus('success');
                clearCart();
                showToast('¡Pedido realizado con éxito! 🎉');
                
                // Redirect after success
                setTimeout(() => {
                    router.push('/shop');
                }, 3000);
                
            } catch (error) {
                console.error('Order error:', error);
                setOrderStatus('error');
                showToast('Error al procesar el pedido. Intenta de nuevo.', 'error');
            } finally {
                setIsLoading(false);
            }
        }, 2000);
    }

    if (itemsCount === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag size={32} className="text-base-content/40" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
                    <p className="text-lg text-base-content/70 mb-8">
                        Agrega algunos productos increíbles antes de proceder con la compra.
                    </p>
                    <Link href="/shop" className="btn btn-primary btn-modern gap-2">
                        <ArrowLeft size={16} />
                        Volver a la tienda
                    </Link>
                </div>
            </div>
        );
    }

    // Success state
    if (orderStatus === 'success') {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} className="text-success" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4 text-success">¡Pedido Exitoso!</h1>
                    <p className="text-lg text-base-content/70 mb-4">
                        Tu pedido ha sido procesado correctamente.
                    </p>
                    <p className="text-base-content/60 mb-8">
                        Recibirás un email con los detalles. Recuerda que el pago es contraentrega.
                    </p>
                    <Link href="/shop" className="btn btn-primary btn-modern gap-2">
                        <ArrowLeft size={16} />
                        Continuar comprando
                    </Link>
                </div>
            </div>
        );
    }

    // Error state
    if (orderStatus === 'error') {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="w-24 h-24 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle size={32} className="text-error" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4 text-error">Error en el pedido</h1>
                    <p className="text-lg text-base-content/70 mb-8">
                        Ocurrió un error al procesar tu pedido. Por favor, intenta de nuevo.
                    </p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setOrderStatus('idle')} 
                            className="btn btn-primary btn-modern"
                        >
                            Intentar de nuevo
                        </button>
                        <Link href="/shop" className="btn btn-ghost">
                            Volver a la tienda
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Link href="/shop" className="btn btn-ghost btn-circle">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <CreditCard size={28} />
                        Finalización de compra
                    </h1>
                    <p className="text-base-content/70 mt-1">
                        Completa tu información para procesar tu pedido
                    </p>
                </div>
            </div>

            {/* Info banner */}
            <div className="alert alert-info mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                    <h3 className="font-bold">Pago contraentrega</h3>
                    <div className="text-xs">Todos los envíos son contraentrega. Pagas cuando recibas tu pedido. Los costos de envío se calculan según la ubicación.</div>
                </div>
            </div>

            {/* Loading overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="card bg-base-100 shadow-2xl">
                        <div className="card-body text-center">
                            <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
                            <h3 className="text-lg font-bold">Procesando tu pedido...</h3>
                            <p className="text-base-content/70">Por favor espera un momento</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Checkout content */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1">
                    <CheckoutForm submit={sendInfo} />
                </div>
                <div className="order-1 lg:order-2">
                    <div className="sticky top-24">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPageTemplate;