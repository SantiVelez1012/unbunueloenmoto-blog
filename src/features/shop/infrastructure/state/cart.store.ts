import { create } from "zustand";
import { CartState } from "../entities/cart-state/cartState";
import { persist } from "zustand/middleware";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existingItem = get().items.find(i => i.id === item.id);
        if (existingItem) {
          set({
            items: get().items.map(i =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      clearCart: () => set({ items: [] }),
      total: () =>
        get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage', // clave en localStorage
    }
  )
);