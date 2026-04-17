import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { createMedicalOrganization } from "@/lib/schema";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gulceoglupsikoteknik.com"),
  title: {
    template: "%s | Gülceoğlu Psikoteknik - İzmir",
    default: "Gülceoğlu Psikoteknik Değerlendirme Merkezi | İzmir",
  },
  description:
    "İzmir Bornova'da psikoteknik değerlendirme merkezi. Ehliyet, SRC ve ticari araç psikoteknik raporu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${plusJakartaSans.variable} ${fraunces.variable} antialiased`}
      >
        <JsonLd data={createMedicalOrganization()} />
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
