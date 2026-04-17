import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createLocalBusiness,
  createHowTo,
  createBreadcrumb,
} from "@/lib/schema";
import LocationPageTemplate from "@/components/location/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Çiğli Psikoteknik | Gülceoğlu Psikoteknik Merkezi",
  description:
    "Çiğli'den SRC ve ehliyet psikoteknik için Bornova merkezimize ulaşım.",
};

const howToSteps = [
  "Merkezimize gelin veya WhatsApp ile randevu alın",
  "Yaklaşık 60 dakika süren bilgisayar destekli testleri tamamlayın",
  "Psikolog değerlendirmesi ve psikiyatri onayı alın",
  "Raporunuz aynı gün e-Devlet sistemine işlenir",
];

export default function CigliPage() {
  return (
    <>
      <JsonLd
        data={createLocalBusiness({
          name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi - Çiğli",
          url: "https://gulceoglupsikoteknik.com/cigli",
          address:
            "Koşukavak, Kamil Tunca Caddesi No:200/B, 35080 Bornova/İzmir",
          neighborhood: "Çiğli",
        })}
      />
      <JsonLd
        data={createHowTo({
          name: "Çiğli Psikoteknik Süreci",
          steps: howToSteps,
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Çiğli Psikoteknik", url: "/cigli" },
        ])}
      />
      <LocationPageTemplate
        ilce="Çiğli"
        slug="cigli"
        description="Çiğli'den SRC ve ehliyet psikoteknik için Bornova merkezimize ulaşım."
        trafikMudurlugu="Çiğli Trafik Tescil ve Denetleme Büro Amirliği"
        trafikMudurluguAdres="Çiğli/İzmir"
        mesafe="Çiğli'den merkezimize yaklaşık 20 dakika"
        yakinIlceler={["Karşıyaka", "Menemen", "Bornova", "Bayraklı"]}
      />
    </>
  );
}
