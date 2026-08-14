import Link from "next/link";
import { FaEye } from "react-icons/fa";
import PageSidebar from "@/components/PageSidebar";
import ScrollToTop from "@/components/ScrollToTop";

type Crumb = { href?: string; label: string };

export default function InnerPage({
  title,
  crumbs,
  views,
  children,
}: {
  title: string;
  crumbs: Crumb[];
  views?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <nav
        aria-label="Sayfa konumu"
        className="border-b border-[#e5e5e5] bg-[#f5f5f5] text-[13px]"
      >
        <div className="container mx-auto max-w-[1170px] px-[15px] py-2.5 text-[#777777]">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              <span className="mx-1 text-[#999999]">{">"}</span>
              {crumb.href && index < crumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#DC0D15]">
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={
                    index === crumbs.length - 1 ? "text-[#DC0D15]" : undefined
                  }
                >
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </nav>

      <div className="container mx-auto max-w-[1170px] px-[15px] py-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <article className="col-span-12 lg:col-span-8">
            <h1 className="m-0 text-[28px] leading-8 font-bold text-black">
              {title}
            </h1>
            {views != null ? (
              <p className="mt-2 mb-5 flex items-center gap-1.5 text-[13px] text-[#888888]">
                <FaEye aria-hidden />
                <span>{views} İzleme</span>
              </p>
            ) : (
              <div className="mb-5" />
            )}
            <div className="text-[14px] leading-7 text-[#333333]">{children}</div>
          </article>
          <div className="col-span-12 lg:col-span-4">
            <PageSidebar />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
