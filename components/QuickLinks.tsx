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
      <div className="container mx-auto max-w-[1170px] px-[15px] pt-8 pb-8">
        <ul className="m-0 grid list-none grid-cols-12 gap-4 p-0 md:gap-6">
          {boxes.map(({ href, title, label, Icon, ...rest }, index) => {
            const external = "external" in rest && rest.external;
            const className =
              "main flex h-[140px] w-full flex-col items-center justify-center bg-[#DC0D15] font-sans text-[14px] text-white hover:bg-[#454541] sm:h-[160px] lg:h-[180px]";

            const content = (
              <>
                <Icon aria-hidden className="text-[36px] sm:text-[48px]" />
                <span className="title mt-2.5 px-2 text-center text-[16px] font-normal sm:text-[20px]">
                  {label}
                </span>
              </>
            );

            return (
              <li
                key={label}
                className={`col-span-12 min-w-0 sm:col-span-6 lg:col-span-4 xl:col-span-2 ${
                  index === 0 ? "xl:col-start-2" : ""
                }`}
              >
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
