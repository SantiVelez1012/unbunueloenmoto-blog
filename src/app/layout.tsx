import "./globals.css";
import Footer from "@/core/presentation/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head />
      <body className="bg-base-200">
        {children}
        <Footer />
      </body>
    </html>
  );
}
