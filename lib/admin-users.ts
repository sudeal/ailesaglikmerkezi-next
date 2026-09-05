import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

/** clinics/CapakliAileSaglikMerkezi/users/{userId} */
export const CLINICS_COLLECTION = "clinics";
export const CLINIC_DOC_ID = "CapakliAileSaglikMerkezi";
export const ADMIN_EMAIL_DOMAIN = "capakliailesaglik.com";

export type ContactFormInput = {
  nameSurname: string;
  email: string;
  title: string;
  message: string;
};

export function clinicDocRef() {
  return doc(db, CLINICS_COLLECTION, CLINIC_DOC_ID);
}

export function clinicUserDocRef(userId: string) {
  return doc(db, CLINICS_COLLECTION, CLINIC_DOC_ID, "users", userId);
}

export function clinicFormsCollectionRef() {
  return collection(db, CLINICS_COLLECTION, CLINIC_DOC_ID, "forms");
}

export function clinicFormDocRef(formId: string) {
  return doc(db, CLINICS_COLLECTION, CLINIC_DOC_ID, "forms", formId);
}

/** Maps form username to Firebase Auth email. */
export function toAuthEmail(usernameOrEmail: string): string {
  const value = usernameOrEmail.trim();
  if (!value) return "";
  if (value.includes("@")) return value.toLowerCase();
  return `${value.toLowerCase()}@${ADMIN_EMAIL_DOMAIN}`;
}

export async function assertClinicUsername(
  userId: string,
  username: string,
): Promise<boolean> {
  const snapshot = await getDoc(clinicUserDocRef(userId));
  if (!snapshot.exists()) return false;
  const stored =
    typeof snapshot.data().username === "string"
      ? snapshot.data().username.trim()
      : "";
  return stored.toLowerCase() === username.trim().toLowerCase();
}

export async function touchUserLastLogin(userId: string) {
  await updateDoc(clinicUserDocRef(userId), {
    lastLogin: serverTimestamp(),
  });
}

export async function submitContactForm(input: ContactFormInput) {
  const formRef = doc(clinicFormsCollectionRef());
  await setDoc(formRef, {
    id: formRef.id,
    createdAt: serverTimestamp(),
    title: input.title.trim(),
    nameSurname: input.nameSurname.trim(),
    email: input.email.trim(),
    message: input.message.trim(),
    status: "new",
  });
  return formRef.id;
}
