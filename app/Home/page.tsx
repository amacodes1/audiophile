import About from "@/components/Home/AboutSection"
import CategorySection from "@/components/Home/CategorySection"
import FeaturedProducts from "@/components/Home/FeaturedProducts"
import Hero from "@/components/Home/Hero"

const HomePage = () => {
  return (
    <div>
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <About />
    </div>
  )
}

export default HomePage