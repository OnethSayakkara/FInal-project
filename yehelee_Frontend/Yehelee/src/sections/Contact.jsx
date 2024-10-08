import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [email, setEmail] = useState("");
  const [note, setnote] = useState("");


  const handleFullname = (event) => {
    setFullname(event.target.value);
}

const handleWhatsApp = (event) => {
  setWhatsApp(event.target.value);
}

const handleEmail = (event) => {
  setEmail(event.target.value);
}

const handlenote = (event) => {
  setnote(event.target.value);
}


const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    fullname,
    whatsApp,
    email,
    note    
  };

  axios.post("http://localhost:8080/auth/contactform", data)
  .then(function (response) {
    setFullname("");
    setWhatsApp("");
    setEmail("");
    setnote(""); 
      // Call the callback to refresh the categories
  })
  .catch(function (error) {
      console.error('Error adding contactForm:', error);
  });

}
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-auto grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* Left side: Contact Info */}
        <div className="text-center md:text-left mb-10 md:mb-0 font-lato">
          <h2 className="text-3xl font-bold text-gray-700 mb-4 font-syne">Do you have any questions?</h2>
          <h3 className="text-4xl font-bold text-brown mb-6 font-syne">CONTACT US</h3>
          <p className="text-gray-500 mb-8 font-lato font-semibold ">
            Don't waste any more time and contact our team of experts now. We will be happy to help you.
          </p>
          <div className="space-y-8 w-96 ">
            <div className="flex items-center justify-center md:justify-start text-white bg-brown-600 rounded-full p-3 shadow-lg bg-brown">
              <FaPhoneAlt className="text-xl mr-3 text-white" />
              <span className="font-poppins font-medium text-white">(+94)74363-1212</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-white bg-brown-600 rounded-full p-3 shadow-lg bg-brown">
              <FaWhatsapp className="text-xl mr-3 text-white" />
              <span className="font-poppins font-medium text-white">(+94)74600-1212</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-white bg-brown-600 rounded-full p-3 shadow-lg bg-brown">
              <FaEnvelope className="text-xl mr-3 text-white" />
              <span className="font-poppins font-medium text-white">contact@salonyehelee.com</span>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="p-6 shadow-md rounded-md border-2 border-brown">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 font-syne">Contact Form</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                id='fullname'
                value={fullname}
                onChange={handleFullname}
                className="w-full px-4 py-2 border border-brown rounded-md focus:outline-brown focus:ring-1 focus:ring-orange-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                id='whatsApp'
                value={whatsApp}
                onChange={handleWhatsApp}
                placeholder="Cellular/Whatsapp"
                className="w-full px-4 py-2 border border-brown rounded-md focus:outline-brown focus:ring-1 focus:ring-orange-500"
              />
              <input
                type="email"
                id='email'
                value={email}
                onChange={handleEmail}
                placeholder="E-mail"
                className="w-full px-4 py-2 border border-brown rounded-md focus:outline-brown focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div>
              <textarea
                id='note'
                value={note}
                onChange={handlenote}
                placeholder="Message"
                className="w-full px-4 py-2 border border-brown rounded-md focus:outline-brown focus:ring-1 focus:ring-orange-500"
                rows="4"
              />
            </div>
            <button
              type='submit'
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-light_brown transition-colors font-syne"
            >
              Send Message »
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
