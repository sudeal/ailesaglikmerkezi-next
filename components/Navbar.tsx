import Link from "next/link";
import NavMenu from "@/components/NavMenu";

const LOGO_SRC = "https://salihlipoyrazdamlariasm.com/images/logo.png";
const SITE_NAME = "Salihli Çapaklı Aile Sağlığı Merkezi";

export default function Navbar() {
  return (
    <nav
      id="yt_menuwrap"
      className="sticky top-0 z-50 block h-[100px] border-t border-[#DC0D15] bg-white font-sans text-[14px] text-[#444444] shadow-[1px_1px_4px_rgba(0,0,0,0.2)]"
    >
      <div className="container mx-auto h-full max-w-[1170px] px-[15px]">
        <div className="row flex h-full items-center justify-between">
          <div className="row flex h-full w-full items-center justify-between">
            <div id="yt_logo" className="w-[75%] py-2.5 md:w-1/3">
              <Link
                href="/"
                className="logo flex items-center gap-2.5"
                title={SITE_NAME}
              >
                <div className="h-20 w-20 shrink-0 overflow-hidden">
                  <img
                    src={LOGO_SRC}
                    alt={SITE_NAME}
                    width={317}
                    height={80}
                    className="h-20 w-[317px] max-w-none"
                  />
                </div>
                <div className="min-w-0 leading-[1.15]">
                  <div className="text-[11px] font-semibold tracking-wide text-[#DC0D15] uppercase">
                    T.C. SAĞLIK BAKANLIĞI
                  </div>
                  <div className="text-[12px] font-semibold tracking-wide text-[#DC0D15] uppercase">
                    MANİSA SALİHLİ ÇAPAKLI
                  </div>
                  <div className="text-[18px] font-bold text-black">
                    Aile Sağlığı Merkezi
                  </div>
                </div>
              </Link>
            </div>
            <NavMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
