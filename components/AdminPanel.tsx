"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import SiteLogo from "@/components/SiteLogo";
import { auth } from "@/lib/firebase";

export default function AdminPanel() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      if (!nextUser) {
        router.replace("/admin");
        return;
      }
      setUser(nextUser);
      setLoading(false);
    });
    return unsubscribe;
  }, [router]);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await signOut(auth);
      router.replace("/admin");
    } catch {
      setLoggingOut(false);
    }
  }

  if (loading || !user) {
    return (
      <div className="text-center text-[15px] text-[#666666]">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="mb-8 flex justify-center">
        <SiteLogo href={null} />
      </div>

      <h1 className="m-0 mb-2 text-center text-[24px] font-bold text-black">
        Yönetim Paneli
      </h1>
      <p className="mb-8 text-center text-[15px] leading-6 text-[#666666]">
        Giriş yapıldı: {user.email}
      </p>

      <button
        type="button"
        onClick={handleLogout}
        disabled={loggingOut}
        className="w-full cursor-pointer rounded-md border border-[#bbbbbb] bg-[#f3f3f3] px-8 py-2.5 text-[14px] font-bold tracking-wide text-[#333333] uppercase hover:bg-[#e9e9e9] disabled:cursor-wait disabled:opacity-70"
      >
        {loggingOut ? "Çıkış yapılıyor..." : "Çıkış Yap"}
      </button>
    </div>
  );
}
