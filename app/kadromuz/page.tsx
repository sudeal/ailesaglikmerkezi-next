import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Kadromuz | Çapaklı Aile Sağlığı Merkezi",
};

const hours = [
  { day: "Pazartesi", morning: "08:00 - 12:00", evening: "13:00 - 17:00" },
  {
    day: "Salı (Gezici Hizmet)",
    morning: "08:00 - 12:00",
    evening: "13:00 - 17:00",
  },
  { day: "Çarşamba", morning: "08:00 - 12:00", evening: "13:00 - 17:00" },
  {
    day: "Perşembe (Gezici Hizmet)",
    morning: "08:00 - 12:00",
    evening: "13:00 - 17:00",
  },
  { day: "Cuma", morning: "08:00 - 12:00", evening: "13:00 - 17:00" },
];

function MaleSilhouette() {
  return (
    <svg viewBox="0 0 200 220" className="h-[85%] w-auto max-h-[240px]" aria-hidden>
      <g fill="#5b9bd5">
        <circle cx="100" cy="62" r="38" />
        <path d="M40 210c0-42 27-72 60-72s60 30 60 72H40z" />
        <path d="M58 138c8-22 24-34 42-34s34 12 42 34c-12 10-26 16-42 16s-30-6-42-16z" />
      </g>
    </svg>
  );
}

function FemaleSilhouette() {
  return (
    <svg viewBox="0 0 200 220" className="h-[80%] w-auto max-h-[220px]" aria-hidden>
      <g fill="#ffffff">
        <circle cx="100" cy="58" r="36" />
        <path d="M48 210c4-48 22-78 52-78s48 30 52 78H48z" />
        <path d="M72 40c-10 18-8 38 4 48 6-16 16-24 24-24s18 8 24 24c12-10 14-30 4-48-10-8-22-10-28-10s-18 2-28 10z" />
      </g>
    </svg>
  );
}

function StaffCard({
  name,
  lines,
  male,
  compact,
}: {
  name: string;
  lines?: string[];
  male?: boolean;
  compact?: boolean;
}) {
  return (
    <article className="flex aspect-[2/1] w-full overflow-hidden rounded-[15px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
      <div className="flex w-1/2 items-center justify-center bg-[#e8e8e8]">
        {male ? <MaleSilhouette /> : <FemaleSilhouette />}
      </div>
      <div className="flex w-1/2 flex-col justify-center px-6 py-5 sm:px-10">
        <h2 className="m-0 text-[18px] font-bold text-black sm:text-[20px]">{name}</h2>
        {lines?.map((line) =>
          line.startsWith("İletişim") ? (
            <p key={line} className="mt-2 mb-0 text-[15px] text-[#444444]">
              İletişim : <strong>02368684643</strong>
            </p>
          ) : (
            <p
              key={line}
              className={`mt-2 mb-0 text-[15px] ${
                compact ? "font-bold text-black" : "text-[#444444]"
              }`}
            >
              {line}
            </p>
          ),
        )}
      </div>
    </article>
  );
}

export default function KadromuzPage() {
  return (
    <InnerPage
      title="Kadromuz"
      hideTitle
      hideSidebar
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { label: "Kadromuz" },
      ]}
    >
      <div className="mx-auto w-full max-w-[1050px] py-[50px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <StaffCard
            male
            name="Dr. Halit Şahin"
            lines={[
              "Aile Hekimi",
              "34 No'lu Aile Hekimliği Birimi",
              "İletişim : 02368684643",
            ]}
          />
        </div>
        <div className="col-span-12">
          <StaffCard
            name="Hemşire Rukiye Selvi"
            lines={[
              "Aile Sağlığı Elemanı",
              "34 No'lu Aile Hekimliği Birimi",
            ]}
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <StaffCard compact name="ATT" lines={["Emine Dönmez"]} />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <StaffCard
            compact
            name="Temizlik Personeli"
            lines={["Atika Uzun"]}
          />
        </div>
      </div>
      </div>

      <h2 className="mt-12 mb-6 text-center font-serif text-[28px] font-bold text-black md:text-[32px]">
        Çalışma Planı
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#ccc]">
              <th className="py-2 pr-3 font-bold">Günler</th>
              <th className="px-3 py-2 font-bold">SABAH</th>
              <th className="px-3 py-2 font-bold">AKŞAM</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((row) => (
              <tr key={row.day} className="border-b border-[#e5e5e5]">
                <td className="py-2.5 pr-3">{row.day}</td>
                <td className="px-3 py-2.5">{row.morning}</td>
                <td className="px-3 py-2.5">{row.evening}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </InnerPage>
  );
}
