import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Hizmet Standartları | Çapaklı Aile Sağlığı Merkezi",
};

export default function HizmetStandartlariPage() {
  return (
    <InnerPage
      title="Manisa Salihli Çapaklı Aile Sağlığı Merkezi Hizmet Standartları"
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/kurumsal", label: "Kurumsal" },
        { label: "Hizmet Standartları" },
      ]}
    >
      <p className="mb-2">
        Salihli Çapaklı Aile Sağlığı Merkezi Hizmet Standartları
      </p>
      <p className="mb-10">
        Manisa Aile Hekimliği, Salihli Çapaklı Aile Hekimliği, ASM Web Sitesi
      </p>

      <p className="m-0 font-bold text-[#222433]">Ayrıntılar</p>
      <p className="m-0 text-[14px] text-[#555555]">Gösterim: 1777</p>
    </InnerPage>
  );
}
