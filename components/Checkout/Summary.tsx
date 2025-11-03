"use client";

import Image from 'next/image';
import { useAppSelector } from '../../store/hooks';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0 
  }).format(amount);
};

const Summary = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  console.log('Cart items in Summary:', cartItems); // Debug log
  
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = total * 0.20;
  const grandTotal = total + shipping;

  return (
    <div className="bg-white rounded-lg p-6 lg:p-8 lg:w-1/3 h-fit">
      <h2 className="text-lg font-bold uppercase tracking-wide-sm">Summary</h2>
      <div className="space-y-6 mt-8">
        {cartItems.length === 0 ? (
          <p className="text-center text-black/50 py-8">No items in cart</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={item.image} alt={item.name} width={64} height={64} className="w-16 h-16 rounded-lg bg-gray-200 object-contain" />
                <div className="ml-4">
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="font-bold text-sm text-black/50">{formatCurrency(item.price)}</p>
                </div>
              </div>
              <p className="font-bold text-sm text-black/50">x{item.quantity}</p>
            </div>
          ))
        )}
      </div>
      <div className="space-y-2 mt-8">
        <div className="flex justify-between items-center">
          <p className="text-sm uppercase text-black/50">Total</p>
          <p className="text-lg font-bold">{formatCurrency(total)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm uppercase text-black/50">Shipping</p>
          <p className="text-lg font-bold">{formatCurrency(shipping)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm uppercase text-black/50">VAT (Included)</p>
          <p className="text-lg font-bold">{formatCurrency(vat)}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm uppercase text-black/50">Grand Total</p>
        <p className="text-lg font-bold text-orange">{formatCurrency(grandTotal)}</p>
      </div>
      <button 
        type="submit" 
        form="checkout-form"
        className="w-full cursor-pointer bg-orange hover:bg-orange-light text-white uppercase text-sm font-bold tracking-wide-sm py-4 mt-8 transition-colors"
      >
        Continue & Pay
      </button>
    </div>
  );
};

export default Summary;