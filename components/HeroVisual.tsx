"use client";
import { useEffect, useRef } from "react";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      ref.current?.querySelectorAll<HTMLElement>(".float").forEach((f) => {
        const d = Number(f.dataset.depth);
        f.style.transform = `translate(${x * d}px, ${y * d}px)`;
      });
    };
    addEventListener("pointermove", move);
    return () => removeEventListener("pointermove", move);
  }, []);
  return (
    <div className="hero-visual" ref={ref}>
      <div className="arch">
        <img src="/img/hero.webp" alt="The Muné dining room on Muntstraat, with its illuminated arch" fetchPriority="high" />
      </div>
      <img className="float f1" data-depth="18" src="/img/c_matcha.webp" alt="Iced pistachio matcha" />
      <img className="float f2" data-depth="-14" src="/img/c_latte.webp" alt="Pistachio latte" />
      <img className="float f3" data-depth="10" src="/img/c_croissant.webp" alt="Pistachio croissant" />
      <span className="dist mono">Dubai → Leuven · 5,130 km</span>
    </div>
  );
}
