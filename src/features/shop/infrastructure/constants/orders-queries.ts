export class OrdersQueries {

    static orderCreateMutation = `
        mutation orderCreate($input: OrderCreateInput!) {
            orderCreate(input: $input) {
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