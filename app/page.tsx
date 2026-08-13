import ContactSection from "@/components/ContactSection";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <main>
      <section className="relative w-full overflow-hidden bg-[#f5f5f5]">
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/capakliasm.png)",
            aspectRatio: "1673 / 624",
          }}
        >
          <div className="h-[246px] w-[675px] pt-[10px] pr-[100px] pb-[10px] pl-[10px]" />
        </div>
      </section>

      <section
        id="yt_spotlight1"
        className="block bg-[#DC0D15] font-sans text-[14px] text-[#444444] shadow-[inset_0_-1px_0_rgba(255,255,255,0.07),inset_0_5px_0_rgba(0,0,0,0.3)]"
      >
        <div className="container mx-auto max-w-[1170px] px-[15px]">
          <div className="row mx-[-15px]">
            <div className="row mx-0 min-h-[180px] px-[15px] py-6">
              <div className="mx-auto w-[85%] max-w-[675px] text-center leading-[1.7]">
                <h3 className="mp-title m-0 text-[22px] leading-7 font-normal text-white">
                  Manisa Çapaklı Aile Sağlığı Merkezi
                </h3>

                <div className="title-after mx-auto my-3 flex w-[60%] items-center">
                  <span className="h-px flex-1 bg-white" />
                  <span className="mx-2 size-2 shrink-0 rotate-45 bg-white" />
                  <span className="h-px flex-1 bg-white" />
                </div>

                <div className="sub-desc-text mx-auto text-[14px] leading-[1.7] text-white">
                  Aile Sağlığı Merkezimizde 1 Aile Hekimi, 1 Aile Sağlığı
                  Elemanı, 1 Yardımcı Sağlık Personeli ve 1 Temizlik Personeli
                  ile hizmet vermekteyiz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickLinks />

      <section
        id="yt_spotlight3"
        className="block relative min-h-[930.5px] overflow-hidden bg-[#000000] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/asmweb.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <ContactSection />
      </section>
    </main>
  );
}
