import Link from "next/link";

export function Nav({ onMenuPage = false }: { onMenuPage?: boolean }) {
  const h = (id: string) => (onMenuPage ? `/#${id}` : `#${id}`);
  return (
    <header className="nav">
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Muné home">
          <span className="wordmark">Muné.</span>
        </Link>
        <ul>
          <li><a href={h("story")}>Our story</a></li>
          <li><a href={h("international")}>The International</a></li>
          <li><Link href="/menu/" aria-current={onMenuPage ? "page" : undefined}>Menu</Link></li>
          <li><a href={h("sweets")}>Sweets</a></li>
          <li><a href={h("visit")}>Visit</a></li>
        </ul>
        <a className="btn" href={h("visit")}>Visit us</a>
      </div>
    </header>
  );
}
