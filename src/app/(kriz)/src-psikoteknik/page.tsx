import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQPage, createHowTo, createBreadcrumb } from "@/lib/schema";
import MevzuatKarti from "@/components/ui/MevzuatKarti";
import Timeline from "@/components/ui/Timeline";
import FaqAccordion from "@/components/ui/FaqAccordion";
import NextStepBox from "@/components/ui/NextStepBox";

export const metadata: Metadata = {
  title: "SRC Psikoteknik | Ticari Araç Sürücüleri 5 Yıllık Yenileme",
  description:
    "SRC belgeli ticari araç sürücüleri için 5 yılda bir zorunlu psikoteknik değerlendirme süreci.",
};

const faqItems = [
  {
    question: "Hangi SRC belge türleri psikoteknik zorunluluğu kapsar?",
    answer:
      "SRC 1, SRC 2, SRC 3, SRC 4 ve SRC 5 belgesi sahiplerinin tamamı Karayolu Taşıma Yönetmeliği Madde 34/e kapsamında her 5 yılda bir psikoteknik değerlendirme yaptırmak zorundadır.",
  },
  {
    question: "SRC psikoteknik belgesi ne kadar süre geçerlidir?",
    answer:
      "5 yıl geçerlidir. Süre dolmadan yenileme yapılmaması durumunda ticari araç kullanım yetkisi askıya alınabilir.",
  },
  {
    question:
      "Taksi ve dolmuş sürücüleri de psikoteknik yaptırmak zorunda mı?",
    answer:
      "Evet. Yolcu taşımacılığı yapan tüm ticari araç sürücüleri (taksi, dolmuş, servis, otobüs) psikoteknik zorunluluğu kapsamındadır.",
  },
  {
    question: "SRC psikoteknik randevusu için hangi belgeler gerekir?",
    answer:
      "Kimlik belgesi ve SRC belgeniz yeterlidir. Randevu öncesinde merkezimizle iletişime geçmenizi öneririz.",
  },
];

const timelineSteps = [
  {
    stepNumber: 1,
    title: "Belge Yenileme Tarihini Kontrol Edin",
    description:
      "SRC belgenizin geçerlilik süresini e-Devlet üzerinden sorgulayabilirsiniz.",
    duration: "5 yılda bir",
    mevzuat: "Karayolu Taşıma Yönetmeliği Madde 34/e",
  },
  {
    stepNumber: 2,
    title: "Psikoteknik Değerlendirme",
    description:
      "Bilgisayar destekli test bataryası uygulanır. Dikkat, tepki hızı, koordinasyon ve kişilik özellikleri değerlendirilir.",
    duration: "60 dakika",
  },
  {
    stepNumber: 3,
    title: "Psikiyatri Onayı",
    description:
      "Psikolog değerlendirmesinin ardından psikiyatri uzmanı muayenesi tamamlanır.",
  },
  {
    stepNumber: 4,
    title: "e-Devlet Kaydı",
    description:
      "Raporunuz aynı gün Sağlık Bakanlığı sistemine işlenir ve e-Devlet üzerinden sorgulanabilir olur.",
  },
];

const srcTurleri = [
  {
    tur: "SRC 1",
    aciklama: "Tehlikeli madde taşıyan araç sürücüleri",
    periyot: "5 yılda bir",
  },
  {
    tur: "SRC 2",
    aciklama: "Uluslararası yük taşımacılığı",
    periyot: "5 yılda bir",
  },
  {
    tur: "SRC 3",
    aciklama: "Yurt içi yük taşımacılığı",
    periyot: "5 yılda bir",
  },
  {
    tur: "SRC 4",
    aciklama: "Uluslararası yolcu taşımacılığı",
    periyot: "5 yılda bir",
  },
  {
    tur: "SRC 5",
    aciklama: "Yurt içi yolcu taşımacılığı",
    periyot: "5 yılda bir",
  },
];

const chaprazLinkler = [
  { label: "Işıkkent", href: "/isikkent" },
  { label: "Kemalpaşa", href: "/kemalpasa" },
  { label: "Bornova", href: "/bornova" },
  { label: "Çiğli", href: "/cigli" },
];

export default function SrcPsikoteknikPage() {
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
          name: "SRC Psikoteknik Yenileme Süreci",
          steps: [
            "Belge bitiş tarihini kontrol edin, süre dolmadan başvurun",
            "Yetkili psikoteknik merkezinde 60 dakikalık değerlendirmeye girin",
            "Psikolog değerlendirmesi ve psikiyatri onayı tamamlanır",
            "Raporunuz aynı gün e-Devlet sistemine işlenir",
          ],
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "SRC Psikoteknik", url: "/src-psikoteknik" },
        ])}
      />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Mevzuat kartı */}
        <div className="mb-10">
          <MevzuatKarti
            madde="Karayolu Taşıma Yönetmeliği Madde 34/e"
            ozet="Karayoluyla yük veya yolcu taşıyan ticari araç sürücüleri, SRC belgelerini 5 yılda bir yenilemek ve psikoteknik değerlendirmeden geçmek zorundadır."
            resmiMetin="Mesleki yeterlilik belgesi sahipleri, her beş yılda bir psikoteknik değerlendirmeye tabi tutulur."
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
          SRC Belgeli Sürücüler için Psikoteknik Değerlendirme
        </h1>
        <p
          className="mb-12 text-base leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Karayolu Taşıma Yönetmeliği Madde 34/e uyarınca SRC (1-2-3-4-5)
          belgesi sahibi tüm ticari araç sürücüleri, her 5 yılda bir Sağlık
          Bakanlığı yetkili merkezde psikoteknik değerlendirme yaptırmakla
          yükümlüdür. Kamyon, TIR, otobüs, taksi, dolmuş, servis ve kurye
          sürücüleri bu kapsama dahildir.
        </p>

        {/* SRC türleri tablosu */}
        <section className="mb-14">
          <h2
            className="mb-4 text-xl font-bold"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Psikoteknik Zorunluluğu Olan SRC Türleri
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Belge Türü
                  </th>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Kapsam
                  </th>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Yenileme
                  </th>
                </tr>
              </thead>
              <tbody>
                {srcTurleri.map((row) => (
                  <tr key={row.tur} className="border-b border-slate-200">
                    <td
                      className="px-4 py-3 font-medium"
                      style={{ color: "var(--color-text-main)" }}
                    >
                      {row.tur}
                    </td>
                    <td
                      className="px-4 py-3"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {row.aciklama}
                    </td>
                    <td
                      className="px-4 py-3"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {row.periyot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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
          title="SRC Psikoteknik Yenileme Süreciniz İçin Bilgi Alın"
          description="5 yıllık yenileme zorunluluğunuz veya ilk psikoteknik değerlendirmeniz hakkında bilgi almak için bize ulaşın."
          actionText="WhatsApp ile Bilgi Alın"
          actionHref="https://wa.me/905452204878"
        />
      </main>
    </>
  );
}
