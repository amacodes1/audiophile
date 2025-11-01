import Button from "../Ui/Buttons";
import HeroImage from "@/public/assets/svg/hero-headset.svg"
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-black-tertiary">
      <div className="container mx-auto px-2 relative h-[600px] flex gap-[46.6px] items-center bg-hero-desktop bg-no-repeat bg-bottom lg:bg-right bg-contain lg:bg-auto">
        <div className="text-white max-w-sm text-center lg:text-left">
          <p className="uppercase tracking-widest-lg text-white/50 mb-4">
            New Product
          </p>
          <h1 className="text-4xl md:text-[56px] font-bold uppercase leading-tight mb-6">
            XX99 Mark II Headphones
          </h1>
          <p className="text-white/75 mb-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button variant="primary">See Product</Button>
        </div>
        <div className="bg-black-tertiary">
          <Image
            src={HeroImage} 
            className="py-0"
            alt="hero image"
            width={708.8}
            height={886}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
