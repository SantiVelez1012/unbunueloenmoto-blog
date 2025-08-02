import { CheckoutItem } from "../../domain/entities/checkoutItem";
import { OrderCheckout } from "../../domain/entities/order";
import { CheckoutFormInputs, CheckoutModel } from "../models/checkoutModel";

export function transformClientInfo(clientInfo: CheckoutFormInputs): CheckoutModel {
    return {
        firstName: clientInfo.firstName,
        lastName: clientInfo.lastName,
        address1: clientInfo.address,
        city: clientInfo.city.label,
        province: clientInfo.state.label,
        country: clientInfo.country,
        phone: clientInfo.phone,
    };

}


export function generateOrder( clientInfo: CheckoutModel, cart: CheckoutItem[], email: string, additionalNotes: string ): OrderCheckout{
    return {
        email: email,
        lineItems: cart,
        shippingAddress: clientInfo,
        billingAddress: clientInfo,
        note: additionalNotes,
        financialStatus: 'PENDING',
    }
}