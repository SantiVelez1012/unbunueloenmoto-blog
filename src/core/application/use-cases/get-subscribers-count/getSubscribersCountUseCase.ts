import { SubscribersRepositoryImpl } from "@/core/domain/repositories/subscribersRepositoryImpl";
import { YoutubeHttpClient } from "@/core/infrastructure/api/http/youtube/youtube-http-client";
import { SubscriberCountStatistics } from "@/core/infrastructure/entities/youtube-responses";
import { SubscribersRepository } from "@/core/infrastructure/repositories/subscribersRepository";

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