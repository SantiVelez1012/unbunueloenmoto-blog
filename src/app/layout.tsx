import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="es">
      <body>
        <Navbar> 
          <main className="flex-1 p-4 h-full">
            {children}
          </main>
        </Navbar>
        <Footer />
        
      </body>
    </html>
  );
}
