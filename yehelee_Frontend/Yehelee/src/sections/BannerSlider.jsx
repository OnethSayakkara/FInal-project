import React, { useState, useEffect } from 'react';
import banner1 from '../assets/images/banner1.png'; // Replace with your actual paths
import banner2 from '../assets/images/banner2.png'; // Replace with your actual paths
import banner3 from '../assets/images/banner3.png'; // Replace with your actual paths
import banner4 from '../assets/images/banner4.png'; // Replace with your actual paths

const banners = [
  { id: 1, src: banner1, alt: "Banner 1" },
  { id: 2, src: banner2, alt: "Banner 2" },
  { id: 3, src: banner3, alt: "Banner 3" },
  { id: 4, src: banner4, alt: "Banner 4" }
];

function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change banner every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 6500); // 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
    <div className="relative justify-center items-center  w-auto h-[500px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
            index === activeIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={banner.src}
            alt={banner.alt}
            className="w-full h-[500px] object-cover"
          />
        </div>
      ))}

      
      <div className="absolute  bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3  h-3 rounded-full ${
              index === activeIndex ? 'bg-gray_black' : 'bg-gray_black opacity-30'
            }`}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default BannerSlider;
