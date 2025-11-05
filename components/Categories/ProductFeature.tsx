import React from 'react';
import { Product } from '../../types';
import Button from '../Ui/Buttons';
import Image from 'next/image';

interface ProductFeatureProps {
  product: Product;
  index: number;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ product, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`container mx-auto px-2 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-28 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className="lg:w-1/2 bg-gray-md">
        <Image 
          src={product.image.mobile} 
          alt={product.name} 
          width={327} 
          height={352} 
          className="w-full h-auto object-cover rounded-lg md:hidden" 
        />
        <Image 
          src={product.image.tablet} 
          alt={product.name} 
          width={281} 
          height={352} 
          className="w-full h-auto object-cover rounded-lg hidden md:block lg:hidden" 
        />
        <Image 
          src={product.image.desktop} 
          alt={product.name} 
          width={540} 
          height={560} 
          className="w-full h-auto object-cover rounded-lg hidden lg:block" 
        />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        {product.new && (
          <p className="text-orange tracking-widest-lg uppercase mb-4">New Product</p>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-black mb-6 md:mb-8">
          {product.name.split(' ').slice(0, -1).join(' ')}
          <br />
          {product.name.split(' ').slice(-1)}
        </h2>
        <p className="text-black/50 mb-6 md:mb-10 max-w-md mx-auto lg:mx-0">{product.description}</p>
        <a href={`/product?slug=${product.slug}`}>
          <Button variant="primary">See Product</Button>
        </a>
      </div>
    </div>
  );
};

export default ProductFeature;