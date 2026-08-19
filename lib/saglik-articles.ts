export type SaglikArticle = {
  slug: string;
  title: string;
  views: number;
  image: string;
  detailImage?: string;
  excerpt: string;
  body: {
    heading?: string;
    red?: boolean;
    prefix?: string;
    text?: string;
    list?: string[];
    plainList?: boolean;
  }[];
};

export const saglikArticles: SaglikArticle[] = [
  {
    slug: "kanser-nedir",
    title: "Kanser Nedir",
    views: 1567,
    image: "/images/kanser.jpg",
    excerpt:
      "Kelime anlamı olarak kanser, bir organ veya dokudaki hücrelerin düzensiz olarak bölünüp çoğalmasıyla beliren kötü urlara denir.",
    body: [
      {
        text: "Kelime anlamı olarak kanser, bir organ veya dokudaki hücrelerin düzensiz olarak bölünüp çoğalmasıyla beliren kötü urlara denir.",
      },
      {
        text: "Kelime anlamı olarak kanser, bir organ veya dokudaki hücrelerin düzensiz olarak bölünüp çoğalmasıyla beliren kötü urlara denir. Genel anlamda ise kanser vücudumuzun çeşitli bölgelerindeki hücrelerin kontrolsüz çoğalması ile oluşan 100'den fazla hastalık grubudur. Çok çeşitli kanser tipleri olmasına rağmen, hepsi anormal hücrelerin kontrol dışı çoğalması ile başlar. Tedavi edilmez ise ciddi rahatsızlıklara, hatta ölüme dahi neden olabilir.",
      },
      {
        text: "Kanser (cancer) terimi, tıbbın babası olarak bilinen Yunan fizikçi Hippocrates (MÖ 460-370) tarafından oluşturulmuştur. Hippocrates carcinos ve carcinoma terimlerini ülser oluşturan ve ülser oluşturmayan tümörler için kullanmıştır.",
      },
      {
        heading: "Normal Bir Hücre Nasıl Kansere Dönüşür?",
        red: true,
        text: "Bütün kanser tipleri vücudun temel yaşam ünitesi olan hücrelerimizden gelişirler. Kanseri anlamak için normal hücrelerin nasıl kansere dönüştüğünü bilmek faydalı olacaktır.",
      },
      {
        text: "Vücudumuzdaki sağlıklı hücreler bölünebilme yeteneğine sahiptirler. Ancak, kas ve sinir hücrelerinde bu özellik bulunmaz. Ölen hücrelerin yenilenmesi ve yaralanan dokuların onarılması amacıyla bu yeteneklerini kullanırlar. Yaşamın ilk yıllarında hücreler daha hızlı bölünürken, erişkin yaşlarda bu hız yavaşlar. Fakat hücrelerin bu yetenekleri sınırlıdır, sonsuz bölünemezler. Her hücrenin hayatı boyunca belli bir bölünebilme sayısı vardır. Sağlıklı bir ne kadar bölüneceğini bilir ve gerektiğinde ölmesini de bilir. Buna apoptosis yani hücrenin programlı ölümü denir. Normalde vücudun sağlıklı ve düzgün çalışması için hücrelerin büyümesi, bölünmesi ve daha çok hücre üretmesine gereksinim vardır. Bazen buna rağmen süreç doğru yoldan sapar, yeni hücrelere gerek olmadan hücreler bölünmeye devam eder. Bilincini kaybetmiş kanser hücreleri, kontrolsüz bölünmeye başlar ve çoğalırlar. Fazla hücrelerin kütleleri bir büyüklük veya tümör oluştururlar.",
      },
      {
        text: "Hücrelerin merkezinde çekirdek içinde hücrenin ve organizmanın genetik bilgisinin saklandığı elektron mikroskopu ile de görüntülenebilen DNA olarak adlandırılan mikroskopik iplikçikler mevcuttur. DNA hücrenin normal fonksiyonlarını görmesi için gereklidir. Kanserli hücreler bu DNA iplikçiğindeki hasardan dolayı oluşur. Hücrenin normal yaşam siklusunda DNA hasarı olsa da hücre ya bunu onarır ya da ölür. Kanserli hücrelerde hasarlanmış DNA onarılamaz ve kontrolsüz çoğalma başlar. DNA çevresel etkenler (kimyasallar, virüsler, tütün ürünleri veya aşırı güneş ışını vs gibi) nedeniyle hasar görebilir.",
      },
      {
        text: "Kanser hücreleri birikerek tümörleri oluştururlar. Tümörler iyi huylu veya kötü huylu olabilirler. İyi huylu tümörler kanser değildir. Bunlar sıklıkla alınırlar ve çoğu zaman tekrarlamazlar. İyi huylu tümörlerdeki hücreler vücudun diğer taraflarına yayılmazlar. En önemlisi iyi huylu tümörler nadiren hayatı tehdit ederler. Kötü huylu tümörler kanserdir. Kötü huylu tümörlerdeki hücreler anormaldirler ve kontrolsüz ve düzensiz bölünürler. Bu tümörler normal dokuları sıkıştırabilirler, içine sızabilirler ya da tahrip edebilirler. Eğer kanser hücreleri oluştukları tümörden ayrılırsa, kan ya da lenf dolaşımı aracılığı ile vücudun diğer bölgelerine gidebilirler. Gittikleri yerlerde tümör kolonileri oluşturur ve büyümeye devam ederler. Kanserin bu şekilde vücudun diğer bölgelerine yayılması olayına metastaz adı verilir.",
      },
      {
        heading: "Kanser Belirtileri Nelerdir",
        red: true,
        text: "Kanserin belirtilerini bilmek hastalığın erken teşhisi açısından önemlidir, ancak bu belirtilerin birine veya daha fazlasına sahip olmak kişinin kanser olduğu anlamına da gelmez.",
      },
      {
        text: "Açıklanamayan kilo kaybı: Birçok kanserin; özellikle mide, pankreas, yemek borusu (ösefagus) kanseri ve akciğer kanseri gibi; ilk belirtisi açıklanamayan kilo kaybıdır.",
      },
      {
        heading: "Biyolojik Risk Faktörleri:",
        red: true,
        text: "Biyolojik Risk Faktörleri; yaş, cinsiyet ve ırk gibi fiziksel özelliklerdir. Fiziksel ve biyolojik özelliklerin, kanser için risk faktörü olup olmayacağı, kanserin tipine bağlıdır. Belli tip kanserler için risk oluşturabilecek biyolojik ve fiziksel özellikler şunlar olabilir.",
      },
      {
        text: "Cinsiyet: Bazı kanser türleri cinsiyetle ilişkilidir. Örneğin prostat bezi sadece erkeklerde olduğu için, prostat kanseri erkeklerde görülür. Meme kanseri hem kadın hem de erkeklerde görülebilir, ancak kadınların meme kanserine yakalanma riski daha yüksektir.",
      },
      {
        text: "Yaş: Pek çok kanser türü yaşlılarda ortaya çıkar. 50 yaşın üstündeki kişilerde kanser görülme riski daha yüksektir.",
      },
      {
        text: "Irk: Bazı ırklarda belli tip kanserler saha sık görülmektedir. Örneğin Amerikalı zencilerde prostat kanseri daha sık görülür.",
      },
      {
        text: "Cilt: Sarışınlarda cilt kanseri daha sık görülmektedir.",
      },
      {
        heading: "Genetik Risk Faktörleri:",
        red: true,
        text: "Genetik Risk Faktörleri, aileden kalıtımsal olarak geçen genlerle ilişkilidir.",
      },
      {
        text: "Aile üyelerinden birinde genç yaşta kanser teşhis edilen bireylerde, üç veya daha fazla kuşakta aynı tip kanser öyküsü bulunanlarda, anne veya baba tarafından üçten fazla kanser olgusu bulunan kişilerde ve aile bireylerinden birinde iki veya daha fazla farklı tip kanser bulunan bireylerde kanser gelişme riski yüksektir. Aile bireyleri arasından birden fazla kişide aynı tip kanser olsa bile bu kalıtımsal olmayabilir. Kanserin kalıtımsal olduğundan şüphe ediliyorsa genetik tarama testleri yapılmalıdır.",
      },
      {
        text: "Ateş: Kanserde sıklıkla görülür fakat genelde ileri evre kanserler ile birliktedir. Kan kanseri ve lenf bezi tümörlerinde ise başlangıç belirtisi olarak ortaya çıkabilir.",
      },
      {
        text: "Halsizlik: Kan kanseri veya kansızlığa neden olabilen mide veya kalın bağırsak kanseri gibi kanserlerde erken ortaya çıkabilir. Halsizlik kanserin seyrini tahmin etme konusunda önemli bir bulgudur.",
      },
      {
        text: "Ağrı: Kemik veya testis tümörlerinde ilk belirti olabilir ama genelde ileri evre kanserlerde görülür.",
      },
      {
        text: "Memede veya vücutta hissedilen kitleler: Özellikle meme, testis, lenf bezi veya yumuşak doku tümörleri cilt altında bir yumru veya şişlik ile hissedilebilir.",
      },
      {
        text: "Cilt değişiklikleri: Cilt tümörleri haricinde iç organ tümörlerinde de görülebilir. Bazı kanserlerde sarılık, ciltte koyulaşma veya ciltte kızarıklık görülebilir.",
      },
      {
        text: "Kanama: Olağan dışı kanama birçok kanserde erken veya geç dönemde ortaya çıkabilir. Balgamda kan görülmesi akciğer, dışkıda kan görülmesi kalın bağırsak, idrarda kan görülmesi idrar torbası (mesane), zamansız vajinal kanama ise rahim veya rahim ağzı (serviks) kanserinin belirtisi olabilir.",
      },
      {
        text: "Dışkılama veya idrar yapma alışkanlığında değişiklik: Uzun süreli kabızlık, ishal veya dışkı boyutunda değişiklik kalın bağırsak kanserinin ilk belirtisi olabilir. İdrar yaparken sancı, idrarda kan görülmesi veya idrar yapma sıklığının değişmesi prostat veya idrar torbası (mesane) kanserinin ilk belirtileri olabilir.",
      },
      {
        text: "Öksürük ve horlama: İnatçı ve geçmeyen öksürük akciğer kanserinin horlama ise gırtlak (larinks) kanserinin ilk belirtileri olabilir.",
      },
      {
        text: "Ben ve siğillerdeki değişiklikler: Vücudumuzda yıllardır mevcut olan bir ben veya siğilde şekil, boyut veya renkte yeni ortaya çıkan bir değişiklik durumunda hemen bir doktora müracaat edilmelidir. Zira melanom denilen cilt tümörlerinde erken teşhis ile tedavi şansı artmaktadır.",
      },
    ],
  },
  {
    slug: "migren",
    title: "Migren",
    views: 1863,
    image: "/images/migren.jpg",
    excerpt:
      "Her kesim, meslek ve yaş grubunda görülebilen migren, dünyada 10 kişiden birini esir alıyor. Daha çok kadınları seven bu şiddetli ağrılar, bazen üç gün sürebiliyor.",
    body: [
      {
        text: "Her kesim, meslek ve yaş grubunda görülebilen migren, dünyada 10 kişiden birini esir alıyor. Daha çok kadınları seven bu şiddetli ağrılar, bazen üç gün sürebiliyor.",
      },
      {
        text: "Uzmanlar migrenle başa çıkmak için öncelikle bu hastalığı çok iyi tanımak gerektiğini belirtiyor. Ancak migreni tanımak için de kişinin kendini iyi tanıması ilk şart olarak öne sürülüyor.",
      },
      {
        text: "Çünkü migren hastalığı ve seyri, kişiye göre değişiyor. Bir başka deyişle herkesin migreni, tıpkı parmak izi gibi kendine özgü. Bu hastalığın nedenleri de herkeste çok farklı olabiliyor.",
      },
      {
        text: "Kiminin migreni çok uzun süre uyuduğu zaman ortaya çıkıyor, kimininki egzersizde aşırıya kaçtığı zaman. Tabii hafifletme, geçirme yöntemleri de buna göre değişiyor. Bazıları karanlık bir odada uzanarak ağrıyı hafifletebiliyor, bazıları deliler gibi spor yaparak, migren krizini ağırlaşmadan atlatabiliyor.",
      },
      {
        text: "Migren ağrısı genellikle normal bir baş ağrısı gibi başlayabilir ve şiddeti gittikçe artabilir. Bir süre sonra zonklayıcı, çok kötü bir ağrı halini alabilir. Hareket etmek, ışık veya gürültü, ağrıyı şiddetlendirebilir. Genellikle başın tek bir tarafı ağrır. Zaman zaman da bütün başın ağrıdığı görülür.",
      },
      {
        text: "Bazı insanlar migren krizi sırasında kafalarının patlayacakmış gibi olduğunu hissettiklerini söyler. Kafatasının bir bölümü başka bir nedenle açılan bir kadın, hastanede geçirdiği migren atağı sırasında gözlemlenmiş. Kadının beyni, sanki içerden itiliyormuşçasına dışarı doğru uzamış.",
      },
      {
        text: "Atağın en üst noktasında, beyin tıpkı bir kalp gibi atmayı bırakmış ve kadın hemen ardından kusmuş, sonra da uyumuş. Bu arada gerilmiş beyin de eski normal haline dönmüş.",
      },
      {
        text: "Migreni başlatan faktörler arasında stres, alkol, çikolata gibi yiyecekler, hormonlar ve fiziksel sorunların yanı sıra, çok ya da az uyumak da bulunuyor. Migren öncesi yaşanan belirtilere, şöyle üstünkörü bir tanımla, halüsinasyonlar da denebilir.",
      },
      {
        text: "Bunlar, duyuların herhangi birini etkileyebilir; görme, koku, duyma, tat alma veya dokunma ya da bilinç halinde bir farklılık olarak da kendini gösterebilir. Bazı insanlar bunları sadece görsel olarak yaşar; bazılarında ise gerçeklik duygusu sarsıntıya uğrar.",
      },
      {
        text: "Bunlar o kadar rahatsız edici olabilir ki, insanların çoğu bu yakınmalarından sözetmekten hoşlanmaz. Bu yüzden de sanıldığından daha da yaygın olabilirler.",
      },
      {
        heading: "Serotonin",
        red: true,
        text: "Migren ağrısını geçirebilen ilaçların çoğunluğu, aynı zamanda, serotonin düzeyini de etkileyen ilaçlar. Serotonin, beyne mesaj ileten bir kimyasaldır. Beyinde serotonin kimyasalı salındığında kan damarları kasılır, yani daralır. Ama serotonin düzeyi düştükçe, damarlar da genişler.",
      },
      {
        text: "Migren atağından önce serotonin düzeyi yüksek olur, atak geçtikten sonra da düşük olur. Açlık, yorgunluk, stres, yemek, ışık ve ilaçlar, hepsi serotonin düzeyini etkiler. Serotonin düzeyini düşürenler, stres ve düşük kan şekeriyken, yükseltenler de oksijen, kusma, içinde ‘amin’ler bulunan gıdalar; örneğin peynir, çikolata ve portakal, mandalina, bir de içinde ‘tryptophan’adındaki amino asit bulunan gıdalar, örneğin süt ve hindi etidir.",
      },
      {
        text: "Bunun dışında serotonin düzeyini, çeşitli hormonlar da etkiler. Örneğin kadınlık hormonu östrojende bir artış, serotonin düzeyinde de bir artışa neden olur. Ama tam tersine, kadınların adet görmeleri sırasında, östrojen hormonlarında düşüş olması, serotonin düzeyini de düşürür ve bu durum, kan damarlarının genişlemesi sonucu, kadınlarda migren başlamasına neden olabilir.",
      },
      {
        heading: "Ne Yapmalısınız?",
        red: true,
        list: [
          "Çok su için, bardak bardak.",
          "Şekerli çay veya kahve için.",
          "Kafein kan damarlarınızı daraltacak, şeker de enerji verecektir.",
          "Ellerinizin sıcak olduğunu hayal edin veya kafanızda diğer gevşeme yöntemlerini canlandırın.",
          "Karanlık ve sessiz bir odada uzanın, dinlenin.",
          "Hadi, egzersiz zamanı… Ya zıp zıp zıplayın,",
          "Açık havaya çıkın, özellikle sıcak ve boğucu bir odada iseniz.",
          "Bazen açık havada yürümek migreni tamamen kesebilir.",
          "Ilık bir banyo alın ya da ellerinizi sıcak suya sokun.",
          "Başınıza, ensenize ve omuzlarınıza masaj yapın veya akupressure noktalarına basınç uygulayın.",
          "Planlarınızı değiştirin.",
          "Randevunuz varsa erteleyin.",
          "B3 vitamini alın. Buna niasin veya niasinamid de derler. Ama dikkat edin, bu madde, kan damarlarını genişletir ve bu yüzden migrenin tam ortasında alırsanız, ağrıyı daha da şiddetlendirebilir.",
          "Aromaterapi deneyin, örneğin kokulu yağlarla masaj yapın. Eğer deneyimli bir aromaterapiste danışabilirseniz, şakaklarınıza masaj yapmanız için size uygun kokulu bir yağ önerebilir.",
        ],
        plainList: true,
      },
      {
        heading: "Migrene Neden Olan Yiyecekler",
        red: true,
        text: "Çikolata, kakao, alkol, füme et, salam, sosis, tuzlama ve füme balık, av eti, fasulye, bezelye, soğan, zeytin, sütlü çikolata, sıcak mayalı ekmek, peynirli kraker veya ekmek, dil peyniri, avakado, incir, erik, kuru üzüm, çikolatalı dondurma ve pastalar.",
      },
    ],
  },
  {
    slug: "allerji",
    title: "Allerji",
    views: 1418,
    image: "/images/allerji.jpg",
    detailImage: "/images/cocukallerji.jpg",
    excerpt:
      "ALLERJİ NEDİR ? Allerji, normalde zararsız olan maddelere karşı anormal ve zararlı bağışıklık sistemi cevapları vermektir. Bu karmaşık cümle ne anlama gelir?",
    body: [
      {
        prefix: "ALLERJİ NEDİR ?",
        text: "Allerji, normalde zararsız olan maddelere karşı anormal ve zararlı bağışıklık sistemi cevapları vermektir. Bu karmaşık cümle ne anlama gelir?",
      },
      {
        text: "Bir örnekle açıklayalım: Bitki polenleri normalde insanlar için zararlı olmayan taneciklerdir. Ancak bazı kişilerde polenlere maruziyet nezle şikayetlerinin ortaya çıkmasına neden olur. Bu olay “allerji”, böyle kişiler de “atopik bünyeli” olarak adlandırılmaktadır. Atopi; normalde zararsız olan maddelere karşı, “İmmunglobulin E” adı verilen bağışıklık sistemi maddelerinin aşırı miktarda yapılması özelliğidir. Bu özellik genetik olarak kazanılmaktadır. Diğer bir deyişle atopik bünyeli bir kişi, allerjik hastalık gelişimine neden olan bu özelliğini anne ya da babasından geçen genlerle almaktadır.",
      },
      {
        text: "Kişinin allerjik olup olmaması sadece genetik faktörlere bağlı değildir. Kalıtıma ek olarak “çevre”nin de allerji gelişiminde önemli bir rol oynadığı görülmektedir. Belli bir zaman süresince belli bir allerjenle yüksek düzeyde karşılaşan bir kişinin o allerjene karşı duyarlılık kazanma şansı, daha az karşılaşan kişiye göre daha fazladır.",
      },
      {
        text: "Örneğin, erken yaşlarda yüksek miktarda ev tozu akarıyla karşılaşmanın, daha sonra ev tozu akarına allerjik olma riskini dramatik olarak arttırdığı kesin olarak gösterilmiştir. Ayrıca, özellikle sigara dumanı başta olmak üzere bazı irritanlara maruziyet allerjenlere duyarlılaşmada önemli rol oynamaktadır.",
      },
      {
        heading: "ALLERJİK HASTALIKLAR NASIL OLUŞUR ?",
        red: true,
        text: "Vücudumuzu hastalıklardan koruyan bağışıklık sistemi bazı kişilerde, normalde zararlı olmayan maddelere karşı da reaksiyon gösterebilir.",
      },
      {
        text: "Atopik yani “allerjik bünyeye sahip” kişilerde, allerjenlerle bağışıklık sisteminin tekrarlayan karşılaşmaları sonucunda, allerjenlere karşı IgE tipinde antikorlar oluşur.",
      },
      {
        text: "Bu sürece “duyarlılaşma” denir. Duyarlılaşma süreci tamamlandıktan sonra, allerjenle her temas sonrasında, kısa süre içinde kişide allerjik hastalık bulguları ortaya çıkar.",
      },
      {
        text: "Bu olaylar mast hücresi ve bazofiller adı verilen ve üzerinde allerjene özel IgE antikoru taşıyan bir grup hücrenin salgıladığı mediatörler aracılığı ile gelişmektedir.",
      },
      {
        text: "Bu mediatörlerin (başta histamin olmak üzere bir grup biokimyasal madde) etkisi ile hedef organlara ait (gözler, burun, solunum yolları gibi) allerji bulguları ortaya çıkar.",
      },
      {
        heading: "ALLERJİK HASTALIK BULGULARI NELERDİR ?",
        red: true,
        text: "Deride Ürtiker : Değişik büyüklüklerde olan kaşıntılı kabarıklıklardır. “Kurdeşen” veya “dabaz” olarak ta adlandırılır.",
      },
      {
        text: "Anjioödem: Derinin alt tabakalarında sıvı birikmesi yani ödem ile ortaya çıkan şişliklerdir. Genellikle yüz, göz kapakları, dudaklar ve genital bölgede oluşur.",
      },
      {
        text: "Göz ve üst solunum yollarında: Gözlerde kızarıklık ve kaşıntı, Burun tıkanıklığı ya da burun akıntısı, Burunda kaşıntı ve hapşırma.",
      },
      {
        text: "Alt solunum yollarında: Solunum zorluğu, Hışırtılı solunum (vizing), Öksürük.",
      },
      {
        text: "Kalp ve damar sisteminde: Çarpıntı (nabız sayısında artma), Tansiyon düşüklüğü.",
      },
      {
        text: "Mide-barsak sisteminde: Bulantı – kusma, Karın ağrısı ya da karın krampları.",
      },
      {
        text: "Sinir sisteminde Şuur bulanıklığı, Bayılma",
      },
      {
        text: "Anafilaksi (allerjik şok): Nadir de olsa tüm sistemlere ait bu bulguların hepsi birarada görülebilir ve anafilaksi olarak adlandırılır. Allerjik reaksiyonların en ağır şeklidir.",
      },
      {
        heading: "ALLERJİK HASTALIKLAR NELERDİR ?",
        red: true,
        text: "Allerjiyi başlatan mekanizmalar genellikle aynı olmakla birlikte, etkilenen organa göre değişen klinik bulgular ortaya çıkar. Allerjik hastalıklar ortaya çıkan bulgulara ve etkilenen doku ve organ sistemine göre adlandırılır.",
      },
      {
        text: "Sık görülen allerjik hastalıklar şunlardır:",
        list: [
          "Allerjik rinit",
          "Allerjik konjunktivit",
          "Astım (bronşiyal astma)",
          "Gıda allerjisi",
          "İlaç allerjisi",
          "Arı allerjisi",
          "Atopik dermatit",
          "Ürtiker ve anjioödem",
          "Lateks allerjisi",
        ],
        plainList: true,
      },
    ],
  },
  {
    slug: "sinuzit",
    title: "Sinüzit",
    views: 1749,
    image: "/images/sinuzit.jpg",
    detailImage: "/images/sinuzitgenel.jpg",
    excerpt:
      "Yeni doğmuş bir bebeğin bile çok küçük olsa dahi sinüsleri vardır. Başlangıçta bezelye büyüklüğünde olan bu boşluklar burnun içinden yüz ve kafatası kemiklerinin içine doğru genişleyen boşluklardır.",
    body: [
      {
        text: "Yeni doğmuş bir bebeğin bile çok küçük olsa dahi sinüsleri vardır. Başlangıçta bezelye büyüklüğünde olan bu boşluklar burnun içinden yüz ve kafatası kemiklerinin içine doğru genişleyen boşluklardır.",
      },
      {
        text: "Çocukluk ve genç erişkinlik çağında büyümeye ve genişlemeye devam eder. Hava cepleridirler. Burnun iç yüzünü kaplayan zarın aynısı tarafından kaplanmaktadırlar ve bir kurşun kalem başı büyüklüğünde açıklarla burun boşluğuna bağlanırlar.",
      },
      {
        heading: "SİNÜSLER NE İŞE YARAR?",
        red: true,
        text: "Sinüsler normal salgı (mukus) oluşturan burun, sisteminin bir parçasıdır. Normal olarak burun ve sinüsler günde yaklaşık olarak yarım litre mukus salgılar. Üretilen mukus burun örtüsü (mukoza) üzerinde hareket ederek toz parçacıklarını, bakterileri ve diğer havayla taşınan partikülleri süpürür ve yıkarlar.",
      },
      {
        text: "Daha sonra bu mukus geriye boğaza süzülür ve yutulur. İçindeki parçacıklar ve bakteriler mide asidi tarafından parçalanır. Birçok insan bunun farkında değildir çünkü normal bir vücut fonksiyonudur.",
      },
      {
        heading: "BURUN GERİSİNE AKINTI NE DEMEKTİR?",
        red: true,
        text: "Burun içi; hava kirliliği tarafından, allerjiye neden olan maddeler tarafından, dumanla veya virüsler tarafından rahatsız edildiğinde normalden çok fazla mukus üretir. Bu burun zarlarındaki allerjik maddeyi yıkayıp uzaklaştırmak amacıyla bol miktarda üretilmiş, berrak su gibi bir salgıdır. Burun arkasına doğru su gibi bir salgı oluşur. Arkaya akıntının en önemli nedeni bu olaydır.",
      },
      {
        text: "Bir başka tipte ise mukus yapışkan ve kıvamlıdır. Bu, hava yollarının çok kuru olduğu ve zarların yeterince sıvı salgılıyamadığı durumlarda görülür. Bakteriler tarafından oluşturulan enfeksiyonlarda da yapışkan ve kıvamlı mukus gözlenir aynı zamanda cerahatten dolayı mukusun rengi sarı veya yeşil olabilir.",
      },
      {
        heading: "SİNÜS NEDİR?",
        red: true,
        text: "“-it” eki tıpta enfeksiyon veya enflamasyonu ifade eder. Bu nedenle sinüzit, sinüslerin enfeksiyonu veya enflamasyonudur. Tipik bir akut sinüzit vakası soğuk algınlığı veya allerjik bir atak sonucunda fazla miktarda mukus salgılanması ile ortaya çıkar. Zarlar o kadar çok şişebilir ki sinüslerin küçük açıklıkları kapanır. Hava ve mukus burun ile sinüsler arasında rahat hareket edemezse mukus sinüsler içinde birikir ve basıncın artmasına neden olur.",
      },
      {
        text: "Hangi sinüsün etkilendiğine bağlı olarak yüzde veya alında üzerine basmakla oluşan, gözler arasında veya gerisinde, yanaklarda ve üst dişlerde ağrıya meydana gelir.",
      },
      {
        text: "Çıkışı kapalı ve mukus dolu bir sinüs bakterilerin üremesi için çok uygun bir ortamdır. Soğuk algınlığı normalden fazla sürerse ve sümüğün rengi yeşil-sarıya dönerse veya garip bir tat oluşursa muhtemel bakteriyel enfeksiyon gelişmiştir.",
      },
      {
        text: "Akut sinüzit olgularında yüzdeki ve alındaki ağrı çok kötü olabilir. Sinüs çıkışının uzun süre kapandığı durumlarda kronik sinüzit gelişir. Baş ağrısı az görülür ancak akıntı ve kötü koku devam eder.",
      },
      {
        text: "Enflamasyonun çok aşırı olması sonucunda polip adı verilen oluşumlar gelişir. Bazı sinüzit olguları üst dişteki enfeksiyonun sinüse geçmesi sonucunda oluşur.",
      },
      {
        heading: "SİNÜZİT TEHLİKELİ MİDİR?",
        red: true,
        text: "Sinüzit olgularının büyük çoğunluğu tıbbi tedaviye cevap verir ve tehlikeli değildir. Bununla birlikte sinüs içindeki bir enfeksiyon hem göze hem de beyne çok yakındır.",
      },
      {
        text: "Enfeksiyonun göze veya beyine yayılması çok nadirdir.",
      },
      {
        text: "Enfeksiyonlu sinüslerden akan mukus akciğerler için sağlıklı değildir.",
      },
      {
        text: "Böylece sinüzit; bronşit, kronik öksürük veya astımı ya azdırır yada bunların ortaya çıkmasına neden olur.",
      },
      {
        heading: "SİNÜZİT BAŞ AĞRISI NEDİR?",
        red: true,
        text: "Soğuk algınlığı sırasında veya burun örtüsü şiştiği ve burnun aktığı zamanda veya burun sümükle dolu olduğunda yüzde, yanaklarda, alında veya göz çevresinde ortaya çıkan baş ağrısı muhtemelen sinüzit ağrısıdır. Sinüs enfeksiyonu buna neden olur.",
      },
      {
        text: "Bir başka tür sinüs baş ağrısı ise uçak inmek üzere alçaldığı zaman ortaya çıkar. Bu özellikle soğuk algınlığınız veya aktif allerjiniz varsa belirgin olur (buna “Vakum Baş Ağrısı” denilir).",
      },
      {
        text: "Maalesef sinüs baş ağrısıyla karıştırılabilecek birçok başka neden vardır.",
      },
      {
        text: "Örnek olarak migren ve diğer damar kaynaklı baş ağrıları veya gerginlik baş ağrısı hem alın ve göz çevresinde ağrı oluşturması hem de burun akıntısına da neden olabilmelerinden dolayı sinüzit ile karıştırabilirler. Ancak bu tip baş ağrıları doktor müdahalesi olmadan kısa sürede gelip geçerler.",
      },
      {
        text: "Doktor müdahalesi olmadan uzun süren ve ancak antibiyotik tedavisiyle düzeltilebilen sinüzitten farklıdırlar. Bununla birlikte arada sırada gelen, bulantı ve kusmaya neden olan baş ağrısı daha ziyade migren baş ağrısıdır. Şiddetli, sık ve uzun süren baş ağrılarının tanısı için mutlaka doktora baş vurulmalıdır.",
      },
      {
        heading: "KİMLER SİNÜS PROBLEMİYLE KARŞILAŞIRLAR?",
        red: true,
        text: "Gerçekte herkes sinüs enfeksiyonu geçirebilir ancak bazı gruplar daha hassastırlar.",
      },
      {
        text: "Allerjisi olanlar : Bir allerji atağı soğuk algınlığı gibi mukozanın şişmesine, sinüs kanallarının kapanmasına, mukus akımının engellenmesine ve bakteri enfeksiyonuna neden olur.",
      },
      {
        text: "İyi nefes almayı ve mukus akışını engelleyecek yapısal burun bozuklukları olanlar : Örnek olarak kırık bir burun veya septum deviasyonu (septum burun delikleri arasında burnu sağ ve sol olmak üzere ikiye bölen kıkırdak bir yapıdır. Bunun bir tarafa doğru eğilmesine deviasyon denir.)",
      },
      {
        text: "Sık sık enfeksiyona maruz kalanlar: Okul öğretmenleri ve sağlık personeli hassastır. Sigara içenler: Tütün dumanı, nikotin doğal direnç mekanizmasını bozarlar.",
      },
      {
        heading: "DOKTOR SİNÜSLERİM İÇİN NE YAPACAKTIR?",
        red: true,
        text: "Doktorunuz size soluk alıp vermeniz, burun akıntınızın rengi ve kokusu ve hangi olayların (günün hangi saatinde veya hangi mevsiminde ) bu bulgulara neden olduğu ile ilgili sorular soracaktır. Baş ağrınızı tarif etmeye hazır olun; Ne zaman ve hangi sıklıkta olduğu, ne kadar sürdüğü, bulantı, kusma, görme bozukluğu, veya burun tıkanıklığı ile ilişkili olup olmadığı.",
      },
      {
        text: "Kulak Burun Boğaz uzmanı özellikle mukozanın görünüşüne ve salgının niteliğine dikkat ederek kulağınızı, burnunuzu, ağzınızı, dişlerinizi, ve boğazınızı muayene edecektir. Burnunuzdaki hassasiyeti inceleyecektir. Bazı durumlarda sinüslerinizin röntgen fılmi gerekli olabilir.",
      },
      {
        text: "Tedavi doktorunuzun koyduğu teşhis ile bağlantılı olacaktır. Enfeksiyonlar için antibiyotik tedavisi veya cerrahi müdahale bazen de her ikisi birden gerekebilir. Akut sinüzit çoğunlukla antibiyotik tedavisine yanıt verirken kronik için genellikle cerrahi müdahale gerekmektedir.",
      },
      {
        text: "Son yıllarda uygulanan Fonksiyonel Endoskopik Sinüs Cerrahisi (FESS) bu hastalıkların çözümünde uygulanan basit bir tekniktir. Sonuçlar oldukça başarılıdır.",
      },
      {
        text: "Eğer bulgular allerji, migren veya sinüzite benzeyen bir başka nedenden dolayı ise doktorunuz alternatif bir tedavi planı uygulayacaktır.",
      },
      {
        heading: "SİNÜSLERİM İÇİN BEN NE YAPABİLİRİM?",
        red: true,
        text: "Allerjiniz varsa bunu kontrol edin. Soğuk algınlığı olduğunuz zaman buharla nemlendirici kullanın. Yatağınızın baş tarafı daha yükseltilmiş bir şekilde uyuyun.",
      },
      {
        text: "Dekonjestanlar kullanılabilir ancak içlerindeki kimyasal maddeler adrenalin gibi etki gösterebileceğinden yüksek tansiyonu olanlarda riskli olabilir.",
      },
      {
        text: "Aynı zamanda bunlar uykusuzluğa neden olan uyarıcıdırlar.",
      },
      {
        text: "Kullanmadan önce doktorunuza baş vurun.",
      },
      {
        text: "Burnunuzu tahriş eden kirleticilerden, özellikle sigara dumanından uzak durun.",
      },
      {
        text: "Dengeli beslenin, düzenli egzersiz yapın.",
      },
      {
        text: "Enfeksiyonu olduğunu bildiğiniz insanlarla ilişkilerinizi sınırlamaya çalışın bu olmuyorsa bir takım önlemler alın (el yıkamak, ortak havlu ve önlük kullanmamak).",
      },
      {
        text: "Birçok reçetesiz sinüs ilacı satılmaktadır ancak uygun bir tanı koyulmadan bunları kullanmak doğru değildir.",
      },
      {
        text: "En iyisi sizi muayene eden ve sizin şikayetlerinizi bilen doktorunuzun verdiği ilaçları kullanmaktır.",
      },
    ],
  },
  {
    slug: "hipertansiyon",
    title: "Hipertansiyon",
    views: 1793,
    image: "/images/hipertansiyon.jpg",
    detailImage: "/images/tansiyongenel.jpg",
    excerpt:
      "Kan dolaşımının sağlanması için bir basınç gereklidir. Bu basıncın normalden fazla olmasına hipertansiyon denir. Hipertansiyon için kullanılan diğer bir isim ise, YÜKSEK TANSİYON'dur. Kan basıncı ölçülürken 2 kan basıncı değerine bakılır.",
    body: [
      {
        text: "Kan dolaşımının sağlanması için bir basınç gereklidir. Bu basıncın normalden fazla olmasına hipertansiyon denir. Hipertansiyon için kullanılan diğer bir isim ise, YÜKSEK TANSİYON'dur. Kan basıncı ölçülürken 2 kan basıncı değerine bakılır.",
      },
      {
        list: [
          "Büyük tansiyon (sistolik kan basıncı)",
          "Küçük tansiyon (diyastolik kan basıncı)",
        ],
        plainList: true,
      },
      {
        text: "Kalbin kasılması sırasında ölçülen kan basıncı, büyük tansiyon, kalbin gevşemesi esnasında ölçülen kan basıncı ise küçük tansiyondur.",
      },
      {
        text: "Hem büyük tansiyon hem de küçük tansiyonun normalden fazla olması HİPERTANSİYON'dur.",
      },
      {
        text: "Hipertansiyon tanısı için büyük ve küçük tansiyondan birisinin normalden yüksek olması yeterlidir. Gerek büyük tansiyon gerekse de küçük tansiyonun normalden yüksek olması önemlidir.",
      },
      {
        text: "Bu konu unutulmamalıdır. Bazı hastalar küçük tansiyondaki yüksekliği önemsememektedir; bu çok yanlıştır.",
      },
      {
        heading: "Hipertansiyonun Önemi",
        red: true,
        text: "Hipertansiyon çok yaygın bir hastalıktır. Hipertansiyon, kalıcı sakatlık ve ölüm nedeni olan toplumsal bir sorundur. Hastaların azımsanmayacak bir kısmının kan basıncı yüksekliğinin farkında olmaması, hipertansiyonun önemini artırmaktadır.",
      },
      {
        text: "Hipertansiyon, değişik böbrek, kalp, damar hastalıklarına, felçlere ve görme kaybına yol açabilir.",
      },
      {
        text: "Tuz tüketiminin fazla olduğu toplumlarda, kan basıncı yüksekliğine daha sık rastlanır.",
      },
      {
        text: "Amerika Birleşik Devletleri'nde, hipertansif hasta sayısı, yaklaşık 50 milyondur.",
      },
      {
        text: "Türkiye'de, 1993 yılında yapılan bir çalışmada, 4023 adet kan basıncı ölçümü yapılmıştır. Bu çalışmada, diastolik kan basıncı, hastaların % 36'sında 85 mm Hg ve sistolik kan basıncı hastaların % 20'sinde 145 mm Hg'dan daha yüksek bulunmuştur. 70 yaşın üzerinde, hipertansiyon sıklığı % 30'lara çıkabilir.",
      },
      {
        text: "Özet olarak; toplumdaki 5-6 erişkinden birinde, kan basıncı yüksekliği vardır.",
      },
      {
        text: "Unutulmamalıdır ki, tansiyon yüksekliği için alınan önlemler yaşam boyu devam edecektir.",
      },
      {
        text: "Vücudumuzdaki organları oluşturan dokular kalp ve damar sistemi yolu ile düzenli bir şekilde oksijen ve besin maddeleri alarak görevlerini yerine getirir. Bu işlemin sürekliliği için kalp düzenli bir ritmde çalışır. Kendisine kulakçıklardan gelen kanı karıncıklar yolu ile büyük ve küçük dolaşıma pompalar. Bu pompalama boyun ve el bilek damarlarında nabız atması şeklinde hissedilir ve elimize vurur. Sol karıncıktan atılan temiz kan yüksek basınçla bütün vücuda dağılır, işte bizim “tansiyon” diye ölçtüğümüz damar içindeki bu kanın basıncıdır.",
      },
      {
        text: "Büyük dolaşım sistemi ile dokuların gereksinimini karşılamak için dağıtılan bu kan kullandıktan sonra tekrar temizlenmek üzere, küçük dolaşım yardımı ile akciğerden geçirilir. Kan basıncı ölçümünde iki sayı vardır.",
      },
      {
        text: "Yüksek olan sayı “sistolik” basınç ya da büyük tansiyon adı ile anılır. Bu basınç kalbin içindeki kanın damarlara pompalandığı anda oluşur. Bu pompalama nabız sayısı gibi dakikada 70-100 civarındadır.İki pompalama arasında kalp adalesi içine kanı doldurmak için gevşer ve bu sırada damardaki basınç düşer, buna “diyastolik basınç” ya da küçük tansiyon denir.",
      },
      {
        text: "Kan basıncını ölçmek için içine hava pompalanan bir lastik kolluk dirseğin üst tarafından kola sarılır. Bu kolluk hava pompalanınca, temiz kan damarlarını (arter) o kadar sıkıştırır ki içindeki kan akımı durur, ayrıca bilekteki nabız kaybolur. Sonra lastik kolluk içindeki hava yavaş yavaş bırakılır.",
      },
      {
        text: "Kolluk içindeki hava basıncı kalbin kanı pompalarken oluşturduğu basınca inip eşitlenince, kanın çarpması ile bu damarda bir ses meydana gelir. Her kalp atımında oluşan bu ses sistolik kan basınç değerini verir.",
      },
      {
        text: "Tansiyon ölçülen kolun bilek damarını kontrol edersek kulaklıkla dinlenen bu sesin oluştuğu basınç seviyesinde, nabız atımının başladığını hissederiz. Kolluk içindeki hava boşaltılmaya devam edilince, basınç azalarak, kulaklıkla duyulan sesin bir noktada artık duyulmadığı görülür.",
      },
      {
        text: "Burada basınç damardan kanın serbestçe akabildiği seviyededir. Buna diastolik basınç denir. Diastolik basınç bilek damarlarından bulunmaz. Tansiyon seviyeleri, ortasında ibresi bulunan göstergelerle, civa sütununun yüksekliği ile ya da elektronik aletlerin sayısal göstergeleri ile okunur.",
      },
      {
        text: "Okunan değerler milimetre civa sütunu olarak açıklanmakla birlikte, 13-15 gibi sayılarla da ifade edilir (Örneğin 170 mmHg yerine 17 denebilir).",
      },
      {
        heading: "Bunları hiçbir zaman unutmamak gerekir:",
        red: true,
        list: [
          "Tansiyon seviyeleri duvara çakılan bir çivi gibi sabit değildir. Günün saatlerine ve kişilerin durumuna göre, devamlı olarak az-çok değişiklikler gösterir. İş dönüşü en yüksek, gece sabaha karşı en düşük seviyede bulunur.",
          "Polikliniklerde heyecan ve sıkıntı dolayısı ile ölçülen yüksek seviyeler, aynı kişinin evinde ölçülse daha düşük bulunabilir. Bu yüzden birkaç saat içinde görülen önemli derecedeki tansiyon farklarını hemen ölçenin dikkatsizliğine ya da cihazın bozukluğuna bağlamak yanlıştır.",
          "Normal tansiyon seviyeleri yaş ilerledikçe artar. Yaşlı insanlarda kan basıncı yükselme eğilimi gösterir. Buna karşılık kan basıncı ne kadar yüksekse ömür o kadar kısadır. Sağlığı bozan kan basıncı sınırı belirlenmiştir. Bu sınır normal tansiyonla yüksek tansiyonu birbirinden ayırır. Sistolik basınç 140, diastolik basınç 90’ın altında ise normal kan basıncından bahsedilir.",
          "Eğer bir haftada üç defa ölçülen tansiyonun en az ikisi 160/95’in üzerinde bulunursa tansiyon yüksekliği (hipertansiyon) teşhisi konulabilir. Bu ölçümlerde sık sık sistolik 130-139 arası ve diastolik de 85-89 arası bulunuyorsa buna “sınır tansiyon yüksekliği” denir. Bu kişilerin tansiyonlarını kontrol ettirmeleri gerekir. 5 milimetre cıva (mmHg) lık yükselmeler bile hayatın akışına ve ömrün uzunluğuna etkisi olduğu için ihmal edilmemelidir.",
          "Tansiyon yüksekliği ile sinirlilik birbirine paralel olmadığı gibi pek çok sakin ve rahat görünüşlü insanda yüksek tansiyona rastlanabilir. Tansiyon yüksekliğinin yaşlılara has bir hastalık olduğunu düşünmek yanlıştır. 3-5 yaşındaki çocuklarda bile bazı nedenler tansiyon yüksekliği yapar. Tansiyonun kendisi genellikle bir şikayet oluşturmadığı için hastalık tanısı olamaz. Bununla birlikte, bir süre sonra çeşitli organlarımızda meydana getirdiği bozukluklar ciddi hastalıklara neden olur.",
        ],
        plainList: true,
      },
    ],
  },
];

export function getSaglikArticle(slug: string) {
  return saglikArticles.find((article) => article.slug === slug);
}
