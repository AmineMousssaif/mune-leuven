import type { Metadata } from "next";
import { Gloock, Manrope, DM_Mono } from "next/font/google";
import "./globals.css";

const gloock = Gloock({ weight: "400", subsets: ["latin"], variable: "--font-gloock", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const dmMono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-dmmono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mune.be"),
  title: { default: "Muné · Dubai-inspired brunch & sweets in Leuven", template: "%s · Muné Leuven" },
  description:
    "Muné is a Dubai-inspired brunch and sweets concept on Muntstraat 46, Leuven. Fresh brunch dishes, signature sweets and specialty coffee, open every day.",
  openGraph: { title: "Muné Leuven", description: "From Dubai to Leuven. Brunch, coffee and signature sweets.", images: ["/img/hero.webp"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Muné",
  image: "https://mune.be/img/hero.webp",
  address: { "@type": "PostalAddress", streetAddress: "Muntstraat 46", postalCode: "3000", addressLocality: "Leuven", addressCountry: "BE" },
  telephone: "+32488404445",
  email: "info@muneleuven.be",
  servesCuisine: ["Brunch", "Middle Eastern", "Desserts", "Coffee"],
  hasMenu: "https://mune.be/menu/",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday", "Sunday"], opens: "09:00", closes: "23:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gloock.variable} ${manrope.variable} ${dmMono.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
