"use client";

import { useState } from 'react';
import { products } from '../../data/products';
import Button from '../Ui/Buttons';
import QuantitySelector from './QuantitySelector';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';
import Image from 'next/image';

interface ProductDetailProps {
  productSlug: string;
}

const ProductDetail = ({ productSlug }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.slug === productSlug) || products[0];
  const dispatch = useAppDispatch();
  
  const totalPrice = product.price * quantity;
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      item: {
        id: product.slug,
        name: product.name,
        price: product.price,
        image: product.image.desktop
      },
      quantity
    }));
  };

  return (
    <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <Image src={product.image.desktop} alt={product.name} className="w-full h-auto" />
      </div>
      <div>
        {product.new && (
          <p className="text-orange tracking-widest-lg uppercase mb-4">New Product</p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold uppercase mb-6">{product.name}</h1>
        <p className="text-black/50 mb-6">{product.description}</p>
        <p className="text-xl font-bold tracking-widest-md mb-8">${totalPrice.toLocaleString()}</p>
        <div className="flex items-center space-x-4">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;