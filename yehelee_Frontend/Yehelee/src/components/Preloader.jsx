import React from 'react';
import Lottie from 'lottie-react';
import preloaderAnimation from '../assets/images/Animation.json'; // Adjust the path accordingly

const Preloader = () => {
  return (
    <>
    <div className="flex justify-center items-center h-[200px] w-[200px] mt-48  ml-[740px]" >
      <Lottie animationData={preloaderAnimation} loop={true} speed={0.2} />
      
    </div>
    <div>
    <h1 className="mt-4 flex justify-center items-center text-4xl font-bold font-syne text-rose animate-fadeIn">
        Salon Yehelee
      </h1>
    </div>
    </>
    

  );
};

export default Preloader;
