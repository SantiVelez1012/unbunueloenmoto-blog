import { YoutubeHttpClient } from "@/core/infrastructure/api/http/youtube/youtube-http-client";
import { YoutubeSubscriberCountResponse } from "@/core/infrastructure/entities/youtube-responses";
import { SubscribersRepository } from "@/core/infrastructure/repositories/subscribersRepository";

export class SubscribersRepositoryImpl implements SubscribersRepository {


    private youtubeHttpClient: YoutubeHttpClient;

    constructor(youtubeHttpClient: YoutubeHttpClient) {
        this.youtubeHttpClient = youtubeHttpClient;
    }

    getSubscriberCount(): Promise<YoutubeSubscriberCountResponse> {
        return this.youtubeHttpClient.getSubscriberCount();
    }
}