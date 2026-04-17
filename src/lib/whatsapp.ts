export function getWhatsAppUrl(pageTitle: string, pageUrl: string): string {
  const text = encodeURIComponent(
    `Merhaba, sitenizdeki "${pageTitle}" sayfasını inceledim, bilgi almak istiyorum. (${pageUrl})`
  );
  return `https://wa.me/905452204878?text=${text}`;
}

export const WA_DEFAULT = getWhatsAppUrl(
  "Ana Sayfa",
  "gulceoglupsikoteknik.com"
);
