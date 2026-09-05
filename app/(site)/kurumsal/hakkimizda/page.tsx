import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Hakkımızda | Çapaklı Aile Sağlığı Merkezi",
};

const paragraphs = [
  "Salihli Çapaklı Aile Sağlığı Merkezi 01.01.2008 tarihinde hizmete girmiştir. Aile sağlığı merkezimizde ;1 Aile Hekimi, 1 Aile Sağlığı Elemanı Ebe ,1 Yardımcı Sağlık Personeli Hemşire (Haftalık 20 saat kısmi süreli), 1 Ek Temizlik Personeli (Haftada 10 saat kısmi süreli)ile hizmet verilmektedir.",
  "Çağdaş, kurumsal bir iş anlayışını benimsemiş, güncel bilgilerle donatılmış uzman ve nitelikli kadrolarımızla, toplumun tüm kesimlerine kaliteli ve ekonomik sağlık hizmeti sunuyoruz.",
  "Salihli Çapaklı Aile Sağlığı Merkezi olarak, faaliyetlerimizi, çevreyi koruma ve çevre bilincini hayata geçirme sorumluluğu ile sürdürüyoruz. İnsan sağlığı için çaba harcarken, sağlığın ayrılmaz bir parçası olan çevre de titizlikle korunuyor.",
  "Aile Sağlığı Merkezimize gelirken mutlaka T.C. Nüfus cüzdanınızı yanınızda kesinlikle getiriniz.",
  "Aile Hekimliği Kaydı bizde olmayan misafir hastalara kimliklerini ibraz etmeleri kaydı ile hizmet verilmektedir.",
];

export default function HakkimizdaPage() {
  return (
    <InnerPage
      title="Manisa Salihli Çapaklı Aile Sağlığı Merkezi"
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/kurumsal", label: "Kurumsal" },
        { label: "Hakkımızda" },
      ]}
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-4">
          {paragraph}
        </p>
      ))}

      <p className="mt-8 mb-0 font-bold text-[#222433]">Ayrıntılar</p>
      <p className="m-0 text-[14px] text-[#555555]">Gösterim: 3963</p>
    </InnerPage>
  );
}
