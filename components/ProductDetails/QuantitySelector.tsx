interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex items-center bg-gray-200 px-4 py-3">
      <button 
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="text-black/50 hover:text-orange font-bold"
      >
        -
      </button>
      <span className="mx-6 font-bold">{quantity}</span>
      <button 
        onClick={() => setQuantity(quantity + 1)}
        className="text-black/50 hover:text-orange font-bold"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;