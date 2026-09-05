import type { Metadata } from "next";
import AdminLoginForm from "@/components/AdminLoginForm";

export const metadata: Metadata = {
  title: "Yönetim Girişi | Çapaklı Aile Sağlığı Merkezi",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-[15px] py-12">
      <AdminLoginForm />
    </main>
  );
}
