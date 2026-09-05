import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Verilen Raporlar | Çapaklı Aile Sağlığı Merkezi",
};

const raporlar = [
  {
    title: "İş İçin Sağlık Raporu:",
    text: "Fiziki görünümde ve fizik muayenede bir kusur olmayanlara verilebilmektedir. Fotograf gerekmiyor.",
  },
  {
    title: "Spor Yapabilir Raporu:",
    text: "Kalp yetmezliği belirtileri veren Kalp damar, kontrol edilemeyen şeker, yüksek tansiyon, aşırı obesite,… gibi hastalıkları olanlar dışında verilmektedir.",
  },
  {
    title: "Akıl Şuur (Temyiz Kudretine Haizdir) Raporu:",
    text: "Tapu veya Noter dairesinden gönderilen şahıslar yanlız başına muayene edilmekte ve yapmak istediği işin farkında olduğu kanaatine varılırsa verilmektedir. İşlemde Bir adet fotograf gerekmektedir.",
  },
  {
    title: "Av Tüfeği Ruhsatı Raporu:",
    text: "Psikiyatriden sağlam raporu alanların Görme ve bedensel kusuru olmamak şartıyla rapor düzenlenmektedir.",
  },
  {
    title: "Portör Muayenesi Raporu:",
    text: "Portör Tetkikleri ASM de yapılamamaktadır. Hastanın ücret ödememesi için muayene formu onaylayıp verilmekte ve Etimesgut’taki Laboratuvara gidilerek orada nümune verip rapor alması sağlanmaktadır.",
  },
  {
    title: "Ağır ve Tehlikeli İşlerde Çalışabilir Raporu:",
    text: "Yeterince tetkik, röntgen USG muayeneleri olmadığından ASM de bu rapor verilememektedir. Hastanelerden alması önerilmektedir.",
  },
  {
    title: "İstirahat Raporu:",
    text: "Gerçekten hasta işine veya okuluna devam edemeyecek derecede rahatsız olanlara verilmektedir. Öğrencilere sınav hazırlığı gibi sebeplerle sahte rapor istekleri kabul edilmemektedir. Israr edilmemesi rica olunur.",
  },
];

export default function SaglikRaporuPage() {
  return (
    <InnerPage
      title="Verilen Raporlar"
      views={2674}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/hizmetler", label: "Hizmetler" },
        { label: "Verilen Sağlık Raporları" },
      ]}
    >
      {raporlar.map((rapor) => (
        <div key={rapor.title} className="mb-5">
          <p className="m-0 font-bold">{rapor.title}</p>
          <p className="mt-1 mb-0">{rapor.text}</p>
        </div>
      ))}
    </InnerPage>
  );
}
