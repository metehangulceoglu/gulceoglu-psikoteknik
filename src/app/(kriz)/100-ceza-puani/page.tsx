import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQPage, createHowTo, createBreadcrumb } from "@/lib/schema";
import MevzuatKarti from "@/components/ui/MevzuatKarti";
import Timeline from "@/components/ui/Timeline";
import FaqAccordion from "@/components/ui/FaqAccordion";
import NextStepBox from "@/components/ui/NextStepBox";

export const metadata: Metadata = {
  title: "100 Ceza Puanı Psikoteknik Süreci | Gülceoğlu Psikoteknik",
  description:
    "Bir yıl içinde 100 ceza puanını dolduran sürücüler için psikoteknik zorunluluğu ve yasal süreç rehberi.",
};

const faqItems = [
  {
    question: "100 ceza puanını doldurunca ne olur?",
    answer:
      "KTK Madde 118 gereğince bir takvim yılı içinde 100 ceza puanına ulaşan sürücülerin ehliyeti 4 ay süreyle geri alınır.",
  },
  {
    question: "4 aylık süre dolduktan sonra psikoteknik zorunlu mu?",
    answer:
      "Evet. Ehliyeti geri alınan sürücüler, belgeyi iade alabilmek için psikoteknik değerlendirme ve psikiyatri onayından geçmek zorundadır.",
  },
  {
    question: "Ceza puanı sıfırlanıyor mu?",
    answer:
      "4 aylık süre ve psikoteknik sürecinin tamamlanmasının ardından ceza puanı sıfırlanarak ehliyet iade edilir.",
  },
];

const timelineSteps = [
  {
    stepNumber: 1,
    title: "Ehliyetin Geri Alınması",
    description:
      "Trafik müdürlüğü tarafından ehliyet 4 aylık süreyle geri alınır.",
    duration: "4 ay",
    mevzuat: "KTK Madde 118",
  },
  {
    stepNumber: 2,
    title: "Psikoteknik Değerlendirme",
    description:
      "4 aylık sürenin dolmasının ardından Sağlık Bakanlığı yetkili merkezinde test yapılır.",
    duration: "60 dakika",
  },
  {
    stepNumber: 3,
    title: "Psikiyatri Onayı",
    description:
      "Test sonucunun psikiyatri uzmanı tarafından değerlendirilmesi ve onaylanması.",
    duration: "30 gün içinde",
  },
  {
    stepNumber: 4,
    title: "Trafik Müdürlüğüne Başvuru",
    description:
      "Gerekli belgelerle trafik müdürlüğüne başvurularak ehliyet iade işlemi tamamlanır.",
  },
];

const chaprazLinkler = [
  { label: "Bornova", href: "/bornova" },
  { label: "Karşıyaka", href: "/karsiyaka" },
  { label: "Bayraklı", href: "/bayrakli" },
  { label: "Çiğli", href: "/cigli" },
];

export default function CezaPuaniPage() {
  return (
    <>
      <JsonLd
        data={createFAQPage(
          faqItems.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))
        )}
      />
      <JsonLd
        data={createHowTo({
          name: "100 Ceza Puanı Sonrası Ehliyet İade Süreci",
          steps: [
            "Ehliyetin geri alınmasından itibaren 4 aylık yasal bekleme süresi",
            "Yetkili psikoteknik merkezinde değerlendirme (60 dakika)",
            "Psikiyatri uzmanı onayı",
            "Trafik müdürlüğüne başvuru ve ehliyet iadesi",
          ],
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "100 Ceza Puanı", url: "/100-ceza-puani" },
        ])}
      />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Mevzuat kartı */}
        <div className="mb-10">
          <MevzuatKarti
            madde="Karayolları Trafik Kanunu Madde 118"
            ozet="Bir takvim yılı içinde 100 ceza puanına ulaşan sürücünün ehliyeti 4 ay süreyle geri alınır. İade için psikoteknik değerlendirme zorunludur."
            resmiMetin="Bir takvim yılı içinde 100 ceza puanını dolduran sürücülerin belgeleri dört ay süre ile geri alınır."
          />
        </div>

        {/* H1 + giriş */}
        <h1
          className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-fraunces)",
          }}
        >
          100 Ceza Puanı: Ehliyet Geri Alma ve İade Süreci
        </h1>
        <p
          className="mb-12 text-base leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Karayolları Trafik Kanunu Madde 118 uyarınca bir takvim yılı içinde
          100 ceza puanına ulaşan sürücülerin ehliyeti 4 ay süreyle geri
          alınmaktadır. Belgenin iadesi için yasal bekleme süresinin ardından
          psikoteknik değerlendirme yaptırılması zorunludur.
        </p>

        {/* Timeline */}
        <section className="mb-14">
          <h2
            className="mb-8 text-xl font-bold"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Süreç Adımları
          </h2>
          <Timeline steps={timelineSteps} />
        </section>

        {/* Çapraz linkler */}
        <section className="mb-14">
          <h3
            className="mb-3 text-lg font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            İzmir&apos;de Psikoteknik Merkezi Konumumuz
          </h3>
          <p
            className="mb-4 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Bornova merkezimiz, İzmir&apos;in tüm ilçelerinden ulaşılabilir
            konumdadır.
          </p>
          <div className="flex flex-wrap gap-2">
            {chaprazLinkler.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-200"
                style={{ color: "var(--color-text-main)" }}
              >
                {link.label} Psikoteknik
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2
            className="mb-6 text-xl font-bold"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Sıkça Sorulan Sorular
          </h2>
          <FaqAccordion items={faqItems} />
        </section>

        {/* NextStepBox */}
        <NextStepBox
          title="100 Ceza Puanı Süreciniz Hakkında Bilgi Alın"
          description="Psikoteknik değerlendirme süreci ve gerekli belgeler hakkında bilgi almak için bize ulaşın."
          actionText="WhatsApp ile Bilgi Alın"
          actionHref="https://wa.me/905452204878"
        />
      </main>
    </>
  );
}
