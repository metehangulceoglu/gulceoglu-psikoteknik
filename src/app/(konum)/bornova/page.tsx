import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createLocalBusiness,
  createHowTo,
  createBreadcrumb,
} from "@/lib/schema";
import LocationPageTemplate from "@/components/location/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Bornova Psikoteknik Değerlendirme | Gülceoğlu Psikoteknik",
  description:
    "Bornova'da Sağlık Bakanlığı onaylı psikoteknik merkezi. Kamil Tunca Caddesi üzerinde, kolay ulaşım.",
};

const howToSteps = [
  "Merkezimize gelin veya WhatsApp ile randevu alın",
  "Yaklaşık 60 dakika süren bilgisayar destekli testleri tamamlayın",
  "Psikolog değerlendirmesi ve psikiyatri onayı alın",
  "Raporunuz aynı gün e-Devlet sistemine işlenir",
];

export default function BornovaPage() {
  return (
    <>
      <JsonLd
        data={createLocalBusiness({
          name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi - Bornova",
          url: "https://gulceoglupsikoteknik.com/bornova",
          address:
            "Koşukavak, Kamil Tunca Caddesi No:200/B, 35080 Bornova/İzmir",
          neighborhood: "Bornova",
        })}
      />
      <JsonLd
        data={createHowTo({
          name: "Bornova Psikoteknik Süreci",
          steps: howToSteps,
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Bornova Psikoteknik", url: "/bornova" },
        ])}
      />
      <LocationPageTemplate
        ilce="Bornova"
        slug="bornova"
        description="Bornova'da Sağlık Bakanlığı onaylı psikoteknik merkezi."
        trafikMudurlugu="İzmir İl Trafik Denetleme Şube Müdürlüğü"
        trafikMudurluguAdres="Gaziler Caddesi, Konak/İzmir"
        mesafe="Merkezimiz Bornova'da, Kamil Tunca Caddesi üzerinde yer almaktadır"
        yakinIlceler={["Karşıyaka", "Bayraklı", "Çiğli", "Kemalpaşa", "Torbalı"]}
      />
    </>
  );
}
