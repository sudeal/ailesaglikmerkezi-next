import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Çapaklı Aile Sağlığı Merkezi",
};

const faqs = [
  {
    question: "Aile hekimi kimdir?",
    answer:
      "Kişiye yönelik koruyucu sağlık hizmetleri ile birinci basamak teşhis, tedavi ve rehabilite edici sağlık hizmetlerini, yaş, cinsiyet ve hastalık ayrımı yapmaksızın, her kişiye kapsamlı ve devamlı olarak belli bir mekânda vermekle yükümlü, gerektiği ölçüde gezici sağlık hizmeti veren ve tam gün esasına göre çalışan aile hekimliği uzmanı veya Bakanlığın öngördüğü eğitimleri alan uzman tabip veya tabiplerdir.",
  },
  {
    question: "Aile Sağlığı Elemanı kime denir?",
    answer:
      "Aile hekimi ile birlikte hizmet veren, sözleşmeli olarak veya görevlendirilmek suretiyle bu görevi yürüten hemşire, ebe, sağlık memuruna denir.",
  },
  {
    question: "Aile sağlığı elemanının görevleri nelerdir?",
    answer:
      "Aile hekimine sağlık hizmetinin sunulması esnasında yardımcı olur. Aile hekimi ile birlikte ekip anlayışı içinde kişilere yönelik koruyucu, tedavi edici ve rehabilite edici sağlık hizmetlerinin sunulmasında ve kişilerin sağlık kayıtları ve istatistiklerinin tutulmasında görev yapar.",
  },
  {
    question: "Aile Hekimimi seçebilir miyim?",
    answer:
      "Gerektiği zaman değiştirebilir miyim? Aile hekiminizi istediğiniz takdirde değiştirilebilirsiniz. Ancak kendi talebinizle seçtiğiniz aile hekiminizi 3 aydan önce değiştiremezsiniz.",
  },
  {
    question: "Aile bireyleri farklı aile hekimlerini seçebilirler mi?",
    answer:
      "Kişiler hekim seçme özgürlüğü kapsamında istediği aile hekimini seçebilir.Çocuklar ise velilerinin uygun gördüğü aile hekimine kaydedilirler. Yeni doğmuş bebekler annelerinin aile hekimine kaydedilirler.",
  },
  {
    question: "Gezici sağlık hizmeti nedir?",
    answer:
      "Aile hekimi ve/veya aile sağlığı elemanının, uzak mahalle, belde, köy, mezra gibi yerleşim yerlerine giderek mahallinde vereceği sağlık hizmetidir.",
  },
  {
    question: "Aile hekimim izine ayrıldığında hangi hekime başvurmalıyım?",
    answer:
      "Aile hekiminiz izine ayrıldığında yerine bakacak bir aile hekimi olacaktır. Bu durum aile hekiminizin görev yaptığı sağlık merkezinin görünür bir yerinde ilan edilecektir. Bu hekime başvurabilirsiniz.",
  },
  {
    question: "Aile hekimimi nerden öğrenebilirim?",
    answer: (
      <>
        T.C. Kimlik numaranızla en yakın aile sağlığı merkezi, toplum sağlığı
        merkezi veya il sağlık müdürlüğüne başvurarak öğrenebilirsiniz. Ayrıca
        Sağlık Bakanlığı’nın{" "}
        <a
          href="http://sbu.saglik.gov.tr/sbahbs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#DC0D15] underline underline-offset-2 hover:text-[#8a0a0e]"
        >
          http://sbu.saglik.gov.tr/sbahbs/
        </a>{" "}
        internet adresinden öğrenebilirsiniz.
      </>
    ),
  },
  {
    question: "Aile hekimime her türlü sağlık sorunumu danışabilir miyim?",
    answer:
      "Aile hekiminiz sizin sağlık danışmanınızdır. Aile hekiminize aile planlamasından çocuk bakımı ve aşı uygulamalarına, sağlıklı beslenmeden bulaşıcı hastalıklara kadar her konuda başvurabilirsiniz.",
  },
  {
    question: "Aile hekimime gitmeden hastaneye gidebilir miyim?",
    answer:
      "Bu konuda herhangi bir kısıtlama bulunmamaktadır. Ancak aile hekimine başvurduğunuz zaman herhangi bir hasta katılım payı ödemeniz gerekmezken, hastanelere başvurduğunuzda belli bir miktar hasta katılım payı ödemeniz gerekir.",
  },
  {
    question: "Toplum Sağlığı Merkezi nedir?",
    answer:
      "Bölgesinde yaşayan toplumun sağlığını geliştirmeyi ve korumayı ön plana alarak sağlıkla ilgili risk ve sorunları belirleyen, bu sorunları gidermek için planlama yapan ve bu planları uygulayan, uygulatan; birinci basamak koruyucu, iyileştirici ve rehabilite edici sağlık hizmetlerini müdürlüğün sevk idaresinde organize eden, bu hizmetlerin verimli şekilde sunulmasını izleyen, değerlendiren ve destekleyen, bölgesinde bulunan sağlık kuruluşları ile diğer kurum ve kuruluşlar arasındaki koordinasyonu sağlayan sağlık kuruluşuna denir.",
  },
  {
    question: "Aile hekimliğinde sağlık hizmetleri ücretli midir?",
    answer:
      "Hayır, ücretsizdir. Muayene, aşılama, enjeksiyon, pansuman, birinci basamakta yapılan tahlil ve film hizmetleri tamamıyla ücretsizdir. Bu işlemler için herhangi bir sosyal güvence aranmamaktadır. Yazılan reçeteler ise kişilerin sosyal güvencesinin durumuna göre ödenmektedir.",
  },
  {
    question: "Aile hekimine nasıl kayıt yaptırılır?",
    answer:
      "Kişilerin aile hekimlerine ilk kaydı, aile hekimliği uygulamalarına yeni geçilen illerde sağlık müdürlüğü tarafından ikamet ettikleri bölge göz önünde bulundurularak yapılır. Bir aile hekimine kayıtlı olmayan kişiler, kendilerine en yakın aile sağlığı merkezine, toplum sağlığı merkezine ya da il sağlık müdürlüğüne müracaat ederek bir aile hekimine kayıt yaptırabilirler. İkâmet ettiği bölgeden ayrılan kişiler isterlerse aile hekimlerini değiştirebilirler.",
  },
  {
    question: "Aile hekimime hangi saatlerde müracaat edebilirim?",
    answer:
      "Aile hekiminize çalışma saatleri içinde müracaat edebilirsiniz. Aile hekiminiz çalışma saatlerini değiştirdiği takdirde aile sağlığı merkezinde sizin rahatlıkla görebileceğiniz bir yerde bu durumu ilan edecektir.",
  },
];

export default function SikSorulanSorularPage() {
  return (
    <InnerPage
      title="Sık Sorulan Sorular"
      views={4030}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/aile-hekimligi", label: "Aile Hekimliği" },
        { label: "Sık Sorulan Sorular" },
      ]}
    >
      <FaqAccordion items={faqs} />
    </InnerPage>
  );
}
