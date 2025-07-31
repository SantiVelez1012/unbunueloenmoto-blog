import { OrderCreateRequest } from "../../domain/entities/orderCreateRequest";

export abstract class OrdersRepository {
    abstract createOrder(request: OrderCreateRequest): Promise<any>;
};