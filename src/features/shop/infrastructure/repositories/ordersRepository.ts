import { ClientResponse } from "@shopify/admin-api-client";
import { OrderCreateRequest } from "../../domain/entities/orderCreateRequest";

export abstract class OrdersRepository {
    abstract createOrder(request: OrderCreateRequest): Promise<ClientResponse>;
};