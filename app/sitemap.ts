import type { MetadataRoute } from "next";
import { asiArticles } from "@/lib/asi-articles";
import { saglikArticles } from "@/lib/saglik-articles";
import { SITE_URL } from "@/lib/site";
import { telefonHatlari } from "@/lib/telefon-hatlari";

const staticPaths = [
  "/",
  "/iletisim",
  "/kadromuz",
  "/aile-hekimligi",
  "/aile-hekimligi/aile-hekimi-tanimi",
  "/aile-hekimligi/aile-hekimligi-kanunu",
  "/aile-hekimligi/aile-hekimligi-sss",
  "/aile-hekimligi/aile-sagligi-elemani",
  "/aile-hekimligi/aile-sagligi-merkezi",
  "/hizmetler",
  "/hizmetler/bebek-asi-takvimi",
  "/hizmetler/bebek-izlem",
  "/hizmetler/enjeksiyon-pansuman",
  "/hizmetler/gebe-izlem",
  "/hizmetler/saglik-raporu",
  "/hizmetler/vucut-kitle-indeksi-hesaplama",
  "/kurumsal",
  "/kurumsal/esnek-mesai-cizelgesi",
  "/kurumsal/foto-galeri",
  "/kurumsal/hakkimizda",
  "/kurumsal/hizmet-standartlari",
  "/kurumsal/kalite",
  "/kurumsal/vizyon-misyon",
  "/saglik-bilgi",
  "/saglik-bilgi/asi-bilgi",
  "/saglik-bilgi/genel-saglik-bilgileri",
  "/saglik-bilgi/onemli-tel-hat",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const articleEntries = [
    ...saglikArticles.map((article) => ({
      url: `${SITE_URL}/saglik-bilgi/genel-saglik-bilgileri/${article.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...asiArticles.map((article) => ({
      url: `${SITE_URL}/saglik-bilgi/asi-bilgi/${article.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...telefonHatlari.map((hat) => ({
      url: `${SITE_URL}/saglik-bilgi/onemli-tel-hat/${hat.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticEntries, ...articleEntries];
}
