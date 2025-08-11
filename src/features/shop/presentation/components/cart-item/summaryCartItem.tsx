import { CartItem } from '@/features/shop/domain/entities/cartItem';
import React from 'react';
import Image from 'next/image';
import { formatThousands } from '../../../domain/utils/productUtils';
import { useCartStore } from '@/features/shop/infrastructure/state/cartStore';
import { Trash2 } from 'lucide-react';
import { showToast } from '@/features/shared/presentation/utils/triggerToast';

type SummaryCartItemProps = {
    cartItem: CartItem;
}

function SummaryCartItem({ cartItem }: SummaryCartItemProps) {
    const totalPrice = useCartStore(state => state.getTotalPriceByProduct(cartItem.id));
    return (
        <div className="flex items-center gap-4">
            <Image width={64} height={64} className='rounded' src={cartItem.imageUrl || ''} alt={cartItem.imageAlt || ''} />
            <div className="flex-1">
                <p className="font-medium">{cartItem.title}</p>
                <p className="text-sm text-gray-400">Precio unitario: $ {formatThousands(cartItem.price)}</p>
                <p className="text-sm text-gray-500">Cantidad: {cartItem.quantity}</p>
                <section className='mt-2'>
                    <button
                        className="btn btn-xs btn-outline btn-error"
                        aria-label={`Eliminar ${cartItem.title}`}
                        onClick={() => {
                            const removeItem = useCartStore.getState().removeItem;
                            removeItem(cartItem.id);
                            showToast('Producto eliminado del carrito');
                        }}
                    >
                        <Trash2 size={12} />
                        Eliminar
                    </button>
                </section>
            </div>
            <p className="font-semibold">$ {formatThousands(totalPrice)}</p>
        </div>
    )
}

export default SummaryCartItem