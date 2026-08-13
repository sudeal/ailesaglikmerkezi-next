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
      className="block h-[41.5px] overflow-hidden bg-[#DC0D15] font-sans text-[14px] leading-[22px] text-[#444444] shadow-[inset_0_-1px_0_rgba(255,255,255,0.07),inset_0_5px_0_rgba(0,0,0,0.3)]"
    >
      <div className="mx-auto flex h-full max-w-[1170px] items-start justify-between px-[15px]">
        <div className="hidden pt-[10px] text-[16px] leading-[22px] text-white md:block">
          <a
            href="mailto:info@salihlicapakliasm.com"
            className="inline-flex items-center gap-1.5"
          >
            <FaEnvelope aria-hidden className="size-4 shrink-0" />
            info@salihlicapakliasm.com
          </a>
          <span className="inline-block w-3" aria-hidden />
          <a
            href="tel:+902368684643"
            className="inline-flex items-center gap-1.5"
          >
            <FaPhoneSquare aria-hidden className="size-4 shrink-0" />
            +90 236 868 46 43
          </a>
        </div>

        <nav aria-label="Sosyal medya" className="ml-auto pt-[5px]">
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
