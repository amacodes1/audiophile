import Button from "../Ui/Buttons";
import Image from "next/image";
import Speaker from "@/public/assets/svg/category-speakers.svg"
import Earphones from "@/public/assets/svg/yx-earphones.svg"

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto px-2">
      <div className="space-y-6 md:space-y-8 lg:space-y-12">
      {/* ZX9 Speaker */}
      <div className="bg-orange h-[480px] rounded-lg p-8 md:p-12 lg:py-0 lg:px-32 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-32 overflow-hidden bg-no-repeat bg-left relative" style={{ backgroundImage: "url('/assets/svg/circle-patterns.svg')", backgroundSize: '68%' }}>
        <div className="w-1/2 lg:w-auto flex items-end">
          <Image
            src={Speaker}
            className=" drop-shadow-2xl"
            alt="speaker"
            width={410.23}
            height={493}
            priority
          />
        </div>
        <div className="text-center lg:text-left text-white max-w-xs">
          <h2 className="text-4xl lg:text-[56px] font-bold uppercase leading-[58px]">
            ZX9
            <br />
            Speaker
          </h2>
          <p className="my-6 text-[15px] leading-[25px] text-white/75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <a href="/product?slug=zx9-speaker">
            <Button variant="secondary">See Product</Button>
          </a>
        </div>
      </div>

      {/* ZX7 Speaker */}
      <div className="bg-cover bg-center rounded-lg h-80 flex items-center px-6 md:px-16" style={{ backgroundImage: "url('/assets/svg/zx-speaker-on-table.svg')" }}>
        <div>
          <h2 className="text-3xl font-bold uppercase mb-8">ZX7 Speaker</h2>
          <a href="/product?slug=zx7-speaker">
            <Button variant="tertiary">See Product</Button>
          </a>
        </div>
      </div>

      {/* YX1 Earphones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <Image
            src={Earphones}
            className=" rounded-lg drop-shadow-2xl"
            alt="earphones"
            width={540}
            height={320}
            priority
          />
        </div>
        <div className="bg-gray-md rounded-lg flex items-center px-6 md:px-12 lg:px-24 py-10 md:py-0">
          <div>
            <h2 className="text-3xl font-bold uppercase mb-8">YX1 Earphones</h2>
            <a href="/product?slug=yx1-earphones">
              <Button variant="tertiary">See Product</Button>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
