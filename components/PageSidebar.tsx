import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { menuItems } from "@/lib/navigation";

const saglikBilgileri =
  menuItems.find((item) => item.href === "/saglik-bilgi")?.children ?? [];
const hizmetler =
  menuItems.find((item) => item.href === "/hizmetler")?.children ?? [];
const aileHekimligi =
  menuItems.find((item) => item.href === "/aile-hekimligi")?.children ?? [];

function SidebarBlock({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="mb-8">
      <h3 className="m-0 text-[15px] font-bold tracking-wide text-[#DC0D15] uppercase">
        {title}
      </h3>
      <div className="mt-2 mb-3 border-b border-dashed border-[#ccc]" />
      <ul className="m-0 list-none p-0">
        {links.map((link) => (
          <li key={link.href} className="border-b border-dotted border-[#ddd]">
            <Link
              href={link.href}
              className="flex items-start gap-2 py-2 text-[13px] leading-5 text-[#555555] hover:text-[#DC0D15]"
            >
              <FaChevronRight
                aria-hidden
                className="mt-[3px] shrink-0 text-[10px] text-[#b1b1b1]"
              />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PageSidebar() {
  return (
    <aside>
      <SidebarBlock title="Aile Hekimliği" links={aileHekimligi} />
      <SidebarBlock title="Sağlık Bilgileri" links={saglikBilgileri} />
      <SidebarBlock title="Hizmetlerimiz" links={hizmetler} />
    </aside>
  );
}
