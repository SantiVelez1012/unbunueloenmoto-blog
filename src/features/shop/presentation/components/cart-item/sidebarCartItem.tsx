import { CartItem } from '@/features/shop/domain/entities/cartItem';
import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatThousands } from '../../../domain/utils/productUtils';
import { useCartStore } from '@/features/shop/infrastructure/state/cartStore';

interface SidebarCartItemProps {
    item: CartItem;
}

function SidebarCartItem({ item }: SidebarCartItemProps) {
    const { removeItem, addItem } = useCartStore();

    const handleIncrement = () => {
        addItem({ ...item, quantity: 1 });
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            addItem({ ...item, quantity: -1 });
        } else {
            removeItem(item.id);
        }
    };

    const handleRemove = () => {
        removeItem(item.id);
    };

    return (
        <div className="card card-side bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <figure className="w-20 h-20 flex-shrink-0 p-2">
                <Image 
                    src={item.imageUrl || "/placeholder.png"} 
                    alt={item.imageAlt || item.title} 
                    className="object-cover rounded-lg w-full h-full" 
                    width={80} 
                    height={80} 
                    loading='lazy' 
                />
            </figure>
            
            <div className="card-body p-3 flex flex-col justify-between">
                <div>
                    <h4 className="font-semibold text-sm line-clamp-2 mb-1">{item.title}</h4>
                    <p className="text-primary font-bold text-sm">
                        {item.currency} ${formatThousands(item.price)}
                    </p>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-1">
                        <button
                            className="btn btn-xs btn-circle btn-ghost"
                            onClick={handleDecrement}
                            aria-label="Disminuir cantidad"
                        >
                            <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                        </span>
                        <button
                            className="btn btn-xs btn-circle btn-ghost"
                            onClick={handleIncrement}
                            aria-label="Aumentar cantidad"
                        >
                            <Plus size={12} />
                        </button>
                    </div>

                    {/* Remove button */}
                    <button
                        className="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10"
                        onClick={handleRemove}
                        aria-label="Eliminar producto"
                    >
                        <Trash2 size={12} />
                    </button>
                </div>
                
                {/* Subtotal */}
                <div className="text-xs text-base-content/60 mt-1">
                    Subtotal: {item.currency} ${formatThousands(item.price * item.quantity)}
                </div>
            </div>
        </div>
    );
}

export default SidebarCartItem;