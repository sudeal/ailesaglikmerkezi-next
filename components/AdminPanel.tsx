"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import AdminForms from "@/components/AdminForms";
import AdminNavbar from "@/components/AdminNavbar";
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
      <div className="flex min-h-dvh items-center justify-center text-[15px] text-[#666666]">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-[#f7f7f7]">
      <AdminNavbar onLogout={handleLogout} loggingOut={loggingOut} />
      <main className="mx-auto max-w-[1170px] px-[15px] py-8">
        <AdminForms />
      </main>
    </div>
  );
}
