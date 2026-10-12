"use client";
import { useState } from "react";

const WORLD = [
  { flag: "🇦🇪", name: "Dubai", color: "#50360d", text: "Warm Arabic bread, creamy hummus and labneh with olive oil and za'atar." },
  { flag: "🇲🇦", name: "Morocco", color: "#986f55", text: "Warm msemen with traditional amlou, honey and Medjool dates." },
  { flag: "🇹🇷", name: "Türkiye", color: "#62823f", text: "Menemen or sucuk & eggs, white cheese and marinated olives." },
  { flag: "🇫🇷", name: "France", color: "#735240", text: "Butter croissant and pain au chocolat, freshly baked." },
];
const cx = 260, cy = 260, R = 240, r = 92;
const pt = (a: number, rad: number) => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
function arc(a0: number, a1: number) {
  const [x0, y0] = pt(a0, R), [x1, y1] = pt(a1, R), [x2, y2] = pt(a1, r), [x3, y3] = pt(a0, r);
  return `M${x0} ${y0}A${R} ${R} 0 0 1 ${x1} ${y1}L${x2} ${y2}A${r} ${r} 0 0 0 ${x3} ${y3}Z`;
}

export function InternationalPlate() {
  const [on, setOn] = useState<number | null>(null);
  const pick = (i: number) => setOn((cur) => (cur === i ? null : i));
  return (
    <div className="table-wrap">
      <div className={`plate${on !== null ? " has-on" : ""}`}>
        <svg viewBox="0 0 520 520" role="img" aria-label="The International brunch, four countries">
          {WORLD.map((w, i) => {
            const a0 = -Math.PI / 2 + (i * Math.PI) / 2, a1 = a0 + Math.PI / 2, am = (a0 + a1) / 2;
            const tx = cx + 166 * Math.cos(am), ty = cy + 166 * Math.sin(am);
            return (
              <g key={w.name} className={`seg${on === i ? " on" : ""}`} onClick={() => pick(i)}>
                <path d={arc(a0, a1)} fill={w.color} />
                <text x={tx} y={ty - 4} textAnchor="middle">{w.name}</text>
                <text className="k" x={tx} y={ty + 16} textAnchor="middle">0{i + 1} / 04</text>
              </g>
            );
          })}
          <circle className="center" cx="260" cy="260" r="92" />
          <text className="center-t" x="260" y="270" textAnchor="middle">Muné.</text>
        </svg>
      </div>
      <div className="countries">
        {WORLD.map((w, i) => (
          <button key={w.name} type="button" className="country" aria-pressed={on === i} onClick={() => pick(i)}>
            <span className="flag">{w.flag}</span>
            <b>{w.name}</b>
            <span>{w.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
