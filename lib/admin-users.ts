import {
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export const CLINIC_USER_DOC_ID = "CapakliAileSaglikMerkezi";
export const ADMIN_EMAIL_DOMAIN = "capakliailesaglik.com";

export function clinicUserDocRef() {
  return doc(db, "users", CLINIC_USER_DOC_ID);
}

/** Maps form username to Firebase Auth email. */
export function toAuthEmail(usernameOrEmail: string): string {
  const value = usernameOrEmail.trim();
  if (!value) return "";
  if (value.includes("@")) return value.toLowerCase();
  return `${value.toLowerCase()}@${ADMIN_EMAIL_DOMAIN}`;
}

export async function assertClinicUsername(username: string): Promise<boolean> {
  const snapshot = await getDoc(clinicUserDocRef());
  if (!snapshot.exists()) return false;
  const stored =
    typeof snapshot.data().username === "string"
      ? snapshot.data().username.trim()
      : "";
  return stored.toLowerCase() === username.trim().toLowerCase();
}

export async function touchUserLastLogin() {
  await updateDoc(clinicUserDocRef(), {
    lastLogin: serverTimestamp(),
  });
}
