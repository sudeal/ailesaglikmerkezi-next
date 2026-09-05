import NavMenu from "@/components/NavMenu";
import SiteLogo from "@/components/SiteLogo";

export default function Navbar() {
  return (
    <nav
      id="yt_menuwrap"
      className="sticky top-0 z-50 block min-h-[80px] border-t border-[#DC0D15] bg-white font-sans text-[14px] text-[#444444] shadow-[1px_1px_4px_rgba(0,0,0,0.2)] md:h-[100px] md:min-h-[100px]"
    >
      <div className="container mx-auto h-full max-w-[1170px] px-[15px]">
        <div className="grid h-full grid-cols-12 items-center">
          <div id="yt_logo" className="col-span-10 py-2 lg:col-span-3">
            <SiteLogo />
          </div>
          <div className="col-span-2 flex min-w-0 justify-end lg:col-span-9">
            <NavMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
