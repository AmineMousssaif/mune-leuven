"use client";
import { useEffect, useState } from "react";
import { HOURS, brusselsNow, pad } from "@/data/site";

export function OpenStatus() {
  const [state, setState] = useState<{ open: boolean; text: string } | null>(null);
  useEffect(() => {
    const tick = () => {
      const { day, hour } = brusselsNow();
      const [o, c] = HOURS[day];
      const open = hour >= o && hour < c;
      const text = open ? `Open now · until ${pad(c)}` : hour < o ? `Closed · opens at ${pad(o)}` : `Closed · opens tomorrow at ${pad(HOURS[(day + 1) % 7][0])}`;
      setState({ open, text });
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className={`status mono${state?.open ? " open" : ""}`}>
      <span className="dot" />
      <span>{state?.text ?? "Muntstraat 46 · Leuven"}</span>
    </div>
  );
}
