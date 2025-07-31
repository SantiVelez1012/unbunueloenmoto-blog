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


    static getVariantIdQuery = `
        query getVariants($ids: [ID!]!) {
        nodes(ids: $ids) {
            ... on Product {
            id
            variants(first: 1) {
                edges {
                node {
                    id
                    title
                }
                }
            }
            }
        }
        }
  `;

}