import type { Metadata } from "next";
import AdminLoginForm from "@/components/AdminLoginForm";
import InnerPage from "@/components/InnerPage";

export const metadata: Metadata = {
  title: "Yönetim Girişi | Çapaklı Aile Sağlığı Merkezi",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <InnerPage
      title="Yönetim Girişi"
      hideSidebar
      crumbs={[
        { href: "/", label: "Ana Sayfa" },
        { label: "Yönetim" },
      ]}
    >
      <div className="mx-auto mb-8 flex w-[220px] items-center">
        <span className="h-px flex-1 bg-[#dddddd]" />
        <span className="mx-2 size-2 shrink-0 rotate-45 bg-[#DC0D15]" />
        <span className="h-px flex-1 bg-[#dddddd]" />
      </div>

      <AdminLoginForm />
    </InnerPage>
  );
}
