import { CheckoutFormInputs } from "@/features/shop/presentation/models/checkoutModel";
import { useCartStore } from "@/features/shop/infrastructure/state/cartStore";
import { generateOrder, transformClientInfo } from "@/features/shop/presentation/utils/checkoutUtils";
import { OrderCreateRequest } from "../../entities/orderCreateRequest";

export class CreateOrderUseCase {

    cart = useCartStore((state) => state.items);


    async execute(clientData: CheckoutFormInputs): Promise<any> {

        const clientInfo = transformClientInfo(clientData);

        const order = generateOrder(clientInfo, this.cart, clientData.email, clientData.additionalNotes);

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