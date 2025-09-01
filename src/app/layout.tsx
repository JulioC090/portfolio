import { ThemeProvider } from '@/features/theme/contexts/ThemeProvider';
import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: "Pigeon's Lab",
  description: "Welcome to the Pigeon's Lab",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={'antialiased'}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
