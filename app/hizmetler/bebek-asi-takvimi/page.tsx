import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";
import AsiTakvimiCalculator from "@/components/AsiTakvimiCalculator";

export const metadata: Metadata = {
  title: "Bebek Aşı Takvimi | Çapaklı Aile Sağlığı Merkezi",
};

export default function BebekAsiTakvimiPage() {
  return (
    <InnerPage
      title="Bebek Aşı Takvimi Hesaplama"
      views={3312}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/hizmetler", label: "Hizmetler" },
        { label: "Bebek Aşı Takvimi" },
      ]}
    >
      <p className="mb-8">
        Türkiye'de Sağlık Bakanlığı tarafından her çocuğun, Sağlık Bakanlığı
        Aşı Takviminde yer alan tüm aşıları ücretsiz olarak yapılmaktadır.
      </p>

      <AsiTakvimiCalculator />

      <h2 className="mt-10 mb-4 text-center text-[16px] font-bold text-black">
        T.C. Sağlık Bakanlığı Ulusal Çocukluk Dönemi Aşılama Takvimi (2020)
      </h2>
      <img
        src="/images/asitakvim.jpg"
        alt="T.C. Sağlık Bakanlığı Ulusal Çocukluk Dönemi Aşılama Takvimi"
        className="mb-4 h-auto w-full"
      />
      <p className="mb-2 text-center font-semibold">
        Aşı Takvimindeki tüm aşılar ücretsizdir.
      </p>
      <p className="mb-0 text-center">
        Detaylı bilgi için{" "}
        <a
          href="https://asi.saglik.gov.tr/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#DC0D15] hover:underline"
        >
          https://asi.saglik.gov.tr/
        </a>
      </p>
    </InnerPage>
  );
}
