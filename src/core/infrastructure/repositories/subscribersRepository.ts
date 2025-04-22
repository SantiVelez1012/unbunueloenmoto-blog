import { YoutubeSubscriberCountResponse } from "../entities/youtube-responses";

export interface SubscribersRepository{

    getSubscriberCount(): Promise<YoutubeSubscriberCountResponse>;

}