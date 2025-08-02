export class OrdersQueries {

    static orderCreateMutation = `
        mutation orderCreate($order: OrderCreateOrderInput!) {
            orderCreate(order: $order) {
                order {
                    id
                    name
                    createdAt
                }
                userErrors {
                    field
                    message
                }
            }
        }
    `;


}