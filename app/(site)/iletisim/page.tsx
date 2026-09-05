import type { Metadata } from "next";
import {
  FaEnvelope,
  FaFax,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import InnerPage from "@/components/InnerPage";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "İletişim | Çapaklı Aile Sağlığı Merkezi",
};

const ADDRESS = "Çapaklı Mahallesi Çapaklı Caddesi No:49 Salihli/Manisa";
const PHONE_DISPLAY = "0236 868 46 43";
const EMAIL = "info@salihlicapakliasm.com";
const MAP_LAT = 38.56506;
const MAP_LNG = 28.20261;
const mapSrc = `https://maps.google.com/maps?q=${MAP_LAT},${MAP_LNG}+(%C3%87apakl%C4%B1+Aile+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Merkezi)&ll=${MAP_LAT},${MAP_LNG}&z=18&hl=tr&ie=UTF8&t=m&iwloc=A&output=embed`;
const mapsOpenHref = `https://www.google.com/maps/search/?api=1&query=${MAP_LAT},${MAP_LNG}`;
const mapsDirHref = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;

const offices = [
  {
    title: "Manisa İl Sağlık Müdürlüğü",
    lines: [
      { Icon: FaMapMarkerAlt, text: "Akmescit Mh. İzmir Cad. No:291 Yunusemre / MANİSA 45010" },
      { Icon: FaPhone, text: "0236 239 60 49 - 01 - 02", href: "tel:+902362396049" },
      { Icon: FaFax, text: "0 236 234 89 01" },
    ],
  },
  {
    title: "Manisa Salihli İlçe Sağlık Müdürlüğü",
    lines: [
      { Icon: FaMapMarkerAlt, text: "Sağlık Mh. Ziya Gökalp Cd. No:41 Eski SSK Hastanesi – Salihli / MANİSA" },
      { Icon: FaPhone, text: "(236) 714 26 78", href: "tel:+902367142678" },
      { Icon: FaFax, text: "(236) 714 16 85" },
    ],
  },
  {
    title: "Salihli Çapaklı Aile Sağlığı Merkezi",
    lines: [
      { Icon: FaMapMarkerAlt, text: ADDRESS },
      { Icon: FaPhone, text: PHONE_DISPLAY, href: "tel:+902368684643" },
      { Icon: FaFax, text: PHONE_DISPLAY },
      { Icon: FaEnvelope, text: EMAIL, href: `mailto:${EMAIL}`, accent: true },
    ],
  },
];

export default function IletisimPage() {
  return (
    <>
      <InnerPage
        title="İletişim"
        hideTitle
        hideSidebar
        crumbs={[
          { href: "/", label: "Ana Sayfa" },
          { label: "İletişim" },
        ]}
      >
        <div className="grid grid-cols-12 gap-8">
          {offices.map((office) => (
            <div key={office.title} className="col-span-12 md:col-span-4">
              <h2 className="m-0 mb-4 text-[16px] font-bold text-[#DC0D15]">
                {office.title}
              </h2>
              <ul className="m-0 list-none space-y-3 p-0 text-[14px] leading-6 text-[#444444]">
                {office.lines.map((line, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <line.Icon
                      aria-hidden
                      className="mt-1 shrink-0 text-[14px] text-[#555555]"
                    />
                    {line.href ? (
                      <a
                        href={line.href}
                        className={
                          line.accent
                            ? "text-[#DC0D15] hover:underline"
                            : "hover:text-[#DC0D15]"
                        }
                      >
                        {line.text}
                      </a>
                    ) : (
                      <span>{line.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden bg-[#e8eaed]">
          <iframe
            title="Çapaklı Aile Sağlığı Merkezi konumu"
            src={mapSrc}
            className="h-[420px] w-full border-0 sm:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-x-3 top-3 sm:inset-x-auto sm:left-3 sm:w-[340px]">
            <div className="pointer-events-auto rounded-lg bg-white p-3 shadow-[0_1px_4px_rgba(0,0,0,0.28)]">
              <p className="m-0 text-[15px] font-medium text-[#202124]">
                Çapaklı Aile Sağlığı Merkezi
              </p>
              <p className="mt-1 mb-3 text-[13px] leading-5 text-[#5f6368]">
                Çapaklı Mahallesi, Çapaklı Caddesi No:49, 45320 Salihli/Manisa,
                Türkiye
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={mapsOpenHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded bg-[#1a73e8] px-3 py-2 text-[13px] font-medium text-white hover:bg-[#1557b0]"
                >
                  Haritalar'da aç
                  <span aria-hidden className="text-[11px]">
                    ↗
                  </span>
                </a>
                <a
                  href={mapsDirHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yol tarifi"
                  className="inline-flex size-9 items-center justify-center rounded-full bg-[#1a73e8] text-white hover:bg-[#1557b0]"
                >
                  ➤
                </a>
              </div>
            </div>
          </div>
        </div>
      </InnerPage>

      <section
        className="relative block min-h-0 overflow-hidden bg-[#000000] bg-cover bg-center bg-no-repeat md:min-h-[930.5px]"
        style={{ backgroundImage: "url(/images/asmweb.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <ContactSection />
      </section>
    </>
  );
}
