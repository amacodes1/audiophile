import React from 'react';
import { Product } from '../../types';
import Button from './Buttons';

interface ProductFeatureProps {
  product: Product;
  index: number;
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ product, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`container mx-auto px-2 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-28 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className="lg:w-1/2">
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <img src={product.image.mobile} alt={product.name} className="rounded-lg w-full h-auto object-cover" />
        </picture>
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
        <Button variant="primary">See Product</Button>
      </div>
    </div>
  );
};

export default ProductFeature;