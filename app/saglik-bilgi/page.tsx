import type { Metadata } from "next";
import Link from "next/link";
import InnerPage from "@/components/InnerPage";
import { menuItems } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Sağlık Bilgi | Çapaklı Aile Sağlığı Merkezi",
};

const links =
  menuItems.find((item) => item.href === "/saglik-bilgi")?.children ?? [];

export default function SaglikBilgiPage() {
  return (
    <InnerPage
      title="Sağlık Bilgi"
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { label: "Sağlık Bilgi" },
      ]}
    >
      <ul className="m-0 list-none p-0">
        {links.map((link) => (
          <li key={link.href} className="border-b border-dotted border-[#ddd]">
            <Link
              href={link.href}
              className="block py-2 text-[#555555] hover:text-[#DC0D15]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
