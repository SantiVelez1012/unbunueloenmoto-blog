"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SocialButton } from "../social-button/socialButton";
import { SharedCopies } from '../../constants/copies';



export default function Footer() {

    return (
        <footer className="relative w-full bg-[#0a0a0a] pt-20 pb-10 overflow-hidden border-t border-white/5 font-sans">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_50px_primary]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

                    <div className="lg:col-span-5 space-y-6">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-3">
                                <div className="relative w-16 h-16 transition-transform duration-500 group-hover:rotate-12">
                                    <Image
                                        src="/logos/channel-logo.png"
                                        alt="Un Buñuelo en Moto Logo"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-display text-2xl font-bold text-primary tracking-tight">
                                        Un Buñuelo en Moto
                                    </span>
                                    <span className="text-sm text-gray-500 font-medium">
                                        Aventuras y aprendizajes constantes...
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <p className="text-gray-400 leading-relaxed max-w-md">
                            La comunidad para los que aprendemos en cada kilómetro.
                            Tutoriales, rutas y la mejor vibra motera de Colombia para el mundo.
                        </p>

                    
                        <div className="flex items-center gap-4">
                            <SocialButton href="https://youtube.com/@unbunueloenmoto" icon={<FaYoutube size={20} />} label="YouTube" color="hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/10" />
                            <SocialButton href="https://instagram.com/unbunueloenmoto" icon={<FaInstagram size={20} />} label="Instagram" color="hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/10" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">

                        {SharedCopies.FOOTER_LINKS.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-white font-bold mb-6 font-display tracking-wide">
                                    {section.title}
                                </h4>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-primary transition-colors text-sm hover:underline decoration-primary/50 underline-offset-4"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="col-span-2 md:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <h4 className="text-white font-bold mb-2 font-display">¿Nuevo video?</h4>
                            <p className="text-xs text-gray-400 mb-4">No te pierdas ninguna rodada. Suscríbete al canal.</p>
                            <a
                                href="https://youtube.com/@unbunueloenmoto"
                                target="_blank"
                                className="btn btn-sm btn-primary w-full rounded-full text-base-100 font-bold shadow-lg shadow-orange-500/20"
                            >
                                <FaYoutube size={16} /> Ir al Canal
                            </a>
                        </div>

                    </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Un Buñuelo en Moto. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                        <span>Hecho con</span>
                        <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
                        <span>y mucha gasolina.</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
