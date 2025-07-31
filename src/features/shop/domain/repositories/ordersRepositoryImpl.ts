import { AdminHttpClient } from "../../infrastructure/api/admin-http-client";
import { OrdersQueries } from "../../infrastructure/constants/orders-queries";
import { OrdersRepository } from "../../infrastructure/repositories/ordersRepository";
import { OrderCreateRequest } from "../entities/orderCreateRequest";

export class OrdersRepositoryImpl implements OrdersRepository {

    private adminHttpClient = AdminHttpClient.getInstance();

    async createOrder( request: OrderCreateRequest ): Promise<any> {
        return await this.adminHttpClient.client.request(OrdersQueries.orderCreateMutation, request).then((response) => {
            return response;
        }).catch((error) => {
            return error
        });
    }

}