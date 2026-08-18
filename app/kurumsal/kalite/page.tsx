import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Kalite Politikamız | Çapaklı Aile Sağlığı Merkezi",
};

const maddeler = [
  "Manisa Salihli Çapaklı Aile Sağlığı Merkezi olarak hedefimiz, kalite yönetim sistemini sürekli iyileştirmek ve geliştirmek üzere gerekli faaliyetleri planlamak ve hayata geçirmektir.",
  "Hizmet sürecinde temel prensibimiz, hasta odaklı yapılanmayı esas alarak, hasta memnuniyetini en üst düzeyde tutmaktır.",
  "Teknolojik ve bilimsel gelişmeleri yakından takip ederek hizmet sürecine dahil etmek, böylece sağlık hizmetinin kalitesini sürekli arttırmaktır.",
  "Çalışanlarımızı eğitimlerle sürekli destekleyerek, gelişimlerine katkıda bulunmak ve iyileştirme süreçlerinde etkin olarak yer almalarını sağlamaktır.",
  "Hastalarımızın, tedarikçilerimizin ve çalışanlarımızın beklenti ve taleplerini en üst düzeyde karşılamaya çalışarak, onlara güven duydukları bir ortam sağlamaktır.",
];

export default function KalitePolitikasiPage() {
  return (
    <InnerPage
      title="KALİTE POLİTİKAMIZ"
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/kurumsal", label: "Kurumsal" },
        { label: "Kalite Politikamız" },
      ]}
    >
      <ul className="mb-10 list-disc space-y-3 pl-5">
        {maddeler.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="m-0 font-bold text-[#222433]">Ayrıntılar</p>
      <p className="m-0 text-[14px] text-[#555555]">Gösterim: 2637</p>
    </InnerPage>
  );
}
