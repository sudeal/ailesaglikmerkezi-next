import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Aile Sağlığı Merkezi | Çapaklı Aile Sağlığı Merkezi",
};

export default function AileSagligiMerkeziPage() {
  return (
    <InnerPage
      title="Aile Sağlığı Merkezi"
      views={2321}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/aile-hekimligi", label: "Aile Hekimliği" },
        { label: "Aile Sağlığı Merkezi" },
      ]}
    >
      <p className="mb-4 text-justify">
        Bir veya daha fazla aile hekimi ile aile sağlığı elemanlarınca aile
        hekimliği hizmetinin verildiği sağlık kuruluşuna denir.
      </p>
      <p className="mb-4 text-justify">
        Maliyetlerin azalması ve hekim çalışma sürelerinde esnekliğe imkan
        vermesi bakımından birkaç hekimin yeterli sayıda aile sağlığı elemanı
        ile birlikte görev yaptığı aile sağlığı merkezleri nüfusun ve ulaşımın
        uygun olduğu yerlerde oluşturulabilir. Buralarda sadece birinci
        basamak sağlık hizmeti verilecektir. Bu tür grup çalışmaları
        dayanışma, eğitim ve hizmet sürekliliği açısından avantajlar
        taşımaktadır. Bu yüzden mümkün oldukça grup çalışmaları
        özendirilmelidir. Bu sayede; Aile sağlığı merkezi, Bakanlıkça
        öngörülen nüfus kriterleri esas alınmak suretiyle sözleşme yapmış bir
        ya da daha fazla aile hekimi tarafından açılabilir. Aynı aile sağlığı
        merkezindeki her aile hekimi ve aile sağlığı elemanı pozisyonu için
        ayrı ayrı sözleşme yapılır. Bakanlıkça uygun görülen aile sağlığı
        merkezleri eğitim amaçlı olarak kullanılabilir. Aile hekimleri, sağlık
        hizmetlerine yardımcı olmak amacıyla ebe, hemşire, sağlık memuru,
        tıbbi sekreter gibi ilave sağlık hizmetleri personeli ile güvenlik,
        temizlik, kalorifer, sekretarya vb. hizmetler için ferden veya
        müştereken personel çalıştırabilir ya da hizmet satın alabilirler.
      </p>
      <p className="mb-4 text-justify">
        Aile sağlığı merkezinde birden çok aile hekimi hizmet veriyor ise,
        aile hekimleri kendi aralarında bir yönetim planı oluşturarak yönetici
        belirler ve yönetici ismini müdürlüğe bildirirler. Yönetici seçimi
        zorunlu haller dışında yılda bir kez yapılır. Yönetim tarafından
        alınan kararlar karar defterine işlenir. Yönetici, aile sağlığı
        merkezinin işletilmesinden birinci derecede sorumlu olduğu gibi aile
        sağlığı merkezinin müdürlük ve toplum sağlığı merkezi ile
        koordinasyonunu sağlamakla da görevlidir.
      </p>
      <p className="mb-4 text-justify">
        Bina; kolay ulaşılabilir, güvenli, uygun havalandırma, ısıtma ve
        aydınlatma imkânlarına sahip, toplam alanı tek aile hekimi için 60
        metrekare olmalıdır. Birden fazla hekimin birlikte çalışması durumunda
        her aile hekimi için 20 metrekare ilave edilir. Bir aile sağlığı
        merkezinde 2-6 aile hekimliği birimi olmasına azami dikkat gösterilir.
        Bekleme ve kayıt bölümü bulunmalıdır. Muayene odası, her aile hekimi
        için en az 10 metrekare olmalıdır. Tıbbi müdahale odası, hastaya tıbbi
        girişimlerin yapılabileceği büyüklükte lavabosu bulunan bir odadır. Bu
        odada aşı, enjeksiyon, küçük cerrahi müdahalelerin yapılmasına uygun
        muayene ve müdahale masası, muayene ve acil müdahale malzemeleri,
        jinekolojik muayene masası ile dezenfeksiyon ve sterilizasyon
        cihazlarının bulunması gereklidir. Laboratuvar hizmetlerinin aile
        hekimince merkezde verilmesi planlanıyorsa bu hizmetler için uygun bir
        oda bulunmalıdır. Sağlık kayıtlarının tutulacağı, dosyalama, verilerin
        toplanması ve istatistikî değerlendirmeler ile resmi kurum ve sigorta
        kurumlarına yapılacak bildirimlerin hazırlanması gibi çalışmaların
        güvenli bir şekilde yapılabileceği bir büro veya bölme bulunmalıdır.
        Hastaların kullanabileceği bir lavabo ve tuvalet olmalıdır. Tercihen
        binanın giriş katında kurulurlar. Özürlü ve yaşlı hastaların giriş ve
        çıkışlarını mümkün kılan, kolaylaştırıcı tedbirler alınır. Muayene
        odası dışında yukarıda sayılan diğer odalar aile hekimlerince müşterek
        kullanılabilir.
      </p>
      <p className="mb-4 text-justify">
        Aile sağlığı merkezinde aşağıda belirtilen asgari tıbbi cihaz ve
        malzemenin faal olarak bulundurulması zorunludur:
      </p>
      <p className="mb-4 text-justify">
        steteskop, tansiyon aleti (çocuk ve erişkin olmak üzere en az iki boy),
        otoskop, oftalmoskop, termometre, ışık kaynağı, küçük cerrahi seti
        (asgari 1 portegü, 1 makas, 1 penset, 1 bisturi sapı), paravan, perde
        v.b, muayene masası, refleks çekici, mezura, fetal el doppleri, aşı
        nakil kabı, snellen eşeli, diapozon seti, tartı aleti (bebek, erişkin
        boy), boy ölçer (bebek, erişkin boy), pansuman seti, dil basacağı,
        enjektör, gazlı bez gibi gerekli sarf malzemeleri, keskin atık kabı,
        acil solunum yolu müdahale araçları (S-tüp, laringoskop, pediatrik ve
        erişkin entübasyon tüpü), ambu cihazı (erişkin ve çocuk için),
        manometreli oksijen tüpü (taşınabilir), seyyar lamba, buzdolabı,
        jinekolojik muayene masası, spekülüm, muayene ve RİA seti, ilâç ve
        malzeme dolabı, sterilizatör, EKG cihazı, tromel, negatoskop,
        tekerlekli sandalye, pulse oksimetre, jeneratör, genişletilmiş
        bağışıklama programı kapsamında uygulanan aşılar ve antiserumlar,
        15/02/2008 tarih ve 26788 sayılı Resmi Gazetede yayımlanan Ayakta
        Teşhis Ve Tedavi Yapılan Özel Sağlık Kuruluşları Hakkındaki
        Yönetmelikte bulundurulması zorunlu tutulan temel acil ilâçlar,
        aşılar ve antiserumlar.
      </p>
      <p className="mb-4 text-justify">
        Aile hekimlerinin kullanmak zorunda oldukları teknik, tıbbi cihaz,
        bilgisayar donanımları ile gezici sağlık hizmetlerinin sunumu için
        gerekli olan motorlu araçlar, esas olarak aile hekimleri tarafından
        temin edilir.
      </p>
      <p className="mb-4 text-justify">
        Bina ve müştemilatında eczane bulunan yerlerde aile sağlığı merkezi
        açılamaz.
      </p>
    </InnerPage>
  );
}
