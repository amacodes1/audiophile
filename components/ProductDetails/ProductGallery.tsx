import Image from 'next/image';
import { products } from '../../data/products';

interface ProductGalleryProps {
  productSlug: string;
}

const ProductGallery = ({ productSlug }: ProductGalleryProps) => {
  const product = products.find(p => p.slug === productSlug) || products[0];
  const { gallery } = product;

  return (
    <div className="container mx-auto w-[1110px] h-[592px] px-2 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
      <div className="md:col-span-2 space-y-4 md:space-y-8">
        <Image
          src={gallery.first.desktop || "/assets/svg/xx-headset.svg"}
          width={445}
          height={280}
          alt="Gallery image 1"
          className="rounded-lg object-cover"
        />
        <Image
          src={gallery.second.desktop || "/assets/svg/xx-headset.svg"}
          width={445}
          height={280}
          alt="Gallery image 2"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="md:col-span-3">
        <Image
          src={gallery.third.desktop || "/assets/svg/xx-headset.svg"}
          width={635}
          height={529}
          alt="Gallery image 3"
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;