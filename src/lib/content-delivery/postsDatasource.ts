const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  summary
  createdAt
  Tags{
    tag
    name
  }
`;

export async function fetchGraphQL(query: string) {
    console.log(process.env.CONTENTFUL_SPACE_ID);
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ ARTICLE_GRAPHQL_FIELDS }),
        }
    ).then((response) => response.json());
}