import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MenuBoard } from "@/components/MenuBoard";

export const metadata: Metadata = {
  title: "Menu",
  description: "The full Muné menu: breakfast, Dubai brunch, salads, croissant toasts, specialty coffee, matcha, tea, smoothies and signature sweets.",
};

export default function MenuPage() {
  return (
    <>
      <Nav onMenuPage />
      <main className="menu-page">
        <section className="menu-hero">
          <div className="wrap">
            <span className="eyebrow mono">The full menu</span>
            <h1>Menu.</h1>
            <p>Everything we serve at Muntstraat 46, from your first coffee to a late dessert. Prices include VAT.</p>
          </div>
        </section>
        <MenuBoard />
      </main>
      <Footer />
    </>
  );
}
