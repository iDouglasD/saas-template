import { env } from '@/env';
import Stripe from 'stripe';

const stripe = new Stripe(env.STRIPE_SECRET_KEY!,{
apiVersion: '2025-03-31.basil',
})

export default stripe;