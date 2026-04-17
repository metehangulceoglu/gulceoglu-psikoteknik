import Link from "next/link";
import {
  Phone,
  MessageCircle,
  FileText,
  Truck,
  UserCheck,
  MapPin,
} from "lucide-react";
import NextStepBox from "@/components/ui/NextStepBox";

interface LocationPageTemplateProps {
  ilce: string;
  slug: string;
  description: string;
  trafikMudurlugu: string;
  trafikMudurluguAdres: string;
  mesafe: string;
  yakinIlceler: string[];
}

const hizmetKartlari = [
  {
    icon: FileText,
    baslik: "Ehliyet İadesi Psikoteknik",
    aciklama:
      "Alkol, hız ihlali veya 100 ceza puanı nedeniyle ehliyeti geri alınan sürücüler için yasal zorunluluk.",
    href: "/ehliyet-iadesi",
  },
  {
    icon: Truck,
    baslik: "SRC Psikoteknik Yenileme",
    aciklama:
      "Ticari araç sürücüleri için 5 yılda bir zorunlu psikoteknik değerlendirme.",
    href: "/src-psikoteknik",
  },
  {
    icon: UserCheck,
    baslik: "65 Yaş Üstü Değerlendirme",
    aciklama:
      "65 yaş üstü sürücüler için periyodik psikoteknik yenileme zorunluluğu.",
    href: "/65-yas-surucu",
  },
];

const surecAdimlari = [
  {
    baslik: "Randevu Alın",
    aciklama: "Merkezimize gelin veya WhatsApp ile randevu alın.",
  },
  {
    baslik: "Testleri Tamamlayın",
    aciklama:
      "Yaklaşık 60 dakika süren bilgisayar destekli testleri tamamlayın.",
  },
  {
    baslik: "Değerlendirme",
    aciklama: "Psikolog değerlendirmesi ve psikiyatri onayı alın.",
  },
  {
    baslik: "e-Devlet'e İşlenir",
    aciklama: "Raporunuz aynı gün e-Devlet sistemine işlenir.",
  },
];

function slugify(ilce: string): string {
  return ilce
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/\s+/g, "-");
}

export default function LocationPageTemplate({
  ilce,
  trafikMudurlugu,
  trafikMudurluguAdres,
  mesafe,
  yakinIlceler,
}: LocationPageTemplateProps) {
  return (
    <main>
      {/* ── BÖLÜM 1 — HERO ── */}
      <section
        className="px-4 py-24 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="mb-6 text-4xl font-bold leading-tight"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            {ilce} Psikoteknik Değerlendirme
          </h1>
          <p
            className="mb-10 text-lg leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {ilce} ve çevre ilçelerden gelen sürücüler için Sağlık Bakanlığı
            onaylı psikoteknik değerlendirme. {mesafe}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+905452204878"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium text-white transition-colors hover:bg-sky-700"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              0545 220 48 78
            </a>
            <a
              href="https://wa.me/905452204878"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp ile Bilgi Al
            </a>
          </div>
        </div>
      </section>

      {/* ── BÖLÜM 2 — HİZMET KARTLARI ── */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {hizmetKartlari.map((kart) => {
              const Icon = kart.icon;
              return (
                <Link
                  key={kart.href}
                  href={kart.href}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400"
                >
                  <Icon
                    className="mb-4 h-7 w-7"
                    strokeWidth={1.5}
                    style={{ color: "var(--color-accent)" }}
                  />
                  <p
                    className="mb-2 text-base font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {kart.baslik}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {kart.aciklama}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BÖLÜM 3 — YAKIN TRAFİK MÜDÜRLÜĞÜ ── */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-6 text-2xl font-bold"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Psikoteknik Sonrası Trafik Müdürlüğü
          </h2>
          <div
            className="rounded-r-lg border-l-4 bg-white p-8"
            style={{ borderLeftColor: "var(--color-accent)" }}
          >
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0"
                strokeWidth={1.5}
                style={{ color: "var(--color-accent)" }}
              />
              <div>
                <p
                  className="font-semibold"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {trafikMudurlugu}
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {trafikMudurluguAdres}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Psikoteknik raporunuz sistem üzerinden trafik müdürlüğüne
                  otomatik olarak iletilmektedir. Belgenizi aldıktan sonra
                  trafik müdürlüğüne başvurabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BÖLÜM 4 — SÜREÇ ADIMLARI ── */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-10 text-2xl font-bold"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            {ilce}&apos;de Psikoteknik Süreci
          </h2>
          <ol className="space-y-6">
            {surecAdimlari.map((adim, index) => (
              <li key={index} className="flex items-start gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {index + 1}
                </span>
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-text-main)" }}
                  >
                    {adim.baslik}
                  </p>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {adim.aciklama}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── BÖLÜM 5 — KOMŞU İLÇE LİNKLERİ ── */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="mx-auto max-w-3xl">
          <h3
            className="mb-4 text-lg font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            Çevre İlçelerden de Hizmet Veriyoruz
          </h3>
          <div className="flex flex-wrap gap-2">
            {yakinIlceler.map((yakinIlce) => (
              <Link
                key={yakinIlce}
                href={`/${slugify(yakinIlce)}`}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-200"
                style={{ color: "var(--color-text-main)" }}
              >
                {yakinIlce} Psikoteknik
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BÖLÜM 6 — NEXTSTEPBOX ── */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-3xl">
          <NextStepBox
            title={`${ilce} Psikoteknik Randevusu İçin Bilgi Alın`}
            description="Merkezimiz hafta içi ve hafta sonu hizmet vermektedir. Süreciniz hakkında bilgi almak için bize ulaşın."
            actionText="WhatsApp ile İletişime Geçin"
            actionHref="https://wa.me/905452204878"
          />
        </div>
      </section>
    </main>
  );
}
