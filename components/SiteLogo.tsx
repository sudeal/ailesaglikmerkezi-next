import Link from "next/link";

export const LOGO_SRC = "https://salihlipoyrazdamlariasm.com/images/logo.png";
export const SITE_LOGO_NAME = "Salihli Çapaklı Aile Sağlığı Merkezi";

export default function SiteLogo({
  href = "/",
  className,
}: {
  href?: string | null;
  className?: string;
}) {
  const content = (
    <>
      <div className="h-14 w-14 shrink-0 overflow-hidden sm:h-20 sm:w-20">
        <img
          src={LOGO_SRC}
          alt={SITE_LOGO_NAME}
          width={317}
          height={80}
          className="h-14 w-[220px] max-w-none sm:h-20 sm:w-[317px]"
        />
      </div>
      <div className="min-w-0 leading-[1.15]">
        <div className="text-[9px] font-semibold tracking-wide text-[#DC0D15] uppercase sm:text-[11px]">
          T.C. SAĞLIK BAKANLIĞI
        </div>
        <div className="text-[10px] font-semibold tracking-wide text-[#DC0D15] uppercase sm:text-[12px]">
          MANİSA SALİHLİ ÇAPAKLI
        </div>
        <div className="text-[14px] font-bold text-black sm:text-[18px]">
          Aile Sağlığı Merkezi
        </div>
      </div>
    </>
  );

  const classes = `logo flex min-w-0 items-center gap-2 sm:gap-2.5 ${className ?? ""}`;

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
