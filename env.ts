import { z } from "zod"

export const envSchema = z.object({
  AUTH_SECRET: z.string(),

  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),

  FIREBASE_PROJECT_ID: z.string(),
  FIREBASE_CLIENT_EMAIL: z.string(),
  FIREBASE_PRIVATE_KEY: z.string(),

  STRIPE_SECRET_KEY: z.string(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
  NEXT_STRIPE_API_BASE_URL: z.string(),
})

export const env = envSchema.parse(process.env)