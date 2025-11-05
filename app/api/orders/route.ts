import { NextRequest, NextResponse } from 'next/server';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api';
import { sendOrderConfirmationEmail } from '../../../lib/email';
import { CartItem } from '../../../types';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Generate order ID
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Calculate totals
    const subtotal = body.items.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0);
    const shipping = 50;
    const vat = subtotal * 0.20;
    const grandTotal = subtotal + shipping;
    
    // Create order in Convex
    await convex.mutation(api.orders.createOrder, {
      orderId,
      customerDetails: {
        name: body.customerDetails.name,
        email: body.customerDetails.email,
        phone: body.customerDetails.phone,
      },
      shippingDetails: {
        address: body.shippingDetails.address,
        city: body.shippingDetails.city,
        zip: body.shippingDetails.zip,
        country: body.shippingDetails.country,
      },
      paymentMethod: body.paymentMethod,
      items: body.items,
      totals: {
        subtotal,
        shipping,
        vat,
        grandTotal,
      },
    });
    
    // Send confirmation email (optional - don't fail order if email fails)
    try {
      await sendOrderConfirmationEmail({
        customerName: body.customerDetails.name,
        customerEmail: body.customerDetails.email,
        orderId,
        items: body.items,
        shippingAddress: `${body.shippingDetails.address}, ${body.shippingDetails.city}, ${body.shippingDetails.zip}, ${body.shippingDetails.country}`,
        grandTotal,
      });
    } catch (emailError) {
      console.warn('Email sending failed:', emailError);
    }
    
    return NextResponse.json({ 
      success: true, 
      orderId,
      message: 'Order created successfully' 
    });
    
  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create order' },
      { status: 500 }
    );
  }
}