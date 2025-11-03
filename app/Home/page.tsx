"use client";

import CategorySection from "@/components/Home/CategorySection"
import FeaturedProducts from "@/components/Home/FeaturedProducts"
import Hero from "@/components/Home/Hero"

const HomePage = () => {
  return (
    <div>
        <Hero />
        <CategorySection />
        <FeaturedProducts />
    </div>
  )
}

export default HomePage