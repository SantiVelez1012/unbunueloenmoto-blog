import { HttpClient } from "../httpClient";

const CONTENTFUL_API_URL = `${process.env.CONTENTFUL_API_URL}${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

export const contentfulApiClient = new HttpClient(CONTENTFUL_API_URL);


