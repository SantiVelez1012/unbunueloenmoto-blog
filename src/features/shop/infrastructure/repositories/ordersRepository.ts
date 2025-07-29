export abstract class OrdersRepository {
    abstract createOrder(): Promise<any>;
};