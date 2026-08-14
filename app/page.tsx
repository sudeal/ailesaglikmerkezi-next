import ContactSection from "@/components/ContactSection";
import HealthInfoSection from "@/components/HealthInfoSection";
import ImportantLinks from "@/components/ImportantLinks";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative w-full overflow-hidden bg-[#f5f5f5]">
        <div
          className="h-[160px] w-full bg-cover bg-center bg-no-repeat sm:h-[240px] md:h-auto md:aspect-[1673/624]"
          style={{
            backgroundImage: "url(/images/capakliasm.png)",
          }}
        />
      </section>

      <section
        id="yt_spotlight1"
        className="block bg-[#DC0D15] font-sans text-[14px] text-[#444444] shadow-[inset_0_-1px_0_rgba(255,255,255,0.07),inset_0_5px_0_rgba(0,0,0,0.3)]"
      >
        <div className="container mx-auto max-w-[1170px] px-[15px]">
          <div className="grid grid-cols-12 py-8 md:min-h-[180px] md:py-6">
            <div className="col-span-12 px-1 text-center leading-[1.7] md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
              <h3 className="mp-title m-0 text-[20px] leading-7 font-normal text-white sm:text-[22px]">
                Manisa Çapaklı Aile Sağlığı Merkezi
              </h3>

              <div className="title-after mx-auto my-3 flex w-[80%] max-w-[400px] items-center sm:w-[60%]">
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
      </section>

      <QuickLinks />

      <section
        id="yt_spotlight3"
        className="relative block min-h-0 overflow-hidden bg-[#000000] bg-cover bg-center bg-no-repeat md:min-h-[930.5px]"
        style={{ backgroundImage: "url(/images/asmweb.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <ContactSection />
      </section>

      <HealthInfoSection />
      <ImportantLinks />
    </main>
  );
}
