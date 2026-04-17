"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Step = 1 | 2 | 3;

type CezaTuru =
  | "100-ceza"
  | "alkol-hiz"
  | "src"
  | "65-yas"
  | "";

type EhliyetSinifi = "b-sinifi" | "c-d-e-sinifi" | "bilmiyorum" | "";

const CEZA_LABELS: Record<Exclude<CezaTuru, "">, string> = {
  "100-ceza": "100 Ceza Puanını Doldurdum",
  "alkol-hiz": "Alkol/Hız İhlali Nedeniyle Ehliyetim Alındı",
  src: "SRC Belge Yenilemem Gerekiyor",
  "65-yas": "65 Yaş Üstü Yenileme Yapacağım",
};

const EHLIYET_LABELS: Record<Exclude<EhliyetSinifi, "">, string> = {
  "b-sinifi": "B Sınıfı (Otomobil)",
  "c-d-e-sinifi": "C/D/E Sınıfı (Ticari Araç)",
  bilmiyorum: "Bilmiyorum",
};

function generateResult(cezaTuru: CezaTuru): string[] {
  if (cezaTuru === "100-ceza") {
    return [
      "Ehliyetiniz trafik müdürlüğüne teslim edildi veya edilecek.",
      "4 aylık yasal bekleme süresinin dolmasını bekleyin (KTK Md. 118).",
      "Süre dolmadan psikoteknik değerlendirme randevusu alın.",
      "Gülceoğlu Psikoteknik'te 60 dakikalık değerlendirmeye girin.",
      "Psikiyatri uzmanı onayını tamamlayın.",
      "Tüm belgelerle İzmir Trafik Müdürlüğü'ne başvurun.",
    ];
  }
  if (cezaTuru === "alkol-hiz") {
    return [
      "Yasal geri alma sürenizin dolmasını bekleyin (6 ay / 2 yıl / 5 yıl).",
      "Süre dolmadan yetkili psikoteknik merkeze başvurun.",
      "60 dakikalık bilgisayar destekli test bataryasını tamamlayın.",
      "Psikiyatri uzmanı muayenesi ve onayını alın.",
      "Psikoteknik rapor + psikiyatri onayı ile trafik müdürlüğüne gidin.",
    ];
  }
  if (cezaTuru === "src") {
    return [
      "SRC belgenizin bitiş tarihini kontrol edin.",
      "Süre dolmadan (tercihen 1 ay önce) psikoteknik randevusu alın.",
      "Yetkili merkezde 60 dakikalık değerlendirmeye girin.",
      "Psikiyatri onayının ardından raporunuz e-Devlet'e işlenir.",
      "Güncellenmiş belgenizle nakliye firmanızı bilgilendirin.",
    ];
  }
  if (cezaTuru === "65-yas") {
    return [
      "Trafik müdürlüğünden yenileme tarihinizi öğrenin.",
      "Yetkili psikoteknik merkezde değerlendirme yaptırın.",
      "Psikiyatri onayını tamamlayın.",
      "Güncel belgenizle trafik müdürlüğüne başvurun.",
    ];
  }
  return [];
}

