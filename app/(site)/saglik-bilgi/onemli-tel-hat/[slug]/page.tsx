import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerPage from "@/components/InnerPage";
import { getTelefonHatti, telefonHatlari } from "@/lib/telefon-hatlari";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return telefonHatlari.map((hat) => ({ slug: hat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hat = getTelefonHatti(slug);
  return {
    title: hat
      ? `${hat.title} | Çapaklı Aile Sağlığı Merkezi`
      : "Önemli Telefon Hatları",
  };
}

export default async function TelefonHattiPage({ params }: Props) {
  const { slug } = await params;
  const hat = getTelefonHatti(slug);
  if (!hat) notFound();

  return (
    <InnerPage
      title={hat.title}
      views={hat.views}
      date={hat.date}
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/saglik-bilgi", label: "Sağlık Bilgi" },
        { href: "/saglik-bilgi/onemli-tel-hat", label: "Önemli Telefon Hatları" },
        { label: hat.title },
      ]}
    >
      <div className="after:clear-both after:table after:content-['']">
        <figure className="mb-4 w-[180px] sm:float-left sm:mr-5">
          <img
            src={hat.image}
            alt={hat.title}
            className="h-auto w-full object-contain"
          />
          {hat.caption ? (
            <figcaption className="mt-1 text-center text-[13px] text-[#777777]">
              {hat.caption}
            </figcaption>
          ) : null}
        </figure>
        {hat.body
          ? hat.body.map((block, index) => (
              <div key={`${hat.slug}-${index}`}>
                {block.heading ? (
                  <h2
                    className={`mt-5 mb-2 text-[16px] font-bold ${
                      block.red ? "text-[#DC0D15]" : "text-black"
                    }`}
                  >
                    {block.heading}
                  </h2>
                ) : null}
                {block.link ? (
                  <p className="mb-4">
                    {block.link.prefix ? (
                      <strong>{block.link.prefix} </strong>
                    ) : null}
                    <a
                      href={block.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#DC0D15] hover:underline"
                    >
                      {block.link.label}
                    </a>
                  </p>
                ) : null}
                {block.text ? <p className="mb-4">{block.text}</p> : null}
                {block.list ? (
                  <ul className="mb-4 list-none space-y-1 pl-0">
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))
          : (
              <p className="mb-4 whitespace-pre-line">{hat.excerpt}</p>
            )}
      </div>
    </InnerPage>
  );
}
