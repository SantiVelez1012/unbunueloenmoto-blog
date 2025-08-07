export class ShopifyQueries {

  static getAllProductsQuery = `
      query GetAllProducts($first: Int, $after: String) {
        products(first: $first, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              title
              handle
              description
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `;


  static getProductByIdQuery = `
    query GetProductById($id: ID!) {
      product(id: $id) {
        id
        title
        handle
        description
        descriptionHtml
        availableForSale
        images(first: 1) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
      }
    }
  `;


  static getVariantIdsQuery = `
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