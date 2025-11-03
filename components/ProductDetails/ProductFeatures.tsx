import { productData } from '../../data/productData';

const ProductFeatures = () => {
  const { mainProduct } = productData;

  return (
    <div className="container mx-auto px-2 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-32">
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-bold uppercase mb-8">Features</h2>
        <div className="text-black/50 space-y-6">
          {mainProduct.features.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold uppercase mb-8">In the Box</h2>
        <ul className="space-y-2">
          {mainProduct.inTheBox.map((item, index) => (
            <li key={index} className="flex">
              <span className="text-orange font-bold mr-6">{item.quantity}x</span>
              <span className="text-black/50">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeatures;