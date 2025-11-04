import { CartItem } from '../types';
import { CheckoutFormData } from './validations';

interface CreateOrderData {
  customerDetails: {
    name: string;
    email: string;
    phone: string;
  };
  shippingDetails: {
    address: string;
    city: string;
    zip: string;
    country: string;
  };
  paymentMethod: string;
  items: CartItem[];
}

export const createOrder = async (formData: CheckoutFormData, cartItems: CartItem[]) => {
  const orderData: CreateOrderData = {
    customerDetails: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    },
    shippingDetails: {
      address: formData.address,
      city: formData.city,
      zip: formData.zip,
      country: formData.country,
    },
    paymentMethod: formData.paymentMethod,
    items: cartItems,
  };

  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error('Failed to create order');
  }

  return await response.json();
};