import Navbar from "@/core/presentation/components/navbar/navbar";
import "./globals.css";
import Footer from "@/core/presentation/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="es">
      <head />
      <body>
        <Navbar> 
          <main className="flex-1 h-full">
            {children}
          </main>
        </Navbar>
        <Footer />
      </body>
    </html>
  );
}
