import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: 'My portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
