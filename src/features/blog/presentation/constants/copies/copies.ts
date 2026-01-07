import { HeroBannerInfo } from "@/features/shared/presentation/entities/hero-banner-info/heroBannerInfo";
import { NavbarLink } from "../../../../shared/presentation/entities/navbar-link/navbar-link";

export class Copies {

    static readonly navbarLinks: NavbarLink[] = [
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog/all" },
    ];


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
                label: "Visitar canal de YouTube",
                url: "https://www.youtube.com/@unbunueloenmoto",
                blank: true
            }
        }
    }

}