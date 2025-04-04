import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Falinantenaina Web Developer",
  description: "Web developer, fullstack develper, frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen font-mono">
          <Navbar />
          <Separator />
          <main className="flex flex-col items-center justify-center flex-1">
            {children}
          </main>
          <Separator />
          <Footer />
        </div>
      </body>
    </html>
  );
}
