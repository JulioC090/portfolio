import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/features/theme/contexts/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: "Pigeon's Lab",
  description:
    "Bem vindo ao Pigeon's Lab, onde desenvolvemos sites e aplicações com design acessível, escalável e humano com soluções digitais de alta qualidade.",
  icons: {
    icon: '/logo.svg',
  },
  applicationName: 'Pigeon Lab',
  category: 'technology',
  appLinks: {
    web: { url: 'https://pigeonlab.vercel.app' },
  },
  keywords: [
    // 🔹 Marca (variações)
    'Pigeon Lab',
    'pigeonlab',
    'the pigeon lab',
    'pigeons lab',
    'pigeonslab',
    'pigeon',
    'lab',

    // 🔹 Serviços principais
    'desenvolvedor',
    'programador',
    'dev',
    'fullstack',
    'web',
    'web development',
    'freelancer',
    'desenvolvedor de aplicações web',
    'freelancer desenvolvimento web',
    'criação de sites profissionais',
    'desenvolvimento de site responsivo',
    'manutenção de sites e sistemas',

    // 🔹 Tecnologias
    'nextjs',
    'next js',
    'next.js',
    'react',
    'reactjs',
    'react.js',
    'node',
    'nodejs',
    'node.js',
    'typescript',
    'type script',
    'tailwind',
    'tailwindcss',
    'tailwind css',

    // 🔹 Local
    'Americana',
    'São Paulo',
    'desenvolvedor web Americana',
    'criação de sites em Americana',
    'programador freelance São Paulo',
    'desenvolvedor fullstack Brasil',
    'criação de sites SP',
  ],
  creator: 'JulioC090',
  authors: [{ name: 'JulioC090', url: 'https://github.com/JulioC090' }],
  openGraph: {
    title: "Pigeon's Lab",
    description: 'Transformando ideias em experiências digitais marcantes.',
    url: 'https://pigeonlab.vercel.app',
    siteName: "Pigeon's Lab",
    images: [
      {
        url: 'https://pigeonlab.vercel.app/og-image.png?v=2',
        type: 'image/png',
        alt: 'Dando asas à sua ideia',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pigeon's Lab",
    description: 'Transformando ideias em experiências digitais marcantes.',
    images: [
      {
        url: 'https://pigeonlab.vercel.app/og-image.png?v=2',
        type: 'image/png',
        alt: 'Dando asas à sua ideia',
      },
    ],
  },
  alternates: {},
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY,
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}
