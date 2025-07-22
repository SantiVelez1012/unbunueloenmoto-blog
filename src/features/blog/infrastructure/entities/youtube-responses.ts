export interface YoutubeSubscriberCountResponse{
    items:SubscriberCountItem[];
}

export interface SubscriberCountItem {
    statistics: SubscriberCountStatistics;
}

export interface SubscriberCountStatistics {
    subscriberCount: string;
}

