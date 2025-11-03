"use client";

import React, { useState } from 'react';
import FormField from './FormField';
import CashOnDeliveryIcon from './CashOnDeliveryIcon';
import OrderConfirmationModal from './OrderConfirmationModal';
import { checkoutSchema, CheckoutFormData } from '../../lib/validations';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearCart } from '../../store/cartSlice';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-orange uppercase text-sm font-bold tracking-wide-sm mb-4">
    {children}
  </h2>
);

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('e-money');
  const [formData, setFormData] = useState<Partial<CheckoutFormData>>({
    paymentMethod: 'e-money'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', { ...formData, paymentMethod });
    console.log('Cart items:', cartItems);
    
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    try {
      const validatedData = checkoutSchema.parse({ ...formData, paymentMethod });
      console.log('Validation successful:', validatedData);
      console.log('Setting showConfirmation to true');
      setShowConfirmation(true);
      setErrors({});
      toast.success('Order placed successfully!');
    } catch (error: unknown) {
      console.log('Validation errors:', error);
      const fieldErrors: Record<string, string> = {};
      if (error && typeof error === 'object' && 'errors' in error) {
        const zodError = error as { errors: Array<{ path: string[]; message: string }> };
        zodError.errors?.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
      }
      setErrors(fieldErrors);
      toast.error('Please fill in all required fields');
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    dispatch(clearCart());
  };

  return (
    <form id="checkout-form" onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-7 lg:p-12 flex-1">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide-sm mb-8">Checkout</h1>
      
      <div className="mb-8">
        <SectionTitle>Billing Details</SectionTitle>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
          <FormField 
            label="Name" 
            id="name"
            name="name" 
            placeholder="Enter your full name"
            value={formData.name || ''}
            onChange={handleInputChange}
            error={errors.name}
          />
          <FormField 
            label="Email Address" 
            id="email"
            name="email" 
            type="email" 
            placeholder="Enter your email address"
            value={formData.email || ''}
            onChange={handleInputChange}
            error={errors.email}
          />
          <FormField 
            label="Phone Number" 
            id="phone"
            name="phone" 
            type="tel" 
            placeholder="Enter your phone number"
            value={formData.phone || ''}
            onChange={handleInputChange}
            error={errors.phone}
          />
        </div>
      </div>

      <div className="mb-8">
        <SectionTitle>Shipping Info</SectionTitle>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
          <FormField 
            label="Address" 
            id="address"
            name="address" 
            placeholder="Enter your street address" 
            containerClassName="md:col-span-2"
            value={formData.address || ''}
            onChange={handleInputChange}
            error={errors.address}
          />
          <FormField 
            label="ZIP Code" 
            id="zip"
            name="zip" 
            placeholder="Enter ZIP code"
            value={formData.zip || ''}
            onChange={handleInputChange}
            error={errors.zip}
          />
          <FormField 
            label="City" 
            id="city"
            name="city" 
            placeholder="Enter your city"
            value={formData.city || ''}
            onChange={handleInputChange}
            error={errors.city}
          />
          <FormField 
            label="Country" 
            id="country"
            name="country" 
            placeholder="Enter your country"
            value={formData.country || ''}
            onChange={handleInputChange}
            error={errors.country}
          />
        </div>
      </div>

      <div>
        <SectionTitle>Payment Details</SectionTitle>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
          <p className="text-xs font-bold tracking-[-0.2px]">Payment Method</p>
          <div className="space-y-4">
            <div onClick={() => setPaymentMethod('e-money')} className={`flex items-center w-full px-6 py-4 border rounded-lg font-bold text-sm cursor-pointer ${paymentMethod === 'e-money' ? 'border-orange' : 'border-gray-300'}`}>
              <input type="radio" id="e-money" name="payment" value="e-money" checked={paymentMethod === 'e-money'} readOnly className="w-5 h-5 accent-orange" />
              <label htmlFor="e-money" className="ml-4 cursor-pointer">e-Money</label>
            </div>
            <div onClick={() => setPaymentMethod('cash')} className={`flex items-center w-full px-6 py-4 border rounded-lg font-bold text-sm cursor-pointer ${paymentMethod === 'cash' ? 'border-orange' : 'border-gray-300'}`}>
              <input type="radio" id="cash" name="payment" value="cash" checked={paymentMethod === 'cash'} readOnly className="w-5 h-5 accent-orange" />
              <label htmlFor="cash" className="ml-4 cursor-pointer">Cash on Delivery</label>
            </div>
          </div>
        </div>
        {paymentMethod === 'e-money' && (
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-6 mt-6">
            <FormField 
              label="e-Money Number" 
              id="eMoneyNumber"
              name="eMoneyNumber" 
              placeholder="Enter e-Money number"
              value={formData.eMoneyNumber || ''}
              onChange={handleInputChange}
              error={errors.eMoneyNumber}
            />
            <FormField 
              label="e-Money PIN" 
              id="eMoneyPin"
              name="eMoneyPin" 
              placeholder="Enter e-Money PIN"
              value={formData.eMoneyPin || ''}
              onChange={handleInputChange}
              error={errors.eMoneyPin}
            />
          </div>
        )}
        {paymentMethod === 'cash' && (
          <div className="flex items-center gap-8 mt-8">
            <CashOnDeliveryIcon />
            <p className="text-black/50 text-[15px] leading-6">The &apos;Cash on Delivery&apos; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
          </div>
        )}
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 z-9999">
          <OrderConfirmationModal onClose={handleCloseConfirmation} />
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;