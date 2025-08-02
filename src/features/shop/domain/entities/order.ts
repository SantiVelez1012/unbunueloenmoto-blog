import { CheckoutModel } from "../../presentation/models/checkoutModel"
import { CheckoutItem } from "./checkoutItem"

export interface OrderCheckout {
    email: string;
    lineItems: CheckoutItem[];
    shippingAddress: CheckoutModel;
    billingAddress?: CheckoutModel;
    note?: string;
    financialStatus: 'PENDING';
}