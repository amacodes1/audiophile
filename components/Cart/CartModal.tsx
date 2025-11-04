"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { CartItem } from '../../types';
import QuantitySelector from '../ProductDetails/QuantitySelector';
import Button from '../Ui/Buttons';

interface CartModalProps {
  cartItems: CartItem[];
  total: number;
  onClose: () => void;
  onRemoveAll: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({ cartItems, total, onClose, onRemoveAll, onUpdateQuantity }) => {
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      <div className="absolute top-20 right-0 bg-white rounded-lg p-8 w-[calc(100%-48px)] md:w-[377px] z-50 mx-6 md:mx-0">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-bold text-black-tertiary uppercase tracking-wide">Cart ({cartCount})</h2>
          {cartItems.length > 0 && (
            <button onClick={onRemoveAll} className="text-black/50 underline cursor-pointer hover:text-orange">
              Remove all
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-black/50 py-16">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image src={item.image} alt={item.name} width={64} height={64} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-black-secondary text-base">{item.name}</p>
                      <p className="text-sm text-black/50 font-bold">$ {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <QuantitySelector
                    quantity={item.quantity}
                    setQuantity={(q) => onUpdateQuantity(item.id, q)}
                    size="small"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center my-8">
              <p className="text-black/50 uppercase">Total</p>
              <p className="text-lg text-black-secondary font-bold">$ {total.toLocaleString()}</p>
            </div>

            <a href="/checkout">
              <Button variant="primary" className="w-full">
                Checkout
              </Button>
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;