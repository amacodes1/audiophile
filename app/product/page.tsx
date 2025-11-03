"use client";

import { useSearchParams } from 'next/navigation';
import GoBackButton from "../../components/ProductDetails/GoBackButton";
import ProductDetail from "../../components/ProductDetails/ProductDetail";
import ProductFeatures from "../../components/ProductDetails/ProductFeatures";
import ProductGallery from "../../components/ProductDetails/ProductGallery";
import YouMayAlsoLike from "../../components/ProductDetails/YouMayAlsoLike";
import CategorySection from "../../components/Home/CategorySection";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get('slug') || '';

  return (
    <div className="py-16 space-y-16">
      <div className="container mx-auto px-2">
        <GoBackButton />
      </div>
      <ProductDetail />
      <ProductFeatures />
      <ProductGallery />
      <YouMayAlsoLike />
      <CategorySection />
    </div>
  );
}