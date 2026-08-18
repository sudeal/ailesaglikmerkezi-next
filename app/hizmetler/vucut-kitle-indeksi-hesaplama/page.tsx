import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import BmiCalculator from "@/components/BmiCalculator";

export const metadata: Metadata = {
  title: "Vücut Kitle İndeksi Hesaplama | Çapaklı Aile Sağlığı Merkezi",
};

const siniflar = [
  { range: "18.5 ve altı", label: "Düşük Kilolu" },
  { range: "18.5 - 24.9", label: "Normal Kilolu" },
  { range: "25 - 29.9", label: "Fazla Kilolu" },
  { range: "30 - 40", label: "Obez" },
  { range: "40 ve üstü", label: "Aşırı Obez" },
];

export default function VucutKitleIndeksiPage() {
  return (
    <InnerPage
      title="Vücut Kitle İndeksi Hesaplama"
      views={4194}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/hizmetler", label: "Hizmetler" },
        { label: "Vücut Kitle İndeksi Hesaplama" },
      ]}
    >
      <p className="mb-6">
        Boy ve kilonuzu girerek Vücut Kitle İndeksinizi (VKİ)
        hesaplayabilirsiniz.
      </p>

      <BmiCalculator />

      <p className="mb-8">
        Vücut kitle indeksi (VKİ), vücut ağırlığının (kg), boy uzunluğunun
        metre cinsinden karesine bölünmesiyle hesaplanır. İdeal ağırlık ise
        ulaşılmak istenen VKİ’nin, boy uzunluğunun karesi ile çarpılmasıyla
        elde edilir.
      </p>

      <h2 className="mt-8 mb-3 text-[18px] font-bold text-black">
        Vücut Kitle İndeksi Sınıflandırma
      </h2>
      <ul className="mb-8 list-none space-y-1 p-0">
        {siniflar.map((item) => (
          <li key={item.range}>
            <span className="mr-2 text-[#DC0D15]">✔</span>
            <strong>{item.range}:</strong> {item.label}
          </li>
        ))}
      </ul>

      <h2 className="mt-8 mb-3 text-[18px] font-bold text-black">
        Vücut Kitle İndeksi Hesaplama Formülü
      </h2>
      <p className="mb-8">
        Vücut Kitle İndeksi (VKİ) = Vücut Ağırlığı (kg.) / Boy uzunluğunun
        karesi (m².)
      </p>

      <h2 className="mt-8 mb-3 text-[18px] font-bold text-black">
        OBEZİTE NEDİR?
      </h2>
      <p className="mb-4">
        Son yıllarda değişen beslenme alışkanlıklarıyla birlikte hem gelişmiş
        hem de gelişmemiş olan toplumlarda yaşanan en büyük sağlık
        problemlerinden biri obezitedir. Obezite genel tanımla vücudun yağ
        kütlesinin yağsız kütleye oranının aşırı artması neticesinde vücut
        ağırlığının boy uzunluğuna göre istenilen seviyenin üzerinde bir değere
        ulaşmasıdır. Yetişkin bir kadında vücut ağırlığının % 20 ile 25’i arası
        yetişkin bir erkekte ise % 15 ile 18 arası yağ dokusundan oluşmaktadır.
      </p>
      <p className="mb-0">
        Bu verilen ölçüler normal değerlerdir. Bu değer kadınlarda %30’un
        erkeklerde ise %25’in üzerine çıkarsa kişi obez olarak kabul edilir.
        Ülkemizde de son yıllarda obezite rakamlarında artış gözlenmektedir.
      </p>
    </InnerPage>
  );
}
