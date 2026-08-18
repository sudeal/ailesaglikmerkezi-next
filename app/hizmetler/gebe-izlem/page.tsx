import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Gebe İzlem | Çapaklı Aile Sağlığı Merkezi",
};

function Black({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 mb-2 font-serif text-[18px] font-bold text-black">
      {children}
    </h2>
  );
}

function Red({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-5 mb-2 font-serif text-[16px] font-bold text-[#DC0D15]">
      {children}
    </h3>
  );
}

function Ul({
  children,
  nested,
}: {
  children: React.ReactNode;
  nested?: boolean;
}) {
  return (
    <ul
      className={`${nested ? "mt-1 mb-1" : "mb-3"} list-disc space-y-1 pl-5 marker:text-black`}
    >
      {children}
    </ul>
  );
}

function Ol({
  children,
  nested,
}: {
  children: React.ReactNode;
  nested?: boolean;
}) {
  return (
    <ol
      className={`${nested ? "mt-1 mb-1" : "mb-3"} list-decimal space-y-1 pl-6 marker:text-black`}
    >
      {children}
    </ol>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 font-serif font-normal text-[#444444]">{children}</p>;
}

function DanismanlikListesi({
  extra = false,
  priority = false,
}: {
  extra?: boolean;
  priority?: boolean;
}) {
  return (
    <>
      <Red>Aşağıdaki konularda gebeye danışmanlık veriniz.</Red>
      <Ul>
        <li>Beslenme ve diyet</li>
        <li>Fiziksel aktivite ve çalışma koşulları</li>
        <li>Gebelikte cinsel yaşam</li>
        <li>Hijyen ve genel vücut bakımı</li>
        <li>Ağız ve diş sağlığı</li>
        <li>Sigara alışkanlığı</li>
        <li>Alkol alışkanlığı ve madde bağımlılığı</li>
        <li>İlaç kullanımı</li>
        <li>Tetanoz toksoid immünizasyonu</li>
        <li>
          Gebelikte tehlike işaretleri:{priority ? " *" : ""}
          <Ul nested>
            <li>Vajinal kanama</li>
            <li>Konvülziyon (Sara nöbeti gibi kasılmalar)</li>
            <li>Başağrısı ile beraber görmede bozulma</li>
            <li>Ateş ve/veya ciddi güçsüzlük</li>
            <li>Ciddi karın ağrısı</li>
            <li>Solunum güçlüğü veya sık solunum</li>
            <li>Suyunun gelmesi</li>
            <li>Yüz, el ve bacaklarda şişme</li>
            {extra ? (
              <>
                <li>Fetus hareketlerinin hissedilememesi</li>
                {priority ? null : <li>Hızlı kilo alımı</li>}
              </>
            ) : null}
          </Ul>
        </li>
        {priority ? null : (
          <li>
            Acil durumlarda gebe ve ailesinin izleyeceği yöntem konusunda
            bilgilendirilmesi
          </li>
        )}
        <li>Doğum eylemi ve doğum{priority ? " *" : ""}</li>
        <li>
          Doğumun nerede ve kim tarafından yapılacağının planlanması
          {priority ? " *" : ""}
        </li>
        <li>Emzirme{priority ? " *" : ""}</li>
        <li>Postpartum aile planlaması danışmanlığı{priority ? " *" : ""}</li>
      </Ul>
    </>
  );
}

function Yakinmalar() {
  return (
    <Ul>
      <li>Yorgunluk</li>
      <li>Bulantı ve kusma</li>
      <li>Sık idrara çıkma</li>
      <li>Baş dönmesi</li>
      <li>Varis ve hemoroid</li>
      <li>Kabızlık</li>
      <li>Mide yanması</li>
      <li>Bacaklarda kramplar</li>
      <li>Nefes darlığı</li>
      <li>Ciltteki değişiklikler</li>
      <li>Memelerde hassasiyet</li>
      <li>Meme başındaki glandlarda belirginleşme</li>
      <li>Kolostrum salınımı</li>
      <li>Aşırı tükürük salgılanması</li>
      <li>Toprak vb. yeme</li>
    </Ul>
  );
}

export default function GebeIzlemPage() {
  return (
    <InnerPage
      title="Gebe İzlem"
      serif
      views={2664}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/hizmetler", label: "Hizmetler" },
        { label: "Gebe İzlemleri" },
      ]}
    >
      <div className="font-serif">
        <Black>Birinci İzlem</Black>
        <Note>
          (Gebeliğin 14. haftasında veya ilk 14 hafta içerisinde, süresi 30
          dakika olmalı)
        </Note>

        <Black>Öykü Alma</Black>
        <Red>Kişisel bilgilerini alma</Red>
        <Ul>
          <li>T.C Kimlik Numarası (biliniyorsa)</li>
          <li>
            <strong>Yaş (Doğum tarihi)</strong>
          </li>
          <li>Adres ve telefon numarası</li>
          <li>Medeni hali</li>
          <li>
            Akraba evliliği/derecesi
            <Ol nested>
              <li>Birinci derece akraba (kardeş çocukları arasında)</li>
              <li>İkinci derece akraba (kardeş torunları arasında)</li>
            </Ol>
          </li>
          <li>Yaşadığı ev tipi, büyüklüğü ve hane halkı sayısı</li>
          <li>Yaşadığı mekanın alt yapı koşulları; tuvalet, su kaynağı</li>
          <li>Yaşadığı mekanın elektrik ve ısınma kaynağı</li>
          <li>Eğitim düzeyi</li>
          <li>
            Ekonomik kaynakları;
            <Ol nested>
              <li>Kendi mesleği ve çalışma durumu</li>
              <li>Eşinin mesleği ve çalışma durumu</li>
            </Ol>
          </li>
          <li>Yaşadığı yerin en yakın sağlık kuruluşuna uzaklığı</li>
          <li>Ulaşım şartları</li>
          <li>Sosyal güvencesi</li>
        </Ul>

        <Red>Tıbbi öykü alma</Red>
        <Ul>
          <li>
            Kronik sistemik hastalıklar
            <br />
            (Diabetes Mellitus, hipertansiyon, kardiyovasküler hastalıklar,
            kr.böbrek hastalığı, epilepsi, tiroid hastalıkları vb.)
          </li>
          <li>
            Geçirilmiş veya tedavisi sürmekte olan enfeksiyon hastalıkları
            <br />
            (Tüberküloz, Brucella, paraziter hastalıklar, vb)
          </li>
          <li>Cinsel Yolla Bulaşan Enfeksiyon (CYBE) öyküsü</li>
          <li>Madde bağımlılığı</li>
          <li>Toprak vb yeme</li>
          <li>Psikiyatrik hastalıklar</li>
          <li>Kan transfüzyonu</li>
          <li>Talasemi taşıyıcılığı</li>
          <li>Geçirilmiş operasyonlar</li>
          <li>
            Geçirilmiş jinekolojik operasyonlar
            <br />
            (Histerotomi, myomektomi vb)
          </li>
          <li>İlaç allerjisi</li>
          <li>
            Aile öyküsü
            <br />
            (Diabetes mellitus, tekrarlayan fetal anomaliler, çift yumurta ikizi
            vb.)
          </li>
          <li>
            Sürekli kullanmak zorunda olduğu ilaçlar
            <br />
            (Antiepileptikler, insülin, antihipertansifler vb).
          </li>
          <li>Gebelik öncesi kullanılan aile planlaması yöntemi</li>
          <li>İnfertilite mevcut ise süresi, gördüğü tedaviler</li>
        </Ul>

        <Red>Obstetrik öykü (Daha önceki gebelikleri ile ilgili) alma</Red>
        <Ul>
          <li>Bu gebeliği dahil toplam gebelik sayısı (Gravida)</li>
          <li>Daha önceki doğum sayısı (Parite)</li>
          <li>Yaşayan çocuk sayısı</li>
          <li>Son gebeliğin sonlanma tarihi-yeri</li>
          <li>
            Gebenin her gebeliği ile ilgili öyküsünün ve gebelik sonucunun
            aşağıdakilere göre irdelenmesi;
            <Ol nested>
              <li>Doğumların kim tarafından nerede yapıldığı</li>
              <li>
                Gebeliklerin sonlanma şekli ve gebelik haftası (Canlı doğum,
                ölü doğum, kendiliğinden düşük, isteyerek düşük, ektopik
                gebelik, mol gebelik)
              </li>
              <li>Bebek ölümü ve nedenleri</li>
              <li>Çocuk ölümü ve nedenleri</li>
              <li>Prematür doğum</li>
              <li>Postmatür doğum</li>
              <li>İkiz veya çoğul gebelik</li>
              <li>Tekrarlayan birinci trimester düşükleri</li>
              <li>Tekrarlayan ikinci trimester düşükleri</li>
              <li>Yasal tahliye ve isteyerek düşük ve komplikasyonları</li>
              <li>
                Gebelik sırasında yaşanan komplikasyonlar (Kanama,
                preeklampsi, eklampsi, gestasyonel diyabet, tromboz, emboli)
              </li>
              <li>
                Doğum sırasında yaşanan komplikasyonlar (Plasentanın erken
                ayrılması, plasenta previa, makat, transvers ve diğer
                prezentasyon anomalileri, uzamış doğum eylemi, üçüncü derece
                perine yırtıkları ve masif kanama, plasentanın elle çıkarılması)
              </li>
              <li>
                Doğumun şekli (Normal doğum, sezaryen doğum, forseps veya
                vakumla müdahaleli doğum)
              </li>
              <li>
                Doğum sonrası dönemde yaşanan komplikasyonlar (Sepsis, kanama,
                depresyon, meme absesi vb.)
              </li>
            </Ol>
          </li>
          <li>
            Daha önceki canlı doğumlara ait yaşanan komplikasyonlar (Hidrops
            Fetalis, resüsitasyon veya başka tedavi almış yenidoğan, kromozomal
            anomali veya malformasyon, düşük doğum ağırlığı, intrauterin
            gelişme geriliği ve makrozomi)
          </li>
          <li>
            Daha önceki canlı doğumlara ait bilgiler (cinsiyeti, doğum ağırlığı,
            anne sütü alma süresi)
          </li>
          <li>Tetanoz toksoid immünizasyon uygulaması</li>
        </Ul>

        <Red>Mevcut gebelik öyküsünü alma</Red>
        <Ul>
          <li>
            <strong>Son Adet Tarihi (Son adetin ilk günü)</strong>
          </li>
          <li>
            Son adet tarihine (SAT) göre tahmini doğum tarihi Nagele formülüne
            göre hesaplanır: Tahmini Doğum Tarihi = SAT -3 ay + 7 gün
          </li>
          <li>
            Adetleri düzenli olmayan hastalarda gebelik haftasının SAT ile
            uyumlu olmayabileceği unutulmamalıdır.
          </li>
          <li>
            Bilinmiyorsa;
            <Ol nested>
              <li>İlk gebelik testi tarihi</li>
              <li>Gebelikten ilk şüphelendiği tarih</li>
              <li>Fetus hareketlerinin ilk hissedildiği tarih</li>
              <li>ÜYT gebeliği ise embriyo transfer tarihi</li>
            </Ol>
          </li>
          <li>Adetlerinin düzeni</li>
          <li>Beklenen doğum tarihi</li>
          <li>
            Gebelik yakınmaları (Bulantı kusma, aşırı tükrük salgılanması,
            toprak vb.yeme, sık idrara çıkma, meme hassasiyeti, kabızlık, mide
            yanması, bacaklarda kramplar, nefes darlığı, çarpıntı, halsizlik
            vb...)
          </li>
          <li>
            Gebelik tehlike işaretlerine ait yakınmalar (Vajinal kanama, yüksek
            ateş, karın ağrısı, solunum güçlüğü veya sık solunum, günlük
            aktivitelerin gerçekleştirilememesi)
          </li>
          <li>Alışkanlıkların sorgulanması (sigara, alkol, madde bağımlılığı)</li>
          <li>Kullandığı ilaçlar</li>
        </Ul>

        <Black>Fizik Muayene:</Black>
        <Ul>
          <li>Gebenin boy ve kilosunu ölçünüz.</li>
          <li>
            Kan Basıncını ölçünüz (Sistolik kan basıncının 140, diastolik kan
            basıncının 90 mmHg altında olması normal kabul edilir). Nabzını
            sayınız.
          </li>
          <li>Ciddi anemi bulgularını kontrol ediniz.</li>
          <li>
            El tırnakları, konjunktiva, ağız mukozasında solukluk, nefes
            almakta güçlük, 30’un üzerinde solunum sayısı
          </li>
          <li>Hastalığı gösteren diğer tehlike işaretlerini kontrol ediniz.</li>
          <li>Nefes darlığı, öksürük, yüksek ateş vb.</li>
          <li>Göğüs ve kalp oskültasyonu yapınız.</li>
          <li>Pretibial ödem tespiti için muayene yapınız.</li>
          <li>
            Gebelik haftası ile uterus büyüklüğün uygunluğunu değerlendirmek
            için vajinal muayene yapınız.
          </li>
          <li>Semptomatik CYBE bulgusu varsa değerlendiriniz</li>
          <li>
            Fetus kalp seslerini değerlendiriniz. Fetüs kalp atımları fetal
            steteskop ile 16-20., el Doppleri ile 10-12. haftalardan itibaren
            duyulabilir.
          </li>
          <li>
            Bebeğin ilk hareketlerini hissetme zamanını kaydetmesini isteyiniz.
          </li>
          <li>
            Uterus büyüklüğü ile gestasyonel hafta arasında uyumsuzluk
            durumunda sevk ediniz.
          </li>
        </Ul>

        <Black>Laboratuvar Testleri:</Black>
        <Red>İdrar tahlili:</Red>
        <Ul>
          <li>
            Bakteriüri ve proteinüri açısından test çubuğu ile ve mümkünse
            mikroskobik olarak idrara bakınız.
          </li>
        </Ul>
        <Red>Kan sayımı veya Hb-Hct ölçümü:</Red>
        <Ul>
          <li>
            İlk izlemde ve sonraki tüm izlemlerde gebenin hemoglobinine bakınız.
          </li>
        </Ul>
        <Red>Kan grubu tayini:</Red>
        <Ul>
          <li>
            İlk izlemde gebenin ve eşinin kan grubuna Rh uygunsuzluğu açısından
            mutlaka bakınız. HBs Ag bakınız.
          </li>
          <li>
            Gebenin semptomlarına göre gereken diğer testler için sağlık
            kuruluşunda yapılamıyor ise bir üst basamağa yönlendiriniz.
          </li>
        </Ul>

        <Black>Gebeye Verilecek İlaç Desteği, Tedaviler ve Bağışıklama:</Black>
        <Ul>
          <li>
            16. gebelik haftasından itibaren günde 40-60 mg/gün elementer demir
            preparatı desteğine başlayınız.
          </li>
          <li>
            “Gebelere Demir Destek Programı” akış çizelgesini kullanarak destek
            veya tedavi dozuna karar veriniz.
          </li>
          <li>
            Tetanoz toksoidi ile aşılamayı yapınız. Tetanoz bağışıklaması 12.
            haftadan itibaren yapılabilir. Gebenin geç tespit edilebileceği
            düşünülürse 4.ayda veya ilk izleminde birinci dozun yapılması
            uygundur. Aşı takvimine uygun olarak diğer dozlar devam edilir.
          </li>
          <li>
            Gelişen idrar yolu enfeksiyonu ve diğer enfeksiyonlarla ilgili
            gereken tedavileri veriniz. İdrar yolu enfeksiyonu tedavisinin
            ardından kontrol izlemde hala enfeksiyon devam ediyorsa bir üst
            basamağa sevk ediniz.
          </li>
        </Ul>

        <Black>Bilgilendirme Ve Danışmanlık:</Black>
        <Note>Gebeliğe bağlı olağan yakınmalar hakkında gebeyi bilgilendiriniz.</Note>
        <Yakinmalar />
        <DanismanlikListesi />
        <Note>
          Fetal anomaliler, tarama testleri ve USG incelemeleri hakkında
          bilgilendirme yapınız.
        </Note>

        <Black>İKİNCİ İZLEM</Black>
        <Note>
          (Gebeliğin 18-24. haftaları (tercihan 20-22. haftalar) arasında
          yapılmalı, süresi 20 dakika olmalıdır.)
        </Note>
        <Black>Öykü Alma</Black>
        <Red>Kişisel bilgilerini alma</Red>
        <Ul>
          <li>
            İlk izlemin ardından herhangi bir değişiklik olup olmadığını
            sorgulayınız.
          </li>
        </Ul>
        <Red>Tıbbi öykü alma</Red>
        <Ul>
          <li>İlk izlemde kayıt edilen tıbbi öyküyü gözden geçiriniz.</li>
          <li>
            İlk izlemden bu yana oluşan hastalık, kaza, yaralanma, hastaneye
            yatış varsa sorgulayınız.
          </li>
        </Ul>
        <Red>Obstetrik öykü (Daha önceki gebelikleri ile ilgili) alma</Red>
        <Ul>
          <li>İlk izlemde kayıt edilen obstetrik öyküyü gözden geçiriniz.</li>
        </Ul>
        <Red>Mevcut gebelik öyküsünü alınız.</Red>
        <Ul>
          <li>
            Alışkanlıkları sorgulayarak (sigara, alkol, madde bağımlılığı)
            kontrol ediniz.
          </li>
          <li>
            İlk izlemden bu yana olan gebelik yakınmalarını sorgulayınız.
            (Bulantı kusma, aşırı tükürük salgılanması, toprak vb. yeme, sık
            idrara çıkma, meme ağrısı, kabızlık, mide yanması, bacaklarda
            kramplar, nefes darlığı, çarpıntı, halsizlik vb...)
          </li>
          <li>
            İlk izlemden bu yana olan gebelik tehlike işaretlerine ait
            yakınmaları sorgulayınız. (Vajinal kanama, kasılma nöbeti, baş
            ağrısı ile beraber görmede bulanıklık, yüksek ateş, karın ağrısı,
            solunum güçlüğü veya sık solunum, yüz parmak ve bacaklarda şişme,
            fetus hareketlerinin hissedilmemesi, günlük aktivitelerin
            gerçekleştirilememesi, suların gelmesi)
          </li>
          <li>Demir dışında ilaç alımı varsa kayıt ediniz.</li>
          <li>Demir alımı ile ilgili yakınması varsa sorgulayınız.</li>
        </Ul>
        <Black>Fizik Muayene:</Black>
        <Ul>
          <li>Gebenin kilosunu ölçünüz.</li>
          <li>Kan basıncını ölçünüz ve nabzını sayınız.</li>
          <li>
            Ciddi anemi bulgularını kontrol ediniz. El tırnakları, konjunktiva,
            ağız mukozasında solukluk, nefes almakta güçlük, 30’un üzerinde
            solunum sayısı
          </li>
          <li>
            Hastalığı gösteren diğer tehlike işaretlerini kontrol ediniz. Nefes
            darlığı, öksürük, yüksek ateş vb.
          </li>
          <li>Göğüs ve kalp oskültasyonu yapınız. (Hekim Tarafından)</li>
          <li>
            Uterus yüksekliğini ölçünüz ve kaydediniz. Uygunsuzluk durumunda
            (4cm fark varsa) sevk ediniz.
          </li>
          <li>
            Yaygın ödem kontrolünü yapınız. Gebeliğin son aylarında ayaklarda
            hidrostatik basınca bağlı olarak ödem ortaya çıkabilir. Vücudun üst
            kısmında (eller, göz kapakları) ödem gözlenmesi preeklampsinin ilk
            belirtisi olabilir.
          </li>
          <li>
            Diğer sistemik muayenelerini yapınız (varis, tromboflebit bulguları
            açısından muayene edilir.)
          </li>
          <li>
            Vajinal muayene, karın ağrısı olan gebelerde yapılır. Suyu gelen ve
            kanaması olan gebelerde ise spekulum muayenesi yapılır. Bu hastalar
            II. basamakta takip edilir.
          </li>
          <li>
            Semptomatik Cinsel Yolla Bulaşan Enfeksiyon bulgusu varsa
            değerlendiriniz.
          </li>
          <li>
            Fetüs kalp seslerini uygun teknikle değerlendiriniz. (Fetal kalp
            atımı 120-160/dakika olmalı)
          </li>
        </Ul>
        <Black>Laboratuvar Testleri:</Black>
        <Red>İdrar tahlili:</Red>
        <Ul>
          <li>
            Bakteriüri ve proteinüri açısından test çubuğu ile ve mümkünse
            mikroskobik olarak idrara bakınız.
          </li>
        </Ul>
        <Red>Kan sayımı veya Hb-Hct ölçümü:</Red>
        <Ul>
          <li>Mutlaka her izlemde gebenin hemoglobinine bakınız.</li>
        </Ul>
        <Red>Kan grubu tayini:</Red>
        <Ul>
          <li>
            İlk izlemde bakılmadı ise gebenin ve eşinin kan grubuna Rh
            uygunsuzluğu açısından mutlaka bakınız. Anne Rh (-), baba Rh (+) ise
            İndirekt Coombs Testi yapılmalıdır. İndirekt Coombs testi sonucu (-)
            olanlar I.basamakta, (+) olanlar II. basamakta takip edilmelidir.
          </li>
        </Ul>
        <Red>Diğer muayene ve testler:</Red>
        <Ul>
          <li>
            Sağlık kuruluşunda yapılamıyor ise bir üst basamağa yönlendiriniz.
            (Glukoz tarama testi)
          </li>
          <li>
            Bu izlemde Temel Obstetrik Ultrasonografi önerilir. (Fetus sayısı,
            fetal kalp atımı, fetal biometrik ölçümler, plasenta lokalizasyonu,
            amniyotik sıvı miktarı değerlendirilir.)
          </li>
        </Ul>
        <Black>Gebeye Verilecek İlaç Desteği, Tedaviler ve Bağışıklama:</Black>
        <Ul>
          <li>
            Başlamış olduğunuz, günde 40-60 mg/gün demir preparatı desteğine
            devam ediniz.
          </li>
          <li>
            “Gebelere Demir Destek Programı” akış çizelgesini kullanarak destek
            veya tedavi dozuna karar veriniz.
          </li>
          <li>
            Gerekiyorsa tetanoz toksoidi ile aşılamanın 20. ve 24. haftalarda
            birinci ve ikinci dozunun yapılıp yapılmadığını kontrol ediniz.
          </li>
        </Ul>
        <Black>Bilgilendirme Ve Danışmanlık:</Black>
        <Note>Gebeliğe bağlı yakınmalar hakkında gebeyi bilgilendiriniz.</Note>
        <Yakinmalar />
        <DanismanlikListesi extra />
        <Black>Sevk Edilecek Durumlar:</Black>
        <Ol>
          <li>Hemoglobinin 7 gr/dl ve altında olması</li>
          <li>Kanama ve lekelenme olması</li>
          <li>
            Preeklampsi belirtileri, hipertansiyon (140/90mmHg üzerinde olması,
            başlangıç tansiyonunun sistolik 30 veya diastolik 15 mmHg’dan daha
            fazla yükselmesi) ve/veya proteinüri olması
          </li>
          <li>
            Uterus yüksekliği değerlendirildiğinde beklenen haftayla uyumlu
            olmaması (büyük veya küçük)
          </li>
          <li>
            Gebenin fetus hareketlerini hissetmemesi veya el doppleri ile fetal
            kalp seslerinin duyulmaması
          </li>
          <li>
            Bir önceki izlemde bakteriüri tespit edilen gebenin tedaviye rağmen
            bakteriürinin devam ediyor olması
          </li>
          <li>Tehlike işaretlerinin varlığı</li>
          <li>
            Gebeliğe eşlik eden sistemik hastalıkların varlığı (Kalp Hastalığı,
            Böbrek hastalığı, Diyabet, Astım, Tiroid Fonksiyon Bzk.luğu vb)
          </li>
        </Ol>

        <Black>ÜÇÜNCÜ İZLEM</Black>
        <Note>
          (Gebeliğin 30-32. haftaları arasında yapılmalı, süresi 20 dakika
          olmalıdır.)
        </Note>
        <Black>Öykü Alma</Black>
        <Red>Kişisel bilgilerini alınız</Red>
        <Ul>
          <li>
            İkinci izlemin ardından herhangi bir değişiklik olup olmadığını
            sorgulayınız.
          </li>
        </Ul>
        <Red>Tıbbi öykü</Red>
        <Ul>
          <li>İlk ve ikinci izlemde kayıt edilen tıbbi öyküyü gözden geçiriniz.</li>
          <li>
            İkinci izlemden bu yana oluşan hastalık, kaza, yaralanma, hastaneye
            yatış varsa sorgulayınız.
          </li>
        </Ul>
        <Red>Obstetrik öykü (Daha önceki gebelikleri ile ilgili) alma</Red>
        <Ul>
          <li>
            İlk izlemde kayıt edilen ve ikinci izlemde kontrol edilen obstetrik
            öyküyü gözden geçiriniz.
          </li>
        </Ul>
        <Red>Mevcut gebelik öyküsünü alma</Red>
        <Ul>
          <li>
            Alışkanlıkları sorgulayarak (sigara, alkol, madde bağımlılığı)
            kontrol ediniz.
          </li>
          <li>
            İkinci izlemden bu yana ortaya çıkan gebelik yakınmalarını
            sorgulayınız.
            <br />
            (Bulantı kusma, aşırı tükürük salgılanması, toprak vb. yeme, sık
            idrara çıkma, memede hassasiyet, kabızlık, mide yanması, bacaklarda
            kramplar, nefes darlığı, çarpıntı, halsizlik vb...)
          </li>
          <li>
            İkinci izlemden bu yana ortaya çıkan gebelik tehlike işaretlerine
            ait yakınmaları sorgulayınız.
            <br />
            (Vajinal kanama, konvülziyon, baş ağrısı ile beraber görmede
            bulanıklık, yüksek ateş, karın ağrısı, solunum güçlüğü veya sık
            solunum, yüz parmak ve bacaklarda şişme, fetus hareketlerinin
            hissedilmemesi, günlük aktivitelerin gerçekleştirilememesi, suyunun
            gelmesi)
          </li>
          <li>Fetus hareketlerinin varlığını sorgulayınız.</li>
          <li>Demir dışında ilaç alımı varsa kayıt ediniz.</li>
          <li>Demir alımı ile ilgili yakınması varsa sorgulayınız.</li>
        </Ul>
        <Black>Fizik Muayene:</Black>
        <Ul>
          <li>Gebenin kilosunu ölçünüz.</li>
          <li>Kan basıncını ölçünüz ve nabzını sayınız.</li>
          <li>Ciddi anemi bulgularını kontrol ediniz</li>
          <li>
            El tırnakları, konjunktiva, ağız mukozasında solukluk, nefes
            almakta güçlük, 30’un üzerinde solunum sayısı
          </li>
          <li>
            Hastalığı gösteren diğer tehlike işaretlerini kontrol ediniz. Nefes
            darlığı, öksürük, yüksek ateş vb.
          </li>
          <li>Uterus yüksekliğini ölçünüz ve kaydediniz.</li>
          <li>
            Çoğul gebelik varsa karın palpasyonu ve oskültasyonu ile tespit
            edilmesi
          </li>
          <li>
            Yaygın ödem kontrolünü yapınız. Gebeliğin son aylarında alt
            ekstremitede hidrostatik basınca bağlı olarak ödem ortaya
            çıkabilir. Vücudun üst kısmında (eller, göz kapakları) ödem
            gözlenmesi preeklampsinin ilk belirtisi olabilir.
          </li>
          <li>Diğer sistemik muayenelerini yapınız (Varisler, tromboflebit bulguları vb)</li>
          <li>Meme muayenesini yapınız.</li>
          <li>Semptomatik CYBE bulgusu varsa değerlendiriniz.</li>
          <li>
            Fetus kalp seslerini el Doppleri veya fetal steteskop ile
            değerlendiriniz. (Fetal kalp atımı 120-160/dakika olmalı)
          </li>
        </Ul>
        <Black>Laboratuvar Testleri:</Black>
        <Red>İdrar tahlili:</Red>
        <Ul>
          <li>
            Bakteriüri ve proteinüri açısından test çubuğu ile ve mümkünse
            mikroskobik olarak idrara bakınız
          </li>
        </Ul>
        <Red>Kan sayımı veya Hb-Hct ölçümü:</Red>
        <Ul>
          <li>Mutlaka gebenin hemoglobinine bakınız.</li>
        </Ul>
        <Red>Kan grubu tayini:</Red>
        <Ul>
          <li>
            İlk iki izlemde bakılmadı ise gebenin ve eşinin kan grubuna Rh
            uygunsuzluğu açısından mutlaka bakınız.
          </li>
          <li>
            Gebenin semptomlarına göre gereken diğer testler için sağlık
            kuruluşunda yapılamıyor ise bir üst basamağa yönlendiriniz.
          </li>
        </Ul>
        <Black>Gebeye Verilecek İlaç Desteği, Tedaviler ve Bağışıklama:</Black>
        <Ul>
          <li>
            Başlamış olduğunuz, günde 40-60 mg demir preparatı desteğine devam
            ediniz.
          </li>
          <li>
            “Gebelere Demir Destek Programı” akış çizelgesini kullanarak destek
            veya tedavi dozuna karar veriniz.
          </li>
          <li>
            Tetanoz toksoidi ile aşılamanın iki dozunun da yapılıp yapılmadığını
            kontrol ediniz.
          </li>
          <li>
            Gelişen idrar yolu enfeksiyonu ve diğer enfeksiyonlarla ilgili
            gereken tedavileri veriniz.
          </li>
        </Ul>
        <Black>Bilgilendirme Ve Danışmanlık:</Black>
        <Note>Gebeliğe bağlı yakınmalar hakkında gebeyi bilgilendiriniz.</Note>
        <Yakinmalar />
        <DanismanlikListesi extra />
        <Note>
          Erken doğum eylemi (rahim kasılmalarının düzenli ve kuvvetli gelmesi,
          kanamanın buna eşlik etmesi, nişan gelmesi) konusunda gebenin
          bilgilendirilmesi
        </Note>
        <Black>Sevk Edilecek Durumlar:</Black>
        <Ol>
          <li>Hemoglobinin 7 gr/dl ve altında olması</li>
          <li>Kanama ve lekelenme olması</li>
          <li>Preeklampsi belirtileri, hipertansiyon ve/veya proteinüri olması</li>
          <li>
            Uterus yüksekliğinin (fundus – pubis mesafesi) beklenen haftaya göre
            büyük veya küçük olması (+4cm.)
          </li>
          <li>
            Gebenin fetus hareketlerini hissetmemesi veya el Doppleri ile fetal
            kalp seslerinin duyulmaması
          </li>
          <li>
            Bir önceki izlemde bakteriüri tespit edilen gebenin tedaviye rağmen
            bakteriürinin devam ediyor olması
          </li>
          <li>Tehlike işaretlerinin varlığı</li>
          <li>
            Çoğul gebelik şüphesi olması (Doğrulamak ve doğumu planlamak üzere)
          </li>
          <li>
            Gebeliğe eşlik eden sistemik hastalıkların varlığı (Kalp Hastalığı,
            Böbrek hastalığı, Diyabet, Astım, Tiroid Fonksiyon Bzk.luğu vb)
          </li>
        </Ol>

        <Black>DÖRDÜNCÜ İZLEM</Black>
        <Note>
          (Gebeliğin 36-38. haftaları arasında yapılmalı, süresi 20 dakika
          olmalıdır.)
        </Note>
        <Black>Öykü Alma</Black>
        <Red>Kişisel bilgilerini alınız</Red>
        <Ul>
          <li>
            Üçüncü izlemin ardından herhangi bir değişiklik olup olmadığını
            sorgulayınız.
          </li>
        </Ul>
        <Red>Tıbbi öykü alma</Red>
        <Ul>
          <li>İlk üç izlemde kayıt edilen tıbbi öyküyü gözden geçiriniz.</li>
          <li>
            İlk üç izlemden bu yana oluşan hastalık, kaza, yaralanma, hastaneye
            yatış varsa sorgulayınız.
          </li>
        </Ul>
        <Red>Obstetrik öykü (Daha önceki gebelikleri ile ilgili) alınız.</Red>
        <Ul>
          <li>Obstetrik öykünün son kez gözden geçiriniz.</li>
        </Ul>
        <Red>Mevcut gebelik öyküsünü alma</Red>
        <Ul>
          <li>
            Alışkanlıkları sorgulayarak (sigara, alkol, madde bağımlılığı)
            kontrol ediniz.
          </li>
          <li>
            Üçüncü izlemden bu yana ortaya çıkan gebelik yakınmalarını
            sorgulayınız.
            <br />
            (Karın ağrısı, kasılmalar, bulantı kusma, ptializm, pika, sık
            idrara çıkma, memede hassasiyet, kabızlık, mide yanması, bacaklarda
            kramplar, nefes darlığı, çarpıntı, halsizlik vb…)
          </li>
          <li>
            Üçüncü izlemden bu yana ortaya çıkan gebelik tehlike işaretlerine
            ait yakınmaları sorgulayınız.
            <br />
            (Vajinal kanama, konvülziyon, baş ağrısı ile beraber görmede
            bulanıklık, yüksek ateş, karın ağrısı, solunum güçlüğü veya sık
            solunum, yüz parmak ve bacaklarda şişme, fetus hareketlerinin
            hissedilmemesi, kostovertebral açı hassasiyeti, günlük
            aktivitelerin gerçekleştirilememesi, suların gelmesi)
          </li>
          <li>Fetus hareketlerinin varlığını sorgulayınız.</li>
          <li>Demir dışında ilaç alımı varsa sorgulayınız</li>
          <li>Demir alımı ile ilgili şikayeti varsa sorgulayınız</li>
        </Ul>
        <Black>Fizik Muayene:</Black>
        <Ul>
          <li>Gebenin kilosunu ölçünüz.</li>
          <li>Kan basıncını ölçünüz ve nabzını sayınız.</li>
          <li>Ciddi anemi bulgularını kontrol ediniz</li>
          <li>
            El tırnakları, konjunktiva, ağız mukozasında solukluk, nefes
            almakta güçlük, 30’un üzerinde solunum sayısı
          </li>
          <li>
            Hastalığı gösteren diğer tehlike işaretlerini kontrol ediniz.
            <br />
            Nefes darlığı, öksürük, yüksek ateş vb.
          </li>
          <li>Uterus yüksekliğini ölçünüz ve kaydediniz.</li>
          <li>
            Fetusun gelen kısmı ve pozisyonunun değerlendirilmesi açısından
            Leopold manevralarını yapınız.
          </li>
          <li>
            Çoğul gebelik varsa karın palpasyonu ve oskültasyonu ile tespit
            edilmesi
          </li>
          <li>
            Yaygın ödem kontrolünü yapınız. Gebeliğin son aylarında alt
            ekstremitede hidrostatik basınca bağlı olarak ödem ortaya
            çıkabilir. Vücudun üst kısmında (eller, göz kapakları) ödem
            gözlenmesi preeklampsinin ilk belirtisi olabilir.
          </li>
          <li>
            Diğer sistemik muayenelerini yapınız (varisler, tromboflebit
            bulguları vb)
          </li>
          <li>Meme muayenesini yapınız.</li>
          <li>Semptomatik CYBE bulgusu varsa değerlendiriniz.</li>
          <li>
            Fetus kalp seslerini el Doppleri veya fetal steteskop ile
            değerlendiriniz. (Fetal kalp atımı 120-160/dakika olmalı)
          </li>
          <li>
            Obstetrik değerlendirme amaçlı vajinal muayene yapınız (pelvik
            yapı, serviks, prezente olan kısım)
          </li>
        </Ul>
        <Black>Laboratuvar Testleri:</Black>
        <Red>İdrar tahlili:</Red>
        <Ul>
          <li>
            Bakteriüri ve proteinüri açısından test çubuğu ile ve mümkünse
            mikroskobik olarak idrara bakınız.
          </li>
        </Ul>
        <Red>Kan sayımı veya Hb-Hct ölçümü:</Red>
        <Ul>
          <li>Doğuma hazırlık açısından mutlaka gebe hemoglobinine bakınız.</li>
        </Ul>
        <Black>Gebeye Verilecek İlaç Desteği, Tedaviler ve Bağışıklama:</Black>
        <Ul>
          <li>
            Başlamış olduğunuz, günde 40-60 mg demir preparatı desteğine devam
            ediniz.
          </li>
          <li>
            “Gebelere Demir Destek Programı” akış çizelgesini kullanarak destek
            veya tedavi dozuna karar veriniz.
          </li>
          <li>
            Gelişen idrar yolu enfeksiyonu ve diğer enfeksiyonlarla ilgili
            gereken tedavileri veriniz.
          </li>
        </Ul>
        <Black>Bilgilendirme Ve Danışmanlık:</Black>
        <Note>Gebeliğe bağlı yakınmalar hakkında gebeyi bilgilendiriniz.</Note>
        <Yakinmalar />
        <DanismanlikListesi extra priority />
        <Note>
          *Özellikle bu konulardaki danışmanlıkların verilmesi bu haftalardaki
          izlem için önceliklidir.
        </Note>
        <Note>
          *40. haftaya kadar doğum gerçekleşmezse gebenin doğumun yapılacağı
          sağlık kuruluşuna hemen başvurması konusunda bilgi verilmelidir.
        </Note>
        <Black>Sevk Edilecek Durumlar:</Black>
        <Ol>
          <li>Hemoglobinin 7 g/dl ve altında olması</li>
          <li>Kanama ve lekelenme olması</li>
          <li>Preeklampsi belirtileri, hipertansiyon ve/veya proteinüri olması</li>
          <li>
            Gebenin fetus hareketlerini hissetmemesi veya el Doppleri ile fetal
            kalp seslerinin duyulmaması
          </li>
          <li>
            Bir önceki izlemde bakteriüri tespit edilen gebenin tedaviye rağmen
            bakteriürinin devam ediyor olması
          </li>
          <li>Tehlike işaretlerinin varlığı</li>
          <li>
            Çoğul gebelik şüphesi olması (Doğrulamak ve doğumu planlamak üzere)
          </li>
          <li>Makat prezentasyonu şüphesi</li>
          <li>
            Gebeliğe eşlik eden sistemik hastalıkların varlığı (Kalp Hastalığı,
            Böbrek hastalığı, Diyabet, Astım, Tiroid Fonksiyon Bzk.luğu vb).
          </li>
        </Ol>
      </div>
    </InnerPage>
  );
}
