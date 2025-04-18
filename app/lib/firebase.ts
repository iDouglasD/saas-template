import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { env } from "@/env";
import "server-only";

export const firebaseCert = cert({
  projectId: env.FIREBASE_PROJECT_ID,
  clientEmail: env.FIREBASE_CLIENT_EMAIL,
  privateKey: env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
})

if(!getApps().length) {
  initializeApp({
    credential: firebaseCert,
  })
}

export const db = getFirestore()