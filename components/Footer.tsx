import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} Muné · {SITE.address.street}, {SITE.address.city}</span>
        <nav>
          <a href={SITE.instagram} target="_blank" rel="noopener">Instagram</a>
          <a href={SITE.tiktok} target="_blank" rel="noopener">TikTok</a>
          <a href={SITE.facebook} target="_blank" rel="noopener">Facebook</a>
        </nav>
      </div>
      <div className="big" aria-hidden="true">Muné.</div>
    </footer>
  );
}
