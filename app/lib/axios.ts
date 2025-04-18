import { env } from "@/env";
import axios from "axios";

export const stripeApi = axios.create({
  baseURL: env.NEXT_STRIPE_API_BASE_URL,
  withCredentials: true,
})