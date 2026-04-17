import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / marka */}
        <Link href="/" className="flex flex-col">
          <span
            className="text-base font-semibold leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Gülceoğlu Psikoteknik
          </span>
          <span
            className="text-xs leading-tight"
            style={{ color: "var(--color-text-muted)" }}
          >
            İzmir Bornova
          </span>
        </Link>

        {/* Navigasyon linkleri */}
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-sm transition-colors hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="/#triage"
                className="text-sm transition-colors hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Hizmetler
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm transition-colors hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/#iletisim"
                className="text-sm transition-colors hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-text-muted)" }}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
