"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MENU, type MenuItem } from "@/data/menu";

type Tab = { key: string; group: string; when?: string; image: string; photo?: boolean; items: MenuItem[] };

const byGroup = (id: string) => MENU.find((g) => g.id === id)!;
const allItems = (id: string) => byGroup(id).sections.flatMap((s) => s.items);

// A short preview per category; the full list lives on /menu.
const TABS: Tab[] = [
  { key: "Breakfast", group: "breakfast", image: "/img/c_shak.webp", items: byGroup("breakfast").sections[0].items },
  { key: "Brunch", group: "brunch", when: "Available daily 11:00 – 19:00", image: "/img/brunch.webp", photo: true, items: allItems("brunch") },
  { key: "Croissant toasts", group: "toasts", when: "On our croissant-style bread, with a fresh side salad", image: "/img/c_croissant.webp", items: allItems("toasts") },
  { key: "Salads", group: "salads", when: "Available daily 08:00 – 17:00", image: "/img/c_salad.webp", photo: true, items: allItems("salads") },
  { key: "Signature drinks", group: "drinks", when: "Coffee roasted exclusively for Muné by Gust Coffee", image: "/img/c_cup.webp", items: byGroup("drinks").sections[0].items },
  { key: "Sweets", group: "sweets", when: "Signature sweets, crafted only for our table", image: "/img/c_cake.webp", items: byGroup("sweets").sections[0].items.slice(0, 6) },
];

export function MenuPreview() {
  const [tab, setTab] = useState(0);
  const [shown, setShown] = useState(0);
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    TABS.forEach((t) => { const i = new Image(); i.src = t.image; });
  }, []);
  useEffect(() => {
    if (tab === shown) return;
    setSwapping(true);
    const id = setTimeout(() => { setShown(tab); setSwapping(false); }, 220);
    return () => clearTimeout(id);
  }, [tab, shown]);

  const t = TABS[tab];
  const s = TABS[shown];
  return (
    <>
      <div className="tabs" role="tablist">
        {TABS.map((x, i) => (
          <button key={x.key} type="button" role="tab" aria-selected={i === tab} onClick={() => setTab(i)}>{x.key}</button>
        ))}
      </div>
      <div className="menu-body">
        <div style={{ minWidth: 0 }}>
          <p className="when mono">{t.when ?? ""}</p>
          <div className="menu-grid" role="tabpanel">
            {t.items.map((it, i) => (
              <div className="item" key={`${t.key}-${it.name}`} style={{ animationDelay: `${i * 50}ms` }}>
                <h3>{it.name}</h3>
                <span className="tag">{it.price}</span>
                {it.description && <p>{it.description}</p>}
              </div>
            ))}
          </div>
          <div className="ctas">
            <Link className="btn light" href={`/menu/#${t.group}`}>See the full menu</Link>
          </div>
        </div>
        <div className="showcase" aria-hidden="true">
          <div className="disc" />
          <img src={s.image} alt="" className={`${s.photo ? "photo" : ""}${swapping ? " swap" : ""}`} />
        </div>
      </div>
    </>
  );
}
