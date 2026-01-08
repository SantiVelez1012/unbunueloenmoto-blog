export type HeroBannerInfo = {
    topInfo: string;
    footerInfo: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    actions?: HeroBannerActions
}


export type HeroBannerActions = {
    primary: HeroBannerAction;
    secondary: HeroBannerAction;
};

export type HeroBannerAction = {
    label: string;
    url: string;
    blank?: boolean;
};