"use client";
import { useEffect, useMemo, useState } from "react";
import { MENU, type MenuItem } from "@/data/menu";

const CARD_GROUPS = new Set(["sweets"]);

function matches(item: MenuItem, q: string) {
  if (!q) return true;
  const hay = `${item.name} ${item.description ?? ""} ${(item.notes ?? []).join(" ")}`.toLowerCase();
  return q.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
}

export function MenuBoard() {
  const [active, setActive] = useState(MENU[0].id);
  const [query, setQuery] = useState("");

  // Highlight the category currently in view.
  useEffect(() => {
    const els = MENU.map((g) => document.getElementById(g.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [query]);

  const groups = useMemo(
    () =>
      MENU.map((g) => ({
        ...g,
        sections: g.sections.map((s) => ({ ...s, items: s.items.filter((i) => matches(i, query.trim())) })).filter((s) => s.items.length),
      })).filter((g) => g.sections.length),
    [query],
  );
  const count = groups.reduce((n, g) => n + g.sections.reduce((m, s) => m + s.items.length, 0), 0);

  return (
    <>
      <div className="menu-bar">
        <div className="wrap">
          <nav aria-label="Menu categories">
            {MENU.map((g) => (
              <a key={g.id} href={`#${g.id}`} className={active === g.id ? "on" : undefined}>{g.title}</a>
            ))}
          </nav>
          <label className="search">
            <span className="mono">Search</span>
            <input id="menu-search" type="search" placeholder="Pistachio, matcha, halloumi…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
        </div>
      </div>

      <div className="wrap board">
        {query && <p className="mono result-count">{count} {count === 1 ? "item" : "items"} for “{query}”</p>}
        {groups.length === 0 && <p className="empty">Nothing on the menu matches “{query}”. Try another word.</p>}
        {groups.map((g) => (
          <section key={g.id} id={g.id} className="group">
            <header className="group-head">
              <h2>{g.title}</h2>
              <p>{g.tagline}</p>
            </header>
            {g.sections.map((s) => (
              <div key={s.id} className="msec">
                {(g.sections.length > 1 || s.title !== g.title) && <h3 className="msec-title">{s.title}</h3>}
                {s.intro && <p className="msec-intro">{s.intro}</p>}
                {CARD_GROUPS.has(g.id) ? (
                  <div className="cards">
                    {s.items.map((it) => (
                      <div className="card" key={it.name}>
                        <div className="card-img">{it.image ? <img src={it.image} alt="" loading="lazy" /> : <span className="mono">Muné</span>}</div>
                        <div className="card-row"><b>{it.name}</b><span className="price">{it.price}</span></div>
                        {it.badge && <span className="badge mono">{it.badge}</span>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="list">
                    {s.items.map((it) => (
                      <li key={it.name} className={it.image ? "has-img" : undefined}>
                        {it.image && <img className="thumb" src={it.image} alt="" loading="lazy" />}
                        <div className="li-body">
                          <div className="li-head">
                            <b>{it.name}</b>
                            {it.badge && <span className="badge mono">{it.badge}</span>}
                            <span className="leader" aria-hidden="true" />
                            <span className="price">{it.price}</span>
                          </div>
                          {it.description && <p>{it.description}</p>}
                          {it.notes && <ul className="notes">{it.notes.map((n) => <li key={n}>{n}</li>)}</ul>}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {s.footnote && <p className="msec-foot mono">{s.footnote}</p>}
              </div>
            ))}
          </section>
        ))}
        <p className="allergy">Allergies or dietary needs? Ask our team, we are happy to help. * May contain traces of nuts.</p>
      </div>
    </>
  );
}
