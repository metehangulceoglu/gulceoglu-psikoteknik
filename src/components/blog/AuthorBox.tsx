export default function AuthorBox() {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6">
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white"
        style={{ backgroundColor: "var(--color-primary)" }}
        aria-hidden="true"
      >
        MG
      </div>
      <div>
        <p
          className="font-semibold"
          style={{ color: "var(--color-primary)" }}
        >
          Psk. Metehan Gülceoğlu
        </p>
        <p
          className="mt-1 text-sm leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Dokuz Eylül Üniversitesi Psikoloji Bölümü mezunu. Trafik psikolojisi
          ve psikoteknik değerlendirme alanında uzman psikolog.
        </p>
      </div>
    </div>
  );
}
