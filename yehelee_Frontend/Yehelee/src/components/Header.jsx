import React from 'react';
import logo from '../assets/images/logos.svg';
import { FaClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header data-aos='zoom' className="w-full bg-white shadow-md py-4 sticky top-0 z-20 ">
      <nav className="container mx-auto flex justify-between items-center px-6">
        
        
        <div className="w-44 h-auto"> 
          <a href="/">
            <img src={logo} alt="Salon Logo" className="w-full h-auto object-contain" />
          </a>
        </div>
        
        
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li><a href="#home" className="hover:text-brown transition font-syne font-medium">Home</a></li>
          <li><a href="#about" className="hover:text-brown transition font-syne font-medium">About Us</a></li>
          <li><a href="#services" className="hover:text-brown transition font-syne font-medium">Services</a></li>
          <li><a href="#proffesionals" className="hover:text-brown transition font-syne font-medium">Proffesionals</a></li>
          <li><a href="#contact" className="hover:text-brown transition font-syne font-medium">Contact</a></li>
        </ul>
        
      
        <Link to="appoinment" className="flex items-center space-x-2 bg-gray_black text-white py-2 px-4 rounded-md shadow-md hover:bg-lightbrown transition duration-300">
          <span>Appointment</span>
          <FaClock />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
