import { transformCartProductsToCheckoutModel } from "../../domain/adapters/productAdapter";
import { CartItem } from "../../domain/entities/cartItem";
import { OrderCheckout } from "../../domain/entities/order";
import { CheckoutFormInputs, CheckoutModel } from "../models/checkoutModel";

export function transformClientInfo(clientInfo: CheckoutFormInputs): CheckoutModel {
    return {
        firstName: clientInfo.firstName,
        lastName: clientInfo.lastName,
        address1: clientInfo.address,
        city: clientInfo.city.value,
        province: clientInfo.state.value,
        country: clientInfo.country,
        phone: clientInfo.phone,
    };

}


export function generateOrder( clientInfo: CheckoutModel, cart: CartItem[], email: string, additionalNotes: string ): OrderCheckout{
    const products = transformCartProductsToCheckoutModel(cart);
    return {
        email: email,
        lineItems: products,
        shippingAddress: clientInfo,
        billingAddress: clientInfo,
        note: additionalNotes,
        financialStatus: 'PENDING',
    }
}