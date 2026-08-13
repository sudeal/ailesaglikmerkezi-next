import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Çapaklı Aile Sağlığı Merkezi",
  description:
    "Çapaklı Aile Sağlığı Merkezi resmi web sitesi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className={`${openSans.className} min-h-full bg-white text-[#444444]`}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
