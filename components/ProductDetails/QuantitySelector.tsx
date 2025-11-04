interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  size?: 'normal' | 'small';
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, setQuantity, size = 'normal' }) => {
  const isSmall = size === 'small';
  
  return (
    <div className={`flex items-center bg-gray-200 ${isSmall ? 'px-3 py-2' : 'px-4 py-3'}`}>
      <button 
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="text-black/50 hover:text-orange cursor-pointer font-bold"
      >
        -
      </button>
      <span className={`font-bold text-black-secondary ${isSmall ? 'mx-4' : 'mx-6'}`}>{quantity}</span>
      <button 
        onClick={() => setQuantity(quantity + 1)}
        className="text-black/50 hover:text-orange cursor-pointer font-bold"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;