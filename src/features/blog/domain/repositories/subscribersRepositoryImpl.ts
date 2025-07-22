import { YoutubeHttpClient } from "../../infrastructure/api/http/youtube/youtube-http-client";
import { YoutubeSubscriberCountResponse } from "../../infrastructure/entities/youtube-responses";
import { SubscribersRepository } from "../../infrastructure/repositories/subscribersRepository";


export class SubscribersRepositoryImpl implements SubscribersRepository {


    private youtubeHttpClient: YoutubeHttpClient;

    constructor(youtubeHttpClient: YoutubeHttpClient) {
        this.youtubeHttpClient = youtubeHttpClient;
    }

    getSubscriberCount(): Promise<YoutubeSubscriberCountResponse> {
        return this.youtubeHttpClient.getSubscriberCount();
    }
}