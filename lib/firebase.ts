import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

function envOr(value: string | undefined, fallback: string) {
  const next = value?.trim();
  return next ? next : fallback;
}

// Public web config. .env.local is gitignored, so these defaults keep clones working.
const firebaseConfig = {
  apiKey: envOr(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    "AIzaSyB97ZjS16PoyLjHK-E0lbTSZU5syl_tBfk",
  ),
  authDomain: envOr(
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    "webschmiede-d7711.firebaseapp.com",
  ),
  projectId: envOr(
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    "webschmiede-d7711",
  ),
  storageBucket: envOr(
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    "webschmiede-d7711.firebasestorage.app",
  ),
  messagingSenderId: envOr(
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    "126211986008",
  ),
  appId: envOr(
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    "1:126211986008:web:b709ab3c3e7c4d9ae2b02d",
  ),
  measurementId: envOr(
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    "G-V4V44W0SCL",
  ),
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

let analytics: Analytics | null = null;

export async function initAnalytics() {
  if (typeof window === "undefined") return null;
  if (analytics) return analytics;
  if (!(await isSupported())) return null;
  analytics = getAnalytics(app);
  return analytics;
}

export { app, auth, db };
