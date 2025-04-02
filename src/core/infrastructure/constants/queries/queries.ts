export class Queries {

    static getLatestPosts = `
        query {
            blogPostCollection {
                items {
                    title
                    urlSlug
                    postSummary
                    coverImage{
                        url
                    }
                }
            }
        }
    `;
}