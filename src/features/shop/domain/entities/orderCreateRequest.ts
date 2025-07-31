import { OrderCheckout } from "./order";

export interface OrderCreateRequest {
    variables: OrderCreateVariables;
}

export interface OrderCreateVariables{
    order: OrderCheckout;
}
