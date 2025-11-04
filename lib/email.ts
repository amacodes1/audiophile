import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface OrderEmailData {
  customerName: string;
  customerEmail: string;
  orderId: string;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  shippingAddress: string;
  grandTotal: number;
}

export const sendOrderConfirmationEmail = async (data: OrderEmailData) => {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; }
        .header { background: #D87D4A; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .order-item { border-bottom: 1px solid #eee; padding: 15px 0; display: flex; justify-content: space-between; }
        .total { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .button { background: #D87D4A; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        @media (max-width: 600px) { .container { margin: 0; border-radius: 0; } }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Your Order!</h1>
          <p>Order #${data.orderId}</p>
        </div>
        <div class="content">
          <p>Dear ${data.customerName},</p>
          <p>Thank you for your order! We're excited to get your items to you.</p>
          
          <h3>Order Summary:</h3>
          ${data.items.map(item => `
            <div class="order-item">
              <div>
                <strong>${item.name}</strong><br>
                Quantity: ${item.quantity}
              </div>
              <div>$${item.price.toLocaleString()}</div>
            </div>
          `).join('')}
          
          <div class="total">
            <strong>Total: $${data.grandTotal.toLocaleString()}</strong>
          </div>
          
          <h3>Shipping Address:</h3>
          <p>${data.shippingAddress}</p>
          
          <a href="${process.env.NEXT_PUBLIC_APP_URL}/orders/${data.orderId}" class="button">
            View Your Order
          </a>
          
          <p>If you have any questions, please contact our support team.</p>
          <p>Best regards,<br>The Audiophile Team</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: data.customerEmail,
    subject: `Order Confirmation - #${data.orderId}`,
    html: htmlTemplate,
  });
};