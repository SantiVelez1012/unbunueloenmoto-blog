import { AdminHttpClient } from "../../infrastructure/api/admin-http-client";
import { OrdersRepository } from "../../infrastructure/repositories/ordersRepository";

export class OrdersRepositoryImpl implements OrdersRepository {

    private adminHttpClient = AdminHttpClient.getInstance();

    createOrder(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}