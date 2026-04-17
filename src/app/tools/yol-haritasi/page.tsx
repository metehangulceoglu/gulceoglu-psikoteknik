import type { Metadata } from "next";
import YolHaritasi from "@/components/tools/YolHaritasi";

export const metadata: Metadata = {
  title: "Psikoteknik Yol Haritası | Gülceoğlu Psikoteknik",
  description:
    "Durumunuza göre psikoteknik sürecinizi adım adım öğrenin.",
  robots: { index: false },
};

export default function YolHaritasiPage() {
  return (
    <main className="px-4 py-16 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="mx-auto max-w-3xl">
        <h1
          className="mb-2 text-3xl font-bold"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-fraunces)",
          }}
        >
          Psikoteknik Yol Haritası
        </h1>
        <p className="mb-10 text-base" style={{ color: "var(--color-text-muted)" }}>
          Durumunuzu seçin, sürecinizi adım adım öğrenin.
        </p>
        <YolHaritasi />
      </div>
    </main>
  );
}
