import { HeroBannerInfo } from "../../../../shared/presentation/entities/hero-banner-info/heroBannerInfo";

export class Copies {


    static readonly homeBannerInfo: HeroBannerInfo = {
        topInfo: "Nueva actualización a la web",
        footerInfo: "Sigue bajando, más cosas te esperan",
        title: "El Blog de Un Buñuelo en Moto",
        description: "Bienvenido a la página oficial de Un Buñuelo en Moto, donde encontrarás publicaciones, Tienda motera y convocatorias. espera mucho más en esta web!!",
        imageUrl: "/imgs/hero-banner.jpeg",
        imageAlt: "Un Buñuelo en Moto",
        actions:{
            primary: {
                label: "Ver publicaciones",
                url: "/blog/all"
            },
            secondary: {
                label: "Visitar tienda",
                url: "/shop"
            }
        }
    }

}