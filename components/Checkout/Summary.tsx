"use client";

import Image from 'next/image';
import { useAppSelector } from '../../store/hooks';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const Summary = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping;

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 sticky top-8">
      <h2 className="text-lg font-bold uppercase tracking-wider mb-8">Summary</h2>
      <div className="space-y-6 mb-8">
        {cartItems.length === 0 ? (
          <p className="text-center text-black/50 py-8">No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={64} 
                  height={64} 
                  className="w-16 h-16 rounded-lg bg-gray-200 object-contain p-2" 
                />
                <div className="ml-4">
                  <p className="font-bold text-[15px]">{item.name}</p>
                  <p className="font-bold text-sm text-black/50">{formatCurrency(item.price)}</p>
                </div>
              </div>
              <p className="font-bold text-[15px] text-black/50">x{item.quantity}</p>
            </div>
          ))
        )}
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-[15px] uppercase text-black/50">Total</p>
          <p className="text-lg font-bold">{formatCurrency(total)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[15px] uppercase text-black/50">Shipping</p>
          <p className="text-lg font-bold">{formatCurrency(shipping)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[15px] uppercase text-black/50">VAT (Included)</p>
          <p className="text-lg font-bold">{formatCurrency(vat)}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 mb-8">
        <p className="text-[15px] uppercase text-black/50">Grand Total</p>
        <p className="text-lg font-bold text-orange">{formatCurrency(grandTotal)}</p>
      </div>
      <button
        type="submit"
        form="checkout-form"
        disabled={cartItems.length === 0}
        className="w-full bg-orange text-white uppercase font-bold text-[13px] tracking-wide py-4 hover:bg-orange-light disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {cartItems.length === 0 ? 'Cart is Empty' : 'Continue & Pay'}
      </button>
    </div>
  );
};

export default Summary;