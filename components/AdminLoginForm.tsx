"use client";

import { FormEvent, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";

const fieldClass =
  "w-full border border-[#cccccc] bg-white px-3 py-2.5 text-[15px] text-[#444444] outline-none focus:border-[#DC0D15]";

export default function AdminLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextUsername = username.trim();
    const nextPassword = password;

    if (!nextUsername || !nextPassword) {
      setError("Kullanıcı adı ve şifre zorunludur.");
      return;
    }

    setError(null);
  }

  return (
    <div className="mx-auto max-w-[420px]">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-[#DC0D15] text-white">
          <FaLock aria-hidden className="text-[22px]" />
        </div>
        <p className="m-0 text-[15px] leading-6 text-[#666666]">
          Yönetim paneline erişmek için giriş yapınız.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label
            htmlFor="admin-username"
            className="mb-1.5 block text-[14px] font-semibold text-[#333333]"
          >
            Kullanıcı Adı
          </label>
          <div className="relative">
            <FaUser
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[13px] text-[#999999]"
            />
            <input
              id="admin-username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                setError(null);
              }}
              placeholder="Kullanıcı adınız"
              className={`${fieldClass} pl-9`}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="admin-password"
            className="mb-1.5 block text-[14px] font-semibold text-[#333333]"
          >
            Şifre
          </label>
          <div className="relative">
            <FaLock
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[13px] text-[#999999]"
            />
            <input
              id="admin-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setError(null);
              }}
              placeholder="Şifreniz"
              className={`${fieldClass} pl-9`}
            />
          </div>
        </div>

        {error ? (
          <p role="alert" className="mb-3 text-[13px] leading-5 text-[#DC0D15]">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="w-full cursor-pointer rounded-md border border-black bg-[#D12E27] px-8 py-2.5 text-[14px] font-bold tracking-wide text-white uppercase hover:bg-[#b52620]"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
