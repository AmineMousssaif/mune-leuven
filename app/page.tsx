import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { OpenStatus } from "@/components/OpenStatus";
import { HoursTable } from "@/components/HoursTable";
import { CopyButton } from "@/components/CopyButton";
import { HeroVisual } from "@/components/HeroVisual";
import { MenuPreview } from "@/components/MenuPreview";
import { InternationalPlate } from "@/components/InternationalPlate";
import { SITE } from "@/data/site";

const MARQUEE = ["Dubai Morning", "Shaken espresso", "Pistachio croissant", "Coco Clouds", "The International", "Croissant toasts", "Dubai Tea", "Baklava"];
const SHELF = [
  { img: "/img/c_cake.webp", name: "Pista", price: "€10.90" },
  { img: "/img/c_baklava.webp", name: "Antep pistachio baklava", price: "€10.00" },
  { img: "/img/c_oreo.webp", name: "Oreo Lovers", price: "€9.90" },
  { img: "/img/c_cup.webp", name: "Rose water latte", price: "€6.80" },
  { img: "/img/c_rasp.webp", name: "La Rouge", price: "€9.90" },
  { img: "/img/c_croissant.webp", name: "Pistachio croissant", price: "€7.00" },
  { img: "/img/c_matcha.webp", name: "Cold matcha latte", price: "€5.80" },
];
const GALLERY = [
  ["g1", "A full Muné breakfast spread"],
  ["g2", "The tiered brunch stand with dips and pastries"],
  ["g3", "Pesto shakshuka with bread"],
  ["g5", "Sucuk and eggs with Turkish tea"],
  ["g6", "Croissants and warm breads on the brunch stand"],
  ["g4", "Salad and a raspberry drink by the window"],
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <OpenStatus />
              <h1>From Dubai<em>to Leuven.</em></h1>
              <p className="lede">A Dubai-inspired brunch and sweets concept. Rich flavours, soft mornings and elegant moments, with fresh brunch dishes, signature sweets and great coffee.</p>
              <div className="ctas">
                <Link className="btn" href="/menu/">See the menu</Link>
                <a className="btn ghost" href={SITE.maps} target="_blank" rel="noopener">Get directions</a>
              </div>
              <div className="facts mono">
                <span><b>Open daily</b> from 09:00</span>
                <span>Brunch <b>11:00 – 19:00</b></span>
                <span>Coffee by <b>Gust</b></span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} style={{ display: "contents" }}><span>{w}</span><span className="s">✦</span></span>
            ))}
          </div>
        </div>

        <section className="block story" id="story">
          <div className="wrap">
            <div className="story-arches">
              <div className="arch"><img src="/img/seat.webp" alt="A Muné breakfast table by the window seat" loading="lazy" /></div>
              <div className="arch"><img src="/img/tea.webp" alt="Istanbul tea at Muné" loading="lazy" /></div>
            </div>
            <div className="story-copy">
              <span className="eyebrow mono">The story of Muné</span>
              <h2>It started with a dream.</h2>
              <p>A vision of creating a place that feels different from the moment you walk through the door. Inspired by the warmth and elegance of Dubai, we wanted to bring that feeling to the heart of Leuven.</p>
              <p>Warm colours, beautiful details, great coffee and food made to be enjoyed. Muné is a story built with passion, long days, family, friendship and people who believed in the dream from the very beginning. So sit back, taste something new and stay a little longer.</p>
              <div className="sign"><span className="rule" /><div><b>Mustafa Mahood</b><span>Founder of Muné</span></div></div>
            </div>
          </div>
        </section>

        <section className="block vision">
          <div className="wrap">
            <blockquote>Premium,<br />without the <em>premium price tag.</em></blockquote>
            <div className="vision-side">
              <span className="eyebrow mono">Our vision</span>
              <p>Better quality, better style and a better experience should be accessible to everyone. For the price of a regular café visit, Muné gives you something more memorable: high-quality ingredients, beautiful presentation and genuine hospitality.</p>
              <div className="trio"><div>Better quality.</div><div>Better style.</div><div>A complete experience.</div></div>
            </div>
          </div>
        </section>

        <section className="block" id="international">
          <div className="wrap">
            <div className="head">
              <div><span className="eyebrow mono">Signature brunch for two · €50</span><h2>The International.</h2></div>
              <p style={{ color: "var(--latte)" }}>Travel the world without leaving the table. Four cultures, one generous brunch made to share. Tap a country to see what it brings.</p>
            </div>
            <InternationalPlate />
          </div>
        </section>

        <section className="block menu" id="menu">
          <div className="wrap">
            <div className="head">
              <div><span className="eyebrow mono">The menu</span><h2>Where rich flavours and soft mornings meet.</h2></div>
              <p>Fresh, vibrant dishes made to share, savour and enjoy. Premium ingredients, homemade dressings and the signature Muné touch.</p>
            </div>
            <MenuPreview />
          </div>
        </section>

        <section className="block bread">
          <div className="wrap">
            <div>
              <span className="eyebrow mono">Signature croissant bread</span>
              <h2><span>Flaky like a croissant.</span><span>Made like bread.</span><span>Unmistakably Muné.</span></h2>
              <p>A croissant-style laminated dough, layered and folded with butter, baked until golden and toasted fresh before serving. Lightly crisp outside, soft and airy inside, and the base for every signature toast.</p>
            </div>
            <div className="layers">
              <img src="/img/c_toast.webp" alt="A signature croissant toast with side salad at Muné" loading="lazy" />
              <span className="cap mono">Laminated · folded · toasted fresh</span>
            </div>
          </div>
        </section>

        <section className="block sweets" id="sweets" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head">
              <div><span className="eyebrow mono">Signature sweets</span><h2>Crafted only for our table.</h2></div>
              <p style={{ color: "var(--latte)" }}>Dubai cakes, golden croissants and homemade baklava. <Link href="/menu/#sweets">See all sweets</Link></p>
            </div>
          </div>
          <div className="shelf" tabIndex={0} aria-label="Signature sweets, scroll sideways">
            {SHELF.map((s) => (
              <figure key={s.name}>
                <img src={s.img} alt="" loading="lazy" />
                <figcaption>{s.name} <small className="mono">{s.price}</small></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="block" id="gallery" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head">
              <div><span className="eyebrow mono">Inside Muné</span><h2>Spread happiness.</h2></div>
              <p style={{ color: "var(--latte)" }}>From bold espresso to calming matcha moments. Follow along for new creations and signature sweets.</p>
            </div>
            <div className="gallery-grid">
              {GALLERY.map(([k, alt]) => (
                <div className="arch" key={k}><img src={`/img/${k}.webp`} alt={alt} loading="lazy" /></div>
              ))}
            </div>
            <div className="ig">
              <span className="handle">@mune.leuven</span>
              <a className="btn ghost" href={SITE.instagram} target="_blank" rel="noopener">Follow on Instagram</a>
            </div>
          </div>
        </section>

        <section className="block visit" id="visit">
          <div className="wrap">
            <div style={{ minWidth: 0 }}>
              <span className="eyebrow mono">Visit us</span>
              <h2>See you on Muntstraat.</h2>
              <p className="addr">{SITE.address.street}<br />{SITE.address.city}, {SITE.address.country}</p>
              <div className="contact">
                <div className="row"><span className="k">Phone</span><span><a className="v" href={SITE.phoneHref}>{SITE.phone}</a> <CopyButton text={SITE.phone} /></span></div>
                <div className="row"><span className="k">Email</span><span><a className="v" href={`mailto:${SITE.email}`}>{SITE.email}</a> <CopyButton text={SITE.email} /></span></div>
              </div>
              <div className="ctas"><a className="btn" href={SITE.maps} target="_blank" rel="noopener">Get directions</a></div>
            </div>
            <div className="hours">
              <h3>Opening hours</h3>
              <p className="sub">Open every day of the week.</p>
              <HoursTable />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
