import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe with test publishable key
const stripePromise = loadStripe('pk_test_51JDummyKeyForTestingStripe1234567890'); // Replace with your Stripe test key

const StripePaymentForm = ({ total, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    // Create a PaymentIntent on the client side (for demo purposes, simulating backend)
    const clientSecret = await createClientSecret(total);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.href, // Redirect back to same page after payment
      },
      redirect: 'if_required',
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      onSuccess();
      setProcessing(false);
    }
  };

  // Simulate creating a client secret (in real app, this would be a backend call)
  const createClientSecret = async (amount) => {
    // For frontend-only demo, use a pre-generated client secret or mock
    // In production, this would come from your backend
    return 'pi_test_client_secret_1234567890'; // Mock client secret for test mode
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          layout: 'tabs',
          defaultValues: {
            billingDetails: {
              name: 'Dulce Lipshutz',
              address: {
                line1: '70 Washington Square South',
                city: 'New York',
                state: 'NY',
                postal_code: '10012',
                country: 'US',
              },
            },
          },
        }}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-[#8A1538] hover:bg-pink-800 text-white font-semibold py-2 sm:py-3 rounded-full"
      >
        {processing ? 'Processing...' : `Pay $${total} (Test Mode)`}
      </button>
      <p className="text-xs text-gray-500 mt-2">
        Use test card: 4242 4242 4242 4242, any future date, any CVC, any ZIP.
      </p>
    </form>
  );
};

const StripePayment = ({ total, onSuccess }) => {
  const options = {
    mode: 'payment',
    amount: Math.round(total * 100), // Convert to cents
    currency: 'usd',
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <StripePaymentForm total={total} onSuccess={onSuccess} />
    </Elements>
  );
};

export default StripePayment;