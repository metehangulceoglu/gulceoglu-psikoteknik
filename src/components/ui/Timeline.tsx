interface TimelineStep {
  stepNumber: number;
  title: string;
  description: string;
  duration?: string;
  mevzuat?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <ol className="space-y-0">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step.stepNumber} className="flex gap-4">
            {/* Sol: numara + dikey çizgi */}
            <div className="flex flex-col items-center">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                {step.stepNumber}
              </div>
              {!isLast && (
                <div
                  className="mt-1 w-0.5 flex-1 border-l-2"
                  style={{
                    borderColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
                  }}
                />
              )}
            </div>

            {/* Sağ: içerik kutusu */}
            <div className={`ml-4 flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {step.title}
                  </span>
                  {step.duration && (
                    <span
                      className="rounded-full px-2 py-1 text-xs font-medium"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {step.duration}
                    </span>
                  )}
                </div>
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.description}
                </p>
                {step.mevzuat && (
                  <p
                    className="mt-2 text-xs italic"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Yasal Dayanak: {step.mevzuat}
                  </p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
