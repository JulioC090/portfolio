import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/features/theme/contexts/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
      <body className="antialiased">
        <Toaster />
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
