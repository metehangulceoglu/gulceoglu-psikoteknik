import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQPage, createHowTo, createBreadcrumb } from "@/lib/schema";
import MevzuatKarti from "@/components/ui/MevzuatKarti";
import Timeline from "@/components/ui/Timeline";
import FaqAccordion from "@/components/ui/FaqAccordion";
import NextStepBox from "@/components/ui/NextStepBox";

export const metadata: Metadata = {
  title: "Ehliyet İadesi Psikoteknik | Alkol ve Hız İhlali Süreci",
  description:
    "Alkol, hız ihlali veya drift nedeniyle ehliyetine el konulan sürücüler için psikoteknik ve yasal süreç rehberi.",
};

const faqItems = [
  {
    question: "Alkol nedeniyle ehliyetim alındı, psikoteknik zorunlu mu?",
    answer:
      "Evet. KTK Madde 48/5 gereğince alkol ihlali nedeniyle ehliyeti geri alınan sürücüler, belgeyi iade alabilmek için yetkili merkezden psikoteknik raporu almak zorundadır.",
  },
  {
    question: "Ehliyet iade sürecinde psikiyatri onayı da gerekli mi?",
    answer:
      "Evet. Psikoteknik değerlendirmenin ardından psikiyatri uzmanı muayenesi ve onayı da sürecin zorunlu parçasıdır.",
  },
  {
    question: "Psikoteknik rapor ne kadar sürede hazır olur?",
    answer:
      "Merkezimizde test yaklaşık 60 dakika sürmektedir. Raporunuz aynı gün e-Devlet sistemine işlenir.",
  },
  {
    question: "Stajyer ehliyeti iptal edilenlerde süreç nasıl işler?",
    answer:
      "Stajyer ehliyeti iptal edilen sürücüler için yeniden değerlendirme zorunludur. Psikoteknik ve psikiyatri onayının ardından trafik müdürlüğüne başvurulabilir.",
  },
];

const timelineSteps = [
  {
    stepNumber: 1,
    title: "Yasal Bekleme Süresinin Tamamlanması",
    description:
      "Alkol ihlalinde cezanın tekrar sayısına göre 6 ay, 2 yıl veya 5 yıl süreyle ehliyet alıkonulabilir. Bu sürenin tamamlanması zorunludur.",
    duration: "6 ay / 2 yıl / 5 yıl",
    mevzuat: "KTK Madde 48/5",
  },
  {
    stepNumber: 2,
    title: "Psikoteknik Değerlendirme",
    description:
      "Sağlık Bakanlığı tarafından yetkilendirilmiş merkezde bilgisayar destekli test bataryası uygulanır.",
    duration: "60 dakika",
  },
  {
    stepNumber: 3,
    title: "Psikiyatri Uzmanı Onayı",
    description:
      "Psikoteknik raporunun ardından psikiyatri uzmanı muayenesi ve onayı tamamlanır.",
    duration: "30 gün içinde",
  },
  {
    stepNumber: 4,
    title: "Trafik Müdürlüğüne Başvuru",
    description:
      "Psikoteknik rapor, psikiyatri onayı ve gerekli belgelerle İzmir İl Trafik Denetleme Şube Müdürlüğü'ne başvurularak ehliyet iade işlemi başlatılır.",
    mevzuat: "Gaziler Caddesi, Konak/İzmir",
  },
];

const chaprazLinkler = [
  { label: "Bornova", href: "/bornova" },
  { label: "Karşıyaka", href: "/karsiyaka" },
  { label: "Bayraklı", href: "/bayrakli" },
  { label: "Işıkkent", href: "/isikkent" },
];

export default function EhliyetIadesiPage() {
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
          name: "Ehliyet İadesi için Psikoteknik Süreci",
          steps: [
            "Yasal geri alma süresinin dolmasını bekleyin",
            "Yetkili psikoteknik merkezinde 60 dakikalık değerlendirmeye girin",
            "Psikiyatri uzmanı muayenesi ve onayını alın",
            "Psikoteknik rapor ve diğer belgelerle trafik müdürlüğüne başvurun",
          ],
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Ehliyet İadesi Psikoteknik", url: "/ehliyet-iadesi" },
        ])}
      />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Mevzuat kartı */}
        <div className="mb-10">
          <MevzuatKarti
            madde="Karayolları Trafik Kanunu Madde 48/5"
            ozet="Alkollü araç kullanımı nedeniyle ehliyeti geri alınan sürücüler, belge iadesi için psikoteknik değerlendirme ve psikiyatri onayından geçmek zorundadır."
            resmiMetin="Birinci fıkranın (b) bendi kapsamında haklarında işlem yapılanlar, sürücü belgelerini geri alabilmek için psikiyatri uzmanı muayenesine ve psikoteknik değerlendirmeye tabi tutulur."
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
          Ehliyet İadesi için Psikoteknik Değerlendirme Süreci
        </h1>
        <p
          className="mb-12 text-base leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Alkol kullanımı, aşırı hız ihlali veya 100 ceza puanının doldurulması
          nedeniyle ehliyetine el konulan sürücüler, Karayolları Trafik Kanunu
          kapsamında psikoteknik değerlendirme yaptırmakla yükümlüdür. Bu sayfa,
          söz konusu yasal süreç hakkında bilgilendirme amacıyla hazırlanmıştır.
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
          title="Ehliyet İade Süreciniz Hakkında Bilgi Alın"
          description="Merkezimiz, yasal zorunluluk kapsamındaki psikoteknik değerlendirme süreçleri hakkında bilgilendirme yapmaktadır."
          actionText="WhatsApp ile Bilgi Alın"
          actionHref="https://wa.me/905452204878"
        />
      </main>
    </>
  );
}
