import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Aile Sağlığı Elemanı | Çapaklı Aile Sağlığı Merkezi",
};

const gorevler = [
  "Aile hekimi ile birlikte ekip anlayışı içinde kişiye yönelik koruyucu, tedavi ve rehabilite edici sağlık hizmetlerini sunmak ve görevinin gerektirdiği hizmetler ile ilgili sağlık kayıt ve istatistiklerini tutmakla yükümlüdür.",
  "Kişilerin yaşamsal bulgularını ölçer ve kaydeder,",
  "Aile hekiminin gözetiminde, talimatı verilen ilaçları uygular,",
  "Yara bakım hizmetlerini yürütür,",
  "Tıbbi alet, malzeme ve cihazların hizmete hazır bulundurulmasını sağlar,",
  "Poliklinik hizmetlerine yardımcı olur, tıbbi sekreter bulunmadığı hallerde sevk edilen hastaların sevk edildiği kurumla koordinasyonunu sağlar,",
  "Gereken tetkikler için numune alır, eğitimini aldığı basit laboratuvar tetkiklerini yapar veya aldığı numunelerin ilgili laboratuvar tarafından teslim alınmasını sağlar,",
  "Gezici ve yerinde sağlık hizmetleri, sağlığı geliştirici ve koruyucu hizmetler ile ana çocuk sağlığı ve aile planlaması hizmetlerini verir, evde bakım hizmetlerinin verilmesinde aile hekimine yardımcı olur,",
  "Bakanlıkça belirlenen hizmet içi eğitimlere katılır,",
  "Sağlık hizmetlerinin yürütülmesi ile ilgili olarak görev, yetki ve sorumlulukları kapsamında aile hekiminin verdiği diğer görevleri yerine getirir.",
];

export default function AileSagligiElemaniPage() {
  return (
    <InnerPage
      title="Aile Sağlığı Elemanı"
      views={5266}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/aile-hekimligi", label: "Aile Hekimliği" },
        { label: "Aile Sağlığı Elemanı" },
      ]}
    >
      <p className="mb-5 text-justify">
        Aile hekimi ile birlikte hizmet veren, sözleşmeli çalıştırılan veya
        Bakanlıkça görevlendirilen hemşire, ebe, sağlık memuruna denir.
      </p>

      <h2 className="mt-6 mb-3 text-[16px] font-bold text-[#DC0D15]">
        Aile Sağlığı Elemanının Görevleri
      </h2>

      <ol className="m-0 list-none p-0">
        {gorevler.map((item, index) => (
          <li key={item} className="mb-3 text-justify">
            {index + 1}) {item}
          </li>
        ))}
      </ol>
    </InnerPage>
  );
}
