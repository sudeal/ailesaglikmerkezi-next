"use client";

import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import SiteLogo from "@/components/SiteLogo";

export default function AdminNavbar({
  onLogout,
  loggingOut,
}: {
  onLogout: () => void | Promise<void>;
  loggingOut?: boolean;
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  async function handleConfirmLogout() {
    setConfirmOpen(false);
    await onLogout();
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex h-[64px] max-w-[1170px] items-center justify-between gap-4 px-[15px] sm:h-[72px]">
          <SiteLogo href={null} size="sm" />

          <button
            type="button"
            aria-label="Çıkış yap"
            disabled={loggingOut}
            onClick={() => setConfirmOpen(true)}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-[#DC0D15] transition-colors hover:bg-[#fce8e9] disabled:cursor-wait disabled:opacity-60 sm:size-11"
          >
            <FaPowerOff aria-hidden className="text-[20px] sm:text-[22px]" />
          </button>
        </div>
      </header>

      {confirmOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-[15px]"
          role="presentation"
          onClick={() => !loggingOut && setConfirmOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-logout-title"
            className="w-full max-w-[400px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="admin-logout-title"
              className="m-0 text-[18px] font-bold text-black"
            >
              Çıkış
            </h2>
            <p className="mt-3 mb-6 text-[15px] leading-6 text-[#444444]">
              Çıkış yapmak istediğinize emin misiniz?
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                disabled={loggingOut}
                onClick={() => setConfirmOpen(false)}
                className="cursor-pointer border border-[#bbbbbb] bg-[#f3f3f3] px-4 py-2 text-[14px] text-[#333333] hover:bg-[#e9e9e9] disabled:opacity-60"
              >
                İptal
              </button>
              <button
                type="button"
                disabled={loggingOut}
                onClick={() => void handleConfirmLogout()}
                className="cursor-pointer border border-black bg-[#D12E27] px-4 py-2 text-[14px] font-bold text-white hover:bg-[#b52620] disabled:cursor-wait disabled:opacity-70"
              >
                {loggingOut ? "Çıkış yapılıyor..." : "Çıkış Yap"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
