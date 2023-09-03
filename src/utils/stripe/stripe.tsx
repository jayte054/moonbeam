import { loadStripe, Stripe } from '@stripe/stripe-js';

const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('REACT_APP_STRIPE_PUBLISHABLE_KEY is not defined in your environment variables.');
}

export const stripePromise: Promise<Stripe | null> = loadStripe(publishableKey);
