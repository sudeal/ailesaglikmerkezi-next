"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VISIBLE = 4;

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

const maxIndex = services.length - VISIBLE;

export default function ServicesSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-8">
      <h3 className="m-0 border-b border-[#ccc] pb-2.5 text-[24px] font-light text-[#222433]">
        Hizmetlerimiz
      </h3>

      <div className="relative mt-5">
        <button
          type="button"
          aria-label="Önceki"
          disabled={index === 0}
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          className="absolute top-[95px] left-0 z-10 flex h-16 w-8 items-center justify-center bg-black/40 text-white disabled:cursor-default disabled:opacity-30"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Sonraki"
          disabled={index >= maxIndex}
          onClick={() => setIndex((value) => Math.min(maxIndex, value + 1))}
          className="absolute top-[95px] right-0 z-10 flex h-16 w-8 items-center justify-center bg-black/40 text-white disabled:cursor-default disabled:opacity-30"
        >
          <FaChevronRight />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(calc(-${index} * (100% + 1rem) / 4))`,
            }}
          >
            {services.map((service) => (
              <article
                key={service.href}
                className="min-w-0 shrink-0"
                style={{ width: "calc((100% - 3rem) / 4)" }}
              >
                <Link href={service.href} className="block">
                  <img
                    src={service.src}
                    alt={service.title}
                    width={370}
                    height={270}
                    className="h-[180px] w-full object-cover"
                  />
                </Link>
                <h4 className="mt-2.5 mb-1.5 text-[18px] font-bold text-[#DC0D15]">
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
