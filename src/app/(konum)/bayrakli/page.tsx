import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createLocalBusiness,
  createHowTo,
  createBreadcrumb,
} from "@/lib/schema";
import LocationPageTemplate from "@/components/location/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Bayraklı Psikoteknik | Gülceoğlu Psikoteknik Merkezi",
  description:
    "Bayraklı'dan psikoteknik değerlendirme için Bornova merkezimize kolay ulaşım.",
};

const howToSteps = [
  "Merkezimize gelin veya WhatsApp ile randevu alın",
  "Yaklaşık 60 dakika süren bilgisayar destekli testleri tamamlayın",
  "Psikolog değerlendirmesi ve psikiyatri onayı alın",
  "Raporunuz aynı gün e-Devlet sistemine işlenir",
];

export default function BayrakliPage() {
  return (
    <>
      <JsonLd
        data={createLocalBusiness({
          name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi - Bayraklı",
          url: "https://gulceoglupsikoteknik.com/bayrakli",
          address:
            "Koşukavak, Kamil Tunca Caddesi No:200/B, 35080 Bornova/İzmir",
          neighborhood: "Bayraklı",
        })}
      />
      <JsonLd
        data={createHowTo({
          name: "Bayraklı Psikoteknik Süreci",
          steps: howToSteps,
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Bayraklı Psikoteknik", url: "/bayrakli" },
        ])}
      />
      <LocationPageTemplate
        ilce="Bayraklı"
        slug="bayrakli"
        description="Bayraklı'dan psikoteknik değerlendirme için Bornova merkezimize kolay ulaşım."
        trafikMudurlugu="İzmir İl Trafik Denetleme Şube Müdürlüğü"
        trafikMudurluguAdres="Gaziler Caddesi, Konak/İzmir"
        mesafe="Bayraklı'dan merkezimize yaklaşık 10 dakika"
        yakinIlceler={["Bornova", "Karşıyaka", "Konak", "Çiğli"]}
      />
    </>
  );
}
