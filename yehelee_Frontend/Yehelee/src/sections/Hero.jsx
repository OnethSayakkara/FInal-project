import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from '../assets/images/source.png';
import Aos from "aos";
import'aos/dist/aos.css';
import { IoIosArrowForward } from "react-icons/io";



function Hero() {

  useEffect(()=>{
    Aos.init({
      offset : 200 ,
      duration : 800,
      easing:'ease-in-sine',
      delay:100,
    });
  },[])

  const {darkMode, toggleDarkMode}= useDarkMode();
  return (
       <>
       <div className= {`${darkMode ? 'dark bg-black': 'light bg-white'}`}>
        <section id="hero" data-aos='zoom' className= 'w-[100%] h-[450px] m-auto bg-cover bg-center  flex justify-center flex-col items-start lg: px-28 py-20 gap-7 z-20' style={{backgroundImage:`url(${heroimg})`}}>
        <div className="relative left-1/2">
        <h2 data-aos='zoom-in' className="text-7xl leading-tight text-white font-semibold   font-syne " >YOUR HAIR NEEDS <br/>THE RIGHT CARE</h2>
        <p data-aos='zoom-in' className="text-xl  leading-normal  text-white font-normal  font-syne px-3"> Where expert care Meets Luxurious Services for a Transformation Beauty Expierience in <br/>Srilanka</p>
          {/* Learn More Button */}
        <button data-aos='zoom-in' className="mt-5 ml-3 flex items-center justify-center font-syne gap-2 bg-gray_black   text-white py-2 px-6 shadow-lg rounded-md  hover:bg-lightbrown transition duration-300 " >
        Learn More »
        </button>
        
        </div>
        </section>
       </div>
       </>

       )
}

export default Hero;
