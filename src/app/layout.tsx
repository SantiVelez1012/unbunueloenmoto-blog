import "./globals.css";
import Footer from "@/features/shared/presentation/components/footer/footer";
import ToastHandler from '../features/shared/presentation/components/toast/toastHandler';
import { Analytics } from "@vercel/analytics/next";
import { fontClasses } from "@/config/fonts";
import { SharedCopies as Copies } from "@/features/shared/presentation/constants/copies";
import Navbar from "@/features/shared/presentation/components/navbar/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="bunueloDark">
      <Analytics/>
      <head />
      <body className={`${fontClasses} antialiased bg-base-200 text-base-content`}>
        <ToastHandler />
        <Navbar links={Copies.navbarLinks} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
