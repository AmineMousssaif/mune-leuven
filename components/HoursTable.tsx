"use client";
import { useEffect, useState } from "react";
import { DAYS, HOURS, brusselsNow, pad } from "@/data/site";

export function HoursTable() {
  const [today, setToday] = useState(-1);
  useEffect(() => setToday(brusselsNow().day), []);
  return (
    <table>
      <tbody>
        {HOURS.map(([o, c], i) => (
          <tr key={DAYS[i]} className={i === today ? "today" : undefined}>
            <td>{DAYS[i]}</td>
            <td>{pad(o)} – {pad(c)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
