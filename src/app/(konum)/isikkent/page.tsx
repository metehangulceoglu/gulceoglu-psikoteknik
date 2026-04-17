import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createLocalBusiness,
  createHowTo,
  createBreadcrumb,
} from "@/lib/schema";
import LocationPageTemplate from "@/components/location/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Işıkkent Psikoteknik | SRC ve Ticari Araç Sürücüleri",
  description:
    "Işıkkent OSB'den çalışan ticari araç sürücüleri için psikoteknik. Bornova merkezimize 10 dakika.",
};

const howToSteps = [
  "Merkezimize gelin veya WhatsApp ile randevu alın",
  "Yaklaşık 60 dakika süren bilgisayar destekli testleri tamamlayın",
  "Psikolog değerlendirmesi ve psikiyatri onayı alın",
  "Raporunuz aynı gün e-Devlet sistemine işlenir",
];

export default function IsikkentPage() {
  return (
    <>
      <JsonLd
        data={createLocalBusiness({
          name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi - Işıkkent",
          url: "https://gulceoglupsikoteknik.com/isikkent",
          address:
            "Koşukavak, Kamil Tunca Caddesi No:200/B, 35080 Bornova/İzmir",
          neighborhood: "Işıkkent",
        })}
      />
      <JsonLd
        data={createHowTo({
          name: "Işıkkent Psikoteknik Süreci",
          steps: howToSteps,
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Işıkkent Psikoteknik", url: "/isikkent" },
        ])}
      />
      <LocationPageTemplate
        ilce="Işıkkent"
        slug="isikkent"
        description="Işıkkent OSB'den çalışan ticari araç sürücüleri için psikoteknik."
        trafikMudurlugu="Bornova Trafik Tescil ve Denetleme Büro Amirliği"
        trafikMudurluguAdres="Bornova/İzmir"
        mesafe="Işıkkent OSB'den merkezimize yaklaşık 10 dakika"
        yakinIlceler={["Bornova", "Kemalpaşa", "Bayraklı", "Torbalı"]}
      />
    </>
  );
}
