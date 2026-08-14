const links = [
  {
    href: "https://www.turkiye.gov.tr/",
    src: "/images/e-devlet.png",
    alt: "E Devlet",
  },
  {
    href: "https://www.saglik.gov.tr/",
    src: "/images/saglik-bakanligi.png",
    alt: "Sağlık Bakanlığı",
  },
  {
    href: "https://www.enabiz.gov.tr/",
    src: "/images/e-nabiz.png",
    alt: "E-Nabız",
  },
  {
    href: "http://www.bimer.gov.tr/",
    src: "/images/bimer.png",
    alt: "BİMER",
  },
  {
    href: "https://www.mhrs.gov.tr/",
    src: "/images/mhrs.png",
    alt: "MHRS",
  },
  {
    href: "http://www.akilciilac.gov.tr/",
    src: "/images/akilci-ilac.png",
    alt: "Akılcı İlaç",
  },
] as const;

export default function ImportantLinks() {
  return (
    <section className="bg-white pb-10 sm:pb-12">
      <div className="container mx-auto max-w-[1170px] px-[15px]">
        <h3 className="modtitle m-0 mb-3 border-b border-[#ccc] pb-[10px] text-[24px] font-light text-[#222433]">
          ÖNEMLİ LİNKLER
        </h3>

        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {links.map((link) => (
            <a
              key={link.src}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.alt}
              className="col-span-6 flex h-[75px] items-center justify-center bg-white md:col-span-2"
            >
              <img
                src={link.src}
                alt={link.alt}
                width={230}
                height={75}
                className="h-full w-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
