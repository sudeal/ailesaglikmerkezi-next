export type TelefonHatti = {
  slug: string;
  title: string;
  views: number;
  date?: string;
  image: string;
  caption?: string;
  excerpt: string;
  body?: {
    heading?: string;
    red?: boolean;
    text?: string;
    list?: string[];
    link?: { href: string; label: string; prefix?: string };
  }[];
};

export const telefonHatlari: TelefonHatti[] = [
  {
    slug: "184-sabim",
    title: "184 SABİM",
    views: 1828,
    date: "27 Haziran 2017",
    image: "/images/184.png",
    caption: "ALO 184 sabim",
    excerpt:
      "Türkiye’nin dört bir yanından 184 SABİM hattını arayan herkes; hattın Sağlık Bakanlığı tarafında sıcak bir dost sesiyle karşılaşmakta ve ilettiği her türlü soru veya sorunun, Bakanlığımızca empatik bir yaklaşımla sahiplenilerek, en hızlı şekilde çözümlendiğine tanık olmaktadır.",
    body: [
      {
        text: "Türkiye’nin dört bir yanından 184 SABİM hattını arayan herkes; hattın Sağlık Bakanlığı tarafında sıcak bir dost sesiyle karşılaşmakta ve ilettiği her türlü soru veya sorunun, Bakanlığımızca empatik bir yaklaşımla sahiplenilerek, en hızlı şekilde çözümlendiğine tanık olmaktadır.",
      },
      {
        text: "Özetle, SABİM Türkiye’ye, haftanın 7 günü, 24 saat kesintisiz bir şekilde hizmet vermektedir. Vatandaşlarımıza düşen “184 ALO SABİM” hattımızdan aramak, ya 0 312 430 18 49 numaralı faksımızdan ulaşmak, ya da şahsen Bakanlık Merkez Binasında bulunan SABİM’e şahsen başvurmaktır.",
      },
      {
        text: "Bu yollarla bize ulaşan vatandaşlarımız:",
        list: [
          "— Sağlık sisteminin işleyişine yönelik her türlü konuda bilgi alabilirler.",
          "—Sağlık sistemine yönelik talep, eleştiri ve önerilerde bulunabilirler.",
          "—Sağlık hizmetlerinden yararlanırken, sistemin herhangi bir aşamasında yaşadıkları sorunlarını iletebilirler.",
        ],
      },
      {
        text: "SABİM; sağlık sisteminde, yaşanan sorunların yerinde ve eş zamanlı tespiti, sorunun çözümünde etkin olacak mekanizmaların ivedilikle harekete geçirilmesi suretiyle özdenetimi sağlamaktadır. Bu uygulama hızlı ve etkili çözüme ulaşmanın en ekonomik yoludur. Ekonomiktir; çünkü sorunların teşkilatın en üst noktasına kadar ulaşmasında ne zaman kaybı ne de enformasyon kaybı yaşanmamaktadır.",
      },
      {
        text: "Sistemin herhangi bir aşamasında yaşanan bir sorunun, 184 SABİM hattının aranması veya şahsen birimimize başvuru yapılması ile özdenetim mekanizması harekete geçmektedir. SABİM Operatörleri tarafından kayıt altına alınan başvuru, SABİM Çözümleyicilerince değerlendirilerek, ilgili illere sevk edilmektedir. İllerdeki Sabim Çözümleyicileri tarafından da nesnellik ilkesinden ödün verilmeden, mercek altına alınmakta, en hızlı ve en doğru şekilde çözümlendirilmektedir.",
      },
      {
        text: "Sürekli kendini yenileyen dinamik bir birim olan SABİM’de bu sürece hastane başhekimleri de dahil edilmiştir. Böylece başvuru sahibinden başlayarak, Bakanlığımızın en üst birimini de içine alan dairesel bir çizgide işleyen özdenetim mekanizması daha da güçlendirilmiştir.",
      },
      {
        text: "Kısaca SABİM;",
      },
      {
        text: "Sağlık hizmetlerinin niteliğinden dolayı etkili bir iletişim sürecinin zorunlu olduğunun bilinciyle",
        list: [
          "—Sağlık hizmetlerini planlayıp yönetenleri",
          "—Sağlık hizmetlerini sunanları",
          "—Sağlık hizmetlerinden yararlananları",
        ],
      },
      {
        text: "Uzlaşımsal bir platforma taşımak suretiyle sağlık sisteminde etkili iletişim sağlamayı amaçlamaktadır.",
      },
      {
        text: "Bu amaçları gerçekleştirerek halka ulaşıp, sistemin herhangi bir aşamasında meydana gelen aksaklıkları, anında tespit ederek, hızlı ve kesin bir çözüme ulaştırmak ve dolayısıyla “7’den 77’e sağlıklı bir Türkiye hedeflemektedir.",
      },
    ],
  },
  {
    slug: "182-mhrs",
    title: "182 MHRS",
    views: 1944,
    image: "/images/182.png",
    caption: "alo 182 mhrs",
    excerpt:
      "Bilindiği üzere, Sağlık Bakanlığı Türkiye’de daha etkin ve verimli bir şekilde sağlık hizmetlerine ulaşılması amacı ile Sağlıkta Dönüşüm Projesi’ni yürürlüğe koymuş ve bu program kapsamındaki çalışmaları büyük ölçüde gerçekleştirmiştir.",
    body: [
      {
        text: "Bilindiği üzere, Sağlık Bakanlığı Türkiye’de daha etkin ve verimli bir şekilde sağlık hizmetlerine ulaşılması amacı ile Sağlıkta Dönüşüm Projesi’ni yürürlüğe koymuş ve bu program kapsamındaki çalışmaları büyük ölçüde gerçekleştirmiştir.",
      },
      {
        text: "Bu programın en önemli çalışmalarından biride Merkezi Hastane Randevu Sistemidir (MHRS).",
      },
      {
        link: {
          href: "https://www.mhrs.gov.tr",
          label: "İNTERNETTEN RANDEVU ALMAK İÇİN TIKLAYINIZ",
        },
      },
      {
        heading: "MHRS nedir?",
        red: true,
        text: "MHRS; vatandaşların Sağlık Bakanlığına bağlı 2 ve 3. basamak Hastaneler ile Ağız ve Diş Sağlığı Merkezleri için 182 MHRS Çağrı Merkezini arayarak canlı operatörlerden kendilerine istedikleri hastane ve hekimden randevu alabilecekleri bir uygulamadır.",
      },
      {
        heading: "MHRS’nin amaçları nelerdir?",
        red: true,
        list: [
          "Hastanelerde daha iyi bir kaynak planlanması (iş gücü ve teçhizat kullanımının etkin ve verimli planlanması) yapılarak vatandaş/hasta memnuniyetinin artırılması, hastanelerde kuyrukların azaltılması.",
          "Hastanelerde kaynak kullanımının ve dağıtımının ölçülmesi (iş gücü, makine ve teçhizat kullanımının etkin ve verimli uygulanması) suretiyle; sağlık hizmetleri sunumunun, verim ve kalitesinin artırılması.",
          "MHRS verileriyle, sağlık politikaları geliştirilmesine yardımcı olunması.",
        ],
      },
      {
        heading: "Randevu nasıl alınır?",
        red: true,
        text: "Ev, iş, ankesör ve cep telefonlarından 182 numaralı Sağlık Bakanlığı MHRS Çağrı Merkezi aranır. 182 numaralı telefonu arayan vatandaş tarafından çağrıyı karşılayan asistana (canlı operatör) randevu talebinde bulunulan vatandaşın T.C. Kimlik Numarası verilir. Asistan vatandaş bilgilerini doğrular. Vatandaş randevu talebinde bulunduğu hastane, poliklinik ve hekim bilgilerinden en azından hangi polikliniğe gideceğini asistana bildirdikten sonra, asistan uygun tarih ve saat dilimlerini vatandaşa iletir. Vatandaş seçimini yaparak randevusunu alır.",
      },
      {
        heading: "Randevu nasıl iptal edilir?",
        red: true,
        text: "Ev, iş, ankesör ve cep telefonlarından 182 numaralı Sağlık Bakanlığı MHRS Çağrı Merkezi aranır. Bu arama randevu zamanından önce yapılmalıdır. 182 numaralı telefonu arayan vatandaş tarafından çağrıyı karşılayan asistana randevu talebinde bulunulan vatandaşın T.C. Kimlik Numarası verilir. Asistan vatandaş bilgilerini doğrular. Vatandaş iptalini istediği randevusunun, tarih ve zamanını asistana iletir. Asistan tarafından ilgili randevu iptal edilir.",
      },
      {
        text: "NOT: VATANDAŞ KENDİSİNE VERİLEN RANDEVU ZAMANINDAN 30 DAKİKA ÖNCE İLGİLİ HASTANENİN MHRS HASTA KABUL BÖLÜMÜNE BAŞVURUR.",
      },
    ],
  },
  {
    slug: "191-uyusturucu",
    title: "191 Uyuşturucu ile Mücadele Danışma ve Destek Hattı",
    views: 1872,
    date: "26 Haziran 2017",
    image: "/images/191.png",
    excerpt:
      "Uyuşturucu İle Mücadelede ‘Alo 191 Hattı’ Hizmet Vermeye Başladı.\n\nÜlkemizde son yıllarda artan uyuşturucu kullanımına karşı Bakanlığımızın koordinatörlüğünde, konuyla ilgili 8 Bakanlık (Aile ve Sosyal Politikalar, Adalet, Çalışma ve Sosyal Güvenlik, Gençlik ve Spor, İç işleri, Milli Eğitim, Gümrük ve Ticaret ve Sağlık Bakanlığı) ve TBMM Sağlık, Aile, Çalışma ve Sosyal İşler Komisyonu’nun ortak çalışmasıyla oldukça etkin bir çalışma yürütülerek “Uyuşturucu ile Mücadelede Acil Eylem Planı” hazırlanmıştır.",
    body: [
      {
        text: "Uyuşturucu İle Mücadelede ‘Alo 191 Hattı’ Hizmet Vermeye Başladı.",
      },
      {
        text: "Ülkemizde son yıllarda artan uyuşturucu kullanımına karşı Bakanlığımızın koordinatörlüğünde, konuyla ilgili 8 Bakanlık (Aile ve Sosyal Politikalar, Adalet, Çalışma ve Sosyal Güvenlik, Gençlik ve Spor, İç işleri, Milli Eğitim, Gümrük ve Ticaret ve Sağlık Bakanlığı) ve TBMM Sağlık, Aile, Çalışma ve Sosyal İşler Komisyonu’nun ortak çalışmasıyla oldukça etkin bir çalışma yürütülerek “Uyuşturucu ile Mücadele Acil Eylem Planı” hazırlanmıştır.",
      },
      {
        text: "Uyuşturucu ile mücadele çalışmaları temelde üç aşamada yürütülmektedir. Bunlar; önleme, tedavi ve tedavi sonrası rehabilitasyondur. Danışma hattı bu üç aşamayı da destekleyecek şekilde düzenlenmiştir. Bununla birlikte öncelikli olarak; hem maddeyle tanışmamış kişilerin (özellikle gençlerin) hem de madde kullanımı olan ancak bağımlı hale gelmemiş bireylerin korunması hedeflenmiştir.",
      },
      {
        text: "7 gün 24 saat prensibiyle hizmet veren “Alo 191 Uyuşturucu ile Mücadele Danışma ve Destek Hattı” na yönelik özel bir yazılım ve takip programı oluşturulmuştur. Arayan kişilerin kimlik bilgileri alınmadan kişi tarafından verilen bilgiler yazılıma işlenmekte ve talebine uygun hizmet sağlanmaktadır.",
      },
      {
        text: "Arayan kişinin ihtiyacına yönelik operatörlerin irtibata geçeceği birimler (Sosyal uyum merkezi, aile hekimleri, psikiyatri klinikleri, AMATEM, işkur birimleri, sosyal yardımlaşma vakıfları, belediyeler, narkotimler ve diğer kolluk birimleri vs.) sisteme tanımlanmış olup gerektiği durumlarda, konu hakkında görevlendirilmiş kişilerle irtibata geçilmektedir.",
      },
    ],
  },
  {
    slug: "171-sigara-birakma",
    title: "Alo 171 Sigara Bırakma",
    views: 2001,
    date: "26 Haziran 2017",
    image: "/images/171.png",
    excerpt:
      "Eğer sigarayı bırakmakta kararlıysanız hemen 171 alo sigarayı bırakma hattını arayın ve sigarayı bırakma konusunda tiyolar alın.\n\nAlo sigarayı bırakma hattı ücretsizdir.\n\nEkstra bir ücret talep edilmemektedir.",
    body: [
      {
        text: "Eğer sigarayı bırakmakta kararlıysanız hemen 171 alo sigarayı bırakma hattını arayın ve sigarayı bırakma konusunda tiyolar alın.",
      },
      {
        text: "Alo sigarayı bırakma hattı ücretsizdir.",
      },
      {
        text: "Ekstra bir ücret talep edilmemektedir.",
      },
      {
        text: "Türkiye'de, 15 yaş ve üzerindeki yetişkinlerin yüzde 31,2'si yani yaklaşık 16 milyon kişi halen sigara içiyor. Sigara kullanımı erkeklerde yaklaşık yüzde 50, kadınlarda yüzde 15 oranında bulunuyor.",
      },
      {
        text: "Telefon hattını arayan vatandaşların hepsinin sigaraya bırakmaya istekli olması ve tedavi yollarını sorması dikkat çekiyor.",
      },
      {
        text: "Uzman ekipler gelen başvurular üzerine sigara bağımlılarını uygun merkezlere yönlendiriyor.",
      },
      {
        text: "Danışma hattında çağrıların ortalama bekleme süresi 0.5 dakika olurken çağrı başına konuşma süresi 2.6 dakika olarak belirlendi.",
      },
      {
        text: "Ayrıca başvuran kişilerin iletişim bilgileri kişiye en yakın sigara bırakma polikliniklerine veriliyor.",
      },
      {
        text: "Hatta 24 saat hizmet veren 15 kişiden oluşan hemşire ve sağlık personeli görev yapmaktadır.",
      },
      {
        link: {
          prefix: "WEB SİTESİ :",
          href: "https://alo171.saglik.gov.tr/",
          label: "https://alo171.saglik.gov.tr/",
        },
      },
    ],
  },
  {
    slug: "122-afad",
    title: "122 AFAD",
    views: 1855,
    date: "26 Haziran 2017",
    image: "/images/122.png",
    caption: "alo 122 afad",
    excerpt:
      "Alo 122 AFAD Afete maruz kalan veya acil yardıma ihtiyaç duyan vatandaşlara bu numara 24 saat süreyle HİZMET VERECEK.\n\nOlası bir afet durumunda (deprem, sel baskını, heyelan, çığ, kaya düşmesi, büyük yangın vb.) 122 “ALO AFAD” acil çağrı numarasının aranması gerekir.",
    body: [
      {
        text: "Alo 122 AFAD Afete maruz kalan veya acil yardıma ihtiyaç duyan vatandaşlara bu numara 24 saat süreyle HİZMET VERECEK.",
      },
      {
        text: "Olası bir afet durumunda (deprem, sel baskını, heyelan, çığ, kaya düşmesi, büyük yangın vb.) 122 “ALO AFAD” acil çağrı numarasının aranması gerekir.",
      },
      {
        text: "Alo 122 AFAD arandığında Vatandaşlara daha hızlı cevap verebilmek ve hizmeti en hızlı bir şekilde sunabilmek için arayanların olayın türünü ve yerini net olarak bildirmesi gerekmektedir.",
      },
      {
        text: "Gerçek ihtiyaç sahiplerine zamanında ulaşılabilmesi için vatandaşların konuya duyarlı olması ve gereksiz yere aramalar yapılmaması her zamanki ricamızdır.",
      },
      {
        link: {
          prefix: "WEB SİTESİ :",
          href: "https://www.afad.gov.tr",
          label: "https://www.afad.gov.tr",
        },
      },
    ],
  },
  {
    slug: "114-zehir-danisma",
    title: "114 ZEHİR DANIŞMA MERKEZİ",
    views: 2028,
    date: "26 Haziran 2017",
    image: "/images/114.png",
    caption: "alo 114 zehir danışma",
    excerpt:
      "Merkez, ülkemizde tedavi maksatlı kullanılan ilaçlar, böcek ilaçları, tarım ilaçları, mantarlar ve çeşitli bitkilerle olan zehirlenmelerden,",
    body: [
      {
        text: "Merkez, ülkemizde tedavi maksatlı kullanılan ilaçlar, böcek ilaçları, tarım ilaçları, mantarlar ve çeşitli bitkilerle olan zehirlenmelerden, zehirli hayvan ısırmalarına ve sokmalarına kadar geniş bir yelpazedeki zehirlenmelerde hem halka hem de sağlık çalışanlarına yönelik olarak 24 saat hizmet vermektedir.",
      },
      {
        text: "Ayrıca, zehirlenmelerde gerekli antidot/antitoksin ihtiyacını da karşılayan Merkeze, ihtiyaç duyulduğunda danışma hizmeti almak amacıyla 114 numaralı telefondan ulaşılabilir.",
      },
      {
        heading: "SIKÇA SORULAN SORULAR",
        red: true,
        text: "Zehirlendiği düşünülen kişiye ilk olarak ne yapılmalıdır?",
        list: [
          "• Biliyorsanız ilk yardım aşamalarını uygulayınız ve derhal 114'ü arayanız!",
          "• Ulusal Zehir Danışma Merkezindeki uzmanlarımız yapılması veya yapılmaması gerekenleri size anlatacaklardır.",
          "• Aramak için gecikmeyin. Çoğu zaman problemler telefonla çözülebilmektedir. Belirtilerin ortaya çıkmasını beklemeyin.",
        ],
      },
      {
        link: {
          prefix: "WEB :",
          href: "http://www.uzem.rshm.gov.tr",
          label: "http://www.uzem.rshm.gov.tr",
        },
      },
      {
        heading: "Ulusal Zehir Danışma Merkezini (114) Ne Zaman Aramalıyız?",
        red: true,
        text: "Günümüzde hem ülkemizde hem de global olarak tüm dünyada olan hızlı sanayileşme ve kentleşme; halkın kimyasal maddeye maruz kalma riskini arttırmaktadır. Kimyasal zehirlenmelerde rol oynayan etkenlerin başında ilaçlar, sanayide ve ev yaşamında kullanılan kimyasal ürünler ve kontrolsüz kullanılan bitkisel ürünler sayılabilir. Bunların yanı sıra özellikle kırsalda karşılaşılan hayvan ısırık ve sokmaları da zehirlenmelere sebep olabilmektedir.",
      },
      {
        text: "Her geçen gün ilaçlara olan erişimin artması ve akılcı ilaç kullanımının dikkate alınmaması; bireylerin (çoğu zaman evlerinde) çok sayıda ve çeşitlilikte ilaca erişebilmelerine imkan vermiştir. Bunun yanı sıra günümüzde halkın alternatif tıbba ilgisinin artması ile tedavi edici etkisi olduğu iddia edilen bitkisel ürünlerin ulaşılabilirliği arttırmıştır ve bu da bitkisel ürünler ile olan zehirlenmeleri daha sık hale getirmiştir.",
      },
      {
        text: "Acil servislerde çok sık karşılaştığımız olguların başında zehirlenmeler gelmektedir. Acil hekimleri olarak sık karşılaştığımız zehirlenme olgularına tıbbi yaklaşımı çoğu zaman bilmekteyiz. Ancak içeriğini bilmediğimiz bir ilaca, ne olduğunu bilmediğimiz bir bitkisel ürüne veya zehrinin ne tür etkiler yapabileceğini bilmediğimiz bir böcek ısırığına bağlı bir zehirlenme vakası ile karşılaştığımızda bu olguların yönetimi ile ilgili desteğe ihtiyaç duymaktayız.",
      },
      {
        text: "İşte tam da bu sebeple kurulmuş olan Ulusal Zehir Danışma Merkezi (UZEM) bizlere bu anlamda hizmet vermektedir. UZEM; 1986 yılında Sağlık Bakanlığı Refik Saydam Hıfzıssıhha Merkezi Başkanlığı bünyesinde kurulmuştur ve 1988’den beri kesintisiz olarak hizmet vermektedir. Daha sonra 2012 yılında Sağlık Bakanlığı Acil Sağlık Hizmetleri Genel Müdürlüğü’ne bağlanmıştır. Şu anda Sağlık Bakanlığı Afet ve Acil Durum Yönetimi Daire Başkanlığına bağlı olarak hizmet vermektedir. Günümüzde konusunda yetkili “Ulusal” tek merkezdir. Bünyesinde 15 hekim, 10 yardımcı sağlık personeli görev yapmaktadır. UZEM’in 114 no’lu çağrı merkezi Türkiye’nin dört bir yanından gelen telefonlara 7/24 cevap vererek medikal destek sağlamaktadır.",
      },
      {
        text: "Acil serviste çalışan doktorlar olarak bizler de zehirlenme olguları ile karşılaştığımızda çoğu zaman UZEM’i aramaktayız ve maruz kalınan maddenin etkileri, toksik dozu, varsa antidotunun ne olduğu ve tedavisi ile ilgili bilgiye erişmeyi beklemekteyiz. Çağrı merkezini aradığımızda, bizden hasta hakkında bazı demografik bilgileri ve maruz kaldığı maddeye ilişkin bilgileri ister.",
      },
      {
        text: "UZEM-114’ü aradığımızda çoğu zaman hatların yoğunluğundan dolayı telefonun bağlanmasını uzun süre beklemek durumda kalmaktayız. Yoğun acil servislerde bu bekleme süresi bazen tolere edilemeyebilir ve hastanın acil tedaviye erişim sürecini geciktirebilir. Bu yüzden tedavisi bilinen zehirlenmelerde tedaviyi geciktirmek pahasına UZEM-114 aranmamalıdır. Bu tür bir durumda aranacaksa, telefondaki kişinin tedaviyi aktif verecek kişi olmamasına dikkat edilmelidir. Bu iş için fazladan sağlık personeli olmayan acil servislerde bu telefon beklemeleri sırasında sıklıkla aklımıza gelen bir soru olur: ‘Tedavisini bildiğimiz zehirlenme vakalarında da UZEM’i aramalı mıyız? Biz hangi vakalarda UZEM’i aramalıyız?’.",
      },
      {
        text: "Hekim herhangi bir zehirlenme vakasında UZEM-114’ü aramak zorunda değildir. UZEM’i aramış olsun veya olmasın, verdiği tedavinin doğruluğundan ve güncelliğinden kendisi sorumludur. Bu sebeple hekim, tedavisini bildiği zehirlenme vakalarında UZEM’i aramayabilir hatta tedavisini bilmediği vakalarda da aramayıp başka kaynaklardan tedaviyi öğrenebilir. Ancak UZEM’in aranmasının iki açıdan önemi bulunmaktadır.",
      },
      {
        text: "Bunlardan ilki; UZEM tarafından toplanan ve depolanan bilgilerin hem ulusal hem de uluslararası ortamda kullanılmasıdır. UZEM bu toplanan bilgilerin istatistik analizleri sonucunda yapılan halk sağlığı çalışmaları ile ulusal düzeyde üst merkezleri bilgilendirilir. Bu sayede önemli zehirlenmelere karşı önlemlerin alınması mümkün olur ve zehirlenmelerle karşılaşılma ihtimali için hastanelere antidot stoku yapılabilmektedir. Bunun dışında UZEM bu istatistiki bilgileri uluslararası Zehir Danışma Merkezleri ile yapılacak ortak çalışmalarda ve projelerde kullanmaktadır.",
      },
      {
        text: "UZEM’i aramanın diğer yararı ise tamamen medikolegal açıdandır. Her ne kadar hekimin kanunen UZEM’i arama zorunluluğu yok ise de yapılmış olan dava örneklerinde görülmüştür ki, acil serviste karşılaşılan zehirlenme vakalarında hekimin UZEM’i aramış olması, davalarda karar vericilerin önemsediği bir konudur.",
      },
      {
        text: "Acil hekimi UZEM’i zehirlenmeler ile ilgili bilgi almak haricinde; antidot temini için de kullanabilir. Çünkü UZEM’in; antidot/antiserumların temin edilmesi, etkin kullanımı ve zamanında ulaştırılmasının sağlanması için gerekli planlamayı yapmak, antidot uygulama protokollerini düzenlemek, antidot bulundurulacak merkezleri belirlemek gibi görevleri de vardır.",
      },
      {
        text: "Sonuç olarak; UZEM zehirlenme vakalarında, 114 telefon hattı ile verdiği medikal destek ve hastanelere antidot temin desteği ile hastane içerisindeki vaka yönetimi ve tedavisinde önemli rol oynamaktadır. Elindeki verilerle yaptığı ulusal ve uluslararası çalışmalarla ise hastane öncesinde zehirlenmelerin engellenmesi aşamasında etkin rol oynamaktadır. Her ne kadar zehirlenme olgularında UZEM’i aramak zorunlu değilse de ve acil servislerin yoğunluğunda telefonda beklemek ciddi zaman kaybına sebep olsa da; UZEM’i aramak, hem hekim, hem hasta, hem de toplum sağlığı açısından faydalı olacaktır. Tedavisi bilinen zehirlenmelerde; eğer telefon ile görüşme yapmak hastanın tedavisini geciktirecek ise, hastanın tedavisi önce verilip, daha sonra ilk fırsatta, UZEM aranmalıdır.",
      },
    ],
  },
  {
    slug: "113-beyaz-kod",
    title: "113 Beyaz Kod",
    views: 2000,
    date: "26 Haziran 2017",
    image: "/images/113.png",
    caption: "alo 113 beyaz kod",
    excerpt:
      "Sağlık çalışanına yönelik herhangi bir şiddet olayı gerçekleştiğinde kurum yöneticileri tarafından derhal “113” numaralı telefonla Beyaz Kod Birimine bildirim yapılması gerekmektedir.",
    body: [
      {
        text: "Sağlık çalışanına yönelik herhangi bir şiddet olayı gerçekleştiğinde kurum yöneticileri tarafından derhal “113” numaralı telefonla Beyaz Kod Birimine bildirim yapılması gerekmektedir.",
      },
      {
        text: "Eş zamanlı olarak olayın; ilgili kurumun hukuk birimine ve adli mercilere intikal ettirilmesi, müteakiben de web sitemizde “Beyaz Kod Bildirim Formu”nun eksiksiz bir şekilde doldurulması büyük önem arz etmektedir. Şiddete uğrayan sağlık çalışanı tarafından “113” numaralı telefona doğrudan da bildirim yapılabilecektir.",
      },
      {
        text: "Bildirim üzerine Beyaz Kod Birimi, olayın adli makamlara intikal ettirilip ettirilmediğini araştıracak ve şayet ettirilmemiş ise olayı derhal adli makamlara bildirecektir. Beyaz Kod Birimi, ayrıca şiddet olayının gerçekleştiği sağlık kurumunun hukuk birimlerine de olayın bildirildiğini teyit edecektir.",
      },
      {
        text: "Şiddet olayları için Bakanlık hukuk birimleri, işlenen suçtan mağdur olan Bakanlık personeline veya vefatı halinde kanuni mirasçılarına bir avukatın hukuki yardımını isteyip istemediğini soracak ve talep etmeleri halinde Bakanlık avukatlarınca ilgili personele 28.04.2012 tarihli ve 28277 sayılı Resmi Gazete’de yayımlanan “Sağlık Bakanlığı Personeline Karşı İşlenen Suçlar Nedeniyle Yapılacak Hukuki Yardımın Usul ve Esasları Hakkında Yönetmelik” çerçevesinde hukuki yardım yapılacaktır.",
      },
      {
        text: "Kamu görevlilerine karşı işlenen şiddet olaylarının takibi şikâyete bağlı olmadığından, ilgili personelin şikâyetinin olup olmadığına bakılmaksızın yöneticiler olayı mutlaka adli mercilere intikal ettirmelidirler. Özel sektör yöneticileri tarafından da şiddet olaylarının bildirimi noktasında aynı hassasiyet gösterilmelidir.",
      },
      {
        text: "11 Kasım 2011 tarihinde yürürlüğe giren 663 sayılı Sağlık Bakanlığı ve Bağlı Kuruluşlarının Teşkilat ve Görevleri Hakkında Kanun Hükmünde Kararname’nin “Hukukî Yardım” başlıklı 54 üncü maddesi “Bakanlık ve bağlı kuruluşlarında; sağlık hizmeti sunumu sırasında veya bu görevlerden dolayı personele karşı işlenen suçlar sebebiyle ceza hukuku kapsamında yürütülmekte olan işlemler ve davalarda personelin talebi üzerine Bakanlık ve bağlı kuruluşlarınca hukukî yardım yapılır. (Ek cümle: 4/7/2012-6354/ 18 md. )",
      },
      {
        text: "Bakanlık ve bağlı kuruluşları merkez ve taşra teşkilatı ile döner sermaye teşkilatı kadrolarında bulunan hukuk birimi amirleri, hukuk müşavirleri ve avukatlar, ayrıca vekâletname ibraz etmeksizin ilgili personeli vekil sıfatı ile temsil eder. Bu yardımın usûl ve esasları Bakanlıkça belirlenir.” hükmü ile sağlık çalışanlarına hukuki yardım verilmesi konusunda kanuni bir düzenleme yapılmıştır.",
      },
      {
        text: "Bu maddeye dayanılarak Bakanlık ve bağlı kuruluşlarınca yapılacak hukuki yardıma ilişkin usul ve esasları belirlemek amacıyla \"Sağlık Bakanlığı Personeline Karşı İşlenen Suçlar Nedeniyle Yapılacak Hukuki Yardım Usul ve Esasları Hakkında Yönetmelik\" 28/04/2012 tarihinde Resmi Gazete’de yayınlamıştır. Bakanlığımızın tüm sağlık çalışanları şiddete maruz kaldıkları durumlarda, bu düzenlemeler doğrultusunda, Bakanlığımız avukatları tarafından gerekli hukuki yardımı alabilmektedir.",
      },
      {
        text: "Bu kapsamda şiddete maruz kalan sağlık çalışanı aşağıdaki yollardan biri ile süreci başlatabilir.",
        list: [
          "a. “http://www.beyazkod2.saglik.gov.tr” adresinden kendisi başvurarak,",
          "b. Telefonla 113 numaralı çağrı merkezini arayarak,",
          "c. ÇGB’ye müracaat ederek.",
        ],
      },
    ],
  },
  {
    slug: "112-acil",
    title: "112 Acil",
    views: 2010,
    date: "26 Haziran 2017",
    image: "/images/112.png",
    caption: "alo 112 acil",
    excerpt:
      "Herhangi birisi ;\nyere yığıldıysa,\nbayıldıysa,\ngöğüs ağrısı varsa,\nzorlukla nefes alıyorsa,\nbüyük bir kanaması varsa, 112'yi ARAYIN",
    body: [
      {
        list: [
          "Herhangi birisi ;",
          "yere yığıldıysa,",
          "bayıldıysa,",
          "göğüs ağrısı varsa,",
          "zorlukla nefes alıyorsa,",
          "büyük bir kanaması varsa, 112'yi ARAYIN",
        ],
      },
      {
        text: "Tehlike söz konusu olmadıkça, yaralı bir kimseyi kımıldatmayın, 112'yi ARAYIN",
      },
      {
        text: "Emin değilseniz, tahmin yürütmeyin, 112'yi ARAYIN",
      },
      {
        heading: "112 NASIL ARANMALI :",
        red: true,
        list: [
          "Sabit, ankesör veya cep telefonunuzdan 1 - 1 - 2 numaralarını tuşlayın",
        ],
      },
      {
        text: "Sakin olun, net ifadelerle konuşarak;",
        list: [
          "Tam olarak yerinizi tarif edin (tarif sırasında etrafınızda bulunan market, okul, cami, karakol v.b. gibi ayrıntıları vermeye çalışın),",
          "Hastalığın veya yaralanmanın tarifini yapın,",
          "Hasta veya yaralı sayısını bildirin,",
          "Adınızı, soyadınızı ve aramayı gerçekleştirdiğiniz telefon numarasını bildirin,",
        ],
      },
      {
        text: "Çağrınızı karşılayan 112 görevlisi size aksini söylemedikçe telefonu kapatmayın",
      },
      {
        text: "112 görevlisinin sizi tekrar arayabileceğini akılda tutun ve telefonunuzu gereksiz yere meşgul etmeyin",
      },
      {
        heading: "112 HAKKINDA SIK SORULAN SORULAR",
        red: true,
        text: "SORU: 112 hangi kuruma bağlı çalışıyor?",
      },
      {
        text: "YANIT: 112 Acil Ambulans Servisi İl Sağlık Müdürlüğü bünyesinde kurulmuş bir Acil Yardım Servisidir. tüm 112 ekipleri Çorum İl merkezinde bulunan 112 Komuta Kontrol Merkezi'nin talimatı ile göreve çıkar.",
      },
      {
        text: "SORU: 112 Acil Ambulans Servisi hangi saatler arasında çalışıyor?",
      },
      {
        text: "YANIT: 112 Acil Ambulans Servisi günün 24 saati kesintisiz olarak hizmet vermektedir. Günün hangi saati olursa olsun 112 nolu telefonu aradığınızda karşınıza mutlak surette deneyimli bir görevli çıkar. Gerekli görülen durumlarda yine saat gözetilmeksizin adresinize, 1 Doktor, 1 Sağlık Personeli ve 1 Şoförden oluşan ekip ile tam teşekküllü bir ambulans yollanır.",
      },
      {
        text: "SORU: Evde yatarak tedavi gören hastama serum taktırmak için 112 Acil Ambulans Servisinden faydalanabilir miyim?",
      },
      {
        text: "YANIT: 112 nolu telefonu aradığınızda, Komuta Merkezdeki görevlimiz serum taktırma konusunda nereden ve kimden yardım alabileceğiniz konusunda sizi mutlaka aydınlatacaktır, ancak bu hizmeti vermek için bizzat bir 112 ekibinin ve ambulansının görevlendirilmesi olağan bir uygulama değildir. Bunun için bölgenizde bulunan sağlık ocakları veya özel sağlık birimlerinden faydalanmanız daha uygundur.",
      },
      {
        text: "SORU: Evde, doğumu yaklaşan bir yakınımı hastaneye nakletmek için 112 Acil Ambulans Servisinden faydalanabilir miyim?",
      },
      {
        text: "YANIT: Normal doğum vakalarının hastanelere nakli için 112 ekibi veya ambulansı görevlendirmek olağan uygulamalarımızdan değildir. Ancak doğum öncesinde beliren bir tehlike, hastanın özel araçla naklini güçleştiriyorsa veya hastanızı muayene eden bir hekimin bu yönde talebi varsa 112 Acil Ambulans Servisini arayabilirsiniz.",
      },
      {
        text: "SORU: Acil bir durumda 112 Acil Ambulans Servisini aradığımda görevliyle nasıl konuşmalı ve ne tür bilgiler vermeliyim?",
      },
      {
        text: "YANIT: Öncelikle ;",
        list: [
          "Sakin olun, net ifadelerle konuşarak;",
          "Tam olarak yerinizi tarif edin (tarif sırasında etrafınızda bulunan market, okul, cami, karakol v.b. gibi ayrıntıları vermeye çalışın)",
          "Hastalığın veya yaralanmanın tarifini yapın",
          "Hasta veya yaralı sayısını bildirin",
          "Adınızı, soyadınızı ve aramayı gerçekleştirdiğiniz telefon numarasını bildirin",
        ],
      },
      {
        text: "Çağrınızı karşılayan 112 görevlisi size aksini söylemedikçe telefonu kapatmayın",
      },
      {
        text: "112 görevlisinin sizi tekrar arayabileceğini akılda tutun ve telefonunuzu gereksiz yere meşgul etmeyin",
      },
      {
        text: "SORU: Evde yatan hastamın Devlet Hastanesine nakli için 112 Acil Ambulans Servisinden faydalanabilir miyim?",
      },
      {
        text: "YANIT: Bu tür talepler için 112 ekibi ve ambulansı görevlendirmek olağan uygulamalarımızdan değildir. Ancak görüşmeyi yapan 112 Komuta Merkez Danışman Hekimi, hastanın durumunun gerçekten doktor ve hemşire müdahalesini gerektirdiği kanaatine varırsa, en yakın 112 Acil Ambulans ekibi adresinize yollanır.",
      },
      {
        text: "SORU: Cenaze nakli için 112 Acil Ambulans Servisinden faydalanabilir miyim?",
      },
      {
        text: "YANIT: Gerek evden hastane morguna, gerekse ev veya hastaneden mezarlığa cenaze nakli için 112 ekibi veya ambulansı görevlendirmek olağan uygulamalarımızdan değildir. Bu konuda bilgi ve yardım almak için vefat olayının gerçekleştiği muhitin bağlı bulunduğu belediye yetkilileriyle görüşebilirsiniz.",
      },
      {
        text: "SORU: Hastaneden taburcu edilen hastamın eve naklinde 112 Acil Ambulans Servisinden faydalanabilir miyim?",
      },
      {
        text: "YANIT: 112 Acil Ambulans Servisi sadece acil olaylarda hizmet verdiğinden bu tür vakalara 112 ekibi ve ambulansı görevlendirme yoluna gidilmemektedir. Bunun için Özel Ambulans Servislerini aramanız daha uygun olacaktır.",
      },
      {
        text: "SORU: 112 Acil Ambulans Servisi ücretli mi?",
      },
      {
        text: "YANIT: 112 Acil Ambulans Servisi yurt genelinde ücretsiz olarak verilen bir sağlık hizmetidir. Ancak aynı zamanda oldukça yüksek maliyetli bir hizmettir. Bu yüzden hizmetin sürekliliği ve kalitesinin idamesinde makbuz karşılığı yapılan bağışlar hayati öneme sahiptir.",
      },
      {
        text: "SORU: 112 Ambulansı adresime ne kadar zamanda ulaşır?",
      },
      {
        text: "YANIT: Ulaşma süresi, size en yakın istasyondaki ambulansın görevde olup olmamasına, muhitinizdeki trafik yoğunluğuna, hava-yol şartlarına ve belki de en önemlisi yaptığınız adres tarifinin doğruluğuna göre değişir.",
      },
    ],
  },
];

export function getTelefonHatti(slug: string) {
  return telefonHatlari.find((item) => item.slug === slug);
}
