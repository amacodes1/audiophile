import Button from "../Ui/Buttons";
import Image from "next/image";
import Speaker from "@/public/assets/svg/category-speakers.svg"
import Earphones from "@/public/assets/svg/category-earphones.svg"

const FeaturedProducts = () => {
  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-12">
      {/* ZX9 Speaker */}
      <div className="bg-orange rounded-lg p-8 md:p-12 lg:py-0 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 overflow-hidden relative bg-circles-pattern bg-no-repeat bg-cover lg:bg-auto lg:bg-left-bottom">
        <div className="w-1/2 lg:w-auto lg:self-end">
          <Image
            src={Speaker}
            className="w-full max-w-[200px] lg:max-w-xs drop-shadow-2xl"
            alt="speaker"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="text-center lg:text-left text-white max-w-xs">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase leading-tight">
            ZX9
            <br />
            Speaker
          </h2>
          <p className="my-6 text-white/75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button variant="secondary">See Product</Button>
        </div>
      </div>

      {/* ZX7 Speaker */}
      <div className="bg-zx7-speaker bg-cover bg-center rounded-lg h-80 flex items-center px-6 md:px-16">
        <div>
          <h2 className="text-3xl font-bold uppercase mb-8">ZX7 Speaker</h2>
          <Button variant="tertiary">See Product</Button>
        </div>
      </div>

      {/* YX1 Earphones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <Image
            src={Earphones}
            className="w-full max-w-[200px] lg:max-w-xs drop-shadow-2xl"
            alt="earphones"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="bg-gray-md rounded-lg flex items-center px-6 md:px-12 lg:px-24 py-10 md:py-0">
          <div>
            <h2 className="text-3xl font-bold uppercase mb-8">YX1 Earphones</h2>
            <Button variant="tertiary">See Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
