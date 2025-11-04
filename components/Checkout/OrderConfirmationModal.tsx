import React, { useEffect } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { CartItem } from '../../types';

interface OrderConfirmationModalProps {
  onClose: () => void;
  orderItems: CartItem[];
  orderId: string;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({ onClose, orderItems, orderId }) => {
  const cartItems = orderItems;
  const router = useRouter();
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  const firstItem = cartItems[0];
  const otherItemsCount = cartItems.length - 1;
  const grandTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleBackToHome = () => {
    onClose();
    router.push('/');
  };

  if (!firstItem) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6 overflow-y-auto">
      <div className="bg-white rounded-lg p-8 md:p-12 max-w-lg w-[327px] max-h-[90vh] sm:w-[540px] overflow-y-auto my-auto">
        <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mb-8">
          <Check size={32} className="text-white" strokeWidth={4} />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider leading-tight mb-6">
          Thank you<br />for your order
        </h2>
        <p className="text-black/50 text-[15px] mb-8">You will receive an email confirmation shortly.</p>
        
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden mb-8">
          <div className="bg-gray-200 p-6 grow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={firstItem.image} alt={firstItem.name} width={48} height={48} className="w-12 h-12 rounded-lg bg-gray-200 object-contain" />
                <div className="ml-4">
                  <p className="font-bold text-[15px]">{firstItem.name}</p>
                  <p className="font-bold text-sm text-black/50">{formatCurrency(firstItem.price)}</p>
                </div>
              </div>
              <p className="font-bold text-[15px] text-black/50">x{firstItem.quantity}</p>
            </div>
            {otherItemsCount > 0 && (
              <>
                <hr className="my-3 border-black/10" />
                <p className="text-center text-xs font-bold text-black/50">and {otherItemsCount} other item(s)</p>
              </>
            )}
          </div>
          <div className="bg-black text-white p-6 md:pl-8 flex flex-col justify-center w-full md:w-2/5">
            <p className="uppercase text-white/50 text-[15px] mb-1">Grand Total</p>
            <p className="text-lg font-bold">{formatCurrency(grandTotal)}</p>
          </div>
        </div>

        <button
          onClick={handleBackToHome}
          className="w-full bg-orange text-white cursor-pointer uppercase font-bold text-[13px] tracking-wide py-4 hover:bg-orange-light transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;