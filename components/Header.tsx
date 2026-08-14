import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneSquare,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/#",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://twitter.com/#",
    label: "Twitter",
    Icon: FaTwitter,
  },
  {
    href: "https://www.instagram.com/#",
    label: "Instagram",
    Icon: FaInstagram,
  },
] as const;

export default function Header() {
  return (
    <header
      id="yt_header"
      role="banner"
      className="block min-h-[41.5px] bg-[#DC0D15] font-sans text-[14px] leading-[22px] text-[#444444] shadow-[inset_0_-1px_0_rgba(255,255,255,0.07),inset_0_5px_0_rgba(0,0,0,0.3)] md:h-[41.5px] md:overflow-hidden"
    >
      <div className="mx-auto flex h-full max-w-[1170px] items-center justify-between gap-3 px-[15px] py-1.5 md:items-start md:py-0">
        <div className="min-w-0 pt-0 text-[13px] leading-[22px] text-white sm:text-[16px] md:pt-[10px]">
          <a
            href="mailto:info@salihlicapakliasm.com"
            className="mr-3 hidden items-center gap-1.5 md:inline-flex"
          >
            <FaEnvelope aria-hidden className="size-4 shrink-0" />
            info@salihlicapakliasm.com
          </a>
          <a
            href="tel:+902368684643"
            className="inline-flex items-center gap-1.5"
          >
            <FaPhoneSquare aria-hidden className="size-4 shrink-0" />
            <span className="truncate">+90 236 868 46 43</span>
          </a>
        </div>

        <nav aria-label="Sosyal medya" className="shrink-0 md:pt-[5px]">
          <ul className="m-0 flex list-none p-0">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label} className="my-px mr-2.5">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-7 items-center justify-center rounded-full bg-white text-[16px] leading-7 text-[#DC0D15] transition-colors duration-150 hover:bg-[#DC0D15] hover:text-white"
                >
                  <Icon aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
