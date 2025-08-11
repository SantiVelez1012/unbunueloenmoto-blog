import "./globals.css";
import Footer from "@/features/blog/presentation/components/footer/footer";
import ToastHandler from '../features/shared/presentation/components/toast/toastHandler';
import { ThemeProvider } from '@/features/shared/presentation/contexts/themeContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  let resolvedTheme = 'light';
                  
                  if (theme === 'system') {
                    resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  } else {
                    resolvedTheme = theme;
                  }
                  
                  document.documentElement.setAttribute('data-theme', resolvedTheme);
                  document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-base-100 text-base-content">
        <ThemeProvider>
          <ToastHandler />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}