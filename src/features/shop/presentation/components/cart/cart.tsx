import { useCartStore } from '@/features/shop/infrastructure/state/cart.store';
import React from 'react';
import SidebarCartItem from '../cart-item/sidebarCartItem';

function Cart() {
    const items = useCartStore(state => state.items);
    const total = useCartStore(state => state.total());
    

    return (
        <div className="w-full max-w-sm min-h-full bg-base-200 text-base-content flex flex-col">
            {items.length === 0 ? (
                <div className="alert alert-success flex items-center mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                    Tu carrito está vacío.
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh]">
                        {items.map(item => (
                            <SidebarCartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="divider my-2"></div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-xl font-bold">{items[0]?.currency}$ {total}</span>
                    </div>
                    <button className="btn btn-primary btn-block mt-4">Finalizar compra</button>
                </>
            )}
        </div>
    );
}

export default Cart;