import "./globals.css";
import Footer from "@/features/shared/presentation/components/footer/footer";
import ToastHandler from '../features/shared/presentation/components/toast/toastHandler';
import { Analytics } from "@vercel/analytics/next";
import { fontClasses } from "@/config/fonts";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
