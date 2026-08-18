import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Bebek İzlemleri | Çapaklı Aile Sağlığı Merkezi",
};

export default function BebekIzlemPage() {
  return (
    <InnerPage
      title="Bebek İzlemleri"
      views={2740}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/hizmetler", label: "Hizmetler" },
        { label: "Bebek İzlemleri" },
      ]}
    >
      <p className="mb-4">
        Koruyucu sağlık hizmetlerinin en önemli parçasını taramalar oluşturur.
        Tarama testlerinin en yaygın bir şekilde uygulandığı dönem yenidoğan
        dönemidir. Metabolik hastalığın bulgu vermeden ve geriye dönüşümsüz
        zararlar oluşturmadan teşhisini koymak temel amaçtır.
      </p>
      <p className="mb-4">
        Fenilketonüri: Yenidoğan bebeklerde görülen fenilketonüri hastalığı
        tedavi edilebilir zeka geriliklerinin en önemli nedeni olup erken
        konulan teşhis ile önlenebilmektedir. Doğumsal (konjenital)
        hipotiroidi: Önlenebilir zeka geriliğinin önemli nedenlerinden bir
        diğeridir.
      </p>
      <p className="mb-4">
        Metabolik tarama amaçlı kan örneği alınması için en ideal zaman
        bebeğin proteinli besinler almaya başlamasından 24 saat sonrası, ilk
        72 saatlik süredir. İkinci topuk kanı ilk 7 gün içerisinde alınır.
        Alınan bu iki topuk kanı örneği bu iki hastalığın erken tanısı için
        çok önemlidir.
      </p>
      <p className="mb-4">
        İşitme taraması ve görme her yenidoğan bebeğe uygulanması gereken
        tarama yöntemleridir.
      </p>
      <p className="mb-4">
        Doğuştan kalça çıkığı için yenidoğanlar taburcu olmadan önce muayene
        edilir, bebek birinci ayını doldurduğunda kalça USG ile taranmalıdır.
      </p>
      <p className="mb-4">
        Bebek anne sütü almaya başladıktan sonra en geç bir hafta içinde aile
        hekimine getirilmelidir. Aile hekimliğinde topuk kanı alınır ve tarama
        testleri sorgulanır. Yapılmayanlar varsa yapılması gerekenler
        anlatılır. Ayrıca aylık rutin kontrollere için randevu planlaması
        yapılır.
      </p>
      <p className="mb-0">
        Bebeklik dönemindeki aşı ve izlemler bebeğin sağlıklı gelişimi ve
        bağışıklığının oluşması açısından çok önemlidir.
      </p>
    </InnerPage>
  );
}
