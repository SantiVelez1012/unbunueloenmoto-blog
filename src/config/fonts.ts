import { Inter, Rubik } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

// 3. Exportamos una sola variable combinada
export const fontClasses = `${inter.variable} ${rubik.variable}`;