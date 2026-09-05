"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  FaEnvelope,
  FaReply,
  FaTrash,
} from "react-icons/fa";
import {
  buildMailtoHref,
  deleteClinicForm,
  formatFormDate,
  markFormSeen,
  saveFormReply,
  subscribeClinicForms,
  type ClinicForm,
  type FormStatus,
} from "@/lib/clinic-forms";

type Filter = "all" | FormStatus;

export default function AdminForms() {
  const [forms, setForms] = useState<ClinicForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [reply, setReply] = useState("");
  const [savingReply, setSavingReply] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const detailRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const unsubscribe = subscribeClinicForms(
      (nextForms) => {
        setForms(nextForms);
        setLoading(false);
        setError(null);
      },
      () => {
        setLoading(false);
        setError("Formlar yüklenemedi.");
      },
    );
    return unsubscribe;
  }, []);

  const filteredForms = useMemo(() => {
    if (filter === "all") return forms;
    return forms.filter((form) => form.status === filter);
  }, [filter, forms]);

  const selectedForm =
    filteredForms.find((form) => form.id === selectedId) ??
    forms.find((form) => form.id === selectedId) ??
    null;

  const newCount = forms.filter((form) => form.status === "new").length;

  useEffect(() => {
    if (!selectedForm) {
      setReply("");
      setConfirmDelete(false);
      setActionError(null);
      return;
    }
    setReply(selectedForm.reply ?? "");
    setConfirmDelete(false);
    setActionError(null);

    const frame = window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    if (selectedForm.status === "new") {
      void markFormSeen(selectedForm.id).catch(() => {
        // best-effort seen update
      });
    }

    return () => window.cancelAnimationFrame(frame);
  }, [selectedForm?.id]);

  async function handleSaveReply(event: FormEvent) {
    event.preventDefault();
    if (!selectedForm || !reply.trim()) return;
    setSavingReply(true);
    setActionError(null);
    try {
      await saveFormReply(selectedForm.id, reply);
    } catch {
      setActionError("Cevap kaydedilemedi.");
    } finally {
      setSavingReply(false);
    }
  }

  async function handleDelete() {
    if (!selectedForm) return;
    setDeleting(true);
    setActionError(null);
    try {
      const id = selectedForm.id;
      await deleteClinicForm(id);
      setSelectedId(null);
      setConfirmDelete(false);
    } catch {
      setActionError("Form silinemedi.");
    } finally {
      setDeleting(false);
    }
  }

  if (loading) {
    return (
      <p className="text-center text-[15px] text-[#666666]">Formlar yükleniyor...</p>
    );
  }

  if (error) {
    return (
      <p role="alert" className="text-center text-[15px] text-[#DC0D15]">
        {error}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <section className="lg:col-span-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="m-0 text-[22px] font-bold text-black">İletişim Formları</h1>
            <p className="mt-1 mb-0 text-[14px] text-[#666666]">
              {forms.length} form
              {newCount > 0 ? ` · ${newCount} yeni` : ""}
            </p>
          </div>
          <div className="flex gap-1">
            {(
              [
                ["all", "Tümü"],
                ["new", "Yeni"],
                ["seen", "Görüldü"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`cursor-pointer px-3 py-1.5 text-[13px] font-semibold ${
                  filter === value
                    ? "bg-[#DC0D15] text-white"
                    : "bg-[#f3f3f3] text-[#444444] hover:bg-[#e9e9e9]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {filteredForms.length === 0 ? (
          <p className="border border-[#e5e5e5] bg-[#fafafa] px-4 py-8 text-center text-[14px] text-[#777777]">
            Gösterilecek form yok.
          </p>
        ) : (
          <ul className="m-0 list-none divide-y divide-[#e5e5e5] border border-[#e5e5e5] p-0">
            {filteredForms.map((form) => {
              const active = form.id === selectedId;
              return (
                <li key={form.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(form.id)}
                    className={`block w-full cursor-pointer px-4 py-3.5 text-left transition-colors ${
                      active ? "bg-[#fce8e9]" : "bg-white hover:bg-[#fafafa]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="m-0 truncate text-[15px] font-semibold text-black">
                          {form.title}
                        </p>
                        <p className="mt-1 mb-0 truncate text-[13px] text-[#666666]">
                          {form.nameSurname} · {form.email}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded px-2 py-0.5 text-[11px] font-bold uppercase ${
                          form.status === "new"
                            ? "bg-[#DC0D15] text-white"
                            : "bg-[#e8e8e8] text-[#555555]"
                        }`}
                      >
                        {form.status === "new" ? "Yeni" : "Görüldü"}
                      </span>
                    </div>
                    <p className="mt-2 mb-0 line-clamp-2 text-[13px] leading-5 text-[#777777]">
                      {form.message}
                    </p>
                    <p className="mt-2 mb-0 text-[12px] text-[#999999]">
                      {formatFormDate(form.createdAt)}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section
        ref={detailRef}
        className="scroll-mt-[80px] lg:col-span-7 lg:scroll-mt-[88px]"
      >
        {!selectedForm ? (
          <div className="flex min-h-[280px] items-center justify-center border border-dashed border-[#dddddd] bg-[#fafafa] px-6 text-center text-[14px] text-[#888888]">
            Detayları görmek için soldan bir form seçin.
          </div>
        ) : (
          <article className="border border-[#e5e5e5] bg-white">
            <div className="border-b border-[#e5e5e5] px-5 py-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="m-0 text-[20px] font-bold text-black">
                    {selectedForm.title}
                  </h2>
                  <p className="mt-2 mb-0 text-[14px] text-[#666666]">
                    {formatFormDate(selectedForm.createdAt)}
                    {selectedForm.seenAt
                      ? ` · Görülme: ${formatFormDate(selectedForm.seenAt)}`
                      : ""}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded px-2.5 py-1 text-[12px] font-bold uppercase ${
                    selectedForm.status === "new"
                      ? "bg-[#DC0D15] text-white"
                      : "bg-[#e8e8e8] text-[#555555]"
                  }`}
                >
                  {selectedForm.status === "new" ? "Yeni" : "Görüldü"}
                </span>
              </div>
            </div>

            <div className="space-y-4 px-5 py-5 text-[14px] leading-6 text-[#444444]">
              <div>
                <p className="m-0 text-[12px] font-semibold tracking-wide text-[#888888] uppercase">
                  Gönderen
                </p>
                <p className="mt-1 mb-0 text-[15px] font-semibold text-black">
                  {selectedForm.nameSurname}
                </p>
                <a
                  href={`mailto:${selectedForm.email}`}
                  className="mt-0.5 inline-flex items-center gap-1.5 text-[#DC0D15] hover:underline"
                >
                  <FaEnvelope aria-hidden className="text-[12px]" />
                  {selectedForm.email}
                </a>
              </div>

              <div>
                <p className="m-0 text-[12px] font-semibold tracking-wide text-[#888888] uppercase">
                  Mesaj
                </p>
                <p className="mt-1 mb-0 whitespace-pre-wrap text-[15px] leading-7">
                  {selectedForm.message}
                </p>
              </div>

              <form onSubmit={handleSaveReply} className="border-t border-[#e5e5e5] pt-4">
                <label
                  htmlFor="admin-form-reply"
                  className="mb-2 block text-[12px] font-semibold tracking-wide text-[#888888] uppercase"
                >
                  Cevap
                </label>
                <textarea
                  id="admin-form-reply"
                  rows={5}
                  value={reply}
                  onChange={(event) => setReply(event.target.value)}
                  placeholder="Cevabınızı yazın..."
                  className="w-full border border-[#cccccc] bg-white px-3 py-2.5 text-[14px] text-[#444444] outline-none focus:border-[#DC0D15]"
                />
                {selectedForm.repliedAt ? (
                  <p className="mt-2 mb-0 text-[12px] text-[#888888]">
                    Son kayıt: {formatFormDate(selectedForm.repliedAt)}
                  </p>
                ) : null}

                {actionError ? (
                  <p role="alert" className="mt-2 mb-0 text-[13px] text-[#DC0D15]">
                    {actionError}
                  </p>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="submit"
                    disabled={savingReply || !reply.trim()}
                    className="inline-flex cursor-pointer items-center gap-2 border border-black bg-[#D12E27] px-4 py-2 text-[13px] font-bold tracking-wide text-white uppercase hover:bg-[#b52620] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <FaReply aria-hidden />
                    {savingReply ? "Kaydediliyor..." : "Cevabı Kaydet"}
                  </button>
                  <a
                    href={buildMailtoHref(selectedForm, reply)}
                    className="inline-flex items-center gap-2 border border-[#bbbbbb] bg-[#f3f3f3] px-4 py-2 text-[13px] font-semibold text-[#333333] hover:bg-[#e9e9e9]"
                  >
                    <FaEnvelope aria-hidden />
                    E-posta ile Gönder
                  </a>
                  <button
                    type="button"
                    disabled={deleting}
                    onClick={() => setConfirmDelete(true)}
                    className="ml-auto inline-flex cursor-pointer items-center gap-2 border border-[#dc0d15]/30 bg-white px-4 py-2 text-[13px] font-semibold text-[#DC0D15] hover:bg-[#fce8e9] disabled:opacity-60"
                  >
                    <FaTrash aria-hidden />
                    Sil
                  </button>
                </div>
              </form>
            </div>
          </article>
        )}
      </section>

      {confirmDelete && selectedForm ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-[15px]"
          role="presentation"
          onClick={() => !deleting && setConfirmDelete(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-delete-form-title"
            className="w-full max-w-[400px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="admin-delete-form-title"
              className="m-0 text-[18px] font-bold text-black"
            >
              Formu Sil
            </h2>
            <p className="mt-3 mb-6 text-[15px] leading-6 text-[#444444]">
              Bu formu silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                disabled={deleting}
                onClick={() => setConfirmDelete(false)}
                className="cursor-pointer border border-[#bbbbbb] bg-[#f3f3f3] px-4 py-2 text-[14px] text-[#333333] hover:bg-[#e9e9e9] disabled:opacity-60"
              >
                İptal
              </button>
              <button
                type="button"
                disabled={deleting}
                onClick={() => void handleDelete()}
                className="cursor-pointer border border-black bg-[#D12E27] px-4 py-2 text-[14px] font-bold text-white hover:bg-[#b52620] disabled:cursor-wait disabled:opacity-70"
              >
                {deleting ? "Siliniyor..." : "Sil"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
