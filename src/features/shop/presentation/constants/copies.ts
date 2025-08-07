import { HeroBannerInfo } from "@/features/shared/presentation/entities/hero-banner-info/heroBannerInfo";

export class ShopCopies{


    static readonly SHOP_BANNER_CAROUSEL: HeroBannerInfo[] = [
        {
            title: "Bienvenido a nuestra tienda Buñuelística",
            description: "Recuerda que todos los envíos son contraentrega, asi que realizas el pago al recibir tu pedido.",
            imageUrl: "/imgs/shop-banner.jpeg",
            imageAlt: "Banner de bienvenida a la tienda",
            link: "/shop"
        }
    ]

}