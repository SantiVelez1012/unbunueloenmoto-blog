import { useCartStore } from '@/features/shop/infrastructure/state/cartStore';
import React from 'react';
import { ShoppingBag, CreditCard } from 'lucide-react';
import SidebarCartItem from '../cart-item/sidebarCartItem';
import Link from 'next/link';

function Cart() {
    const items = useCartStore(state => state.items);
    const total = useCartStore(state => state.total());

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-base-content/40" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tu carrito está vacío</h3>
                <p className="text-base-content/60 mb-6">
                    Agrega algunos productos increíbles a tu carrito
                </p>
                <Link 
                    href="/shop" 
                    className="btn btn-primary btn-modern"
                    onClick={() => {
                        const drawerCheckbox = document.getElementById('cart-drawer') as HTMLInputElement | null;
                        if (drawerCheckbox) drawerCheckbox.checked = false;
                    }}
                >
                    Explorar productos
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-6">
                {items.map(item => (
                    <SidebarCartItem key={item.id} item={item} />
                ))}
            </div>

            {/* Cart summary */}
            <div className="border-t pt-4 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center text-sm">
                    <span className="text-base-content/70">Subtotal</span>
                    <span className="font-medium">{items[0]?.currency}$ {total.toLocaleString()}</span>
                </div>
                
                {/* Shipping */}
                <div className="flex justify-between items-center text-sm">
                    <span className="text-base-content/70">Envío</span>
                    <span className="font-medium text-info">Contraentrega</span>
                </div>

                <div className="divider my-2"></div>

                {/* Total */}
                <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">{items[0]?.currency}$ {total.toLocaleString()}</span>
                </div>

                {/* Checkout button */}
                <Link
                    href="/shop/checkout"
                    className="btn btn-primary btn-block btn-modern gap-2"
                    onClick={() => {
                        const drawerCheckbox = document.getElementById('cart-drawer') as HTMLInputElement | null;
                        if (drawerCheckbox) drawerCheckbox.checked = false;
                    }}
                >
                    <CreditCard size={16} />
                    Finalizar compra
                </Link>

                {/* Continue shopping */}
                <Link
                    href="/shop"
                    className="btn btn-ghost btn-block btn-sm"
                    onClick={() => {
                        const drawerCheckbox = document.getElementById('cart-drawer') as HTMLInputElement | null;
                        if (drawerCheckbox) drawerCheckbox.checked = false;
                    }}
                >
                    Continuar comprando
                </Link>
            </div>
        </div>
    );
}

export default Cart;