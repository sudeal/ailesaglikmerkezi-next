import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Vizyon - Misyon | Çapaklı Aile Sağlığı Merkezi",
};

const vizyon = [
  "Bilimi en güncel hali ile kullanmaktır.",
  "Hizmet verdiğimiz kişileri kendimiz gören anlayış ile onlara sağlıklı bir yaşam sunmaktır.",
  "Sağlığı vazgeçilmez bir insan hakkı olarak görmek ve bağlı bulunduğumuz bireylerin tüm sağlık sorumluluğunu üstlenmektir.",
  "Sevgi, akıl, dostluk ve gayretle davranan nitelikli bir kadroyla içinde bulunduğumuz yüzyılın gelişen ihtiyaçlarına cevap verebilmektir.",
  "Kendi iç eğitimlerimizle Aile Sağlığı Merkezimizin kalitesini yükseltmektir.",
  "Çağdaş insan anlayışı ile yenilikleri hizmetlerimize aktarmak, çağı yakalamaktır.",
];

const misyon = [
  "Manisa Salihli Çapaklı Aile Sağlığı Merkezi’nden sağlık hizmeti almak için başvuran tüm hastalarımıza din, dil, ırk, cinsiyet ve sosyoekonomik sınıf farkı gözetmeksizin, hasta ve sağlık personelinin haklarına saygılı, etik kurallara bağlı, hizmeti sunan ve alan arasındaki iletişimi sağlam temellerle kurmaktır.",
  "Hasta ve çalışan memnuniyetini sürekli hale getirmektir.",
  "Kaynakları etkin ve verimli kullanmaktır.",
  "Koruyucu sağlık hizmetlerini titizlikle sunan ve bebek, gebe ve çocukların tamamının aşılarının eksiksiz bir şekilde yapılmasını sağlamaktır.",
  "Aile Sağlığı Merkezimiz’den hizmet alan kişileri çeşitli iletişim kanallarıyla ve bire bir sağlık konusunda bilgilendiren bir hizmeti sunabilmektir.",
  "Gebe takipleri ile anne ve bebek ölümünü önleyebilen, istenmeyen gebelikleri doğum kontrol metotlarıyla önleyebilmektir.",
  "Ayaktan tedavi ile tedavi olabilecek tüm hastalıkları ikinci basamağa göndermeden tedavi edebilmektir.",
];

export default function VizyonMisyonPage() {
  return (
    <InnerPage
      title="Salihli Çapaklı Aile Sağlığı Merkezi"
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/kurumsal", label: "Kurumsal" },
        { label: "Vizyon - Misyon" },
      ]}
    >
      <h2 className="mt-2 mb-3 text-[20px] font-bold text-[#222433]">
        Vizyonumuz
      </h2>
      <ul className="mb-8 list-disc space-y-2 pl-5">
        {vizyon.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="mt-2 mb-3 text-[20px] font-bold text-[#222433]">
        Misyonumuz
      </h2>
      <ul className="mb-10 list-disc space-y-2 pl-5">
        {misyon.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="m-0 font-bold text-[#222433]">Ayrıntılar</p>
      <p className="m-0 text-[14px] text-[#555555]">Gösterim: 1645</p>
    </InnerPage>
  );
}
