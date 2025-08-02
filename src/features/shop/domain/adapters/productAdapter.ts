import { CartItem } from "../entities/cartItem";
import { CheckoutItem } from "../entities/checkoutItem";

export function transformCartProductsToCheckoutModel(cart: CartItem[], variantIds: Record<string, string>): CheckoutItem[] {

    return cart.map(item => ({
        variantId: item.id,
        quantity: item.quantity
    }));

}
