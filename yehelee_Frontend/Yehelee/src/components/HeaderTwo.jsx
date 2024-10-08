import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logos.svg';
import { Link } from 'react-router-dom';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from 'react-icons/fa';   

function HeaderTwo() {
  const [currentTime, setCurrentTime] = useState('');
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      
      // Determine whether it's day or night based on the hour
      setIsDaytime(hours >= 6 && hours < 18); // Consider daytime from 6 AM to 6 PM

      // Format time
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
      const ampm = hours >= 12 ? '' : '';

      setCurrentTime(`${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);








  return (
    <header data-aos='zoom' className="w-full bg-white shadow-md py-4 sticky top-0 z-20 ">
      <nav className="container mx-auto flex justify-between items-center px-6">
        
        
        <div className="w-44 h-auto"> 
          <a href="/">
            <img src={logo} alt="Salon Logo" className="w-full h-auto object-contain" />
          </a>
        </div>
        
        
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li><Link to='/' className="hover:text-brown transition font-syne font-medium">Home</Link></li>
          <li><Link to='/' className="hover:text-brown transition font-syne font-medium">Shop</Link></li>
          <li><Link to='/' className="hover:text-brown transition font-syne font-medium">About US</Link></li>
          <li><Link to='/' className="hover:text-brown transition font-syne font-medium">Contact US</Link></li>
        </ul>
        

        <div className="time-display flex justify-between gap-3 bg-gray_black text-white rounded-lg p-2">
        <span className="ml-2">{currentTime}</span>
        {isDaytime ? <MdOutlineWbSunny className="text-yellow-500 text-xl" /> : <FaMoon className="text-yellow text-xl" />}
        
        </div>
      </nav>
    </header>
  );
}

export default HeaderTwo;