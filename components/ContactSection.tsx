"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRedo,
} from "react-icons/fa";
import { submitContactForm } from "@/lib/admin-users";

function createCaptcha() {
  const chars = "abcdefghijkmnpqrstuvwxyz23456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join(" ");
}

const EMAIL_PATTERN =
  /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,63}[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

function getEmailError(value: string): string | null {
  const email = value.trim();

  if (!email) {
    return "E-posta adresi zorunludur.";
  }

  if (email.includes(" ")) {
    return "E-posta adresinde boşluk olmamalıdır.";
  }

  if (!email.includes("@")) {
    return "E-posta adresinde @ işareti olmalıdır. Örnek: ad@ornek.com";
  }

  const parts = email.split("@");
  if (parts.length !== 2) {
    return "E-posta adresinde yalnızca bir @ işareti olmalıdır.";
  }

  const [local, domain] = parts;

  if (!local) {
    return "@ işaretinden önce bir kullanıcı adı olmalıdır. Örnek: ad@ornek.com";
  }

  if (!domain) {
    return "@ işaretinden sonra bir alan adı olmalıdır. Örnek: ad@ornek.com";
  }

  if (!domain.includes(".")) {
    return "E-posta adresinde .com gibi bir uzantı olmalıdır. Örnek: ad@ornek.com";
  }

  const tld = domain.split(".").pop() ?? "";
  if (!/^[A-Za-z]{2,}$/.test(tld)) {
    return "E-posta uzantısı geçersiz. .com gibi bir uzantı olmalıdır.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Geçerli bir e-posta giriniz. Örnek: ad@ornek.com";
  }

  return null;
}

const fieldClass =
  "mb-3 w-full border-0 bg-white px-3 py-2.5 text-[14px] text-[#444444] outline-none placeholder:text-[#999999]";

export default function ContactSection() {
  const [nameSurname, setNameSurname] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "submit_error">(
    "idle",
  );
  const [submitting, setSubmitting] = useState(false);
  const captchaValue = useMemo(() => captcha.replace(/ /g, ""), [captcha]);

  useEffect(() => {
    setCaptcha(createCaptcha());
  }, []);

  function handleEmailChange(value: string) {
    setEmail(value);
    setStatus("idle");
    if (emailError) {
      setEmailError(getEmailError(value));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextEmailError = getEmailError(email);
    if (nextEmailError) {
      setEmailError(nextEmailError);
      setStatus("idle");
      event.currentTarget.querySelector<HTMLInputElement>("#cainput_email")?.focus();
      return;
    }

    setEmailError(null);
    const match =
      Boolean(captchaValue) &&
      captchaInput.replace(/ /g, "").toLowerCase() === captchaValue.toLowerCase();
    if (!match) {
      setStatus("error");
      return;
    }

    setSubmitting(true);
    setStatus("idle");

    try {
      await submitContactForm({
        nameSurname,
        email,
        title,
        message,
      });
      setStatus("ok");
      setNameSurname("");
      setEmail("");
      setTitle("");
      setMessage("");
      setCaptchaInput("");
      setCaptcha(createCaptcha());
    } catch {
      setStatus("submit_error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-[1170px] px-[15px] pt-10 pb-12 text-white sm:pt-[50px] sm:pb-16">
      <h3 className="m-0 text-center text-[22px] font-normal tracking-wide text-white uppercase sm:text-[28px]">
        İLETİŞİM
      </h3>
      <div className="mx-auto my-4 flex w-[220px] items-center">
        <span className="h-px flex-1 bg-white" />
        <span className="mx-2 size-2 shrink-0 rotate-45 bg-white" />
        <span className="h-px flex-1 bg-white" />
      </div>

      <div className="mt-8 grid grid-cols-12 gap-8 md:gap-10">
        <div className="col-span-12 md:col-span-6">
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
                {": Çapaklı Mah. Çapaklı Cad. No:49 Salihli/Manisa"}
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

        <div className="col-span-12 md:col-span-6">
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
              value={nameSurname}
              onChange={(event) => {
                setNameSurname(event.target.value);
                setStatus("idle");
              }}
              placeholder="Adı Soyadı*"
              className={fieldClass}
            />

            <label className="sr-only" htmlFor="cainput_email">
              E-mail
            </label>
            <input
              id="cainput_email"
              name="cainput_email"
              type="text"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(event) => handleEmailChange(event.target.value)}
              onBlur={() => setEmailError(getEmailError(email))}
              aria-invalid={emailError ? true : undefined}
              aria-describedby={emailError ? "cainput_email_error" : undefined}
              placeholder="E-mail*"
              className={`${fieldClass} ${emailError ? "mb-1 ring-2 ring-[#ffb4b4]" : ""}`}
            />
            {emailError ? (
              <p
                id="cainput_email_error"
                role="alert"
                className="mb-3 text-[13px] leading-5 text-[#ffd6d6]"
              >
                {emailError}
              </p>
            ) : null}

            <label className="sr-only" htmlFor="cainput_subject">
              Başlık
            </label>
            <input
              id="cainput_subject"
              name="cainput_subject"
              type="text"
              required
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setStatus("idle");
              }}
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
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                setStatus("idle");
              }}
              placeholder="Mesaj*"
              className={`${fieldClass} min-h-[120px] resize-y`}
            />

            <div className="mb-3 flex flex-wrap items-start gap-2">
              <div className="flex h-12 min-w-0 items-center justify-center bg-[#9ACD32] px-3 font-mono text-[18px] tracking-[0.25em] text-white select-none sm:min-w-[160px] sm:px-4 sm:text-[22px] sm:tracking-[0.35em]">
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
            {status === "submit_error" ? (
              <p className="mb-3 text-[13px] text-red-200">
                Form gönderilemedi. Lütfen tekrar deneyin.
              </p>
            ) : null}
            {status === "ok" ? (
              <p className="mb-3 text-[13px] text-green-200">
                E-postanız gönderilmiştir.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="mt-1 block rounded-md border border-black bg-[#D12E27] px-8 py-2 text-[14px] font-bold tracking-wide text-white uppercase hover:bg-[#b52620] disabled:cursor-wait disabled:opacity-70"
            >
              {submitting ? "GÖNDERİLİYOR..." : "FORM GÖNDER"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
