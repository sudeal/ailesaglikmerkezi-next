export type AsiArticle = {
  slug: string;
  title: string;
  views: number;
  image: string;
  excerpt: string;
  body: { heading?: string; red?: boolean; prefix?: string; text?: string; list?: string[]; plainList?: boolean }[];
  showImage?: boolean;
  detailImage?: string;
};

export const asiArticles: AsiArticle[] = [
  {
    slug: "asi-sonrasi-etkiler",
    title: "Aşı Sonrası Etkiler",
    views: 1384,
    image: "/images/foto6.jpg",
    excerpt:
      "VAKA TANIMLARI. Aşı sonrası istenmeyen etkilerin tanısı konurken öncelikle diğer nedenler ekarte edilmelidir! Lokal Reaksiyonlar",
    body: [
      {
        heading: "VAKA TANIMLARI",
        text: "Aşı sonrası istenmeyen etkilerin tanısı konurken öncelikle diğer nedenler ekarte edilmelidir! Lokal Reaksiyonlar",
      },
      {
        text: "Abse: Enjeksiyon yerinde 2-7 gün içinde ortaya çıkan, içi sıvı dolu sert veya fluktuasyon veren koleksiyon varlığında enjeksiyon yerinde abse oluşumu olarak kabul edilmeli boyutları ile birlikte bildirimi yapılmalıdır.",
      },
      {
        list: [
          "a. Eğer, ateş, pürülan sıvı, kızarıklık-endürasyon, hassasiyet, kültür pozitifliği gibi enfeksiyon bulguları mevcutsa pürülan (bakterial) abse,",
          "b. Eğer enfeksiyon bulguları olmadan sadece lokal abse bulguları mevcutsa steril abse olarak değerlendirilmelidir.",
        ],
      },
      {
        heading: "Lenfadenit (Süpüratif Lenfadenit dahil):",
        list: [
          "Enaz bir lenf bezinin 1.5 cm ya da üzerinde büyümesi ve/veya,",
          "Bir lenf bezinin üzerinde drene olmuş sinüs varlığıdır.",
        ],
      },
      {
        text: "Genellikle BCG’ nin neden olduğu bir durumdur. Aşı uygulandıktan sonraki 22 hafta ile 6 ay içinde, aşının uygulandığı tarafta boyun ya da koltukatı lenf bezlerinde ortaya çıkar.",
      },
      {
        heading: "Ciddi Lokal Reaksiyon:",
        text: "Enjeksiyon alanında ve çevresinde ilk 48 saat içinde oluşan hiperemi (kızarıklık) ve/veya ödem ile birlikte aşağıdakilerden en az ikisinin varlığı ciddi lokal reaksiyon olarak bildirilmelidir.",
        list: [
          "Yakın eklemi içine alacak şekilde yayılmış olan şişlik, ödem",
          "Ağrı, şişlik, kızarıklığın üç gün veya daha uzun sürmesi,",
          "Hastaneye yatışı gerektirmesi",
        ],
      },
      {
        heading: "Sinir Sistemi İle İlgili İstenmeyen Etkiler",
      },
      {
        heading: "Akut Paralizi",
        red: true,
      },
      {
        text: "Aşıya Bağlı Paralitik Poliomyelit: OPV aşısı uygulanmasından sonraki 4-30 gün (temaslılarda 4-75 gün) içinde akut olarak flask paralizi (gevşek felç) gelişmesi, başlangıç tarihinden itibaren 60 gün sonrasında kalıcı nörolojik sekel ya da ölüm olmasıdır. Kesin tanı için paralizi yapan diğer nedenlerin ekarte edilmesi gereklidir.",
      },
      {
        text: "Guillain – Barre Sendromu (GBS): Akut, ateşsiz, hızlı ilerleyen, asendan, duyu kaybının eşlik ettiği simetrik flask paralizidir. Vakalara tanı BOS’ta hücre sayımı ile protein miktarı arasındaki uyumsuzluğun gösterilmesi ile konur.",
      },
      {
        heading: "VAKA ARAŞTIRMASI",
        red: true,
        text: "Acil durumların bildiriminden sonra yapılması gereken ilk harekettir ve zaman kaybedilmeden başlatılmalıdır. Araştırma, bildirimi yapan sağlık personeli tarafından başlatılabileceği gibi bölgedeki sağlık kuruluşlarından yapılan bildirimler üzerine İl ASİE İzlem Sistemi Sorumlusu tarafından başlatılır.",
      },
      {
        text: "ASİE neden araştırılmalıdır? Vaka araştırmasının amacı acil durumların nedeninin bulunması ve ortadan kaldırılmasıdır. ASİE’ nin nedeninin program hatası olduğu saptanırsa yapılacak şey bu hatanın düzeltilmesi ve toplumun hizmetlerin güvenilirliğinin sağlandığı konusunda bilgilendirilmesidir. Neden saptanamazsa ya da aşı yan etkisi olduğu belirlense de vakanın araştırılmış olması bile bağışıklama hizmetlerine olan güveni artıracaktır.",
      },
      {
        text: "Ayrıca rastlantısal durumlar saptanarak, aşının yanlışlıkla sorumlu tutulmasının önüne geçilmiş olacaktır.",
      },
      {
        heading: "ASİE vaka araştırmasının amaçları:",
        red: true,
        list: [
          "Bildirilen tanının doğrulanması ve sonucun/sonuçların tanımlanması,",
          "Kullanılan aşının özelliklerinin saptanması,",
          "Programın işleyişine yönelik inceleme: ASİE, aşıya bağlı ya da rastlantısal olsa bile program hataları durumu araştırmış olabilir.",
          "Bildirilen vakanın tek bir vaka mı, yoksa bir grup vaka mı (kümelenme) olduğunun saptanması ve kümelenme var ise uygulama yeri ve uygulanan aşının tespit edilmesi,",
          "Aşı uygulanmayan kişilerde benzer durumun saptanıp saptanmadığının belirlenmesidir.",
        ],
      },
      {
        text: "Ne ve ne zaman araştırılmalıdır? Tüm acil durumlar araştırılmalıdır. Araştırma en kısa sürede başlatılmalıdır. Sağlık personeli olayı saptadıktan itibaren 24 saat içinde bildirmelidir.",
      },
      {
        text: "Bu özellikle program hatalarının tespiti ve diğer kişiler de aynı hataya maruz kalmasının önlenmesi açısından önemlidir. Ayrıca zamanında müdahale topluma sağlıklarının ciddiye alındığı mesajını da verecektir.",
      },
    ],
  },
  {
    slug: "asi-soguk-zincir",
    title: "Aşı Soğuk Zincir",
    views: 1425,
    image: "/images/asi.jpg",
    detailImage: "/images/sogukzincir.jpg",
    showImage: true,
    excerpt:
      "SOĞUK ZİNCİR : Etkin bir aşılama için aşıların üretildikleri fabrikadan uygulanacak kişiye +2/+8 derece ısıda ve güneş ışınlarından korunarak ulaştırılmalıdır. Aşıların soğuk olarak taşınması ve saklanmasını sağlayan araç gereç ve kişilerin tümüne “soğuk zincir” denir.",
    body: [
      {
        prefix: "SOĞUK ZİNCİR :",
        text: "Etkin bir aşılama için aşıların üretildikleri fabrikadan uygulanacak kişiye +2/+8 derece ısıda ve güneş ışınlarından korunarak ulaştırılmalıdır. Aşıların soğuk olarak taşınması ve saklanmasını sağlayan araç gereç ve kişilerin tümüne “soğuk zincir” denir.",
      },
      {
        text: "Bu tanıma göre aşıların fabrika-merkezi depo -il deposu- sağlık kuruluşu sırasını izleyen taşınmasında dikkatimizi süreci etkileyebilecek tüm etmenlere yöneltebilmeliyiz. Aracın benzini, bölgenin coğrafik özellikleri, çalışanların bilgisi ve ilgisi, olabilecek aksaklıklar (örneğin aracın lastiği patlayabilir), gibi her türlü ayrıntı özenle değerlendirilmeli, önlem alınmalıdır. Bu konuda gereksinim planlaması ve stok kontrolü de önemlidir. Saha çalışmasından döndükten sonra kullanılmaz duruma gelecek aşıların miktarının çok olmaması ve aşı yitiminin az olabilmesi için ya da gereğinden az aşı planlayarak hedeflenen kitlenin bir bölümünün aşısız ,bırakmamak için planlama ve stok kontrolü önem taşır.",
      },
      {
        heading: "AŞILARIN TAŞINMASI VE SAKLANMALARI",
        red: true,
        text: "Polio, kızamık ve BCG aşıları ısıya, güneş ışığına ve ultravioleye özellikle duyarlıdırlar. Aşıları kullanılamaz kılan, ısının biriken etkisidir, yani bir defa çok yüksek (30-35 derece ve üzeri) sıcakla karşılaşmak kadar bir çok defa daha az sıcaklıklarla (10-30 derece arası) karşılamak da aşıları aynı derecede bozabilir.",
      },
      {
        text: "BCG ve kızamık liyofilize toz haldedir. Sulandırılmadan OPV gibi dondurulabilir. Bu aşılar donmakla bozulmazlar ve il depolarında dondurularak saklanabilirler. Polio aşıları eridikten sonra yeniden dondurulabilirler ve bu işlem birkaç defa tekrarlanabilir. Bununla birlikte, donma ölü aşıları ve toksoidleri bozar.",
      },
      {
        text: "OPV, kızamık, BCG, menenjit aşıları sıcağa çok duyarlı aşılardır. DBT, DT, Td (Erişkin Tip Difteri Tetanos), tetanos, hepatit B aşıları donmaya çok duyarlıdırlar. BCG ve kızamık aşıları gün ışığı ve UV ışınlarına duyarlı aşılardır. Kızamık aşısı sulandırılarak yapılan bir aşıdır. Bu nedenle aşının yanı sıra aşı sularını da uygun miktarlarda almak gerekmektedir.",
      },
      {
        heading: "BUZDOLABINA YERLEŞTİRME",
        red: true,
        text: "Aşıların konduğu buzdolabına kesinlikle başka birşey konmamalıdır (yiyecek, içecek vs).",
      },
      {
        text: "Buzluğa aşı yerleştirilmemeli, sadece buz aküleri konmalıdır.",
      },
      {
        text: "Aşılar buzluğa ve buzdolabının kapağına konmamalıdır.",
      },
      {
        text: "Polio ve kızamık aşıları buzluğun hemen altındaki üst rafa konmalıdır.",
      },
      {
        text: "BCG orta rafta yer almalıdır. Orta rafta ayrıca termometre bulunmalıdır.",
      },
      {
        text: "Alt rafta DBT, tetanos, DT, hepatit-B ve aşı sulandırıcıları konmalıdır.",
      },
      {
        text: "Soğuk havanın serbestçe dolaşabilmesi için aşı şişeleri arasında 2'şer cm, aşı kutuları arasında 5'er cm aralık bulunmalıdır.",
      },
      {
        text: "Süresi bitmiş aşılar ve yarı kullanılmış aşılar buzdolabına konmamalıdır.",
      },
      {
        text: "Sebzelikte içi su dolu şişeler bulundurulmalıdır. Bu şişeler elektirik kesildiğinde dolap içi ısının daha geç yükselmesini sağlayabilmektedir. Bu sular içilmenin engellenmesi için tuzlu olabilir.",
      },
      {
        text: "Elektrik kesildiğinde ilk yapılması gereken, buz akülerini raflara, aşıların çevresine dizerek dolap içi ısısının yükselmesini geciktirmektir. Ardından elektrik kesintisinin ne kadar sürebileceği araştırılmalı, kesinti uzun sürecekse ve olanak varsa aşılar aşı nakil kapları ile elektrik kesintisinin olmadığı bir yerde bulunan başka bir buzdolabına taşınmalıdır.",
      },
    ],
  },
  {
    slug: "asi-programi",
    title: "Aşı Programı",
    views: 1396,
    image: "/images/asiprogrami.jpg",
    excerpt:
      "AMAÇ: Aşı ile korunulabilir hastalıklardan kaynaklanan bebek ve çocuk hastalık, sakatlık ve ölümlerinin önlenmesi; bu hastalıkların morbidite ve mortalitesini azaltmak için hassas yaş gruplarına enfeksiyona yakalanmalarından önce ulaşıp bağışıklanmalarını sağlamak ve etkinliği korunmuş aşı ile yüksek aşılama oranlarına ulaşmaktır.",
    body: [
      {
        heading: "AMAÇ:",
        red: true,
        text: "Aşı ile korunulabilir hastalıklardan kaynaklanan bebek ve çocuk hastalık, sakatlık ve ölümlerinin önlenmesi; bu hastalıkların morbidite ve mortalitesini azaltmak için, hassas yaş gruplarına enfeksiyona yakalanmalarından önce ulaşıp bağışıklanmalarını sağlamak ve etkinliği korunmuş aşı ile yüksek aşılama oranlarına ulaşmaktır.",
      },
      {
        text: "Aşı ile korunulabilir yedi hastalığın morbidite ve mortalitesinin azaltılmasıdır.",
        list: [
          "Difteri",
          "Kızamık",
          "Boğmaca",
          "Tetanoz",
          "Tüberküloz",
          "Poliomyelit",
          "Hepatit B",
        ],
        plainList: true,
      },
      {
        heading: "HEDEFLER:",
        red: true,
        list: [
          "0 yaş grubunda her bir antijende %95 aşılama oranına ulaşmak ve devamlılığını sağlamak",
          "0 yaş grubu bebeklerin %90’ını 12.aya ulaştıklarında tam aşılı hale getirmek",
          "Okul çağı çocuklarının rapel aşılarını tamamlamak",
          "5 yaş altı (0-59 aylık) eksik aşılı ya da aşısız çocukları belirleyerek aşılarını tamamlamak",
          "Her il düzeyinde %90 aşılama oranlarına ulaşmak ve devamlılığını sağlamak",
          "Tespit edilen tüm gebelere en az iki doz tetanoz uygulamak.",
          "Kayıt bildirim sistemini güçlendirmek",
          "Toplum katılımını sağlamak.",
        ],
        plainList: true,
      },
      {
        heading: "GBP HASTALIK KONTROL HEDEFLERİ",
        red: true,
        list: [
          "Poliomyelitin Eradikasyonu",
          "Maternal ve Neonatal Tetanosun Eliminasyonu",
          "Kızamık Eliminasyon Programı",
          "Hepatit-B Kontrol Programı",
          "Difteri, Boğmaca, Tetanos morbidite ve mortalitesinin azaltılması.",
        ],
        plainList: true,
      },
      {
        heading: "İLÇE DÜZEYİNDE GBP UYGULAMA STRATEJİLERİ",
        red: true,
        list: [
          "Uygulamanın ulaşılmadık bölge kalmayacak şekilde planlanması,",
          "Her doğan bebeğin 1 yaşına kadar, aşı takvimine göre aşılanması,",
          "Aşısız ya da eksik aşılı 5 yaş altındaki çocukların saptandığı anda aşılanması,",
          "Tespit edilen tüm gebelere en az iki doz tetanoz uygulanması",
          "Maternal neonatal tetanoz yönünden yüksek riskli bölgelerde bulunan 15-49 yaş (doğurganlık çağındaki ) kadınların tetanos aşısı ile primer immünizasyonunun sağlanması",
        ],
        plainList: true,
      },
      {
        heading: "AŞI UYGULAMALARINDA GENEL PRENSİPLER",
        red: true,
        list: [
          "Sağlık kurumuna herhangi bir nedenle başvuran her bebek, çocuk, gebenin aşılama durumu kontrol edilmeli, aşılanması gerekenler ve eksik aşılılar tespit edilip aşılamak için her fırsat değerlendirilmelidir.",
          "Aradan uzun bir zaman geçmiş olsa da aşılamaya kalınan yerden devam edilmelidir.",
          "Bir daha gelemeyecek ise bir bebek, çocuk ya da gebe için 1 ampul/şişe aşı açılmalıdır.",
          "Açılmadan önce aşının son kullanma tarihi kontrol edilmelidir.",
          "Açılan aşı şişelerine açılış tarih ve saati yazılmalıdır.",
          "Açılan flakonun lot numarası 012 formuna kaydedilmelidir.",
          "Her aşı için ayrı ve steril bir enjektör kullanılmalıdır.",
          "Ayrı enjektörle, ayrı ekstremitelerden olmak üzere birden fazla aşı aynı anda uygulanabilir.",
          "Programda yer alan 2 canlı aşı arasında süre bırakmaya gerek yoktur.",
          "OPV aşısı yapıldıktan sonra, çocuğun beslenmesi sınırlandırılmamalıdır.",
          "Aileler uygulanan aşının gerekliliği, görülebilecek yan etkileri, bir sonraki uygulama için ne zaman gelecekleri konularında bilgilendirilmeli, mutlaka aşı kartı verilmelidir.",
        ],
        plainList: true,
      },
    ],
  },
  {
    slug: "asi-nedir",
    title: "Aşı Nedir ?",
    views: 1621,
    image: "/images/bebekasi.jpg",
    detailImage: "/images/asinedir.jpg",
    showImage: true,
    excerpt:
      "AŞI NEDİR ? : Aşı, kişileri hastalıklardan ve onun kötü sonuçlarından koruyabilmesi için sağlam ve risk altındaki kişilere uygulanmaktadır.",
    body: [
      {
        prefix: "AŞI NEDİR ? :",
        text: "Aşı, kişileri hastalıklardan ve onun kötü sonuçlarından koruyabilmesi için sağlam ve risk altındaki kişilere uygulanmaktadır.",
      },
      {
        text: "İnsan ve hayvanlarda hastalık yapma yeteneğinde olan virüs, bakteri v.s. mikropların hastalık yapma karakterlerinden arındırılarak yada bazı mikropların salgıladığı zehirlerin etkisinin ortadan kaldırarak sağlam kişilere verilmesi için geliştirilen biyolojik maddelere aşı denilmektedir.",
      },
      {
        text: "Aşı, kişileri hastalıklardan ve onun kötü sonuçlarından koruyabilmesi için sağlam ve risk altındaki kişilere uygulanmaktadır.",
      },
      {
        text: "Aşıların tedavi edici özellikleri yoktur.Herhangi bir hastalık oluştuktan sonra veya geçirdikten sonra aşı yapmanın hiç bir yararı yoktur. Herhangi bir aşının koruyucu etki gösterebilmesi için uygun yaşlarda ve uygun aralıklarda yapılması şarttır. Aşıların çocuklara hastalıklara yakalanma riskinin en yüksek olduğu dönemlerden önce yapılması gerekmektedir.",
      },
      {
        text: "Geniş araştırmalar sonucunda belirlenen \"Aşı Takvimi\"ne uyulması, en yüksek düzeyde koruma sağlanması açısından çok önemlidir. Bebekleri, ölümcül ve sakat bırakan hastalıklardan korumak ve onlara sağlıklı bir gelecek sunabilmek için en emin yol aşılamadır. Bebeklerin korunması, gebelikten itibaren anne adayına uygulanacak aşılar ile başlamaktadır.",
      },
      {
        heading: "AŞI TİPLERİ",
        red: true,
        text: "Canlı aşılar: Aşı içerisindeki mikroorganizma canlı olmaları birlikte vücut için tamamen zararsız hale getirilmiştir. Verem, kızamık, kızamıkçık ve kabakulak aşıları buna örnektir.",
      },
      {
        text: "Ölü aşılar: Aşıda kullanılan mikroorganizmalar öldürülmüştür. Ancak vücudu uyararak antikor dediğimiz koruyucu maddelerin yapılmasını sağlayacak özellikleri korunmuştur. Boğmaca aşısı buna örnektir.",
      },
      {
        text: "Subünit aşılar: Aşıda kullanılan mikroorganizmalar öldürüldükten sonra parçalanarak; bu parçalardan vücudu uyararak koruyucu antikorların yapılmasını sağlayacak olanları aşı yapımında kullanılmaktadır. Örnek olarak Hepatit B ve Grip aşıları verilebilir.",
      },
      {
        text: "Toksoid aşıları: Bu tür aşılarda mikroorganizmaların kendileri kullanılmaz. Bazılarının ürettiği zehirler çeşitli kimyasal maddelerle işlenir ve hastalık yapıcı etkileri yok edilerek aşı yapımında kullanılır. Tetanoz ve difteri aşıları bu tip aşılardır.",
      },
      {
        heading: "AŞILARIN KULLANIM SÜRELERİ",
        red: true,
        text: "BCG aşısı sulandırıldıktan sonra 8 saat içinde (yerli BCG aşısını 4 saat içinde), kızamık aşısı sulandırıldıktan sonra 4 saat içinde, Polio aşısı, aşı flakon ısı izlemcisi (flakonun üzerinde kare şeklinde yer alır) kullanılmaz durumunu gösteren renk değişikliğine ulaşana kadar.",
      },
      {
        text: "Hepatit-B aşısı doğumdan 72 saat sonrasına kadar uygulanmalı.",
      },
      {
        text: "DBT tetanos, Td, Hepatit-B aşıları intramuskuler yapılır.",
      },
      {
        text: "Hepatit B aşısı gluteal bölgeye yapıldığında etkinliği azalmaktadır. Bu nedenle bu bölgeye yapılmamalıdır.",
      },
      {
        text: "Kızamık aşısı subkutan, BCG aşısı intradermal yapılır.",
      },
      {
        text: "OPV iki damla ağıza damlatılarak uygulanır.",
      },
    ],
  },
];

export function getAsiArticle(slug: string) {
  return asiArticles.find((article) => article.slug === slug);
}
