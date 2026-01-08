import { Arimo, IBM_Plex_Mono, Lexend_Deca } from "next/font/google";


const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  display: "swap",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});

export const fontClasses = `${lexendDeca.variable} ${ibmPlexMono.variable} ${arimo.variable}`;