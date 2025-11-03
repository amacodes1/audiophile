"use client";

import { useState } from 'react';
import { productData } from '../../data/productData';
import Button from '../Ui/Buttons';
import QuantitySelector from './QuantitySelector';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { mainProduct } = productData;

  return (
    <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <img src={mainProduct.image} alt={mainProduct.name} className="w-full h-auto" />
      </div>
      <div>
        {mainProduct.new && (
          <p className="text-orange tracking-widest-lg uppercase mb-4">New Product</p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">{mainProduct.name}</h1>
        <p className="text-black/50 mb-6">{mainProduct.description}</p>
        <p className="text-xl font-bold tracking-widest-md mb-8">${mainProduct.price.toLocaleString()}</p>
        <div className="flex items-center space-x-4">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <Button variant="primary">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;