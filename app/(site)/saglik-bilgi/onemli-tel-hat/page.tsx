import type { Metadata } from "next";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import InnerPage from "@/components/InnerPage";
import { telefonHatlari } from "@/lib/telefon-hatlari";

export const metadata: Metadata = {
  title: "Önemli Telefon Hatları | Çapaklı Aile Sağlığı Merkezi",
};

export default function OnemliTelefonHatlariPage() {
  return (
    <InnerPage
      hideTitle
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/saglik-bilgi", label: "Sağlık Bilgi" },
        { label: "Önemli Telefon Hatları" },
      ]}
    >
      <div className="divide-y divide-[#e5e5e5]">
        {telefonHatlari.map((hat) => (
          <article
            key={hat.slug}
            className="grid grid-cols-12 items-start gap-5 py-7 first:pt-0"
          >
            <div className="col-span-12 flex justify-center sm:col-span-3 sm:justify-start">
              <Link
                href={`/saglik-bilgi/onemli-tel-hat/${hat.slug}`}
                className="block"
              >
                <img
                  src={hat.image}
                  alt={hat.title}
                  className="h-auto w-[170px] max-w-full object-contain"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-9">
              <h2 className="m-0 text-[20px] font-bold text-black">
                <Link
                  href={`/saglik-bilgi/onemli-tel-hat/${hat.slug}`}
                  className="hover:text-[#DC0D15]"
                >
                  {hat.title}
                </Link>
              </h2>
              <p className="mt-1.5 mb-3 flex items-center gap-1.5 text-[13px] text-[#888888]">
                <FaEye aria-hidden />
                <span>{hat.views} Tıklamalar</span>
              </p>
              <p className="mb-4 whitespace-pre-line text-[15px] leading-6">
                {hat.excerpt}
              </p>
              <Link
                href={`/saglik-bilgi/onemli-tel-hat/${hat.slug}`}
                className="inline-block bg-[#DC0D15] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#c00c13]"
              >
                Devamını oku...
              </Link>
            </div>
          </article>
        ))}
      </div>
    </InnerPage>
  );
}
