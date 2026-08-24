import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import {
  FaEnvelope,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://www.facebook.com/#", label: "Facebook", Icon: FaFacebookF },
  { href: "https://twitter.com/#", label: "Twitter", Icon: FaTwitter },
  { href: "https://plus.google.com/u/0/#", label: "Google-Plus", Icon: FaGooglePlusG },
  { href: "https://www.instagram.com/#", label: "Instagram", Icon: FaInstagram },
] as const;

const hours = [
  { day: "Pazartesi", time: "08:00 - 17:00" },
  { day: "Salı", time: "08:00 - 17:00" },
  { day: "Çarşamba", time: "08:00 - 17:00" },
  { day: "Perşembe", time: "08:00 - 17:00" },
  { day: "Cuma", time: "08:00 - 17:00" },
  { day: "Cumartesi-Pazar", time: "RESMİ TATİL", bold: true },
] as const;

const footerLinks = [
  { href: "/aile-hekimligi/aile-hekimligi-sss", label: "SIK SORULAN SORULAR" },
  { href: "/saglik-bilgi/onemli-tel-hat", label: "ALO SAĞLIK HATLARI" },
  { href: "http://www.terorarananlar.pol.tr", label: "ALO 140 TERÖR İHBAR HATTI", external: true },
  { href: "/hizmetler/bebek-asi-takvimi", label: "BEBEK AŞI TAKVİMİ" },
  { href: "/aile-hekimligi", label: "AİLE HEKİMLİĞİ" },
  { href: "/hizmetler", label: "AİLE SAĞLIĞI MERKEZİ" },
  { href: "/saglik-bilgi", label: "SAĞLIK AKTÜEL HABER" },
] as const;

function SectionTitle({ children }: { children: string }) {
  return (
    <h3 className="m-0 mb-5 text-[16px] font-normal tracking-wide text-white uppercase">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] font-sans text-[14px] text-white">
      <div className="container mx-auto max-w-[1170px] px-[15px] py-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-6">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <Link href="/" className="mb-6 block">
              <img
                src="/images/logo.png"
                alt="Manisa Salihli Çapaklı Aile Sağlığı Merkezi"
                width={280}
                height={70}
                className="h-auto w-full max-w-[260px]"
              />
            </Link>
            <div className="flex gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center bg-white/15 text-[16px] text-white transition-colors hover:bg-[#DC0D15]"
                >
                  <Icon aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <SectionTitle>ÇALIŞMA SAATLERİ</SectionTitle>
            <ul className="m-0 list-none space-y-2 p-0">
              {hours.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between gap-4 text-[13px] leading-6 text-white"
                >
                  <span>{item.day}</span>
                  <span className={"bold" in item && item.bold ? "font-bold" : ""}>
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <SectionTitle>LİNKLER</SectionTitle>
            <ul className="m-0 list-none space-y-2 p-0">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] uppercase text-white hover:text-[#DC0D15]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[13px] uppercase text-white hover:text-[#DC0D15]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <SectionTitle>İLETİŞİM BİLGİLERİ</SectionTitle>
            <ul className="m-0 list-none space-y-4 p-0">
              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[16px] text-[#0083e8]">
                  <FaMapMarkerAlt aria-hidden />
                </span>
                <p className="m-0 pt-1 text-[13px] leading-5 text-white">
                  Çapaklı Mah. Çapaklı Cad. No:49 Salihli/Manisa
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[14px] text-[#0083e8]">
                  <FaEnvelope aria-hidden />
                </span>
                <a
                  href="mailto:info@salihlicapakliasm.com"
                  className="text-[13px] text-white hover:underline"
                >
                  info@salihlicapakliasm.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[18px] text-[#0083e8]">
                  <FaMobileAlt aria-hidden />
                </span>
                <a
                  href="tel:+902368684643"
                  className="text-[13px] text-white hover:underline"
                >
                  +90 236 868 46 43
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container mx-auto max-w-[1170px] px-[15px] py-6 text-center text-[13px] leading-6 text-[#cfcfcf]">
          <p className="m-0">
            Copyright © 2026 Salihli Çapaklı Aile Sağlığı Merkezi
          </p>
          <p className="m-0">
            <a href={SITE_URL} className="text-[#cfcfcf] hover:text-white">
              salihlicapakliasm.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
