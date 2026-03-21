import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import Script from "next/script";
import { LocalBusinessSchema } from "@/components/SchemaOrg";
import { headers } from "next/headers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akademia Sway — Szkolenia Pole Dance Poznań",
  description:
    "Akademia Sway Joanna Olejniczak — profesjonalne szkolenia dla instruktorów pole dance w Poznaniu. BASIC, INTERMEDIATE, ADVANCED i szkolenia z dynamiki.",
  metadataBase: new URL("https://akademia-sway.pl"),
  openGraph: {
    title: "Akademia Sway — Szkolenia Pole Dance Poznań",
    description:
      "Profesjonalne szkolenia dla instruktorów pole dance. Rozwijaj swoje umiejętności razem z Joanną Olejniczak.",
    images: [
      {
        url: "/joanna-3.jpg",
        width: 1200,
        height: 630,
        alt: "Akademia Sway — Szkolenia Pole Dance",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || headersList.get("x-pathname") || "";
  const isAdmin = pathname.startsWith("/admin");
  return (
    <html lang="pl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-body">
        {/* Google Analytics placeholder */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <LocalBusinessSchema />
        {!isAdmin && <Navbar />}
        <main>{children}</main>
        {!isAdmin && <Footer />}
        {!isAdmin && <FloatingPhone />}
      </body>
    </html>
  );
}
