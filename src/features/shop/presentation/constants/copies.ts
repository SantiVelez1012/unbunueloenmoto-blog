import { HeroBannerInfo } from "@/features/shared/presentation/entities/hero-banner-info/heroBannerInfo";

export class ShopCopies{


    static readonly SHOP_BANNER_CAROUSEL: HeroBannerInfo[] = [
        {
            title: "¿Quieres comprar productos de la marca Carpuride?",
            description: "Disfruta de un 30% de descuento en TODOS los productos de esta marca, como beneficio especial por ser seguidor de Un Buñuelo en Moto",
            imageUrl: "/imgs/carpuride.webp",
            imageAlt: "30% de descuento en Carpuride",
            link: "https://carpuride.com/?ref=bunueloenmoto"
        },
        {
            title: "Bienvenido a nuestra tienda Buñuelística",
            description: "Recuerda que todos los envíos son contraentrega, asi que realizas el pago al recibir tu pedido.",
            imageUrl: "/imgs/shop-banner.jpeg",
            imageAlt: "Banner de bienvenida a la tienda",
            link: "/shop"
        },
    ]

}