import Link from "next/link";

interface NextStepBoxProps {
  title: string;
  description: string;
  actionText: string;
  actionHref: string;
}

export default function NextStepBox({
  title,
  description,
  actionText,
  actionHref,
}: NextStepBoxProps) {
  return (
    <div
      className="rounded-r-lg border-l-4 bg-slate-50 p-8"
      style={{ borderLeftColor: "var(--color-accent)" }}
    >
      <h3
        className="mb-2 font-semibold"
        style={{ color: "var(--color-text-main)" }}
      >
        {title}
      </h3>
      <p className="mb-4 text-sm" style={{ color: "var(--color-text-muted)" }}>
        {description}
      </p>
      <Link
        href={actionHref}
        className="font-medium hover:underline"
        style={{ color: "var(--color-accent)" }}
      >
        {actionText}
      </Link>
    </div>
  );
}
