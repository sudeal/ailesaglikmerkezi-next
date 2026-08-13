"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRedo,
} from "react-icons/fa";

function createCaptcha() {
  const chars = "abcdefghijkmnpqrstuvwxyz23456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join(" ");
}

const fieldClass =
  "mb-3 w-full border-0 bg-white px-3 py-2.5 text-[14px] text-[#444444] outline-none placeholder:text-[#999999]";

export default function ContactSection() {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const captchaValue = useMemo(() => captcha.replace(/ /g, ""), [captcha]);

  useEffect(() => {
    setCaptcha(createCaptcha());
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const match =
      Boolean(captchaValue) &&
      captchaInput.replace(/ /g, "").toLowerCase() === captchaValue.toLowerCase();
    setStatus(match ? "ok" : "error");
    if (match) {
      event.currentTarget.reset();
      setCaptchaInput("");
      setCaptcha(createCaptcha());
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-[1170px] px-[15px] pt-[50px] pb-16 text-white">
      <h3 className="m-0 text-center text-[28px] font-normal tracking-wide text-white uppercase">
        İLETİŞİM
      </h3>
      <div className="mx-auto my-4 flex w-[220px] items-center">
        <span className="h-px flex-1 bg-white" />
        <span className="mx-2 size-2 shrink-0 rotate-45 bg-white" />
        <span className="h-px flex-1 bg-white" />
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="el-heading m-0 text-[20px] font-normal text-white uppercase">
            İLETİŞİM BİLGİLERİ
          </h2>
          <p className="mt-4 mb-6 text-[15px] leading-7">
            Manisa Salihli Çapaklı Aile Sağlığı Merkezi
          </p>
          <div className="space-y-4 text-[14px] leading-6">
            <p className="m-0 flex gap-3">
              <FaMapMarkerAlt aria-hidden className="mt-1 shrink-0" />
              <span>
                <span className="font-semibold">Adres</span>
                {": Çapaklı Mah. Çapaklı Cad. No:29 Salihli/Manisa"}
              </span>
            </p>
            <p className="m-0 flex gap-3">
              <FaPhone aria-hidden className="mt-1 shrink-0" />
              <span>
                <span className="font-semibold">Telefon no</span>
                {": "}
                <a href="tel:+902368684643" className="text-white hover:underline">
                  0236 868 46 43
                </a>
              </span>
            </p>
            <p className="m-0 flex gap-3">
              <FaEnvelope aria-hidden className="mt-1 shrink-0" />
              <span>
                <span className="font-semibold">E-Mail</span>
                {": "}
                <a
                  href="mailto:info@salihlicapakliasm.com"
                  className="text-white hover:underline"
                >
                  info@salihlicapakliasm.com
                </a>
              </span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="el-heading m-0 mb-5 text-[20px] font-normal text-white uppercase">
            İLETİŞİM FORMU
          </h2>
          <form onSubmit={handleSubmit} className="el-ctajax-form">
            <label className="sr-only" htmlFor="cainput_name">
              Adı Soyadı
            </label>
            <input
              id="cainput_name"
              name="cainput_name"
              type="text"
              required
              autoComplete="name"
              placeholder="Adı Soyadı*"
              className={fieldClass}
            />

            <label className="sr-only" htmlFor="cainput_email">
              E-mail
            </label>
            <input
              id="cainput_email"
              name="cainput_email"
              type="email"
              required
              autoComplete="email"
              placeholder="E-mail*"
              className={fieldClass}
            />

            <label className="sr-only" htmlFor="cainput_subject">
              Başlık
            </label>
            <input
              id="cainput_subject"
              name="cainput_subject"
              type="text"
              required
              placeholder="Başlık*"
              className={fieldClass}
            />

            <label className="sr-only" htmlFor="cainput_message">
              Mesaj
            </label>
            <textarea
              id="cainput_message"
              name="cainput_message"
              required
              maxLength={1000}
              rows={5}
              placeholder="Mesaj*"
              className={`${fieldClass} min-h-[120px] resize-y`}
            />

            <div className="mb-3 flex items-start gap-2">
              <div className="flex h-12 min-w-[160px] items-center justify-center bg-[#9ACD32] px-4 font-mono text-[22px] tracking-[0.35em] text-white select-none">
                {captcha}
              </div>
              <button
                type="button"
                aria-label="Captcha yenile"
                onClick={() => {
                  setCaptcha(createCaptcha());
                  setCaptchaInput("");
                  setStatus("idle");
                }}
                className="mt-1 text-[18px] text-[#DC0D15]"
              >
                <FaRedo />
              </button>
            </div>

            <label className="sr-only" htmlFor="cainput_captcha">
              Captcha
            </label>
            <input
              id="cainput_captcha"
              name="cainput_captcha"
              type="text"
              required
              value={captchaInput}
              onChange={(event) => setCaptchaInput(event.target.value)}
              placeholder="Captcha*"
              className={`${fieldClass} block max-w-[220px] rounded-md`}
            />

            {status === "error" ? (
              <p className="mb-3 text-[13px] text-red-200">Captcha kodu hatalı.</p>
            ) : null}
            {status === "ok" ? (
              <p className="mb-3 text-[13px] text-green-200">
                E-postanız gönderilmiştir.
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-1 block rounded-md border border-black bg-[#D12E27] px-8 py-2 text-[14px] font-bold tracking-wide text-white uppercase hover:bg-[#b52620]"
            >
              FORM GÖNDER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
