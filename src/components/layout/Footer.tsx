import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Sol sütun */}
          <div>
            <p
              className="text-base font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Gülceoğlu Psikoteknik Değerlendirme Merkezi
            </p>
            <p
              className="mt-2 text-sm leading-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Sağlık Bakanlığı onaylı psikoteknik değerlendirme merkezi.
            </p>
          </div>

          {/* Orta sütun */}
          <div>
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              Yasal
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/gizlilik-politikasi"
                  className="hover:underline"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/kvkk"
                  className="hover:underline"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link
                  href="/cerez-politikasi"
                  className="hover:underline"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>

          {/* Sağ sütun — NAP */}
          <div>
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)" }}
            >
              İletişim
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  strokeWidth={1.5}
                  style={{ color: "var(--color-accent)" }}
                />
                <span style={{ color: "var(--color-text-muted)" }}>
                  Koşukavak, Kamil Tunca Caddesi No:200/B, 35080 Bornova/İzmir
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.5}
                  style={{ color: "var(--color-accent)" }}
                />
                <a
                  href="tel:+905452204878"
                  className="hover:underline"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  0545 220 48 78
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.5}
                  style={{ color: "var(--color-accent)" }}
                />
                <a
                  href="mailto:gulceoglupsikoteknik@gmail.com"
                  className="hover:underline"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  gulceoglupsikoteknik@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt bilgi çubuğu */}
      <div className="border-t border-slate-200 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-2">
          <p className="text-xs leading-6 text-slate-400">
            Bu web sitesindeki içerikler bilgilendirme amaçlıdır. Sağlık
            Hizmetleri Tanıtım ve Bilgilendirme Faaliyetleri Hakkında
            Yönetmelik kurallarına uygun olarak hazırlanmış olup hiçbir şekilde
            reklam, talep yaratma veya haksız rekabet amacı gütmemektedir.
            Psikoteknik değerlendirme, 60 dakika süren bilimsel ve yasal bir
            zorunluluktur.
          </p>
          <p className="text-xs text-slate-400">
            © 2025 Gülceoğlu Psikoteknik Değerlendirme Merkezi
          </p>
        </div>
      </div>
    </footer>
  );
}
