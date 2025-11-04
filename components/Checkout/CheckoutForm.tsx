"use client";

import React, { useState } from 'react';
import FormInput from '../Ui/FormInput';
import RadioInput from '../Ui/RadioInput';
import CashOnDeliveryIcon from './CashOnDeliveryIcon';
import OrderConfirmationModal from './OrderConfirmationModal';
import { checkoutSchema, CheckoutFormData } from '../../lib/validations';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearCart } from '../../store/cartSlice';
import { createOrder } from '../../lib/orderService';
import { useRouter } from 'next/navigation';
import { CartItem } from '../../types';



const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('e-money');
  const [formData, setFormData] = useState<Partial<CheckoutFormData>>({
    paymentMethod: 'e-money'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderData, setOrderData] = useState<{items: CartItem[], orderId: string} | null>(null);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    if (isSubmitting) {
      toast.error('Order is already being processed');
      return;
    }
    
    try {
      const validatedData = checkoutSchema.parse({ ...formData, paymentMethod });
      setIsSubmitting(true);
      setErrors({});
      
      // Create order via API
      const result = await createOrder(validatedData, cartItems);
      
      if (result.success) {
        toast.success('Order placed successfully!');
        // Store order data before clearing cart
        setOrderData({ items: cartItems, orderId: result.orderId });
        dispatch(clearCart());
        setShowConfirmation(true);
      } else {
        throw new Error(result.message || 'Failed to create order');
      }
      
    } catch (error: unknown) {
      console.error('Order submission error:', error);
      
      if (error && typeof error === 'object' && 'errors' in error) {
        const zodError = error as { errors: Array<{ path: string[]; message: string }> };
        const fieldErrors: Record<string, string> = {};
        zodError.errors?.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
        toast.error('Please fill in all required fields');
      } else {
        toast.error('Failed to place order. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold uppercase tracking-wide mb-8">Checkout</h1>
      
      <form id="checkout-form" onSubmit={handleSubmit}>
        <div className="mb-8">
          <h2 className="text-orange uppercase font-bold text-sm tracking-widest mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput 
              label="Name" 
              id="name"
              name="name" 
              placeholder="Enter your Full name"
              value={formData.name || ''}
              onChange={handleInputChange}
              error={errors.name}
            />
            <FormInput 
              label="Email Address" 
              id="email"
              name="email" 
              type="email" 
              placeholder="Enter your email"
              value={formData.email || ''}
              onChange={handleInputChange}
              error={errors.email}
            />
            <FormInput 
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
          <h2 className="text-orange uppercase font-bold text-sm tracking-widest mb-4">Shipping Info</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="md:col-span-2">
              <FormInput 
                label="Your Address" 
                id="address"
                name="address" 
                placeholder="Enter your address"
                value={formData.address || ''}
                onChange={handleInputChange}
                error={errors.address}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput 
                label="ZIP Code" 
                id="zip"
                name="zip" 
                placeholder="Enter your Zip Code"
                value={formData.zip || ''}
                onChange={handleInputChange}
                error={errors.zip}
              />
              <FormInput 
                label="City" 
                id="city"
                name="city" 
                placeholder="Enter your City"
                value={formData.city || ''}
                onChange={handleInputChange}
                error={errors.city}
              />
              <FormInput 
                label="Country" 
                id="country"
                name="country" 
                placeholder="Enter your Country"
                value={formData.country || ''}
                onChange={handleInputChange}
                error={errors.country}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-orange uppercase font-bold text-sm tracking-widest mb-4">Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="font-bold text-xs tracking-[-0.21px]">Payment Method</p>
            <div className="space-y-4">
              <RadioInput
                label="e-Money"
                id="e-money"
                name="payment"
                value="e-money"
                checked={paymentMethod === 'e-money'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <RadioInput
                label="Cash on Delivery"
                id="cash"
                name="payment"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
          </div>
          {paymentMethod === 'e-money' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <FormInput 
                label="e-Money Number" 
                id="e-money-number" 
                name="eMoneyNumber"
                placeholder="Enyter your e-Money number"
                value={formData.eMoneyNumber || ''}
                onChange={handleInputChange}
                error={errors.eMoneyNumber}
              />
              <FormInput 
                label="e-Money PIN" 
                id="e-money-pin" 
                name="eMoneyPin"
                placeholder="Enter your pin"
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
      </form>
      {showConfirmation && orderData && (
        <div className="fixed inset-0 z-[9999]">
          <OrderConfirmationModal 
            onClose={handleCloseConfirmation} 
            orderItems={orderData.items}
            orderId={orderData.orderId}
          />
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;