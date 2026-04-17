import Link from "next/link";
import {
  ExternalLink,
  AlertTriangle,
  ShieldAlert,
  Truck,
  UserCheck,
  MapPin,
  Phone,
  Mail,
  Users,
  FileCheck,
  Clock,
} from "lucide-react";
import NextStepBox from "@/components/ui/NextStepBox";

const triageCards = [
  {
    href: "/100-ceza-puani",
    icon: AlertTriangle,
    title: "100 Ceza Puanı",
    description: "Ehliyetiniz geri alındıysa yasal sürecinizi öğrenin.",
  },
  {
    href: "/ehliyet-iadesi",
    icon: ShieldAlert,
    title: "Alkol / Hız İhlali",
    description: "Ehliyet iade sürecindeki psikoteknik zorunluluğu.",
  },
  {
    href: "/src-psikoteknik",
    icon: Truck,
    title: "SRC Belgeli Sürücüler",
    description: "Ticari araç psikoteknik yenileme şartları.",
  },
  {
    href: "/65-yas-surucu",
    icon: UserCheck,
    title: "65 Yaş Üstü Yenileme",
    description: "Periyodik psikoteknik değerlendirme zorunluluğu.",
  },
];

const kurumsalKartlar = [
  {
    icon: Users,
    baslik: "Toplu Değerlendirme",
    aciklama:
      "Filo sürücülerinizin psikoteknik süreçlerini merkezi olarak planlayın.",
  },
  {
    icon: FileCheck,
    baslik: "Mevzuat Uyumluluğu",
    aciklama:
      "Karayolu Taşıma Yönetmeliği Madde 34/e kapsamında tam uyumluluk takibi.",
  },
  {
    icon: Clock,
    baslik: "Yenileme Takibi",
    aciklama:
      "Süresi yaklaşan belgeler için önceden bilgilendirme ve organizasyon desteği.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── BÖLÜM A — HERO ── */}
      <section
        id="hero"
        className="flex min-h-[60vh] w-full items-center justify-center px-4 py-24 sm:px-6 md:py-32 lg:px-8"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Gülceoğlu Psikoteknik Değerlendirme Merkezi
          </h1>
          <p
            className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Sağlık Bakanlığı onaylı süreçleriniz için bilimsel değerlendirme
            altyapısı.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://www.turkiye.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium text-white transition-colors hover:bg-sky-700"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              e-Devlet&apos;te Belgeni Sorgula
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <Link
              href="#iletisim"
              className="inline-flex items-center rounded-lg border px-8 py-4 text-base font-medium transition-colors hover:bg-[var(--color-accent)]/5"
              style={{
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
              }}
            >
              Bilgi Alın
            </Link>
          </div>
        </div>
      </section>

      {/* ── BÖLÜM B — TRİAJ KARTLARI ── */}
      <section
        id="triage"
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-7xl">
          <h2
            className="mb-10 text-center text-2xl font-bold"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Durumunuza Göre Süreci Öğrenin
          </h2>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {triageCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400"
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
                    {card.title}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {card.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BÖLÜM C — KURUMSAL ── */}
      <section
        className="border-t border-slate-200 px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="mx-auto max-w-7xl">
          <h2
            className="text-center text-3xl font-bold"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Kurumsal ve Filo Psikoteknik Çözümleri
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-center"
            style={{ color: "var(--color-text-muted)" }}
          >
            Nakliye ve lojistik işletmeleri için mevzuat uyumluluk ve toplu
            psikoteknik değerlendirme organizasyonu.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {kurumsalKartlar.map((kart) => {
              const Icon = kart.icon;
              return (
                <div
                  key={kart.baslik}
                  className="rounded-xl border border-slate-200 bg-white p-8"
                >
                  <Icon
                    className="h-7 w-7"
                    strokeWidth={1.5}
                    style={{ color: "var(--color-accent)" }}
                  />
                  <p
                    className="mt-4 font-semibold"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BÖLÜM D — İLETİŞİM ── */}
      <section
        id="iletisim"
        className="px-4 py-24 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* NAP */}
            <div>
              <h3
                className="mb-6 text-xl font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Gülceoğlu Psikoteknik Değerlendirme Merkezi
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0"
                    strokeWidth={1.5}
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span style={{ color: "var(--color-text-muted)" }}>
                    Koşukavak, Kamil Tunca Caddesi No:200/B, 35080
                    Bornova/İzmir
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    className="h-5 w-5 shrink-0"
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
                <li className="flex items-center gap-3">
                  <Mail
                    className="h-5 w-5 shrink-0"
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

            {/* Google Maps embed */}
            <div>
              <iframe
                src="https://www.google.com/maps?q=Ko%C5%9Fukavak,+Kamil+Tunca+Cd+No:200%2FB,+35080+Bornova%2F%C4%B0zmir&output=embed"
                width="100%"
                className="aspect-video rounded-xl border-0"
                loading="lazy"
                title="Gülceoğlu Psikoteknik Harita"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BÖLÜM E — NEXTSTEPBOX ── */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="mx-auto max-w-3xl">
          <NextStepBox
            title="Psikoteknik Süreciniz Hakkında Bilgi Almak İster Misiniz?"
            description="Merkezimiz, yasal zorunluluk kapsamındaki tüm psikoteknik değerlendirme süreçleri hakkında bilgilendirme yapmaktadır."
            actionText="Süreci Öğrenin"
            actionHref="#iletisim"
          />
        </div>
      </section>
    </main>
  );
}
