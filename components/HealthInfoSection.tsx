import Link from "next/link";
import { FaLink, FaRegHeart } from "react-icons/fa";
import { getTelefonHattiByNumber } from "@/lib/telefon-hatlari";

const articles = [
  {
    href: "/saglik-bilgi/genel-saglik-bilgileri/kanser-nedir",
    src: "/images/kanser.jpg",
    title: "Kanser Nedir",
    excerpt:
      "Kelime anlamı olarak kanser, bir organ veya dokudaki hücrelerin düzensiz olarak bölünüp",
    date: "10 Nisan 2019",
  },
  {
    href: "/saglik-bilgi/genel-saglik-bilgileri/allerji",
    src: "/images/alerji.jpg",
    title: "Allerji",
    excerpt:
      "ALLERJİ NEDİR ? Allerji, normalde zararsız olan maddelere karşı anormal ve zararlı bağışıklık",
    date: "20 Mart 2019",
  },
] as const;

const homepageHotlineNumbers = [
  "112",
  "113",
  "114",
  "122",
  "171",
  "191",
  "182",
  "184",
] as const;

const hotlines = homepageHotlineNumbers.map((number) => {
  const hat = getTelefonHattiByNumber(number);
  if (!hat) {
    throw new Error(`Eksik telefon hattı: ${number}`);
  }

  return {
    number,
    src: hat.image,
    href: `/saglik-bilgi/onemli-tel-hat/${hat.slug}`,
    title: hat.title,
    likes: hat.views,
  };
});

function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-5">
      <h3 className="m-0 mb-2 text-[20px] font-bold text-[#DC0D15] sm:text-[22px]">
        {children}
      </h3>
      <div className="h-[3px] bg-[#DC0D15]" />
      <div className="h-px bg-[#d9d9d9]" />
    </div>
  );
}

export default function HealthInfoSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="container mx-auto max-w-[1170px] px-[15px]">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 md:col-span-6">
            <SectionTitle>SAĞLIK BİLGİSİ</SectionTitle>
            <div className="grid grid-cols-12 gap-5">
              {articles.map((article) => (
                <article key={article.href} className="col-span-12 sm:col-span-6">
                  <Link href={article.href} className="block overflow-hidden">
                    <img
                      src={article.src}
                      alt={article.title}
                      width={370}
                      height={220}
                      className="h-[150px] w-full object-cover"
                    />
                  </Link>
                  <h4 className="mt-3 mb-2 text-[16px] font-bold">
                    <Link
                      href={article.href}
                      className="text-[#DC0D15] hover:underline"
                    >
                      {article.title}
                    </Link>
                  </h4>
                  <p className="m-0 text-[13px] leading-[1.6] text-[#444444]">
                    {article.excerpt}
                  </p>
                  <p className="mt-2 mb-1 text-[12px] text-[#777777]">
                    {article.date}
                  </p>
                  <div className="text-right">
                    <Link
                      href={article.href}
                      className="text-[13px] font-medium text-[#DC0D15] hover:underline"
                    >
                      Devamını Oku
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <SectionTitle>ALO SAĞLIK HATLARI</SectionTitle>
            <ul className="m-0 grid list-none grid-cols-4 gap-x-2 gap-y-5 p-0 sm:gap-x-3">
              {hotlines.map((line) => (
                <li key={line.number} className="flex flex-col items-center">
                  <Link
                    href={line.href}
                    title={line.title}
                    className="group flex flex-col items-center"
                  >
                    <span className="relative block aspect-square w-[72px] overflow-hidden sm:w-[88px] md:w-[78px] lg:w-[96px]">
                      <img
                        src={line.src}
                        alt={line.title}
                        width={120}
                        height={120}
                        className="h-full w-full object-contain"
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#E31C23]/85 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <span className="flex size-8 items-center justify-center border border-white text-[14px] text-white sm:size-9">
                          <FaLink aria-hidden />
                        </span>
                      </span>
                    </span>
                    <span className="mt-1 flex w-[72px] items-center justify-end gap-1 pr-0.5 text-[12px] text-[#DC0D15] sm:w-[88px] md:w-[78px] lg:w-[96px]">
                      <FaRegHeart aria-hidden className="text-[11px]" />
                      <span>{line.likes}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
