import { NavbarLink } from "../entities/navbar-link/navbar-link";

export class SharedCopies {


    static readonly FOOTER_LINKS = [
        {
            title: "Explorar", links: [
                { name: "Inicio", href: "/blog" },
                { name: "Blog de Rutas", href: "/blog/all" },
                { name: "Sobre mi", href: "/about" },
            ]
        },


    ];
    static readonly navbarLinks: NavbarLink[] = [
        { label: "Inicio", href: "/" },
        { label: "Blog", href: "/blog/all" },
        { label: "Sobre mí", href: "/about" },
    ];

}