import Image from 'next/image';
import { productData } from '../../data/productData';

const ProductGallery = () => {
  const { gallery } = productData;

  return (
    <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
      <div className="md:col-span-2 space-y-4 md:space-y-8">
        <Image src={gallery[0]} alt="Gallery image 1" className="rounded-lg w-full h-full object-cover" />
        <Image src={gallery[1]} alt="Gallery image 2" className="rounded-lg w-full h-full object-cover" />
      </div>
      <div className="md:col-span-3">
        <Image src={gallery[2]} alt="Gallery image 3" className="rounded-lg w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProductGallery;