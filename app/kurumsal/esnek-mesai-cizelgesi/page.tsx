import type { Metadata } from "next";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Esnek Mesai Saatleri | Çapaklı Aile Sağlığı Merkezi",
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

export default function EsnekMesaiSaatleriPage() {
  return (
    <InnerPage
      title="Esnek Mesai Saatleri"
      hideTitle
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { href: "/kurumsal", label: "Kurumsal" },
        { label: "Esnek Mesai Saatleri" },
      ]}
    >
      <h1 className="m-0 text-center text-[20px] font-bold text-black">
        Çapaklı Aile Sağlığı Merkezi
      </h1>
      <h2 className="mt-1 mb-6 text-center text-[18px] font-bold text-black">
        Esnek Mesai Saatleri
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

      <h2 className="mt-8 mb-0 text-center text-[18px] font-bold text-black">
        Çapaklı Aile Sağlığı Merkezi
      </h2>
      <h3 className="mt-1 mb-10 text-center text-[16px] font-bold text-black">
        Esnek Mesai Saatleri Çizelgesi
      </h3>

      <p className="m-0 font-bold text-[#222433]">Ayrıntılar</p>
      <p className="m-0 text-[14px] text-[#555555]">Gösterim: 3534</p>
    </InnerPage>
  );
}
