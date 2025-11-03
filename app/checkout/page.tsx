"use client";

import CheckoutForm from "../../components/Checkout/CheckoutForm";
import Summary from "../../components/Checkout/Summary";
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-2">
        <button 
          onClick={() => router.back()}
          className="text-black/50 curs hover:text-orange transition-colors mb-8"
        >
          Go Back
        </button>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div id="checkout-form">
            <CheckoutForm />
          </div>
          <Summary />
        </div>
      </div>
    </div>
  );
}