import React from 'react';
import { showToast } from '@/features/shared/presentation/utils/triggerToast';

import { useCartStore } from '@/features/shop/infrastructure/state/cartStore';
import { Trash2 } from 'lucide-react';
import { CartItem } from '@/features/shop/domain/entities/cartItem';

type RemoveFromCartButtonProps = {
    item: CartItem;
}

function RemoveFromCartButton({ item }: RemoveFromCartButtonProps) {
    const removeItem = useCartStore(state => state.removeItem);
    return (
        <button
            className="btn btn-square btn-outline btn-error btn-xs"
            aria-label={`Eliminar ${item.title}`}
            onClick={() => {
                removeItem(item.id);
                showToast('Producto eliminado del carrito', 'error');
            }}
        >
            <Trash2 className='h-4 w-4' />
        </button>
    )
}

export default RemoveFromCartButton