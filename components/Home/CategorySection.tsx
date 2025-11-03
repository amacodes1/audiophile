import Image from "next/image";
import Headphone from "@/public/assets/svg/category-headset.svg";
import Speaker from "@/public/assets/svg/category-speakers.svg";
import Earphone from "@/public/assets/svg/category-earphones.svg";
import ArrowRight from "@/public/assets/svg/arrow-right.svg";

const categories = [
  {
    name: "Headphones",
    image: Headphone,
    link: "#",
  },
  {
    name: "Speakers",
    image: Speaker,
    link: "#",
  },
  {
    name: "Earphones",
    image: Earphone,
    link: "#",
  },
];

const CategoryCard = ({
  name,
  image,
  link,
}: {
  name: string;
  image: string;
  link: string;
}) => (
  <div className="bg-gray-md rounded-lg pt-28 pb-8 text-center relative mt-20">
    <Image
      src={image}
      className="cursor-pointer absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 object-contain drop-shadow-xl"
      alt={name}
      width={300}
      height={300}
      priority
    />
    <h3 className="font-bold text-lg uppercase tracking-wide-xs mb-4">
      {name}
    </h3>
    <a
      href={link}
      className="inline-flex items-center gap-2 text-black/50 font-bold uppercase text-sm tracking-wide-xs group"
    >
      Shop
      <Image
        src={ArrowRight}
        className="w-4 h-4 text-orange transition-transform group-hover:translate-x-1 cursor-pointer"
        alt="arrow right"
        width={300}
        height={300}
        priority
      />
    </a>
  </div>
);

const CategorySection = () => {
  return (
    <section className="py-20 lg:pt-[120px] lg:pb-[166px]">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
