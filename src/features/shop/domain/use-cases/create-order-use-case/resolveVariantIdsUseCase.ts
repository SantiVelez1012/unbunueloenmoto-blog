import { CartItem } from "../../entities/cartItem";
import { getProductIds } from "../../utils/productUtils";

export class ResolveVariantIdsUseCase {


    async execute(cart: CartItem[]): Promise<Record<string, string>> {
        
        const productIds = getProductIds(cart);


        if (cart.length === 0) {
            return {};
        }

        const response = await fetch('/api/products/resolve-ids', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: productIds
            })
        });

        const result = await response.json();

        return result.data;
        
    }
}