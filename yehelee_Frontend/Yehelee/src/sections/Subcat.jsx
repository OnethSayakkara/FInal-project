import React from 'react';
import Fire from '../assets/images/fire.png'
import Cream from '../assets/images/cream.png'

function Subcat() {
  const categories = [
    { name: 'HAIRCARE', image: Cream, promo: true },
    { name: 'SKIN CARE', image: 'path_to_image', promo: false },
    { name: 'BODY CARE', image: 'path_to_image', promo: false },
    { name: 'NAIL CARE', image: 'path_to_image', promo: true },
    { name: 'FOOT CARE', image: 'path_to_image', promo: false },
    { name: 'BIJJ CARE', image: 'path_to_image', promo: true },
  ];

  return (
    <div className="flex justify-center space-x-8 p-10">
      {categories.map((category, index) => (
        <div key={index} className="relative text-center">
          {/* Circular background */}
          <div className="relative w-32 h-32 bg-gray rounded-full flex items-center shadow-2xl justify-center">
            {/* Product image */}
            <img src={category.image} alt={category.name} className="w-32 h-32 rounded-full object-contain" />
            {/* Promo flame */}
            {category.promo && (
              <div className="absolute top-1 right-[0.05rem] w-8 h-8">
                <img src={Fire} alt="Promo" className="object-contain" />
              </div>
            )}
          </div>
          {/* Category name */}
          <p className="mt-4 text-lg font-semibold">{category.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Subcat;
