export class Queries {

    static getLatestPosts = `
        query {
            postCollection {
            items {
                title
                slug
                summary
            }
            }
        }
    `;


}