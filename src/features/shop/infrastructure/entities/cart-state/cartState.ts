import { CartItem } from '../../../domain/entities/cartItem';

export interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    total: () => number;
}