import { CartItem } from '@/features/shop/domain/entities/cartItem';
import { useCartStore } from '@/features/shop/infrastructure/state/cartStore';
import React from 'react';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';

interface SidebarCartItemProps {
    item: CartItem;
}

function SidebarCartItem({ item }: SidebarCartItemProps) {

    const removeItem = useCartStore(state => state.removeItem);

    return (
        <div key={item.id} className="card card-side bg-base-100 shadow-md">
            <figure className="w-20 h-20 flex-shrink-0 p-2">
                <Image src={item.imageUrl || "/placeholder.png"} alt={item.imageAlt || item.title} className="object-cover rounded-lg w-full h-full" width={50} height={50} loading='lazy' />
            </figure>
            <div className="card-body p-3 flex flex-row items-center gap-2">
                <div className="flex-1">
                    <div className="font-semibold text-base">{item.title}</div>
                    <div className="text-sm text-gray-400">
                        {item.quantity} x <span className="font-bold">{item.currency} {Number(item.price).toFixed(2)}</span>
                    </div>
                </div>
                <button
                    className="btn btn-square btn-outline btn-error btn-xs"
                    aria-label={`Eliminar ${item.title}`}
                    onClick={() => removeItem(item.id)}
                >
                    <Trash2 className='h-4 w-4' />
                </button>
            </div>
        </div>
    )
}

export default SidebarCartItem