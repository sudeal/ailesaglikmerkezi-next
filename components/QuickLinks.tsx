import Link from "next/link";
import {
  FaCalendarAlt,
  FaHeart,
  FaMicroscope,
  FaRegClock,
  FaUserMd,
} from "react-icons/fa";
import ServicesSlider from "@/components/ServicesSlider";

const boxes = [
  {
    href: "/kurumsal/esnek-mesai-cizelgesi",
    title: "Esnek Mesai Saatleri",
    label: "Çalışma Saatleri",
    Icon: FaRegClock,
  },
  {
    href: "/hizmetler/bebek-asi-takvimi",
    title: "Bebek Aşı Takvimi",
    label: "Bebek Aşı Takvimi",
    Icon: FaCalendarAlt,
  },
  {
    href: "/hizmetler/vucut-kitle-indeksi-hesaplama",
    title: "Vücut Kitle İndeksi Hesaplama",
    label: "VKİ Hesaplama",
    Icon: FaHeart,
  },
  {
    href: "https://www.turkiye.gov.tr/aile-hekim-bilgisi",
    title: "Aile Hekimi",
    label: "Aile Hekimi Sorgula",
    Icon: FaUserMd,
    external: true,
  },
  {
    href: "http://32hsl.com/SonucOgren.aspx?SonucListe=tckimlik",
    title: "Laboratuar Tahlil Sonuçları",
    label: "Tahlil Sonuçları",
    Icon: FaMicroscope,
    external: true,
  },
] as const;

export default function QuickLinks() {
  return (
    <section className="bg-white">
      <div className="mx-auto min-h-[645px] w-[1037px] max-w-full pt-8 pb-8">
        <ul className="m-0 flex list-none gap-6 p-0">
          {boxes.map(({ href, title, label, Icon, ...rest }) => {
            const external = "external" in rest && rest.external;
            const className =
              "main flex h-[180px] w-full flex-col items-center justify-center bg-[#DC0D15] font-sans text-[14px] text-white hover:bg-[#454541]";

            const content = (
              <>
                <Icon aria-hidden className="text-[48px]" />
                <span className="title mt-2.5 text-center text-[20px] font-normal">
                  {label}
                </span>
              </>
            );

            return (
              <li key={label} className="min-w-0 flex-1">
                {external ? (
                  <a
                    href={href}
                    title={title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={href} title={title} className={className}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <ServicesSlider />
      </div>
    </section>
  );
}
