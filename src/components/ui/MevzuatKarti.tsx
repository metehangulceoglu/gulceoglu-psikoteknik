interface MevzuatKartiProps {
  madde: string;
  ozet: string;
  resmiMetin: string;
}

export default function MevzuatKarti({
  madde,
  ozet,
  resmiMetin,
}: MevzuatKartiProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <span
        className="inline-block rounded-full px-2 py-1 text-xs font-medium"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
          color: "var(--color-accent)",
        }}
      >
        Yasal Dayanak
      </span>

      <p
        className="mt-3 text-lg font-semibold"
        style={{ color: "var(--color-primary)" }}
      >
        {madde}
      </p>

      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--color-text-muted)" }}
      >
        {ozet}
      </p>

      <blockquote
        className="mt-3 border-l-2 border-slate-300 pl-4 text-sm italic leading-relaxed"
        style={{ color: "var(--color-text-muted)" }}
      >
        {resmiMetin}
      </blockquote>
    </div>
  );
}
