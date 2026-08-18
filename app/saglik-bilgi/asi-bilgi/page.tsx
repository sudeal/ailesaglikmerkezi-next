import type { Metadata } from "next";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import InnerPage from "@/components/InnerPage";
import { asiArticles } from "@/lib/asi-articles";

export const metadata: Metadata = {
  title: "Aşı Genel Bilgiler | Çapaklı Aile Sağlığı Merkezi",
};

export default function AsiGenelBilgilerPage() {
  return (
    <InnerPage
      hideTitle
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/saglik-bilgi", label: "Sağlık Bilgi" },
        { label: "Aşı Genel Bilgiler" },
      ]}
    >
      <div className="divide-y divide-[#e5e5e5]">
        {asiArticles.map((article) => (
          <article key={article.slug} className="grid grid-cols-12 gap-5 py-6 first:pt-0">
            <div className="col-span-12 sm:col-span-4">
              <Link href={`/saglik-bilgi/asi-bilgi/${article.slug}`} className="block">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[170px] w-full object-cover sm:h-[180px]"
                />
              </Link>
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h2 className="m-0 text-[20px] font-bold text-black">
                <Link
                  href={`/saglik-bilgi/asi-bilgi/${article.slug}`}
                  className="hover:text-[#DC0D15]"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-1.5 mb-3 flex items-center gap-1.5 text-[13px] text-[#888888]">
                <FaEye aria-hidden />
                <span>{article.views} Tıklamalar</span>
              </p>
              <p className="mb-4 line-clamp-4 text-[15px] leading-6">{article.excerpt}</p>
              <Link
                href={`/saglik-bilgi/asi-bilgi/${article.slug}`}
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
