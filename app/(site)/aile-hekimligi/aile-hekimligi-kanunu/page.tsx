import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Aile Hekimliği Kanunu | Çapaklı Aile Sağlığı Merkezi",
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-6 mb-2 text-[16px] font-bold text-black">{children}</h2>
  );
}

function Madde({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="mb-4 text-justify">
      <strong className="text-[#DC0D15]">Madde {n}- </strong>
      {children}
    </p>
  );
}

function Notes({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 border-t border-dashed border-[#999999] pt-3 text-[12px] leading-6 italic">
      {children}
    </div>
  );
}

function PageNo({ children }: { children: string }) {
  return <p className="my-8 text-center text-[14px] text-[#333333]">{children}</p>;
}

export default function AileHekimligiKanunuPage() {
  return (
    <InnerPage
      title="Aile Hekimliği Kanunu"
      views={2360}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/aile-hekimligi", label: "Aile Hekimliği" },
        { label: "Aile Hekimliği Kanunu" },
      ]}
    >
      <p className="mb-6 whitespace-pre-wrap">
        {`Yayımlandığı Düstur       : Tertip : 5  Cilt : 44`}
      </p>

      <Heading>Amaç ve Kapsam</Heading>
      <Madde n="1">
        Bu Kanunun amacı; Sağlık Bakanlığının (…)
        <sup>(2)</sup> belirleyeceği illerde, birinci basamak sağlık
        hizmetlerinin geliştirilmesi, birey ihtiyaçları doğrultusunda koruyucu
        sağlık hizmetlerine ağırlık verilmesi, kişisel sağlık kayıtlarının
        tutulması ve bu hizmetlere eşit erişimin sağlanması amacıyla aile
        hekimliği hizmetlerinin yürütülebilmesini teminen görevlendirilecek
        veya çalıştırılacak sağlık personelinin statüsü ve malî hakları ile
        hizmetin esaslarını düzenlemektir. <sup>(2)</sup>
      </Madde>

      <Heading>Tanımlar</Heading>
      <Madde n="2">
        Aile hekimi; kişiye yönelik koruyucu sağlık hizmetleri ile birinci
        basamak teşhis, tedavi ve rehabilite edici sağlık hizmetlerini yaş,
        cinsiyet ve hastalık ayrımı yapmaksızın her kişiye kapsamlı ve devamlı
        olarak belli bir mekânda vermekle yükümlü, gerektiği ölçüde gezici
        sağlık hizmeti veren ve tam gün esasına göre çalışan aile hekimliği
        uzmanı veya Sağlık Bakanlığının öngördüğü eğitimleri alan uzman tabip
        veya tabiptir.
      </Madde>
      <p className="mb-4 text-justify">
        Aile sağlığı elemanı; aile hekimi ile birlikte hizmet veren hemşire,
        ebe, sağlık memuru gibi sağlık elemanıdır.
      </p>

      <Heading>Personelin statüsü ve malî haklar<sup>(3)</sup></Heading>
      <Madde n="3">
        Sağlık Bakanlığı; Bakanlık veya diğer kamu kurum veya kuruluşları
        personeli olan uzman tabip, tabip ve aile sağlığı elemanı olarak
        çalıştırılacak sağlık personelini, kendilerinin talebi ve kurumlarının
        veya Bakanlığın muvafakatı üzerine, 657 sayılı Devlet Memurları Kanunu
        ile diğer kanunların sözleşmeli personel çalıştırılması hakkındaki
        hükümlerine bağlı olmaksızın, sözleşmeli olarak çalıştırmaya veya bu
        nitelikteki Bakanlık personelini aile hekimliği uygulamaları için
        görevlendirmeye veya aile hekimliği uzmanlık eğitimi veren kurumlarla
        sözleşme yapmaya yetkilidir.
      </Madde>
      <p className="mb-4 text-justify">
        Aile sağlığı elemanları, aile hekimi tarafından belirlenen ve Sağlık
        Bakanlığı tarafından uygun görülen, kurumlarınca da muvafakatı verilen
        Bakanlık veya diğer kamu kurum ve kuruluşları personeli arasından
        seçilir ve bunlar sözleşmeli olarak çalıştırılır. Bu suretle eleman
        temin edilememesi halinde, Sağlık Bakanlığı, personelini bu hizmetler
        için görevlendirebilir. İhtiyaç duyulması halinde, Türkiye&apos;de
        mesleğini icra etmeye yetkili ve 657 sayılı Devlet Memurları Kanununun
        48 inci maddesinin (A) bendinin (4), (5) ve (7) numaralı alt
        bentlerindeki şartları taşıyan kamu görevlisi olmayan uzman tabip,
        tabip ve aile sağlığı elemanları; Sağlık Bakanlığının önerisi, Maliye
        Bakanlığının uygun görüşü üzerine sözleşme yapılarak aile hekimliği
        uygulamalarını yürütmek üzere çalıştırılabilir.
      </p>

      <Notes>
        <p className="m-0 mb-2">
          (1) Bu Kanunun adı “Aile Hekimliği Pilot Uygulaması Hakkında Kanun”
          iken 11/10/2011 tarihli ve 663 sayılı KHK’nın 58 inci maddesi ile
          metne işlendiği şekilde değiştirilmiştir.
        </p>
        <p className="m-0 mb-2">
          (2) 11/10/2011 tarihli ve 663 sayılı KHK’nın 58 inci maddesiyle bu
          maddede geçen “pilot olarak” ibaresi yürürlükten kaldırılmıştır.
        </p>
        <p className="m-0">
          (3) 11/10/2011 tarihli ve 663 sayılı KHK’nın 58 inci maddesiyle bu
          maddede geçen “görevlendirmeye” ibaresinden sonra gelmek üzere “veya
          aile hekimliği uzmanlık eğitimi veren kurumlarla sözleşme yapmaya”
          ibaresi eklenmiştir.
        </p>
      </Notes>

      <PageNo>9092</PageNo>

      <p className="mb-4 text-justify">
        Sözleşmeli olarak çalışan aile hekimi ve aile sağlığı elemanları
        kurumlarında aylıksız veya ücretsiz izinli sayılırlar ve bunların
        kadroları ile ilişkileri devam eder. (Değişik ikinci cümle:11/10/2011-KHK-663/58
        md.) Bu personelin, sözleşmeli statüde geçen süreleri kazanılmış hak
        derece ve kademelerinde veya kıdemlerinde değerlendirilerek her yıl
        işlem yapılır ve bunlar talepleri halinde eski görevlerine atanırlar.
        Sözleşmeli personel statüsünde çalışmakta iken aile hekimi ve aile
        sağlığı elemanı statüsüne geçenlerden önceki sözleşmeli personel
        statüsüne dönmek isteyenler, eski kurumlarındaki boş pozisyonlara
        öncelikle atanırlar ve bu madde kapsamındaki çalışmaları hizmet
        sürelerinde dikkate alınır.
      </p>
      <p className="mb-4 text-justify">
        Kadroya bağlı olarak veya sözleşmeli personel pozisyonlarında görev
        yapan personelden Sağlık Bakanlığınca aile hekimi veya aile sağlığı
        elemanı olarak görevlendirilenlere, 209 sayılı Sağlık ve Sosyal Yardım
        Bakanlığına Bağlı Sağlık Kuruluşları ile Esenlendirme (Rehabilitasyon)
        Tesislerine Verilecek Döner Sermaye Hakkında Kanun uyarınca ek ödeme
        yapılmaz. Bunlara, aylıklarına ve ücretlerine ilaveten, çalıştıkları
        günler dikkate alınarak aşağıdaki fıkrada belirlenen miktarların
        yarısını aşmamak üzere tespit edilecek tutarda ödeme yapılır.
      </p>
      <p className="mb-4 text-justify">
        Sözleşme yapılan aile hekimi ve aile sağlığı elemanlarına, 657 sayılı
        Kanunun 4 üncü maddesinin (B) bendine göre belirlenen en yüksek brüt
        sözleşme ücretinin aile hekimi için (6) katını, aile sağlığı elemanı
        için (1,5) katını aşmamak üzere tespit edilecek tutar, çalışılan ay
        sonuçlarının ilgili sağlık idaresine bildiriminden itibaren onbeş gün
        içerisinde ödenir. (Ek cümle : 4/7/2012-6354/ 12 md., Değişik ikinci
        cümle: 2/1/2014-6514/52 md.) Aile hekimlerine ve aile sağlığı
        elemanlarına 657 sayılı Kanunun ek 33 üncü maddesinde belirtilen
        yerlerde haftalık çalışma süresi ve mesai saatleri dışında ayda asgari
        sekiz saat; ihtiyaç hâlinde ise bu sürenin üzerinde nöbet görevi
        verilir. (Ek cümle: 2/1/2014-6514/52 md.) Bunlara entegre sağlık
        hizmeti sunulan merkezlerde artırımlı ücretten yararlananlar hariç
        olmak üzere, 657 sayılı Kanunun ek 33 üncü maddesi çerçevesinde nöbet
        ücreti ödenir.
      </p>
      <p className="mb-4 text-justify">
        Sözleşmeli olarak çalışmaya başlayanların, daha önce bağlı oldukları
        sosyal güvenlik kuruluşlarıyla ilişkileri aynı şekilde devam ettirilir.
        Ancak, her türlü prim, kesenek ve kurum karşılıkları bu fıkrada
        belirtilen ücretlerden kesilerek ilgili sosyal güvenlik kuruluşuna
        aktarılır. Bunlar önceki durumları çerçevesinde tedavi yardımlarından
        yararlanmaya devam ederler.
      </p>
      <p className="mb-4 text-justify">
        Aile hekimi ve aile sağlığı elemanlarının durumları ve aile hekimliği
        uzmanlık eğitimi almış olup olmadıkları da dikkate alınmak suretiyle
        yapılacak ödeme tutarlarının tespitinde; çalıştığı bölgenin
        sosyo-ekonomik gelişmişlik düzeyi, aile sağlığı merkezi giderleri, (…)
        <sup>(3)</sup>, kayıtlı kişi sayısı ve bunların risk grupları, gezici
        sağlık hizmetleri ile aile hekimi tarafından karşılanmayan gider
        unsurları, belirlenen standartlar çerçevesinde sağlığın geliştirilmesi,
        hastalıkların önlenmesi, takibi ve kontrolündeki başarı oranı gibi
        kriterler esas alınır. Sağlık Bakanlığınca belirlenen standartlara
        göre, koruyucu hekimlik hizmetlerinin eksik uygulaması (…)
        <sup>(1)</sup> halinde bu ödeme tutarından brüt ücretin % 20&apos;sine
        kadar indirim yapılır. Sosyo-ekonomik gelişmişlik düzeyi ücreti, aile
        sağlığı merkezi giderleri, (…)
        <sup>(3)</sup> ve gezici sağlık hizmetleri ödemelerinden Damga Vergisi
        hariç herhangi bir kesinti yapılmaz. (Ek cümle: 2/1/2014-6514/52 md.)
        Aile hekimlerince talep edilen tetkik ve sarf malzemelerinin giderleri
        halk sağlığı müdürlükleri tarafından hak sahiplerine ayrıca ödenir.
        <sup>(1)(2)(3)</sup>
      </p>

      <Notes>
        <p className="m-0 mb-2">
          (1) Bu fıkranın ikinci cümlesinde yer alan “... veya hasta sevk
          oranlarının yüksek olması...” ibaresi, 7/11/2008 tarihli ve 27047
          sayılı Resmi Gazete’de yayımlanan Anayasa Mahkemesi’nin 21/2/2008
          tarihli ve E.: 2005/10, K.: 2008/63 sayılı Kararı ile iptal
          edilmiştir.
        </p>
        <p className="m-0 mb-2">
          (2) 11/10/2011 tarihli ve 663 sayılı KHK’nın 58 inci maddesiyle bu
          fıkrada yer alan “karşılanmayan gider unsurları” ibaresinden sonra
          gelmek üzere “, belirlenen standartlar çerçevesinde sağlığın
          geliştirilmesi, hastalıkların önlenmesi, takibi ve kontrolündeki
          başarı oranı” ibaresi eklenmiştir.
        </p>
        <p className="m-0">
          (3) 2/1/2014 tarihli ve 6514 sayılı Kanunun 52 nci maddesiyle, bu
          fıkrada yer alan “tetkik ve sarf malzemesi giderleri” ibareleri madde
          metninden çıkarılmıştır.
        </p>
      </Notes>

      <PageNo>9092-1</PageNo>

      <p className="mb-4 text-justify">
        (Ek fıkra: 4/7/2012-6354/12 md.) Aile hekimliği uzmanlık eğitimi veren
        kurumların; her bir araştırma görevlisi/asistan başına azamî kayıtlı
        kişi sayısı 4000 kişiyi aşmamak ve her kayıtlı kişi başına (görev
        yapacak araştırma görevlisi/asistan sayısı da esas alınmak suretiyle)
        aylık beş Türk Lirasından fazla olmamak üzere belirlenecek tutar,
        çalışılan aya ait sonuçların ilgili sağlık idaresine bildiriminden
        itibaren onbeş gün içinde ilgili döner sermaye mevzuatı hükümlerine
        tabi tutulmaksızın döner sermaye işletmelerinde bu amaçla açılacak olan
        hesaba yatırılır. Bu tutarı üç katına kadar artırmaya Sağlık
        Bakanlığının talebi ve Maliye Bakanlığının teklifi üzerine Bakanlar
        Kurulu yetkilidir. Kayıtlı kişi başına belirlenen tutar, 657 sayılı
        Kanunun 4 üncü maddesinin (B) bendine göre belirlenen en yüksek brüt
        sözleşme ücretinin artışı oranında artırılabilir. Sağlık Bakanlığı
        tarafından belirlenen standartlara göre, koruyucu hekimlik
        hizmetlerinin eksik uygulanması hâlinde ödeme tutarının % 20’sine kadar
        indirim yapılır.
      </p>
      <p className="mb-4 text-justify">
        (Ek fıkra: 4/7/2012-6354/12 md.) Bu şekilde kurumlarca oluşturulacak
        aile sağlığı merkezlerinin bu Kanun kapsamında oluşacak tüm giderleri
        sekizinci fıkrada belirtilen hesaplardan ödenir. Kurumlarınca aile
        hekimliği hizmetlerinde çalıştırılan öğretim üyesi, eğitim görevlisi,
        araştırma görevlisi ve asistanlara; kayıtlı kişi sayısı ve bunların
        risk grupları, gezici sağlık hizmetleri, belirlenen standartlar
        çerçevesinde sağlığın geliştirilmesi, hastalıkların önlenmesi, takibi
        ve kontrolündeki başarı oranı gibi kriterlere göre yapılacak ödemelere
        ilişkin usul ve esaslar Maliye Bakanlığının uygun görüşü üzerine Sağlık
        Bakanlığınca çıkarılacak yönetmelikle belirlenir. İlgililere yapılacak
        toplam ödeme, kadrolarına bağlı olarak yapılan ödemeler de dâhil olmak
        üzere beşinci fıkrada yer alan sınırları aşamaz. Sekizinci fıkra
        kapsamında oluşturulan aile sağlığı merkezlerinde görev yapan aile
        sağlığı elemanlarına 209 sayılı Kanunun 5 inci maddesi ve 4/11/1981
        tarihli ve 2547 sayılı Yükseköğretim Kanununun 58 inci maddesi
        hükümleri çerçevesinde belirlenen azamî ek ödeme tutarını geçmemek
        üzere yukarıda belirtilen kriterler çerçevesinde yapılacak ödeme,
        anılan fıkra uyarınca açılmış bulunan hesaplardan ödenir. Bu fıkra
        kapsamında yapılacak ödemenin net tutarı, 27/6/1989 tarihli ve 375
        sayılı Kanun Hükmünde Kararnamenin ek 9 uncu maddesi uyarınca kadro ve
        görev unvanı veya pozisyon unvanı itibarıyla belirlenmiş olan ek
        ödemenin net tutarından az olamaz. Bu ödemeden yararlanan personele,
        ayrıca 375 sayılı Kanun Hükmünde Kararnamenin ek 9 uncu maddesi, 209
        sayılı Kanunun 5 inci ve ek 3 üncü maddeleri ile 2547 sayılı Kanunun 58
        inci maddesi ((e) fıkrasının ikinci paragrafı hariç) uyarınca herhangi
        bir şekilde ek ödeme yapılmaz.
      </p>

      <Heading>Kamuya ait taşınmazların kullanımı</Heading>
      <Madde n="4">
        Hazine, belediye veya il özel idaresine ait taşınmazlardan aile sağlığı
        merkezi olarak kullanılması uygun görülenler, Maliye Bakanlığı,
        belediye veya il özel idarelerince bu amaçla kullanılmak üzere doğrudan
        aile hekimine kiraya verilebilir.
      </Madde>

      <PageNo>9093/9095</PageNo>

      <Heading>Hizmetin esasları</Heading>
      <Madde n="5">
        Aile hekimliği uygulamasına geçilen yerlerde kişilerin aile hekimine
        kaydı yapılır. Bakanlıkça belirlenen süre sonunda kişiler aile
        hekimlerini değiştirebilirler. Her bir aile hekimi için kayıtlı kişi
        sayısı; asgarî 1000, azamî 4000&apos;dir. Aralıksız iki ayı aşmayan
        süreyle kayıtlı kişi sayısı 1000&apos;den az olabilir.
      </Madde>
      <p className="mb-4 text-justify">
        Aile hekimliği hizmetleri ücretsizdir; acil haller hariç, haftada kırk
        saatten az olmamak kaydı ile Bakanlıkça belirlenen kıstaslar
        çerçevesinde ilgili aile hekiminin talebi ve o yerin sağlık idaresince
        onaylanan çalışma saatleri içinde yerine getirilir. Aile hekimliği
        uygulamasına geçilen yerlerde acil haller ve mücbir sebepler dışında,
        kişi hangi sosyal güvenlik kuruluşuna tâbi olursa olsun, aile hekiminin
        sevki olmaksızın sağlık kurum ve kuruluşlarına müracaat edenlerden
        katkı payı alınır. Alınacak katkı payı tutarı Sağlık, Maliye ve Çalışma
        ve Sosyal Güvenlik bakanlıklarınca müştereken belirlenir. Aile
        hekimliği uygulamasına geçilen yerlerde, diğer kanunların aile
        hekimliği hizmetleri kapsamındaki hizmetlerin sunumu ile sevk ve
        müracaata ilişkin hükümleri uygulanmaz. (Ek cümle:11/10/2011-KHK-663/58
        md.) Aile hekimliği hizmetleri dışında kalan birinci basamak sağlık
        hizmetleri toplum sağlığı merkezleri tarafından verilir ve bu
        merkezlerin organizasyonu, kadroları, görevleri ile çalışma usûl ve
        esasları Türkiye Halk Sağlığı Kurumunca belirlenir. Yabancılar hakkında
        ilgili mevzuat hükümleri uygulanır.
        <sup>(1)</sup>
      </p>
      <p className="mb-4 text-justify">
        Aile hekimlerinin şahsî kayıtları ilgili il ve ilçe sağlık idare
        birimlerinde tutulur. Aile hekimlerinin kullandığı basılı veya
        elektronik ortamda tutulan kayıtlar, kişilerin sağlık dosyaları ile
        raporlar, sevk belgesi ve reçete gibi belgeler resmî kayıt ve evrak
        niteliğindedir. Bu kayıt ve belgeler, hekimin ayrılması veya kişinin
        hekim değiştirmesi halinde eksiksiz olarak devredilir. İlgili mevzuatta
        birinci basamak sağlık kuruluşları ve resmî tabiplerce düzenlenmesi
        öngörülen her türlü rapor, sevk evrakı, reçete ve sair belgeler, aile
        hekimliği uygulamasına geçilen yerlerde aile hekimleri tarafından
        düzenlenir.
      </p>

      <Heading>Denetim, sorumluluk ve mal bildirimi</Heading>
      <Madde n="6">
        Aile hekimleri ve aile sağlığı elemanları, mevzuat ve sözleşme
        hükümlerine uygunluk ile diğer konularda Bakanlık, ilgili mülkî idare
        ve sağlık idaresinin denetimine tâbidir. Aile hekimi ve aile sağlığı
        elemanları, görevleriyle ilgili ya da görevleri başında işledikleri
        veya kendilerine karşı işlenen suçlarda Devlet memurları gibi kabul
        edilir. Aile hekimi ve aile sağlığı elemanları, 3628 sayılı Mal
        Bildiriminde Bulunulması, Rüşvet ve Yolsuzluklarla Mücadele Kanunu
        gereğince mal bildiriminde bulunmakla yükümlüdür.
      </Madde>

      <Heading>Ağız ve diş sağlığı hizmetleri</Heading>
      <Madde n="7">
        Kişilerin ağız ve diş sağlığını korumak ve bu hizmetlerin daha etkili
        ve verimli yürütülmesini sağlamak amacıyla, Sağlık Bakanlığınca tespit
        edilecek illerde pilot uygulama yapılır.
      </Madde>
      <p className="mb-4 text-justify">
        Bu hizmetler karşılığında yapılacak ödemelerin, hizmetten
        yararlananların ilgisine göre bağlı bulundukları kurum bütçelerinden
        veya sosyal güvenlik kuruluşlarından karşılanması ile diğer hususlara
        ilişkin usul ve esaslar Maliye, Sağlık ve Çalışma ve Sosyal Güvenlik
        bakanlıkları tarafından müştereken belirlenir.
      </p>

      <Heading>Yönetmelikler</Heading>
      <Madde n="8">
        Aile hekimi ve aile sağlığı elemanlarının çalışma usul ve esasları;
        çalışılan yer, kurum ve statülerine göre öncelik sıralaması; aile
        hekimliği uygulamasına geçişe ve nakillere ilişkin puanlama sistemi ve
        sayıları; aile sağlığı merkezi olarak kullanılacak yerlerde aranacak
        fizikî ve teknik şartlar; meslek ilkeleri; iş tanımları; performans ve
        hizmet kalite standartları; hasta sevk evrakı, reçete, rapor ve diğer
        kullanılacak belgelerin şekli ve içeriği, kayıtların tutulması ile
        çalışma ve denetime ilişkin usul ve esaslar, Sağlık Bakanlığınca
        çıkarılacak yönetmelikle düzenlenir.
      </Madde>

      <Notes>
        <p className="m-0">
          (1) 4/7/2012 tarihli ve 6354 sayılı Kanunun 13 üncü maddesi ile bu
          fıkranın birinci cümlesine “kaydı ile” ibaresinden sonra gelmek üzere
          “Bakanlıkça belirlenen kıstaslar çerçevesinde” ibaresi eklenmiştir.
        </p>
      </Notes>

      <PageNo>9094/9102</PageNo>

      <p className="mb-4 text-justify">
        Aile hekimi ve aile sağlığı elemanlarıyla yapılacak sözleşmede yer
        alacak hususlar ve bu Kanunda belirlenen esaslar çerçevesinde bunlara
        yapılacak ödeme tutarları ile bu ücretlerden indirim oran ve şartları,
        sözleşmenin feshini gerektiren nedenler, Maliye Bakanlığının uygun
        görüşü alınarak, Sağlık Bakanlığının teklifi üzerine Bakanlar Kurulunca
        çıkarılacak yönetmelikle düzenlenir.
      </p>

      <Heading>Yürürlük</Heading>
      <Madde n="9">Bu Kanun yayımı tarihinde yürürlüğe girer.</Madde>

      <Heading>Yürütme</Heading>
      <Madde n="10">Bu Kanun hükümlerini Bakanlar Kurulu yürütür.</Madde>

      <p className="mt-12 text-center text-[14px] leading-7 font-medium tracking-wide text-black uppercase">
        5258 SAYILI KANUNA EK VE DEĞİŞİKLİK GETİREN
        <br />
        MEVZUATIN VEYA ANAYASA MAHKEMESİ TARAFINDAN İPTAL EDİLEN
        <br />
        HÜKÜMLERİN YÜRÜRLÜĞE GİRİŞ TARİHİNİ
        <br />
        GÖSTERİR LİSTE
      </p>
    </InnerPage>
  );
}
