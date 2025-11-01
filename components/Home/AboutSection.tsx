import Image from "next/image";
import AboutImage from "@/public/assets/svg/man-on-headset.svg";

const About = () => {
  return (
    <section className="py-20 lg:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
            Bringing you the <span className="text-orange">best</span> audio
            gear
          </h2>
          <p className="mt-8 text-black/50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src={AboutImage}
            className="rounded-lg w-full h-full object-cover"
            alt="Man on headphone"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;
