"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const BELGE_TURLERI: Record<string, number> = {
  "SRC Psikoteknik": 1825,
  "100 Ceza Puanı (Bekleme)": 120,
  "65 Yaş Üstü Yenileme": 365,
  "Alkol İhlali - 1. Kez": 180,
  "Alkol İhlali - 2. Kez": 730,
  "Alkol İhlali - 3. Kez": 1825,
};

function formatTR(date: Date): string {
  return date.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function SureHesaplayici() {
  const [belgeType, setBelgeType] = useState("");
  const [sonTarih, setSonTarih] = useState("");
  const [sonuc, setSonuc] = useState<string | null>(null);

  function hesapla() {
    if (!belgeType || !sonTarih) return;
    const gun = BELGE_TURLERI[belgeType];
    const baslangic = new Date(sonTarih);
    baslangic.setDate(baslangic.getDate() + gun);
    setSonuc(`Belge yenileme / başvuru tarihiniz: ${formatTR(baslangic)}`);
  }

  const waUrl = getWhatsAppUrl(
    "Psikoteknik Süre Hesaplayıcı",
    "/tools/sure-hesaplayici"
  );

  return (
    <div
      className="mx-auto max-w-lg rounded-2xl p-8"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Belge türü */}
      <div className="mb-4">
        <label
          htmlFor="belge-type"
          className="block text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Belge / İşlem Türü
        </label>
        <select
          id="belge-type"
          value={belgeType}
          onChange={(e) => {
            setBelgeType(e.target.value);
            setSonuc(null);
          }}
          className="mt-1 w-full rounded-lg px-4 py-3 text-white"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.20)",
          }}
        >
          <option value="" style={{ color: "#1E293B" }}>
            Seçiniz
          </option>
          {Object.keys(BELGE_TURLERI).map((tur) => (
            <option key={tur} value={tur} style={{ color: "#1E293B" }}>
              {tur}
            </option>
          ))}
        </select>
      </div>

      {/* Tarih */}
      <div className="mb-4">
        <label
          htmlFor="son-tarih"
          className="block text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          İşlem / Belge Tarihi
        </label>
        <input
          id="son-tarih"
          type="date"
          value={sonTarih}
          onChange={(e) => {
            setSonTarih(e.target.value);
            setSonuc(null);
          }}
          className="mt-1 w-full rounded-lg px-4 py-3 text-white"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.20)",
            colorScheme: "dark",
          }}
        />
      </div>

      {/* Buton */}
      <button
        type="button"
        onClick={hesapla}
        disabled={!belgeType || !sonTarih}
        className="mt-4 w-full rounded-lg py-3 font-medium text-white transition-opacity disabled:opacity-50"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        Tarihi Hesapla
      </button>

      {/* Sonuç */}
      {sonuc && (
        <div
          className="mt-6 rounded-xl p-5"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.20)",
          }}
        >
          <p className="text-2xl font-bold text-white">{sonuc}</p>
          <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.60)" }}>
            Bu hesaplama bilgilendirme amaçlıdır. Kesin tarih için trafik
            müdürlüğünüze danışınız.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm underline hover:no-underline"
            style={{ color: "var(--color-accent)" }}
          >
            Süreciniz hakkında bilgi almak için WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
