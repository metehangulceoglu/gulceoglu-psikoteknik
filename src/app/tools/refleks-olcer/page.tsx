import type { Metadata } from "next";
import RefleksOlcer from "@/components/tools/RefleksOlcer";

export const metadata: Metadata = {
  title: "Refleks Ölçer (Beta) | Gülceoğlu Psikoteknik",
  description:
    "Tepki sürenizi ölçün. Yalnızca eğlence ve farkındalık amaçlıdır.",
  robots: { index: false },
};

export default function RefleksOlcerPage() {
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
          Refleks Ölçer (Beta)
        </h1>
        <p className="mb-10 text-base" style={{ color: "var(--color-text-muted)" }}>
          Tepki sürenizi test edin. Bu araç yalnızca eğlence ve farkındalık
          amaçlıdır.
        </p>
        <RefleksOlcer />
      </div>
    </main>
  );
}
