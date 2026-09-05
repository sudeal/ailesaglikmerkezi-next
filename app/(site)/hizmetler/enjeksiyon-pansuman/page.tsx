import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Enjeksiyon - Pansuman | Çapaklı Aile Sağlığı Merkezi",
};

export default function EnjeksiyonPansumanPage() {
  return (
    <InnerPage
      title="Enjeksiyon - Pansuman"
      views={4022}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/hizmetler", label: "Hizmetler" },
        { label: "Enjeksiyon - Pansuman" },
      ]}
    >
      <img
        src="/images/hizmetlerlogo.jpeg"
        alt="Enjeksiyon Pansuman"
        className="mb-5 h-auto w-full max-w-full"
      />

      <p className="mb-4">
        Aile Sağlığı Merkezimizde hafta içi mesai saatleri arasında enjeksiyon
        ve pansuman işlemlerinizi ücretsiz olarak yaptırabilirsiniz.
      </p>
      <p className="mb-4">
        Lütfen başvurunuzu yaparken doktorunuzun yazdığı reçeteyi yanınızda
        bulundurunuz.{" "}
        <strong>
          Reçetesi yanında olmayan kişilerin enjeksiyonları yapılmamaktadır.
        </strong>
      </p>

      <h2 className="mt-6 mb-2 text-[16px] font-bold text-black">
        ENJEKSİYON NEDİR ?
      </h2>
      <p className="mb-4">
        Enjeksiyon herhangi bir şeyi vücuda verme işlemidir. İlaçlar sindirim
        sisteminin aracılığı olmadan doğrudan doğruya vücuda sokulabilir. Bazı
        ilaçlar ağızdan alındığı taktirde terkipleri bozulacağı gibi, miktar ve
        zaman bakımından eksik ve gecikmiş olarak vücuda girerler. İlaçların
        doğrudan doğruya vücuda sokulmasına Enjeksiyon denir. Kullanılan alete
        Enjektör denir.
      </p>
      <p className="mb-4">
        Enjeksiyonlar deri içi (intraküton), deri altı (sübküton), kas içi
        (intromüskiloa) ve kara damar (intravenöz) yapılır.
      </p>

      <h2 className="mt-6 mb-2 text-[16px] font-bold text-black">PANSUMAN</h2>
      <p className="mb-4">
        Yaraları hariçten gelebilecek travmatizmalardan, enjeksiyon ve
        tahrişlerden korumak, ifraz edilen maddeleri emmeye, kanayan bir yeri
        sıkıştırmaya yardım için kullanılan steril gaz, hidrofil pamuk ve
        sargıdan ibaret materyale denir.
      </p>

      <h2 className="mt-6 mb-2 text-[16px] font-bold text-black">
        Pansuman Malzemeleri
      </h2>
      <ul className="mb-4 list-none space-y-2 p-0">
        <li>
          <strong>a) Steril Gaz:</strong> Birkaç kat steril gaz doğrudan
          yaranın üstüne uygulanır. Pamuğun yapışmasına mani olur, yara
          üzerinden kakması kolaydır.
        </li>
        <li>
          <strong>b) Hidrofil Pamuk:</strong> Pansumanın emici kısmını teşkil
          eder.
        </li>
        <li>
          <strong>c) Adi Pamuk:</strong> Ttarmalardan enjeksiyondan yarayı
          korur.
        </li>
        <li>
          <strong>d) Sargı:</strong> En üst kısmıdır. Pansumanı tesbit eder.
        </li>
      </ul>

      <h2 className="mt-6 mb-2 text-[16px] font-bold text-black">
        Muhtelif Pansumanlar
      </h2>
      <ol className="mb-0 list-none space-y-2 p-0">
        <li>
          <strong>1) Kuru Pansuman:</strong> Aseptik her türlü yarada (ameliyat
          yaraları v.s.) aseptik materyalle yapılır.
        </li>
        <li>
          <strong>2) Yaş Pansuman:</strong> Bilhassa iltihaplı yaralara tatbik
          edilir.
        </li>
        <li>
          <strong>3) Correl Pansumanı:</strong> Yaraların devamlı veya fasılalı
          şekilde antiseptik mahlüllerle yıkanmasına denir. Bu mahlül serum
          fizyolojik, hipertonik tuzlu su, steril odistilode olabilir
        </li>
      </ol>
    </InnerPage>
  );
}
