import "./globals.css";
import Footer from "@/features/blog/presentation/components/footer/footer";
import ToastHandler from '../features/shared/presentation/components/toast/toastHandler';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head />
      <body className="bg-base-200" data-theme="dark">
        <ToastHandler />
        {children}
        <Footer />
      </body>
    </html>
  );
}
