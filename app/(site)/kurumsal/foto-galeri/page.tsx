import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Fotoğraf Galeri | Çapaklı Aile Sağlığı Merkezi",
};

const photoOrder = [1, 2, 3, 4, 5, 6, 11, 7, 8, 9, 10];

const photos = photoOrder.map((n) => ({
  src: `/images/ailesaglikmerkezi${n}.jpeg`,
  alt: `Çapaklı Aile Sağlığı Merkezi fotoğraf ${n}`,
}));

export default function FotoGaleriPage() {
  return (
    <InnerPage
      title="Fotoğraf Galeri"
      hideTitle
      hideSidebar
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/kurumsal", label: "Kurumsal" },
        { label: "Fotoğraf Galeri" },
      ]}
    >
      <h1 className="m-0 font-serif text-[26px] leading-8 font-bold text-black md:text-[28px]">
        Manisa Salihli Çapaklı Aile Sağlığı Merkezi
      </h1>
      <h2 className="mt-3 mb-8 font-serif text-[32px] leading-10 font-bold text-black md:text-[36px]">
        Fotoğraf Galeri
      </h2>
      <div className="grid grid-cols-12 gap-4 md:gap-5">
        {photos.map((photo) => (
          <div key={photo.src} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <img
              src={photo.src}
              alt={photo.alt}
              className="aspect-[3/4] h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
