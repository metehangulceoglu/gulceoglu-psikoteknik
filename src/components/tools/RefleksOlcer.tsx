"use client";

import { useState, useRef } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Phase = "idle" | "waiting" | "ready" | "result";

function getYorum(ms: number): string {
  if (ms < 200) return "Çok hızlı tepki";
  if (ms < 300) return "Ortalama tepki süresi";
  if (ms < 500) return "Ortalamanın altı tepki süresi";
  return "Yüksek tepki süresi";
}

export default function RefleksOlcer() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [earlyClick, setEarlyClick] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function startTest() {
    setEarlyClick(false);
    setReactionTime(null);
    setPhase("waiting");
    const delay = Math.floor(Math.random() * 2500) + 1500;
    timeoutRef.current = setTimeout(() => {
      startTimeRef.current = Date.now();
      setPhase("ready");
    }, delay);
  }

  function handlePanelClick() {
    if (phase === "waiting") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setEarlyClick(true);
      setPhase("idle");
    } else if (phase === "ready") {
      const rt = Date.now() - (startTimeRef.current ?? Date.now());
      setReactionTime(rt);
      setPhase("result");
    }
  }

  function reset() {
    setPhase("idle");
    setReactionTime(null);
    setEarlyClick(false);
    startTimeRef.current = null;
  }

  const waUrl = getWhatsAppUrl(
    "Refleks Ölçer",
    "/tools/refleks-olcer"
  );

  return (
    <div
      className="mx-auto max-w-lg rounded-2xl p-8 text-center"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* IDLE */}
      {phase === "idle" && (
        <>
          <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            Yeşil ışık yandığında mümkün olan en kısa sürede tıklayın.
          </p>
          {earlyClick && (
            <p
              className="mb-4 rounded-lg px-4 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: "rgba(239,68,68,0.3)" }}
            >
              Erken tıkladınız! Tekrar deneyin.
            </p>
          )}
          <button
            type="button"
            onClick={startTest}
            className="w-full rounded-lg py-3 font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Teste Başla
          </button>
        </>
      )}

      {/* WAITING */}
      {phase === "waiting" && (
        <button
          type="button"
          onClick={handlePanelClick}
          className="flex w-full flex-col items-center gap-4 rounded-xl py-6"
          aria-label="Bekleyin"
        >
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-red-500">
            <span className="text-lg font-bold text-white">Bekleyin...</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            (Erken tıklamayın)
          </p>
        </button>
      )}

      {/* READY */}
      {phase === "ready" && (
        <button
          type="button"
          onClick={handlePanelClick}
          className="flex w-full flex-col items-center gap-4 rounded-xl py-6"
          aria-label="Tıkla"
        >
          <div className="mx-auto flex h-32 w-32 animate-pulse items-center justify-center rounded-full bg-green-400">
            <span className="text-xl font-bold text-white">TIKLA!</span>
          </div>
        </button>
      )}

      {/* RESULT */}
      {phase === "result" && reactionTime !== null && (
        <>
          <p className="mb-1 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            Tepki Süreniz
          </p>
          <p className="mb-2 text-3xl font-bold text-white">
            {reactionTime} ms
          </p>
          <p className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            {getYorum(reactionTime)}
          </p>

          {/* Uyarı kutusu */}
          <div
            className="mb-4 rounded-lg p-4 text-left text-xs"
            style={{
              backgroundColor: "rgba(250,204,21,0.20)",
              border: "1px solid rgba(250,204,21,0.30)",
              color: "rgba(255,255,255,0.70)",
            }}
          >
            ⚠ Bu araç yalnızca eğlence ve farkındalık amaçlıdır. Sonuçlar
            resmi psikoteknik değerlendirmenin yerine geçemez. Resmi
            psikoteknik testi yalnızca Sağlık Bakanlığı yetkili merkezlerinde
            yapılabilir.
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={reset}
              className="w-full rounded-lg border py-2 text-sm font-medium text-white"
              style={{ borderColor: "rgba(255,255,255,0.30)" }}
            >
              Tekrar Dene
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs underline hover:no-underline"
              style={{ color: "var(--color-accent)" }}
            >
              Resmi psikoteknik değerlendirme hakkında bilgi al
            </a>
          </div>
        </>
      )}
    </div>
  );
}
