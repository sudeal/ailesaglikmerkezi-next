"use client";

import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

type NavChild = { href: string; label: string };

type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

const menuItems: NavItem[] = [
  { href: "/", label: "Ana Sayfa" },
  {
    href: "/kurumsal",
    label: "Kurumsal",
    children: [
      { href: "/kurumsal/hakkimizda", label: "Hakkımızda" },
      { href: "/kurumsal/vizyon-misyon", label: "Vizyon - Misyon" },
      { href: "/kurumsal/kalite", label: "Kalite Politikamız" },
      { href: "/kurumsal/hizmet-standartlari", label: "Hizmet Standartları" },
      { href: "/kurumsal/esnek-mesai-cizelgesi", label: "Esnek Mesai Saatleri" },
      { href: "/kurumsal/foto-galeri", label: "Fotoğraf Galeri" },
    ],
  },
  { href: "/kadromuz", label: "Kadromuz" },
  {
    href: "/aile-hekimligi",
    label: "Aile Hekimliği",
    children: [
      { href: "/aile-hekimligi/aile-hekimligi-kanunu", label: "Aile Hekimliği Kanunu" },
      { href: "/aile-hekimligi/aile-hekimi-tanimi", label: "Aile Hekiminin Tanımı" },
      { href: "/aile-hekimligi/aile-hekimligi-sss", label: "Sık Sorulan Sorular" },
      { href: "/aile-hekimligi/aile-sagligi-elemani", label: "Aile Sağlığı Elemanı" },
      { href: "/aile-hekimligi/aile-sagligi-merkezi", label: "Aile Sağlığı Merkezi" },
    ],
  },
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: [
      { href: "/hizmetler/gebe-izlem", label: "Gebe İzlemleri" },
      { href: "/hizmetler/bebek-izlem", label: "Bebek İzlemleri" },
      { href: "/hizmetler/saglik-raporu", label: "Verilen Sağlık Raporları" },
      { href: "/hizmetler/enjeksiyon-pansuman", label: "Enjeksiyon - Pansuman" },
      { href: "/hizmetler/bebek-asi-takvimi", label: "Bebek Aşı Takvimi" },
      { href: "/hizmetler/vucut-kitle-indeksi-hesaplama", label: "Vücut Kitle İndeksi Hesaplama" },
    ],
  },
  {
    href: "/saglik-bilgi",
    label: "Sağlık Bilgi",
    children: [
      { href: "/saglik-bilgi/asi-bilgi", label: "Aşı Genel Bilgiler" },
      { href: "/saglik-bilgi/genel-saglik-bilgileri", label: "Genel Sağlık Bilgileri" },
      { href: "/saglik-bilgi/onemli-tel-hat", label: "Önemli Telefon Hatları" },
    ],
  },
  { href: "/iletisim", label: "İletişim" },
];

const itemLinkClass =
  "flex items-center px-[13px] py-2 text-[15px] leading-[30px] text-[#707070] transition-colors duration-150 hover:bg-[#DC0D15] hover:text-white active:bg-[#DC0D15] active:text-white group-hover:bg-[#DC0D15] group-hover:text-white";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div id="yt_mainmenu" className="relative md:w-2/3">
      <ul
        id="meganavigator"
        className="relative z-[60] hidden list-none p-0 md:flex md:justify-end"
      >
        {menuItems.map((item) => {
          return (
            <li key={item.href} className="group relative z-[1] mr-px">
              <Link
                href={item.href}
                title={item.label}
                className={itemLinkClass}
              >
                <span className="menu-title">{item.label}</span>
                {item.children ? (
                  <FaAngleDown aria-hidden className="ml-[5px] text-[14px]" />
                ) : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full z-10 min-w-[220px] border-t border-[#DC0D15] border-b-[6px] border-b-[#DC0D15] bg-white/90 py-2.5 opacity-0 shadow-[0_1px_2px_1px_#ddd] transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
                  <ul className="subnavi m-0 list-none p-0">
                    {item.children.map((child) => (
                      <li key={child.href} className="group/sub relative pb-px">
                        <Link
                          href={child.href}
                          title={child.label}
                          className="relative block py-[3px] pr-3 pl-[25px] text-[14px] leading-[25px] text-[#707070] hover:text-[#DC0D15]"
                        >
                          <span className="absolute top-[11px] left-2 block size-2 rounded-full bg-[#b1b1b1] group-hover/sub:bg-[#DC0D15]" />
                          <span className="menu-title">{child.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end md:hidden">
        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex size-10 items-center justify-center text-[22px] text-[#444444]"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open ? (
        <ul className="absolute top-full right-0 left-auto z-[70] mt-2 w-[260px] list-none bg-white py-2 shadow-[0_1px_4px_rgba(0,0,0,0.2)] md:hidden">
          {menuItems.map((item) => (
            <li key={item.href} className="border-b border-gray-100 last:border-b-0">
              <Link
                href={item.href}
                title={item.label}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-[15px] text-[#707070] hover:bg-[#DC0D15] hover:text-white active:bg-[#DC0D15] active:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
