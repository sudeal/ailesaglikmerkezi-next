"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const services = [
  {
    src: "/images/foto5.jpg",
    href: "/hizmetler/enjeksiyon-pansuman",
    title: "Enjeksiyon - Pansuman",
    description:
      "Çapaklı Aile Sağlığı Merkezimizde hafta içi mesai saatleri arasında enjeksiyon ve pansuman işlemlerinizi ücretsiz olarak yaptırabilirsiniz.",
  },
  {
    src: "/images/foto6.jpg",
    href: "/hizmetler/bebek-asi-takvimi",
    title: "Bebek Aşı Takvimi",
    description:
      "Bebek Aşı Takvimi Hesaplama - Sağlık Bakanlığı tarafından ülkemizde uygulanan aşı takvimi;",
  },
  {
    src: "/images/foto1.jpg",
    href: "/hizmetler/vucut-kitle-indeksi-hesaplama",
    title: "Vücut Kitle İndeksi",
    description:
      "Vücut Kitle İndeksi Hesaplama boy ve kilonuzu girerek Vücut Kitle İndeksinizi (VKİ) hesaplayabilirsiniz.",
  },
  {
    src: "/images/foto2.jpg",
    href: "/hizmetler/bebek-izlem",
    title: "Bebek İzlemleri",
    description:
      "Koruyucu sağlık hizmetlerinin en önemli parçasını taramalar oluşturur. Tarama testlerinin en yaygın şekilde uygulandığı dönem yenidoğan dönemidir.",
  },
  {
    src: "/images/foto3.jpg",
    href: "/hizmetler/gebe-izlem",
    title: "Gebe İzlem",
    description: (
      <>
        <strong>Birinci İzlem</strong> (Gebeliğin 14. haftasında veya ilk 14
        hafta içerisinde, süresi 30 dakika olmalı)
      </>
    ),
  },
  {
    src: "/images/foto4.jpg",
    href: "/hizmetler/saglik-raporu",
    title: "Verilen Raporlar",
    description:
      "Ehliyet Raporu: Tamamen sağlıklı kişilere A2-B-C-D-E sınıfı ehliyet raporları verilebilmektedir.",
  },
];

function useVisibleCount() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    function update() {
      const width = window.innerWidth;
      if (width >= 1280) setVisible(4);
      else if (width >= 1024) setVisible(3);
      else if (width >= 640) setVisible(2);
      else setVisible(1);
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

export default function ServicesSlider() {
  const [index, setIndex] = useState(0);
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, services.length - visible);
  const gap = 16;

  useEffect(() => {
    setIndex((value) => Math.min(value, maxIndex));
  }, [maxIndex]);

  return (
    <div className="mt-8">
      <h3 className="m-0 border-b border-[#ccc] pb-2.5 text-[20px] font-light text-[#222433] sm:text-[24px]">
        Hizmetlerimiz
      </h3>

      <div className="relative mt-5 px-8 sm:px-10">
        <button
          type="button"
          aria-label="Önceki"
          disabled={index === 0}
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          className="absolute top-[70px] left-0 z-10 flex h-12 w-7 items-center justify-center bg-black/40 text-white sm:top-[95px] sm:h-16 sm:w-8 disabled:cursor-default disabled:opacity-30"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Sonraki"
          disabled={index >= maxIndex}
          onClick={() => setIndex((value) => Math.min(maxIndex, value + 1))}
          className="absolute top-[70px] right-0 z-10 flex h-12 w-7 items-center justify-center bg-black/40 text-white sm:top-[95px] sm:h-16 sm:w-8 disabled:cursor-default disabled:opacity-30"
        >
          <FaChevronRight />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              gap,
              transform: `translateX(calc(-${index} * (100% + ${gap}px) / ${visible}))`,
            }}
          >
            {services.map((service) => (
              <article
                key={service.href}
                className="min-w-0 shrink-0"
                style={{
                  width: `calc((100% - ${(visible - 1) * gap}px) / ${visible})`,
                }}
              >
                <Link href={service.href} className="block">
                  <img
                    src={service.src}
                    alt={service.title}
                    width={370}
                    height={270}
                    className="h-[140px] w-full object-cover sm:h-[180px]"
                  />
                </Link>
                <h4 className="mt-2.5 mb-1.5 text-[16px] font-bold text-[#DC0D15] sm:text-[18px]">
                  <Link href={service.href}>{service.title}</Link>
                </h4>
                <p className="m-0 line-clamp-3 text-[13px] leading-[1.6] text-[#444444]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
