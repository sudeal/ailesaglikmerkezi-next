"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FaLock, FaUser } from "react-icons/fa";
import SiteLogo from "@/components/SiteLogo";
import { getAuthErrorMessage } from "@/lib/auth-errors";
import {
  assertClinicUsername,
  toAuthEmail,
  touchUserLastLogin,
} from "@/lib/admin-users";
import { auth } from "@/lib/firebase";

const fieldClass =
  "w-full border border-[#cccccc] bg-white px-3 py-2.5 text-[15px] text-[#444444] outline-none focus:border-[#DC0D15]";

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/admin/panel");
        return;
      }
      setCheckingSession(false);
    });
    return unsubscribe;
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextUsername = username.trim();
    const nextPassword = password;
    const nextEmail = toAuthEmail(nextUsername);

    if (!nextUsername || !nextPassword) {
      setError("Kullanıcı adı ve şifre zorunludur.");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, nextEmail, nextPassword);

      const userId = auth.currentUser?.uid;
      if (!userId) {
        setError("Giriş yapılamadı. Lütfen tekrar deneyin.");
        setSubmitting(false);
        return;
      }

      const usernameOk = await assertClinicUsername(userId, nextUsername);
      if (!usernameOk) {
        await signOut(auth);
        setError("Kullanıcı adı veya şifre hatalı.");
        setSubmitting(false);
        return;
      }

      try {
        await touchUserLastLogin(userId);
      } catch {
        // Auth succeeded; lastLogin update is best-effort.
      }
      router.replace("/admin/panel");
    } catch (err) {
      const code =
        typeof err === "object" && err && "code" in err
          ? String((err as { code: string }).code)
          : "";
      setError(getAuthErrorMessage(code));
      setSubmitting(false);
    }
  }

  if (checkingSession) {
    return (
      <div className="mx-auto w-full max-w-[420px] text-center text-[15px] text-[#666666]">
        Kontrol ediliyor...
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="mb-8 flex justify-center">
        <SiteLogo href={null} />
      </div>

      <p className="mb-6 text-center text-[15px] leading-6 text-[#666666]">
        Yönetim paneline erişmek için giriş yapınız.
      </p>

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
          disabled={submitting}
          className="w-full cursor-pointer rounded-md border border-black bg-[#D12E27] px-8 py-2.5 text-[14px] font-bold tracking-wide text-white uppercase hover:bg-[#b52620] disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}
