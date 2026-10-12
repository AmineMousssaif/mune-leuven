export const SITE = {
  name: "Muné",
  url: "https://mune.be",
  address: { street: "Muntstraat 46", city: "3000 Leuven", country: "Belgium" },
  phone: "+32 488 40 44 45",
  phoneHref: "tel:+32488404445",
  email: "info@muneleuven.be",
  maps: "https://maps.google.com/?q=Muntstraat+46,+3000+Leuven",
  instagram: "https://www.instagram.com/mune.leuven",
  tiktok: "https://www.tiktok.com/@mune.leuven",
  facebook: "https://www.facebook.com/share/1JWUQm5wcs/",
};

/** Opening hours from mune.be. Index 0 = Monday. [open, close] in hours. */
export const HOURS: [number, number][] = [
  [9, 22], [9, 22], [9, 22], [9, 22], [9, 23], [9, 23], [9, 23],
];
export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const pad = (n: number) => `${String(n).padStart(2, "0")}:00`;

export function brusselsNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Brussels", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(get("weekday"));
  return { day, hour: Number(get("hour")) + Number(get("minute")) / 60 };
}
