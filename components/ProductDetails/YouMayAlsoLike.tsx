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
            <div className="bg-gray-200 rounded-lg mb-8 w-full">
              <Image src={item.image} alt={item.name} className="rounded-lg w-full" />
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