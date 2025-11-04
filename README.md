# Audiophile E-Commerce Platform

A modern, responsive e-commerce platform for premium audio equipment built with Next.js, TypeScript, and Tailwind CSS. Features a complete shopping experience with cart management, checkout system, and order processing.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse headphones, speakers, and earphones with detailed product pages
- **Shopping Cart**: Add/remove items, quantity management with persistent storage
- **Checkout System**: Complete order processing with form validation and payment options
- **Order Management**: Email confirmations and order tracking
- **Responsive Design**: Mobile-first approach with seamless desktop experience

### Technical Features
- **State Management**: Redux Toolkit with Redux Persist for cart persistence
- **Database**: Convex for real-time data storage and order management
- **Email Service**: Automated order confirmations via Nodemailer
- **Form Validation**: Type-safe validation with Zod schemas
- **Modern UI**: Custom Tailwind CSS components with consistent design system

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit, Redux Persist
- **Database**: Convex
- **Email**: Nodemailer with Gmail SMTP
- **Validation**: Zod
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd audiophile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Configure the following variables in `.env.local`:
   ```env
   # Convex Configuration
   NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
   CONVEX_DEPLOYMENT=your_convex_deployment
   
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_service_email@gmail.com
   SMTP_PASS=your_gmail_app_password
   FROM_EMAIL=noreply@yourdomain.com
   
   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up Convex**
   ```bash
   npx convex dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Email Setup
1. Create a Gmail account for your service
2. Enable 2-factor authentication
3. Generate an App Password in Google Account settings
4. Update `SMTP_USER` and `SMTP_PASS` in `.env.local`

### Convex Setup
1. Sign up at [Convex](https://convex.dev)
2. Create a new project
3. Run `npx convex dev` to deploy your schema
4. Update the Convex URL in your environment variables

## 📁 Project Structure

```
audiophile/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── categories/        # Category pages
│   ├── checkout/          # Checkout page
│   ├── product/           # Product detail pages
│   └── orders/            # Order confirmation pages
├── components/            # React components
│   ├── Cart/              # Cart modal and functionality
│   ├── Checkout/          # Checkout form and confirmation
│   ├── Home/              # Homepage sections
│   ├── Layout/            # Header, footer, navigation
│   ├── ProductDetails/    # Product detail components
│   └── Ui/                # Reusable UI components
├── convex/                # Convex database schema and functions
├── data/                  # Static product data
├── lib/                   # Utilities and services
├── store/                 # Redux store configuration
├── types/                 # TypeScript type definitions
└── public/assets/         # Static assets and images
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#D87D4A`
- **Light Orange**: `#FBAF85`
- **Dark Gray**: `#101010`
- **Light Gray**: `#F1F1F1`
- **Medium Gray**: `#FAFAFA`

### Typography
- **Headings**: Bold, uppercase with custom tracking
- **Body**: Optimized for readability across devices
- **Buttons**: Consistent sizing and hover states

## 🛒 Key Components

### Cart Management
- **CartSlice**: Redux state management for cart operations
- **CartModal**: Dropdown cart with item management
- **Persistent Storage**: Cart data survives page refreshes

### Checkout System
- **CheckoutForm**: Multi-step form with validation
- **Payment Options**: e-Money and Cash on Delivery
- **Order Processing**: Integration with Convex and email service

### Product Display
- **ProductFeature**: Category page product listings
- **ProductDetail**: Detailed product information and purchase options
- **CategorySection**: Homepage category navigation

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts

## 🔒 Security & Validation

- **Form Validation**: Zod schemas for type-safe validation
- **Input Sanitization**: Protected against common vulnerabilities
- **Environment Variables**: Sensitive data properly secured
- **Error Handling**: Comprehensive error boundaries and user feedback

## 🚀 Deployment

### Vercel Deployment
1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
Ensure all environment variables are configured in your deployment platform:
- Convex URLs and deployment keys
- SMTP credentials for email service
- App URL for production domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Database powered by Convex

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in the `/docs` folder
- Review the component examples in `/components`

---
