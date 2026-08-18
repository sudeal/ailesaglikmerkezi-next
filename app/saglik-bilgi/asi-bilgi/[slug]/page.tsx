import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerPage from "@/components/InnerPage";
import { asiArticles, getAsiArticle } from "@/lib/asi-articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return asiArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getAsiArticle(slug);
  return {
    title: article
      ? `${article.title} | Çapaklı Aile Sağlığı Merkezi`
      : "Aşı Bilgisi",
  };
}

export default async function AsiArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getAsiArticle(slug);
  if (!article) notFound();

  return (
    <InnerPage
      title={article.title}
      views={article.views}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/saglik-bilgi", label: "Sağlık Bilgi" },
        { href: "/saglik-bilgi/asi-bilgi", label: "Aşı Genel Bilgiler" },
        { label: article.title },
      ]}
    >
      {article.showImage ? (
        <img
          src={article.detailImage ?? article.image}
          alt={article.title}
          className="mb-6 h-auto w-full object-contain"
        />
      ) : null}
      {article.body.map((block, index) => (
        <div key={`${article.slug}-${index}`}>
          {block.heading ? (
            <h2
              className={`mt-5 mb-2 text-[16px] font-bold ${
                block.red ? "text-[#DC0D15]" : "text-black"
              }`}
            >
              {block.heading}
            </h2>
          ) : null}
          {block.text ? (
            <p className="mb-4">
              {block.prefix ? (
                <strong className="text-[#DC0D15]">{block.prefix} </strong>
              ) : null}
              {block.text}
            </p>
          ) : null}
          {block.list ? (
            <ul
              className={`mb-4 space-y-1 ${
                block.plainList ? "list-none pl-0" : "list-disc pl-5"
              }`}
            >
              {block.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </InnerPage>
  );
}
