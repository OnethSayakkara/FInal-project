import React from 'react'
import logo from '../assets/images/logos.svg';
import { FaClock } from "react-icons/fa";

function footerinfo() {
  return (
    <footer className="bg-gray_black text-white py-3 font-lato text-sm">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className=" ">Salon Yehelee © All Right Reserved</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>Learn about our <span className='text-brown'>Terms of Use </span>and <span className='text-brown'>Privacy Policy</span></span>
      </div>
      <div>
        <p>Developed by<span className='text-brown'> Team Yehelee</span></p>
      </div>
    </div>
  </footer>
  )
}

export default footerinfo