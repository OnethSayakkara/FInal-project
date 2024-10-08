import React, { useState } from 'react';
import image1 from '../assets/images/rec1.png';
import image2 from '../assets/images/image4.png';
import image3 from '../assets/images/rec3.png';
import Aos from "aos";
import 'aos/dist/aos.css';
import { IoIosArrowForward } from "react-icons/io";

function Reviews() {

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = async () => {
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }

    const response = await fetch('http://localhost:8080/auth/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: email }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
      setEmail(''); // Clear the input field after sending
    } else {
      alert('Failed to send email.');
    }
  };


  return (
    <div className="w-full font-poppins"> {/* Apply Syne font to the entire component */}
      
      <section className="relative w-full flex justify-center items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full" style={{ height: '400px' }}> 
         
          <div 
            className="relative w-full h-full flex items-center justify-center bg-cover bg-no-repeat bg-center" 
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className="text-white p-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold font-syne mb-4">MAKE YOUR</h2>
                <h3 className="text-5xl font-bold font-syne text-[#C89972] mb-4">WEDDING GOOD LOOKING</h3>
                <p className="text-lg font-syne mb-6">Make Your Beautiful Day Looking Good with Our Professional Artists</p>
                <button className="px-6 py-2 bg-[#C89972] font-syne text-white rounded-lg hover:bg-[#b47c5e] transition-colors">
                  More Information
                </button>
              </div>
            </div>
          </div>

          <div 
            className="relative w-full h-full flex items-center justify-center bg-cover bg-no-repeat bg-center" 
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div className="text-white p-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold font-syne mb-4">RELAX YOUR MIND</h2>
                <h3 className="text-5xl font-bold font-syne text-[#C89972] mb-4">WITH US</h3>
                <p className="text-lg mb-6 font-syne">Ayurveda experience has been designed keeping in mind the individual's desire to heal, cleanse, relax and revitalize.</p>
                <button className="px-6 py-2 bg-[#C89972] text-white rounded-lg hover:bg-[#b47c5e] transition-colors font-syne">
                  More Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="w-full bg-cover bg-no-repeat bg-center py-20" 
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl font-bold font-syne">SALON YEHELEE</h2>
          <h3 className="text-4xl font-bold font-syne">MORE INFORMATION PORTAL</h3>
          <p className="mt-4 font-syne">You can get Quotations and Instructions for your big day to be more beautiful</p>
        </div>

        <div className="flex justify-center" style={{ height: '50px' }}> 
          <input 
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="px-4 py-3 w-full max-w-lg rounded-l-lg border-none" 
            placeholder="Send us to your E-mail" 
          />
          <button className="px-6 py-3 bg-black text-white rounded-r-lg hover:bg-gray-800 transition-colors"
          onClick={handleSendEmail}>
            Send
          </button>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
