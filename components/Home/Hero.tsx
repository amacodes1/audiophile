import Button from "../Ui/Buttons";
// import HeroImage from "@/public/assets/svg/hero-headset.svg"
// import Image from "next/image";

const Hero = () => {
  return (
    <section style={{ backgroundImage: "url('/assets/svg/hero-background.svg')" }} className="bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-2 relative h-[600px] flex gap-[46.6px] items-center">
        <div className="text-white w-[398px] h-[346px] text-center lg:text-left">
          <p className="uppercase text-[14px] leading-[19px] tracking-[0.625em] text-white/50 mb-4">
            New Product
          </p>
          <h1 className="text-4xl md:text-[56px] font-bold uppercase tracking-[2px] leading-[58px] mb-6">
            XX99 Mark II Headphones
          </h1>
          <p className="text-white/75 mb-10 leading-[25px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <a href="/product?slug=xx99-mark-two-headphones">
            <Button variant="primary">See Product</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
