import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { IBM_Plex_Mono, Ubuntu } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  weight: ['300', '400', '500'],
  subsets: ['latin']
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Falinantenaina Web Developer',
  description: 'Web developer, fullstack develper, frontend developer'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ubuntu.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <div className="mx-auto flex min-h-screen max-w-[120rem] flex-col font-mono">
          <Navbar />
          <Separator />
          <main className="flex flex-1 flex-col items-center justify-center">
            {children}
          </main>
          <Separator />
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
