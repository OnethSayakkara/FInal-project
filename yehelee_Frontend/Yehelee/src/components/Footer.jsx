import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/images/logo2.svg';
import pay from '../assets/images/Frame 4.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Salon Info */}
          <div>
            <img
              src={logo} // Add correct logo path here
              alt="Salon Logo"
              className="w-44 mb-4"
            />
            <p className="text-gray-300 text-pretty font-lato font-normal">
              At Salon Yehelee, we blend style, creativity, and personalized care to bring out the best in you. Our expert team is dedicated to delivering exceptional hair, beauty, and spa services in a relaxing, welcoming environment. Discover the Yehelee difference today!
            </p>
            <img src={pay} className='mt-5 w-auto h-7'  alt="payment option" />
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-brown-400 text-brown font-lato">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About us</li>
              <li>Services</li>
              <li>Professionals</li>
              <li>Work with us</li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-brown-400 text-brown font-lato">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Basic Hair Cut</li>
              <li>Hair Spa Treatment</li>
              <li>Scalp Treatment</li>
              <li>Bridesmaid Makeup</li>
              <li>Hair Rebounding</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-brown-400 text-brown font-lato">Contact</h4>
            <p className="text-gray-300 mb-4">
              84B, Wakwella Rd, Minuwangoda, Galle
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <FaPhoneAlt className="text-brown-400 mr-2" />
                <span>(94) 74363-1212</span>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-brown-400 mr-2" />
                <span>(94) 74600-1212</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
