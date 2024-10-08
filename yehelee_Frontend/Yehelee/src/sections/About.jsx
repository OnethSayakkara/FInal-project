import React from "react";
import hairdresser from '../assets/images/section2.png';
import katura from '../assets/images/scissor.svg';
import konde from '../assets/images/haircut.svg';
import botale from '../assets/images/bottle.svg';
import sampo from '../assets/images/shampo.svg';

function About() {
  return (
    <section
      id="about"
      className="w-full m-auto lg:px-40 px-10 py-20 relative grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10"
    >
      {/* Left Column */}
      <div className="lg:order-1 order-2 z-10"  >
        <h2 className="text-3xl font-bold mb-5 leading-tight font-syne">
          ABOUT THE <br /> 
          <span className="text-[#C89972]">SALON YEHELEE</span>
        </h2>
        <p className="text-left text-gray-600 mb-10 font-poppins font-medium subpixel-antialiased">
          At Salon Yehelee, we believe in offering more than just beauty treatments, 
          we create transformative experiences that leave you looking and feeling your best.
        </p>
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex items-center gap-5">
            <img src={katura} alt="Scissors icon" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold subpixel-antialiased">Professions of work</h3>
              <p className="text-gray-600 font-poppins subpixel-antialiased">
                Amet minim mollit non deserunt ullam co est sit.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={konde} alt="Hair icon" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold subpixel-antialiased">New Designs</h3>
              <p className="text-gray-600 font-poppins subpixel-antialiased">
                Amet minim mollit non deserunt ullam coet minim mollit.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={botale} alt="Products icon" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold subpixel-antialiased">Branded Products</h3>
              <p className="text-gray-600 font-poppins subpixel-antialiased">
                Amet minim mollit non deserunt ullam co est sit.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={sampo} alt="Treatment icon" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold subpixel-antialiased">Good Treatment</h3>
              <p className="text-gray-600 font-poppins subpixel-antialiased">
                Amet minim mollit non deserunt ullam coet minim mollit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image positioned in the right corner */}
      <div 
        className="absolute top-0 right-0 w-full h-full lg:w-[45%] lg:h-auto"
        
      >
        <img
          src={hairdresser}
          alt="Hairdresser"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </section>
  );
}

export default About;
