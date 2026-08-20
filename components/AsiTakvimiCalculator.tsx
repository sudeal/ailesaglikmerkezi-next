"use client";

import { FormEvent, useState } from "react";

const MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

type Vaccine = {
  name: string;
  ageLabel: string;
  months: number;
  color: "teal" | "grey";
};

const LEFT: Vaccine[] = [
  { name: "HEPATİT I AŞISI", ageLabel: "Doğum", months: 0, color: "teal" },
  { name: "HEPATİT II AŞISI", ageLabel: "1 Ay", months: 1, color: "grey" },
  { name: "BCG AŞISI", ageLabel: "2 Ay", months: 2, color: "teal" },
  { name: "DaBT.IPA.Hib I", ageLabel: "2 Ay", months: 2, color: "grey" },
  { name: "KPA I", ageLabel: "2 Ay", months: 2, color: "teal" },
  { name: "DaBT.IPA.Hib II", ageLabel: "4 Ay", months: 4, color: "grey" },
  { name: "KPA II", ageLabel: "4 Ay", months: 4, color: "grey" },
  { name: "HEPATİT B III", ageLabel: "6 Ay", months: 6, color: "teal" },
  { name: "DaBT.IPA.Hib III", ageLabel: "6 Ay", months: 6, color: "teal" },
  { name: "KPA III", ageLabel: "6 Ay", months: 6, color: "teal" },
  { name: "OPV I", ageLabel: "6 Ay", months: 6, color: "teal" },
];

const RIGHT: Vaccine[] = [
  { name: "KKK I", ageLabel: "12 Ay", months: 12, color: "grey" },
  { name: "KPA RAPEL", ageLabel: "12 Ay", months: 12, color: "grey" },
  { name: "SU ÇİÇEĞİ", ageLabel: "12 Ay", months: 12, color: "grey" },
  { name: "DaBT.IPA.Hib R", ageLabel: "18 Ay", months: 18, color: "teal" },
  { name: "HEPATİT A I", ageLabel: "18 Ay", months: 18, color: "teal" },
  { name: "OPV II", ageLabel: "18 Ay", months: 18, color: "teal" },
  { name: "HEPATİT A II", ageLabel: "24 Ay", months: 24, color: "grey" },
  { name: "KKK RAPEL", ageLabel: "Ana Okul", months: 48, color: "teal" },
  { name: "DaBT.IPA", ageLabel: "1. Sınıf", months: 72, color: "grey" },
  { name: "TD", ageLabel: "8. Sınıf", months: 156, color: "teal" },
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function addMonths(year: number, monthIndex: number, day: number, months: number) {
  const date = new Date(year, monthIndex + months, 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  date.setDate(Math.min(day, lastDay));
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
}

function VaccineColumn({
  items,
  dates,
}: {
  items: Vaccine[];
  dates: Record<string, string>;
}) {
  return (
    <div className="col-span-12 md:col-span-6">
      {items.map((item) => (
        <div
          key={item.name}
          className={`grid grid-cols-12 items-center gap-2 px-2 py-1.5 text-[13px] ${
            item.color === "teal" ? "bg-[#b7dfe0]" : "bg-[#e8e8e8]"
          }`}
        >
          <span className="col-span-12 font-semibold text-[#333] sm:col-span-5">
            {item.name}
          </span>
          <span className="col-span-7 sm:col-span-4">
            <span className="block min-h-[26px] border border-[#ccc] bg-white px-1 py-0.5 text-center text-[12px] text-[#222]">
              {dates[item.name] ?? ""}
            </span>
          </span>
          <span className="col-span-5 text-right text-[12px] text-[#333] sm:col-span-3">
            {item.ageLabel}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AsiTakvimiCalculator() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("0");
  const [year, setYear] = useState("");
  const [dates, setDates] = useState<Record<string, string>>({});

  function handleCalculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const d = Number(day);
    const y = Number(year);
    const m = Number(month);
    if (!d || d < 1 || d > 31 || !y || y < 1990 || y > 2100) return;

    const next: Record<string, string> = {};
    for (const item of [...LEFT, ...RIGHT]) {
      next[item.name] = addMonths(y, m, d, item.months);
    }
    setDates(next);
  }

  function handleClear() {
    setDay("");
    setMonth("0");
    setYear("");
    setDates({});
  }

  return (
    <div className="mb-10">
      <form onSubmit={handleCalculate} className="mx-auto mb-8 max-w-[280px]">
        <h2 className="mb-4 text-center text-[16px] font-bold tracking-wide text-black">
          DOĞUM TARİHİ GİRİNİZ
        </h2>
        <div className="mb-3 grid grid-cols-12 items-center gap-2">
          <label htmlFor="asi-gun" className="col-span-4 text-[14px]">
            GÜN
          </label>
          <input
            id="asi-gun"
            value={day}
            onChange={(event) => setDay(event.target.value.replace(/\D/g, "").slice(0, 2))}
            className="col-span-8 border border-[#bbb] bg-white px-2 py-1 text-[14px] outline-none"
            inputMode="numeric"
            maxLength={2}
          />
        </div>
        <div className="mb-3 grid grid-cols-12 items-center gap-2">
          <label htmlFor="asi-ay" className="col-span-4 text-[14px]">
            AY
          </label>
          <select
            id="asi-ay"
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            className="col-span-8 border border-[#bbb] bg-white px-2 py-1 text-[14px] outline-none"
          >
            {MONTHS.map((name, index) => (
              <option key={name} value={String(index)}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 grid grid-cols-12 items-center gap-2">
          <label htmlFor="asi-yil" className="col-span-4 text-[14px]">
            YIL
          </label>
          <input
            id="asi-yil"
            value={year}
            onChange={(event) => setYear(event.target.value.replace(/\D/g, "").slice(0, 4))}
            className="col-span-8 border border-[#bbb] bg-white px-2 py-1 text-[14px] outline-none"
            inputMode="numeric"
            maxLength={4}
          />
        </div>
        <div className="flex justify-center gap-3">
          <button
            type="submit"
            className="bg-[#c8c8c8] px-4 py-1.5 text-[13px] font-semibold text-black hover:bg-[#b8b8b8]"
          >
            HESAPLA
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-[#c8c8c8] px-4 py-1.5 text-[13px] font-semibold text-black hover:bg-[#b8b8b8]"
          >
            TEMİZLE
          </button>
        </div>
      </form>

      <div className="grid grid-cols-12 gap-3">
        <VaccineColumn items={LEFT} dates={dates} />
        <VaccineColumn items={RIGHT} dates={dates} />
      </div>
    </div>
  );
}
