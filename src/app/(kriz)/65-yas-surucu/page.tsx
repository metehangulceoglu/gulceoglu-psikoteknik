import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQPage, createHowTo, createBreadcrumb } from "@/lib/schema";
import MevzuatKarti from "@/components/ui/MevzuatKarti";
import Timeline from "@/components/ui/Timeline";
import FaqAccordion from "@/components/ui/FaqAccordion";
import NextStepBox from "@/components/ui/NextStepBox";

export const metadata: Metadata = {
  title: "65 Yaş Üstü Sürücü Psikoteknik | Periyodik Yenileme",
  description:
    "65 yaş üstü ticari araç sürücüleri için periyodik psikoteknik değerlendirme zorunluluğu ve süreci.",
};

const faqItems = [
  {
    question: "65 yaş üstü tüm sürücüler psikoteknik yaptırmak zorunda mı?",
    answer:
      "Ticari araç kullanan 65 yaş üstü sürücüler periyodik psikoteknik değerlendirmeye tabidir. Özel araç sürücüleri için farklı mevzuat geçerlidir.",
  },
  {
    question: "65 yaş psikoteknik ne sıklıkla yenilenir?",
    answer:
      "Ticari araç sürücüleri için periyot, araç türü ve belge sınıfına göre değişmektedir. Güncel mevzuat için trafik müdürlüğünüze başvurmanızı öneririz.",
  },
  {
    question: "Test süreci yaşlı sürücüler için farklı mı?",
    answer:
      "Test bataryası standarttır. Bilgisayar destekli değerlendirme tüm yaş grupları için aynı protokolde uygulanır.",
  },
];

const timelineSteps = [
  {
    stepNumber: 1,
    title: "Yenileme Tarihini Öğrenin",
    description:
      "Trafik müdürlüğünüzden veya e-Devlet üzerinden psikoteknik yenileme tarihinizi öğrenin.",
  },
  {
    stepNumber: 2,
    title: "Psikoteknik Değerlendirme",
    description:
      "Sağlık Bakanlığı yetkili merkezinde bilgisayar destekli test bataryası uygulanır.",
    duration: "60 dakika",
  },
  {
    stepNumber: 3,
    title: "Psikiyatri Onayı",
    description:
      "Test sonucunun psikiyatri uzmanı tarafından değerlendirilmesi.",
  },
  {
    stepNumber: 4,
    title: "Trafik Müdürlüğüne Başvuru",
    description:
      "Güncel psikoteknik belgenizle trafik müdürlüğüne başvurarak sürücü belgenizi yenileyin.",
  },
];

const chaprazLinkler = [
  { label: "Bornova", href: "/bornova" },
  { label: "Bayraklı", href: "/bayrakli" },
  { label: "Karşıyaka", href: "/karsiyaka" },
];

export default function YasliSuruculerPage() {
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
          name: "65 Yaş Üstü Sürücü Psikoteknik Süreci",
          steps: [
            "Belge yenileme tarihini trafik müdürlüğünden öğrenin",
            "Yetkili psikoteknik merkezinde değerlendirmeye girin",
            "Psikiyatri onayı alın",
            "Güncel belgeyle trafik müdürlüğüne başvurun",
          ],
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "65 Yaş Üstü Psikoteknik", url: "/65-yas-surucu" },
        ])}
      />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Mevzuat kartı */}
        <div className="mb-10">
          <MevzuatKarti
            madde="Karayolları Trafik Yönetmeliği — Periyodik Sağlık Kontrolü"
            ozet="Belirli yaş ve araç sınıfı kriterlerini karşılayan sürücüler, düzenli aralıklarla psikoteknik değerlendirme yaptırmakla yükümlüdür."
            resmiMetin="Ticari araç kullanan sürücüler, yaş ve belge sınıfına göre belirlenen periyotlarda sağlık ve psikoteknik kontrolüne tabi tutulur."
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
          65 Yaş Üstü Ticari Araç Sürücüleri için Psikoteknik
        </h1>
        <p
          className="mb-12 text-base leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Belirli yaş gruplarındaki ticari araç sürücüleri, Karayolları Trafik
          mevzuatı kapsamında periyodik psikoteknik değerlendirmeye tabidir. Bu
          sayfa, söz konusu zorunluluk ve süreç hakkında bilgilendirme amacıyla
          hazırlanmıştır.
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
          title="Periyodik Psikoteknik Değerlendirme Hakkında Bilgi Alın"
          description="Yenileme tarihiniz veya süreç hakkında bilgi almak için bize ulaşın."
          actionText="WhatsApp ile Bilgi Alın"
          actionHref="https://wa.me/905452204878"
        />
      </main>
    </>
  );
}
