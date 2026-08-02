import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Elena Berard | Conseillère en gestion de patrimoine",
    template: "%s"
  },
  description:
    "Conseil patrimonial sur-mesure à Brignais pour structurer, optimiser et transmettre votre patrimoine.",
  openGraph: {
    title: "Elena Berard | Conseillère en gestion de patrimoine",
    description:
      "Construisons votre avenir financier ensemble avec une stratégie patrimoniale claire, humaine et personnalisée.",
    url: site.baseUrl,
    siteName: site.name,
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
