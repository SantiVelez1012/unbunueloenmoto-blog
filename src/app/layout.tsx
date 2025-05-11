import Navbar from "@/core/presentation/components/navbar/navbar";
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
      <body>
        <Navbar> 
          <main className="bg-base-200 flex-1 h-full">
            {children}
          </main>
        </Navbar>
        <Footer />
      </body>
    </html>
  );
}
