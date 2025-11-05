import Image from 'next/image';
import { productData } from '../../data/productData';
import Button from '../Ui/Buttons';

const YouMayAlsoLike = () => {
  const { suggestions } = productData;

  return (
    <div className="container mx-auto px-2 text-center">
      <h2 className="text-3xl font-bold uppercase mb-12">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {suggestions.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-gray-200 w-[320px] flex items-center justify-center h-[300px] rounded-lg mb-8">
              <Image src={item.image} width={148.31} height={193} alt={item.name} className="rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-8">{item.name}</h3>
            <Button variant="primary">See Product</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;