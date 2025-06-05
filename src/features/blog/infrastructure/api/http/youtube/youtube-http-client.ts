import { HttpClient } from "@/features/shared/infrastructure/api/httpClient";
import { YoutubeSubscriberCountResponse } from "../../../entities/youtube-responses";
import { YoutubeApiEndpoints } from "../../../constants/endpoints/youtube-endpoints";


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