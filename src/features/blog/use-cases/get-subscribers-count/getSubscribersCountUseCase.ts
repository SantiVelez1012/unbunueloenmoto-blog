import { SubscribersRepositoryImpl } from "../../domain/repositories/subscribersRepositoryImpl";
import { YoutubeHttpClient } from "../../infrastructure/api/http/youtube/youtube-http-client";
import { SubscriberCountStatistics } from "../../infrastructure/entities/youtube-responses";
import { SubscribersRepository } from "../../infrastructure/repositories/subscribersRepository";


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