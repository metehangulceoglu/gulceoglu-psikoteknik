import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createLocalBusiness,
  createHowTo,
  createBreadcrumb,
} from "@/lib/schema";
import LocationPageTemplate from "@/components/location/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Karşıyaka Psikoteknik | Gülceoğlu Psikoteknik Merkezi",
  description:
    "Karşıyaka'dan Bornova'daki psikoteknik merkezimize kolay ulaşım. Sağlık Bakanlığı onaylı.",
};

const howToSteps = [
  "Merkezimize gelin veya WhatsApp ile randevu alın",
  "Yaklaşık 60 dakika süren bilgisayar destekli testleri tamamlayın",
  "Psikolog değerlendirmesi ve psikiyatri onayı alın",
  "Raporunuz aynı gün e-Devlet sistemine işlenir",
];

export default function KarsiyakaPage() {
  return (
    <>
      <JsonLd
        data={createLocalBusiness({
          name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi - Karşıyaka",
          url: "https://gulceoglupsikoteknik.com/karsiyaka",
          address:
            "Koşukavak, Kamil Tunca Caddesi No:200/B, 35080 Bornova/İzmir",
          neighborhood: "Karşıyaka",
        })}
      />
      <JsonLd
        data={createHowTo({
          name: "Karşıyaka Psikoteknik Süreci",
          steps: howToSteps,
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Karşıyaka Psikoteknik", url: "/karsiyaka" },
        ])}
      />
      <LocationPageTemplate
        ilce="Karşıyaka"
        slug="karsiyaka"
        description="Karşıyaka'dan Bornova'daki psikoteknik merkezimize kolay ulaşım."
        trafikMudurlugu="İzmir İl Trafik Denetleme Şube Müdürlüğü"
        trafikMudurluguAdres="Gaziler Caddesi, Konak/İzmir"
        mesafe="Karşıyaka'dan merkezimize yaklaşık 15 dakika"
        yakinIlceler={["Bornova", "Bayraklı", "Çiğli", "Menemen"]}
      />
    </>
  );
}
