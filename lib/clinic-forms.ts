import {
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  type Timestamp,
  type Unsubscribe,
} from "firebase/firestore";
import {
  clinicFormDocRef,
  clinicFormsCollectionRef,
} from "@/lib/admin-users";

export type FormStatus = "new" | "seen";

export type ClinicForm = {
  id: string;
  createdAt: Date | null;
  seenAt: Date | null;
  title: string;
  nameSurname: string;
  email: string;
  message: string;
  status: FormStatus;
  reply?: string;
  repliedAt?: Date | null;
};

function toDate(value: unknown): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value === "object" && value !== null && "toDate" in value) {
    return (value as Timestamp).toDate();
  }
  return null;
}

function mapFormDoc(id: string, data: Record<string, unknown>): ClinicForm {
  const status = data.status === "seen" ? "seen" : "new";
  return {
    id: typeof data.id === "string" ? data.id : id,
    createdAt: toDate(data.createdAt),
    seenAt: toDate(data.seenAt),
    title: typeof data.title === "string" ? data.title : "",
    nameSurname: typeof data.nameSurname === "string" ? data.nameSurname : "",
    email: typeof data.email === "string" ? data.email : "",
    message: typeof data.message === "string" ? data.message : "",
    status,
    reply: typeof data.reply === "string" ? data.reply : undefined,
    repliedAt: toDate(data.repliedAt),
  };
}

export function subscribeClinicForms(
  onChange: (forms: ClinicForm[]) => void,
  onError?: (error: Error) => void,
): Unsubscribe {
  const formsQuery = query(
    clinicFormsCollectionRef(),
    orderBy("createdAt", "desc"),
  );

  return onSnapshot(
    formsQuery,
    (snapshot) => {
      const forms = snapshot.docs.map((item) =>
        mapFormDoc(item.id, item.data() as Record<string, unknown>),
      );
      forms.sort((a, b) => {
        if (a.status !== b.status) {
          return a.status === "new" ? -1 : 1;
        }
        const aTime = a.createdAt?.getTime() ?? 0;
        const bTime = b.createdAt?.getTime() ?? 0;
        return bTime - aTime;
      });
      onChange(forms);
    },
    (error) => onError?.(error),
  );
}

export async function markFormSeen(formId: string) {
  await updateDoc(clinicFormDocRef(formId), {
    status: "seen",
    seenAt: serverTimestamp(),
  });
}

export async function saveFormReply(formId: string, reply: string) {
  await updateDoc(clinicFormDocRef(formId), {
    reply: reply.trim(),
    repliedAt: serverTimestamp(),
    status: "seen",
    seenAt: serverTimestamp(),
  });
}

export async function deleteClinicForm(formId: string) {
  await deleteDoc(clinicFormDocRef(formId));
}

export function formatFormDate(date: Date | null): string {
  if (!date) return "—";
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function buildMailtoHref(form: ClinicForm, replyText?: string): string {
  const subject = encodeURIComponent(`Re: ${form.title}`);
  const body = encodeURIComponent(
    [
      replyText?.trim() || "",
      "",
      "----------",
      `Gönderen: ${form.nameSurname} <${form.email}>`,
      `Konu: ${form.title}`,
      "",
      form.message,
    ].join("\n"),
  );
  return `mailto:${form.email}?subject=${subject}&body=${body}`;
}
