import { CheckoutFormInputs } from "@/features/shop/presentation/models/checkoutModel";
import { useCartStore } from "@/features/shop/infrastructure/state/cartStore";
import { generateOrder, transformClientInfo } from "@/features/shop/presentation/utils/checkoutUtils";
import { OrderCreateRequest } from "../../entities/orderCreateRequest";
import { ResolveVariantIdsUseCase } from "./resolveVariantIdsUseCase";
import { CartItem } from "../../entities/cartItem";

export class CreateOrderUseCase {

    private resolveIdsUsecase = new ResolveVariantIdsUseCase();

    async execute(clientData: CheckoutFormInputs, cart: CartItem[]): Promise<any> {

        const clientInfo = transformClientInfo(clientData);

        const products = await this.resolveIdsUsecase.execute(cart);

        const solvedProducts = cart.map(item => {
            const variantId = products[item.id];
            return {
                variantId: variantId ? variantId : item.id,
                quantity: item.quantity,
            };
        });

        const order = generateOrder(clientInfo, solvedProducts, clientData.email, clientData.additionalNotes);

        const request: OrderCreateRequest = {
            variables: { order: order }
        }

        return await fetch("/api/orders/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }).then(response => {
            return response;
        });



    }
}