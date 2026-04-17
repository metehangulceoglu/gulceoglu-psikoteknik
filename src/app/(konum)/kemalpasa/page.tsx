import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import {
  createLocalBusiness,
  createHowTo,
  createBreadcrumb,
} from "@/lib/schema";
import LocationPageTemplate from "@/components/location/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Kemalpaşa Psikoteknik | Gülceoğlu Psikoteknik Merkezi",
  description:
    "Kemalpaşa'dan SRC ve ehliyet psikoteknik için Bornova merkezimize ulaşım bilgisi.",
};

const howToSteps = [
  "Merkezimize gelin veya WhatsApp ile randevu alın",
  "Yaklaşık 60 dakika süren bilgisayar destekli testleri tamamlayın",
  "Psikolog değerlendirmesi ve psikiyatri onayı alın",
  "Raporunuz aynı gün e-Devlet sistemine işlenir",
];

export default function KemalpasaPage() {
  return (
    <>
      <JsonLd
        data={createLocalBusiness({
          name: "Gülceoğlu Psikoteknik Değerlendirme Merkezi - Kemalpaşa",
          url: "https://gulceoglupsikoteknik.com/kemalpasa",
          address:
            "Koşukavak, Kamil Tunca Caddesi No:200/B, 35080 Bornova/İzmir",
          neighborhood: "Kemalpaşa",
        })}
      />
      <JsonLd
        data={createHowTo({
          name: "Kemalpaşa Psikoteknik Süreci",
          steps: howToSteps,
        })}
      />
      <JsonLd
        data={createBreadcrumb([
          { name: "Ana Sayfa", url: "/" },
          { name: "Kemalpaşa Psikoteknik", url: "/kemalpasa" },
        ])}
      />
      <LocationPageTemplate
        ilce="Kemalpaşa"
        slug="kemalpasa"
        description="Kemalpaşa'dan SRC ve ehliyet psikoteknik için Bornova merkezimize ulaşım."
        trafikMudurlugu="Kemalpaşa Trafik Tescil ve Denetleme Büro Amirliği"
        trafikMudurluguAdres="Kemalpaşa/İzmir"
        mesafe="Kemalpaşa'dan merkezimize yaklaşık 20 dakika"
        yakinIlceler={["Bornova", "Torbalı", "Işıkkent", "Menemen"]}
      />
    </>
  );
}
