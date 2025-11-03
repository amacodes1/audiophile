import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    image: {
      mobile: "/assets/svg/xx-headset.svg",
      tablet: "/assets/svg/xx-headset.svg",
      desktop: "/assets/svg/xx-headset.svg"
    },
    category: "headphones",
    new: true,
    price: 2999,
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: "",
    includes: [],
    gallery: {
      first: { mobile: "", tablet: "", desktop: "" },
      second: { mobile: "", tablet: "", desktop: "" },
      third: { mobile: "", tablet: "", desktop: "" }
    },
    others: []
  },
  {
    id: 2,
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    image: {
      mobile: "/assets/svg/category-speakers.svg",
      tablet: "/assets/svg/category-speakers.svg",
      desktop: "/assets/svg/category-speakers.svg"
    },
    category: "speakers",
    new: false,
    price: 4500,
    description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity.",
    features: "",
    includes: [],
    gallery: {
      first: { mobile: "", tablet: "", desktop: "" },
      second: { mobile: "", tablet: "", desktop: "" },
      third: { mobile: "", tablet: "", desktop: "" }
    },
    others: []
  },
  {
    id: 3,
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    image: {
      mobile: "/assets/svg/yx-earphones.svg",
      tablet: "/assets/svg/yx-earphones.svg",
      desktop: "/assets/svg/yx-earphones.svg"
    },
    category: "earphones",
    new: true,
    price: 599,
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments.",
    features: "",
    includes: [],
    gallery: {
      first: { mobile: "", tablet: "", desktop: "" },
      second: { mobile: "", tablet: "", desktop: "" },
      third: { mobile: "", tablet: "", desktop: "" }
    },
    others: []
  }
];