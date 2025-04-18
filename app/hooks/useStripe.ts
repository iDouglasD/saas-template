import { useEffect, useState } from "react"
import {loadStripe, Stripe} from "@stripe/stripe-js"
import { env } from "@/env"
import { stripeApi } from "../lib/axios"
import { useRouter } from "next/router";

export function useStripe() {
  const router = useRouter();

  const [stripe, setStripe] = useState<Stripe | null>(null)

  useEffect(()=> {
    async function initializeStripe() {
      const stripeInstance = await loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      if (!stripeInstance) {
        throw new Error("Stripe failed to initialize")
      }
      setStripe(stripeInstance)
    }

    initializeStripe()
  },[])

  async function createPaymentStripeCheckout(checkoutData: unknown){
    if(!stripe) return;
    try {
       const response = await stripeApi.post("/create-payment-checkout", checkoutData);

        const { id } = response.data;

        const { error } = await stripe.redirectToCheckout({
          sessionId: id,
        });

        if (error) {
          throw new Error("Failed to redirect to checkout");
        }
    }
    catch (error) {
      console.error("Error creating checkout session:", error);
      throw new Error("Failed to create checkout session");
    }
  }

  async function createSubscriptionStripeCheckout(checkoutData: unknown){
    if(!stripe) return;
    try {
       const response = await stripeApi.post("/create-subscription-checkout", checkoutData);

        const { id } = response.data;

        const { error } = await stripe.redirectToCheckout({
          sessionId: id,
        });

        if (error) {
          throw new Error("Failed to redirect to checkout");
        }
    }
    catch (error) {
      console.error("Error creating checkout session:", error);
      throw new Error("Failed to create checkout session");
    }
  }

  async function handleCreateStripePortal() {
    const response = await stripeApi.post("/create-portal");

    const { url } = response.data;

    if (!url) {
      throw new Error("Failed to create portal session");
    }
    
    router.push(url);
  }

  return {
    stripe,
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  }
}