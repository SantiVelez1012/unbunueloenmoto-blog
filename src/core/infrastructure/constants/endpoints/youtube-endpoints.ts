export class YoutubeApiEndpoints {
    static getSubscribersCount = `channels?part=statistics&id=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&fields=items/statistics/subscriberCount&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
}