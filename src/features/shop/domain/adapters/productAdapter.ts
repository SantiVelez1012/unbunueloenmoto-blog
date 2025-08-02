import { CartItem } from "../entities/cartItem";
import { CheckoutItem } from "../entities/checkoutItem";

export function transformCartProductsToCheckoutModel(cart: CartItem[]): CheckoutItem[] {

    return cart.map(item => ({
        variantId: item.id,
        quantity: item.quantity
    }));

}
