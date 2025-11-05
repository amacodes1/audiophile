"use client";

import { useSearchParams } from 'next/navigation';
import PageBanner from "../../components/Categories/PageBanner";
import ProductFeature from "../../components/Categories/ProductFeature";
import CategorySection from "../../components/Home/CategorySection";
import { products } from "../../data/products";

export default function CategoriesPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'headphones';
  
  const categoryProducts = products.filter(product => product.category === category);
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div>
      <PageBanner title={capitalizedCategory} />
      <div className="py-16 px-6">
        {categoryProducts.map((product, index) => (
          <ProductFeature key={product.id} product={product} index={index} />
        ))}
      </div>
      <CategorySection />
    </div>
  );
}