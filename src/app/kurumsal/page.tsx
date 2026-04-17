import type { Metadata } from "next";
import { Users, FileCheck, Clock, FileDown } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumb, createLocalBusiness } from "@/lib/schema";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kurumsal Filo Psikoteknik | Gülceoğlu Psikoteknik",
  description:
    "Lojistik ve nakliye firmaları için toplu psikoteknik değerlendirme ve mevzuat uyumluluk hizmetleri.",
};

const ozellikler = [
  {
    icon: Users,
    baslik: "Toplu Değerlendirme Organizasyonu",
    aciklama:
      "Şoförlerinizin psikoteknik süreçlerini merkezi olarak takip edin.",
  },
  {
    icon: FileCheck,
    baslik: "Mevzuat Uyumluluk Takibi",
    aciklama:
      "Karayolu Taşıma Yönetmeliği Madde 34/e kapsamında filo uyumluluğunuzu koruyun.",
  },
  {
    icon: Clock,
    baslik: "Belge Yenileme Hatırlatması",
    aciklama:
      "Süresi dolan belgeler için önceden bilgilendirme ve planlama desteği.",
  },
];

const waUrl = getWhatsAppUrl("Kurumsal Hizmetler", "/kurumsal");

export default function KurumsalPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Kurumsal", url: "/kurumsal" },
        ])}
      />
      <JsonLd
        data={createLocalBusiness({
          name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi - Kurumsal",
          url: "https://gulceoglupsikoteknik.com/kurumsal",
          address:
            "Koşukavak, Kamil Tunca Caddesi No:200/B, 35080 Bornova/İzmir",
          neighborhood: "Bornova",
        })}
      />

      <main>
        {/* Hero */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <div className="mx-auto max-w-4xl">
            <h1
              className="mb-4 text-4xl font-bold leading-tight text-white"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Filo Psikoteknik Uyumluluk Hizmetleri
            </h1>
            <p
              className="max-w-2xl text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              Nakliye ve lojistik firmaları için Karayolu Taşıma Yönetmeliği
              kapsamında toplu psikoteknik değerlendirme organizasyonu ve
              mevzuat uyumluluk danışmanlığı.
            </p>

            {/* 3 özellik kartı */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {ozellikler.map((kart) => {
                const Icon = kart.icon;
                return (
                  <div
                    key={kart.baslik}
                    className="rounded-xl p-6"
                    style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                  >
                    <Icon
                      className="mb-4 h-6 w-6"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <p className="mb-2 font-semibold text-white">
                      {kart.baslik}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.70)" }}
                    >
                      {kart.aciklama}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Teklif formu */}
        <section
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ backgroundColor: "var(--color-background)" }}
        >
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl bg-white p-8">
              <h2
                className="mb-3 text-2xl font-bold"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-fraunces)",
                }}
              >
                Kurumsal Bilgi Talebi
              </h2>
              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                Filo büyüklüğünüz ve ihtiyaçlarınız hakkında bilgi vermek için
                bize ulaşın.
              </p>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <Users className="h-5 w-5" />
                WhatsApp ile Kurumsal Bilgi Alın
              </a>

              {/* PDF placeholder */}
              <div className="mt-6 flex flex-col items-center justify-center rounded-xl p-8 text-center" style={{ border: "2px dashed #cbd5e1" }}>
                <FileDown
                  className="mb-3 h-12 w-12"
                  style={{ color: "#94a3b8" }}
                />
                <p
                  className="font-medium"
                  style={{ color: "var(--color-text-main)" }}
                >
                  Kurumsal Mevzuat Uyumluluk Dosyası
                </p>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "#64748b" }}
                >
                  PDF yakında yayınlanacak
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
