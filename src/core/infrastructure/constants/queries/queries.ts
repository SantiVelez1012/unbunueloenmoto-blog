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