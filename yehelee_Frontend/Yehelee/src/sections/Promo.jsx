import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Promo = () => {
  return (
    <div className="bg-[#c79c79] py-2 sticky">
      <div className="container mx-auto flex justify-between items-center text-white text-sm ">
        
        {/* Left side: Contact Info */}
        <div className="flex space-x-6">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>contact@salonyehelee.com</span>
          </div>
          
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>(091) 457-2479</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-2">
            <FaWhatsapp />
            <span>(+94) 74363-1212</span>
          </div>
        </div>
        
        {/* Right side: Social Media Links */}
        <div className="flex items-center space-x-4">
          <span>Follow us:</span>
          <Link to='https://www.youtube.com/@salonyehelee'><FaYoutube className="hover:text-gray-200 cursor-pointer" /></Link>
          <Link to='https://www.instagram.com/salon_yehelee?igsh=aG8wdW02eXc5bXJ5'><FaInstagram className="hover:text-gray-200 cursor-pointer" /></Link>
          <FaTiktok className="hover:text-gray-200 cursor-pointer" />
          <Link to='https://www.facebook.com/share/79L2MD1PgfwbMKgS/?mibextid=qi2Omg'><FaFacebookF className="hover:text-gray-200 cursor-pointer" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Promo;
