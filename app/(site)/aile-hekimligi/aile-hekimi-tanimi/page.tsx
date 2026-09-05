import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Aile Hekiminin Tanımı | Çapaklı Aile Sağlığı Merkezi",
};

const gorevler = [
  "Kişiye yönelik koruyucu sağlık hizmetleri ile birinci basamak tanı, tedavi, rehabilitasyon ve danışmanlık hizmetlerini vermek,",
  "Aile hekimi, kendisine kayıtlı kişileri bir bütün olarak ele alıp, kişiye yönelik koruyucu, tedavi ve rehabilite edici sağlık hizmetlerini sunmak,",
  "Sağlıkla ilgili olarak kayıtlı kişilere rehberlik yapar, sağlığı geliştirici ve koruyucu hizmetler ile ana çocuk sağlığı ve aile planlaması hizmetlerini vermek,",
  "Kendisine kayıtlı kişilerin ilk değerlendirmesini yapmak için altı ay içinde ev ziyaretinde bulunup veya kişiler ile iletişime geçmek,",
  "Kayıtlı kişilerin yaş, cinsiyet ve hastalık gruplarına yönelik izlem ve taramaları (kanser, kronik hastalıklar, gebe, loğusa, yenidoğan, bebek, çocuk sağlığı, adölesan, erişkin, yaşlı sağlığı ve benzeri) yapmak,",
  "Periyodik sağlık muayenesi yapmak,",
  "Tetkik hizmetlerinin verilmesini sağlamak ya da bu hizmetleri vermek,",
  "Kendisine kayıtlı kişileri yılda en az bir defa değerlendirerek sağlık kayıtlarını güncellemek.",
  "Evde takibi zorunlu olan özürlü, yaşlı, yatalak ve benzeri durumdaki kendisine kayıtlı kişilere evde veya gezici/yerinde sağlık hizmetlerinin yürütülmesi sırasında kişiye yönelik koruyucu sağlık hizmetleri ile birinci basamak tanı, tedavi, rehabilitasyon ve danışmanlık hizmetlerini vermek,",
  "Aile sağlığı merkezi şartlarında tanı veya tedavisi yapılamayan hastaları sevk etmek, sevk edilen hastaların geri bildirimi yapılan muayene, tetkik, tanı, tedavi ve yatış bilgilerini değerlendirmek, ikinci ve üçüncü basamak tedavi ve rehabilitasyon hizmetleri ile evde bakım hizmetlerinin koordinasyonunu sağlamak,",
  "Gerektiğinde hastayı gözlem altına alarak tetkik ve tedavisini yapmak,",
  "Entegre sağlık hizmetinin sunulduğu merkezlerde gerektiğinde hastayı gözlem amaçlı yatırarak tetkik ve tedavisini yapar,",
  "Aile sağlığı merkezini yönetmek, birlikte çalıştığı ekibi denetlemek ve hizmet içi eğitimlerini sağlamak",
  "İlgili mevzuatta birinci basamak sağlık kuruluşları ve resmi tabiplerce kişiye yönelik düzenlenmesi öngörülen her türlü sağlık raporu, sevk evrakı, reçete ve sair belgeleri düzenlemektir.",
];

export default function AileHekimininTanimiPage() {
  return (
    <InnerPage
      title="Aile Hekiminin Tanımı"
      views={2222}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/aile-hekimligi", label: "Aile Hekimliği" },
        { label: "Aile Hekiminin Tanımı" },
      ]}
    >
      <p className="mb-5 text-justify">
        Bireylerin ve aile fertlerinin ikamet yerlerinin yakınlarında ya da
        kolaylıkla ulaşabilecekleri bir yerde bulunan, ilk başvuracakları,
        kişiye yönelik koruyucu sağlık hizmetleri ile birinci basamak teşhis,
        tedavi ve rehabilite edici sağlık hizmetlerini, yaş, cinsiyet ve
        hastalık ayrımı yapmaksızın, her kişiye kapsamlı ve devamlı olarak
        vermekle yükümlü, gerektiği ölçüde gezici sağlık hizmeti veren ve tam
        gün esasına göre çalışan aile hekimliği uzmanı veya Bakanlığın
        öngördüğü eğitimleri alan uzman tabip veya tabipleridir.
      </p>

      <h2 className="mt-6 mb-3 text-[16px] font-bold text-[#DC0D15]">
        Aile hekiminin görevleri:
      </h2>

      <ol className="m-0 list-none p-0">
        {gorevler.map((item, index) => (
          <li key={item} className="mb-3 text-justify">
            {index + 1}){item}
          </li>
        ))}
      </ol>
    </InnerPage>
  );
}
