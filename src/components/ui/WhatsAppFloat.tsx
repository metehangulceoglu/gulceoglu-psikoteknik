"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const pathname = usePathname();
  const href = getWhatsAppUrl("Psikoteknik Bilgi", pathname);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <span
        className={`mr-3 rounded-lg bg-white px-3 py-2 text-sm font-medium text-[#1E293B] shadow-lg transition-all duration-200 ${
          showTooltip
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-2 opacity-0"
        }`}
      >
        Sürecinizi Öğrenin
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geçin"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-7 w-7 text-white" strokeWidth={1.5} />
      </a>
    </div>
  );
}
