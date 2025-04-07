export class Queries {

    static getLatestPosts = `
        query {
            blogPostCollection (limit: 3, order: createdAt_DESC) {
                items {
                    title
                    urlSlug
                    postSummary
                    coverImage{
                        url
                        fileName
                        contentType
                        title
                    }
                    createdAt
                    tagsCollection{
                        items{
                            name
                            tagId    
                        }
                    }
                }
            }
        }
    `;
}