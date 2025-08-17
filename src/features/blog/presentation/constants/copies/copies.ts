import { HeroBannerInfo } from "../../../../shared/presentation/entities/hero-banner-info/heroBannerInfo";

export class Copies {


    static homeBannerInfo: HeroBannerInfo[] = [{
        title: "El Blog de Un Buñuelo en Moto",
        description: "Bienvenido a la página oficial de Un Buñuelo en Moto, donde encontrarás publicaciones, Tienda motera y convocatorias. espera mucho más en esta web!!",
        imageUrl: "/imgs/hero-banner.jpeg",
        imageAlt: "Un Buñuelo en Moto",
        link: '/'
    },
    {
        title: 'Tienda Buñuelística',
        description: 'Ya visitaste la tienda de Un Buñuelo en Moto? Aquí encontrarás productos exclusivos y únicos que no podrás resistir.',
        imageUrl: "/imgs/shop-banner.jpeg",
        imageAlt: 'Tienda Buñuelística',
        link: '/shop'
    },
    {
        title: "¿Quieres comprar productos de la marca Carpuride?",
        description: "Disfruta de un 30% de descuento en TODOS los productos de esta marca, como beneficio especial por ser seguidor de Un Buñuelo en Moto",
        imageUrl: "/imgs/carpuride.webp",
        imageAlt: "30% de descuento en Carpuride",
        link: "https://carpuride.com/?ref=bunueloenmoto"
    },];

}