"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api';
import Image from 'next/image';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

interface Order {
  orderId: string;
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
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  totals: {
    subtotal: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  };
  status: string;
  createdAt: number;
}

export default function OrderPage() {
  const params = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await convex.query(api.orders.getOrder, {
          orderId: params.orderId as string,
        });
        setOrder(orderData);
      } catch (error) {
        console.error('Failed to fetch order:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.orderId) {
      fetchOrder();
    }
  }, [params.orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange mx-auto mb-4"></div>
          <p>Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <p className="text-gray-600">
            The order you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-2 max-w-4xl">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Order Confirmation</h1>
            <p className="text-gray-600">Order #{order.orderId}</p>
            <p className="text-sm text-gray-500">
              Placed on {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Details</h3>
              <div className="space-y-2">
                <p><strong>Name:</strong> {order.customerDetails.name}</p>
                <p><strong>Email:</strong> {order.customerDetails.email}</p>
                <p><strong>Phone:</strong> {order.customerDetails.phone}</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Shipping Address</h3>
              <div className="space-y-1">
                <p>{order.shippingDetails.address}</p>
                <p>{order.shippingDetails.city}, {order.shippingDetails.zip}</p>
                <p>{order.shippingDetails.country}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      className="rounded-lg object-cover mr-4"
                      width={16}
                      height={16}
                    />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-bold">${item.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${order.totals.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${order.totals.shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (Included):</span>
                <span>${order.totals.vat.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Grand Total:</span>
                <span className="text-orange">${order.totals.grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Order {order.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}