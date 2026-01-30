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
                label: "Sobre mí",
                url: "/about",
            }
        }
    }

    static readonly aboutMeSection = {
        title: "Sobre mí",
        description: "Más allá de las rutas: conoce mi origen, mis motos y la filosofía de aprender en cada kilómetro. Bienvenido a mi garaje.",
        imageUrl: "/imgs/about/unbunueloenmoto.jpg",
        imageAlt: "Un Buñuelo en Moto",
        moreInfoUrl: "/about"
    };

}