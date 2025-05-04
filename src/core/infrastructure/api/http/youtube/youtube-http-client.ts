import { YoutubeSubscriberCountResponse } from "@/core/infrastructure/entities/youtube-responses";
import { HttpClient } from "../httpClient";
import { YoutubeApiEndpoints } from "@/core/infrastructure/constants/endpoints/youtube-endpoints";

const YOUTUBE_API_URL = `${process.env.NEXT_PUBLIC_YOUTUBE_API_URL}`;

const youtubeApiClient = new HttpClient(YOUTUBE_API_URL);

export class YoutubeHttpClient{

    private client: HttpClient;

    constructor() {
        this.client = youtubeApiClient;
    }

    async getSubscriberCount(): Promise<YoutubeSubscriberCountResponse>{
        const response: YoutubeSubscriberCountResponse = await this.client.get(YoutubeApiEndpoints.getSubscribersCount);
        return response;
    }
    
}