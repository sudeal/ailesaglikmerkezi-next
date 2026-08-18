"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { menuItems } from "@/lib/navigation";

const saglikBilgileri =
  menuItems.find((item) => item.href === "/saglik-bilgi")?.children ?? [];
const hizmetler =
  menuItems.find((item) => item.href === "/hizmetler")?.children ?? [];
const aileHekimligi =
  menuItems.find((item) => item.href === "/aile-hekimligi")?.children ?? [];
const kurumsal =
  menuItems.find((item) => item.href === "/kurumsal")?.children ?? [];

function SidebarBlock({
  title,
  links,
  pathname,
}: {
  title: string;
  links: { href: string; label: string }[];
  pathname: string;
}) {
  return (
    <div className="mb-8">
      <h3 className="m-0 border-b-2 border-[#DC0D15] pb-2 text-[15px] font-bold tracking-wide text-[#DC0D15] uppercase">
        {title}
      </h3>
      <ul className="m-0 mt-2 list-none p-0">
        {links.map((link) => {
          const active =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <li key={link.href} className="border-b border-dotted border-[#ddd]">
              <Link
                href={link.href}
                className={`flex items-start gap-2 py-2 text-[13px] leading-5 hover:text-[#DC0D15] ${
                  active ? "text-[#DC0D15]" : "text-[#555555]"
                }`}
              >
                <FaChevronRight
                  aria-hidden
                  className={`mt-[3px] shrink-0 text-[10px] ${
                    active ? "text-[#DC0D15]" : "text-[#b1b1b1]"
                  }`}
                />
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function PageSidebar() {
  const pathname = usePathname();

  if (pathname.startsWith("/saglik-bilgi")) {
    return (
      <aside>
        <SidebarBlock title="Sağlık Bilgileri" links={saglikBilgileri} pathname={pathname} />
        <SidebarBlock title="Hizmetlerimiz" links={hizmetler} pathname={pathname} />
        <SidebarBlock title="Aile Hekimliği" links={aileHekimligi} pathname={pathname} />
      </aside>
    );
  }

  if (pathname.startsWith("/hizmetler")) {
    return (
      <aside>
        <SidebarBlock title="Sağlık Bilgileri" links={saglikBilgileri} pathname={pathname} />
        <SidebarBlock title="Hizmetlerimiz" links={hizmetler} pathname={pathname} />
      </aside>
    );
  }

  if (pathname.startsWith("/kurumsal")) {
    return (
      <aside>
        <SidebarBlock title="Kurumsal" links={kurumsal} pathname={pathname} />
        <SidebarBlock title="Hizmetlerimiz" links={hizmetler} pathname={pathname} />
      </aside>
    );
  }

  if (pathname.startsWith("/aile-hekimligi")) {
    return (
      <aside>
        <SidebarBlock title="Aile Hekimliği" links={aileHekimligi} pathname={pathname} />
        <SidebarBlock title="Sağlık Bilgileri" links={saglikBilgileri} pathname={pathname} />
        <SidebarBlock title="Hizmetlerimiz" links={hizmetler} pathname={pathname} />
      </aside>
    );
  }

  return (
    <aside>
      <SidebarBlock title="Sağlık Bilgileri" links={saglikBilgileri} pathname={pathname} />
      <SidebarBlock title="Hizmetlerimiz" links={hizmetler} pathname={pathname} />
    </aside>
  );
}