export default function YolHaritasi() {
  const [step, setStep] = useState<Step>(1);
  const [cezaTuru, setCezaTuru] = useState<CezaTuru>("");
  const [ehliyet, setEhliyet] = useState<EhliyetSinifi>("");
  const [result, setResult] = useState<string[] | null>(null);

  function handleStep1() {
    if (!cezaTuru) return;
    setStep(2);
  }

  function handleStep2() {
    if (!ehliyet) return;
    setResult(generateResult(cezaTuru));
    setStep(3);
  }

  function reset() {
    setStep(1);
    setCezaTuru("");
    setEhliyet("");
    setResult(null);
  }

  const waUrl = getWhatsAppUrl(
    "Psikoteknik Yol Haritası",
    "/tools/yol-haritasi"
  );

  const panelStyle: React.CSSProperties = {
    backgroundColor: "var(--color-primary)",
  };

  return (
    <div className="mx-auto max-w-lg rounded-2xl p-8" style={panelStyle}>
      {/* Adım göstergesi */}
      <div className="mb-6 flex items-center gap-2">
        {([1, 2, 3] as Step[]).map((s) => (
          <div
            key={s}
            className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
            style={{
              backgroundColor:
                step >= s ? "var(--color-accent)" : "rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            {s}
          </div>
        ))}
        <span className="ml-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
          {step === 1 && "Durum Seçimi"}
          {step === 2 && "Ehliyet Sınıfı"}
          {step === 3 && "Yol Haritanız"}
        </span>
      </div>

      {/* ADIM 1 */}
      {step === 1 && (
        <>
          <h2 className="mb-4 text-lg font-semibold text-white">
            Durumunuzu Seçin
          </h2>
          <div className="space-y-3">
            {(Object.entries(CEZA_LABELS) as [Exclude<CezaTuru, "">, string][]).map(
              ([val, label]) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setCezaTuru(val)}
                  className="w-full rounded-xl p-4 text-left text-sm font-medium text-white transition-all"
                  style={{
                    backgroundColor:
                      cezaTuru === val
                        ? "rgba(46,134,171,0.4)"
                        : "rgba(255,255,255,0.08)",
                    border:
                      cezaTuru === val
                        ? "1px solid var(--color-accent)"
                        : "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {label}
                </button>
              )
            )}
          </div>
          <button
            type="button"
            onClick={handleStep1}
            disabled={!cezaTuru}
            className="mt-6 w-full rounded-lg py-3 font-medium text-white transition-opacity disabled:opacity-40"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Devam Et
          </button>
        </>
      )}

      {/* ADIM 2 */}
      {step === 2 && (
        <>
          <h2 className="mb-4 text-lg font-semibold text-white">
            Ehliyet Sınıfınız
          </h2>
          <div className="space-y-3">
            {(
              Object.entries(EHLIYET_LABELS) as [
                Exclude<EhliyetSinifi, "">,
                string,
              ][]
            ).map(([val, label]) => (
              <button
                key={val}
                type="button"
                onClick={() => setEhliyet(val)}
                className="w-full rounded-xl p-4 text-left text-sm font-medium text-white transition-all"
                style={{
                  backgroundColor:
                    ehliyet === val
                      ? "rgba(46,134,171,0.4)"
                      : "rgba(255,255,255,0.08)",
                  border:
                    ehliyet === val
                      ? "1px solid var(--color-accent)"
                      : "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 rounded-lg border py-3 text-sm text-white"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              Geri
            </button>
            <button
              type="button"
              onClick={handleStep2}
              disabled={!ehliyet}
              className="flex-1 rounded-lg py-3 font-medium text-white transition-opacity disabled:opacity-40"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Devam Et
            </button>
          </div>
        </>
      )}

      {/* ADIM 3 — SONUÇ */}
      {step === 3 && result && (
        <div className="print-area">
          <h2 className="mb-5 text-lg font-semibold text-white">
            Psikoteknik Yol Haritanız
          </h2>
          <ol className="space-y-3">
            {result.map((adim, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg p-4 text-sm text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {i + 1}
                </span>
                <span style={{ color: "rgba(255,255,255,0.90)" }}>{adim}</span>
              </li>
            ))}
          </ol>

          <div className="no-print mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="w-full rounded-lg border py-2 text-sm font-medium text-white"
              style={{ borderColor: "rgba(255,255,255,0.30)" }}
            >
              Bu Haritayı Yazdır
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm underline hover:no-underline"
              style={{ color: "var(--color-accent)" }}
            >
              Süreciniz hakkında bilgi almak için WhatsApp
            </a>
            <button
              type="button"
              onClick={reset}
              className="w-full rounded-lg py-2 text-sm text-white opacity-60 hover:opacity-90"
            >
              Yeniden Başla
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
