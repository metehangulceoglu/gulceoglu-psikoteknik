import type { Metadata } from "next";
import SureHesaplayici from "@/components/tools/SureHesaplayici";

export const metadata: Metadata = {
  title: "Psikoteknik Belge Süre Hesaplayıcı | Gülceoğlu Psikoteknik",
  description:
    "Psikoteknik belge yenileme tarihinizi hesaplayın. SRC, ceza puanı ve yaş haddi için yasal süreler.",
  robots: { index: false },
};

export default function SureHesaplayiciPage() {
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
          Psikoteknik Belge Süre Hesaplayıcı
        </h1>
        <p className="mb-10 text-base" style={{ color: "var(--color-text-muted)" }}>
          Yasal periyotlara göre belge yenileme tarihinizi öğrenin.
        </p>
        <SureHesaplayici />
      </div>
    </main>
  );
}
