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


    static getPostBySlug = (slug: string) => `
        query {
            blogPostCollection (where: {urlSlug: "${slug}"} limit: 1) {
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
                    content{
                        json
                        links {
                            assets {
                                block {
                                sys { id }
                                url
                                }
                            }
                        }
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
        }`;



    static getPaginatedPosts = (limit = 6, skip = 0) => `
        query GetBlogPosts($limit: Int!, $skip: Int!) {
            blogPostCollection(limit: $limit, skip: $skip, order: createdAt_DESC) {
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