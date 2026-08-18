"use client";

import { FormEvent, useState } from "react";

type BmiResult = {
  value: string;
  label: string;
  advice: string;
};

function classifyBmi(bmi: number): Omit<BmiResult, "value"> {
  if (bmi <= 18.5) {
    return {
      label: "Düşük Kilolu",
      advice:
        "Boyunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz.",
    };
  }
  if (bmi <= 24.9) {
    return {
      label: "Normal",
      advice:
        "Boyunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz.",
    };
  }
  if (bmi <= 29.9) {
    return {
      label: "Fazla Kilolu",
      advice:
        "Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar.",
    };
  }
  if (bmi <= 40) {
    return {
      label: "Obez",
      advice:
        "Boyunuza göre vücut ağırlığınızın fazla olduğunu, bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir.",
    };
  }
  return {
    label: "Aşırı Obez",
    advice:
      "Boyunuza göre vücut ağırlığınızın fazla olduğunu, bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir.",
  };
}

export default function BmiCalculator() {
  const [kilo, setKilo] = useState("");
  const [boy, setBoy] = useState("");
  const [result, setResult] = useState<BmiResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const weight = Number(kilo.replace(",", "."));
    const heightCm = Number(boy.replace(",", "."));
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
      setResult(null);
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const classified = classifyBmi(bmi);
    setResult({
      value: bmi.toFixed(2),
      ...classified,
    });
  }

  return (
    <div className="mb-8">
    <form onSubmit={handleSubmit} className="mx-auto max-w-[420px]">
      <h2 className="mb-4 text-center text-[18px] font-bold text-black">
        Vücut Kitle İndeksi Hesaplama
      </h2>

      <div className="mb-3 grid grid-cols-12 items-center gap-3">
        <label htmlFor="vki-kilo" className="col-span-4 text-[15px]">
          Kilo
        </label>
        <input
          id="vki-kilo"
          type="text"
          inputMode="decimal"
          value={kilo}
          onChange={(event) => setKilo(event.target.value)}
          className="col-span-8 border border-[#cccccc] bg-white px-3 py-1.5 text-[15px] text-[#444444] outline-none focus:border-[#DC0D15]"
        />
      </div>

      <div className="mb-4 grid grid-cols-12 items-center gap-3">
        <label htmlFor="vki-boy" className="col-span-4 text-[15px]">
          Boy
        </label>
        <input
          id="vki-boy"
          type="text"
          inputMode="decimal"
          value={boy}
          onChange={(event) => setBoy(event.target.value)}
          className="col-span-8 border border-[#cccccc] bg-white px-3 py-1.5 text-[15px] text-[#444444] outline-none focus:border-[#DC0D15]"
        />
      </div>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4" />
        <div className="col-span-8">
          <button
            type="submit"
            className="cursor-pointer border border-[#bbbbbb] bg-[#f3f3f3] px-4 py-1.5 text-[14px] text-[#333333] hover:bg-[#e9e9e9]"
          >
            Hesapla
          </button>
        </div>
      </div>

    </form>

      {result ? (
        <div className="mt-5 text-left">
          <p className="m-0 font-bold">
            {result.value} {result.label}
          </p>
          <p className="mt-2 mb-0">{result.advice}</p>
        </div>
      ) : null}
    </div>
  );
}
