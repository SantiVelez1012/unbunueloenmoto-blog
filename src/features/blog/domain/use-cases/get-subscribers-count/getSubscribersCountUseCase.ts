import { YoutubeHttpClient } from "@/features/blog/infrastructure/api/http/youtube/youtube-http-client";
import { SubscriberCountStatistics } from "@/features/blog/infrastructure/entities/youtube-responses";
import { SubscribersRepository } from "@/features/blog/infrastructure/repositories/subscribersRepository";
import { SubscribersRepositoryImpl } from "../../repositories/subscribersRepositoryImpl";

export class GetSubscribersCountUseCase {

    private subscribersRepository: SubscribersRepository = new SubscribersRepositoryImpl(new YoutubeHttpClient());
    constructor() {}

    async execute(): Promise<SubscriberCountStatistics> {
        return this.subscribersRepository.getSubscriberCount().then((response) => {
            return response.items[0].statistics;
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }
}