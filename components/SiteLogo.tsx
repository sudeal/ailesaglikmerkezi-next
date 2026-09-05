import Link from "next/link";

export const LOGO_SRC = "https://salihlipoyrazdamlariasm.com/images/logo.png";
export const SITE_LOGO_NAME = "Salihli Çapaklı Aile Sağlığı Merkezi";

export default function SiteLogo({
  href = "/",
  className,
  size = "md",
}: {
  href?: string | null;
  className?: string;
  size?: "sm" | "md";
}) {
  const compact = size === "sm";

  const content = (
    <>
      <div
        className={`shrink-0 overflow-hidden ${
          compact ? "h-10 w-10 sm:h-12 sm:w-12" : "h-14 w-14 sm:h-20 sm:w-20"
        }`}
      >
        <img
          src={LOGO_SRC}
          alt={SITE_LOGO_NAME}
          width={317}
          height={80}
          className={`max-w-none ${
            compact
              ? "h-10 w-[160px] sm:h-12 sm:w-[190px]"
              : "h-14 w-[220px] sm:h-20 sm:w-[317px]"
          }`}
        />
      </div>
      <div className={`min-w-0 ${compact ? "leading-[1.1]" : "leading-[1.15]"}`}>
        <div
          className={`font-semibold tracking-wide text-[#DC0D15] uppercase ${
            compact ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[11px]"
          }`}
        >
          T.C. SAĞLIK BAKANLIĞI
        </div>
        <div
          className={`font-semibold tracking-wide text-[#DC0D15] uppercase ${
            compact ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-[12px]"
          }`}
        >
          MANİSA SALİHLİ ÇAPAKLI
        </div>
        <div
          className={`font-bold text-black ${
            compact ? "text-[12px] sm:text-[14px]" : "text-[14px] sm:text-[18px]"
          }`}
        >
          Aile Sağlığı Merkezi
        </div>
      </div>
    </>
  );

  const classes = `logo flex min-w-0 items-center ${
    compact ? "gap-1.5 sm:gap-2" : "gap-2 sm:gap-2.5"
  } ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={classes} title={SITE_LOGO_NAME}>
        {content}
      </Link>
    );
  }

  return (
    <div className={classes} title={SITE_LOGO_NAME}>
      {content}
    </div>
  );
}
