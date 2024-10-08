import React from 'react'
import Aos from 'aos';
import girl from '../assets/images/girl11.png'
import worker1 from '../assets/images/client1.png'
import worker2 from '../assets/images/client2.png'
import worker3 from '../assets/images/client3.png'
import worker4 from '../assets/images/client5.png'
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import person1 from '../assets/images/person1.png'
import person2 from '../assets/images/person2.png'

function Team() {
  return (
    <div>
    <section className="relative">
        <img src={girl} alt="Background image of a woman with long hair" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start pl-10">
            <h1 className="text-5xl text-brown font-bold font-syne ">OURS</h1>
            <h2 className="text-5xl text-white font-bold font-syne">PROFESSIONALS</h2>
            <p className="text-white mt-4 font-lato">Meet all our experts who are at your disposal to take care of your hair</p>
        </div>
    </section>
    <section className="bg-white py-10">
        <div className="container mx-auto flex justify-around">
            <div className="text-center font-lato">
                <img src={worker1} alt="Portrait of Sarah Rules" className="rounded-full mx-auto" />
                <h3 className="mt-4 text-lg font-bold">Sarah Rules</h3>
                <p className="text-sm font-semibold text-brown ">Hair Designer</p>
                <div className="flex justify-center mt-2 space-x-2">
                <FaTiktok />
                <FaInstagram />
                    <i className="fab fa-tiktok text-gray-500"></i>
                </div>
            </div>
            <div className="text-center">
                <img src={worker2} alt="Portrait of Ariyapala" className="rounded-full mx-auto" />
                <h3 className="mt-4 text-lg font-bold">Hannah Peterson</h3>
                <p className="text-sm font-semibold text-brown">Hair Artist</p>
                <div className="flex justify-center mt-2 space-x-2">
                <FaTiktok />
                <FaInstagram />
                </div>
            </div>
            <div className="text-center">
                <img src={worker3} alt="Portrait of sumanawathi" className="rounded-full mx-auto" />
                <h3 className="mt-4 text-lg font-bold">James Aura</h3>
                <p className="text-sm font-semibold text-brown">Hair Designer</p>
                <div className="flex justify-center mt-2 space-x-2">
                <FaTiktok />
                <FaInstagram />
                </div>
            </div>
            <div className="text-center">
                <img src={worker4} alt="Portrait of Samarakon" className="rounded-full mx-auto" />
                <h3 className="mt-4 text-lg font-bold">Tin Kali</h3>
                <p className="text-sm font-semibold text-brown">Hair Designer</p>
                <div className="flex justify-center mt-2 space-x-2">
                <FaTiktok />
                <FaInstagram />
                </div>
            </div>
        </div>
    </section>
    <section className="bg-beige py-10 bg-light_yellow">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-brown-500 font-syne text-brown">TESTIMONIALS</h2>
            <div className="flex justify-around mt-10">
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mx-2 ">
                    <i className="fas fa-quote-left text-3xl text-brown-500"></i>
                    <p className="mt-4 text-gray-700 font-poppins font-semibold text-balance">I've been coming to Salon yehelee for over a year now, and every visit is a treat! The staff is incredibly friendly, and the atmosphere is so relaxing. My hair has never looked better. I always leave feeling pampered and confident. Highly recommend to anyone looking for top-notch service!</p>
                    <div className="flex items-center mt-4">
                        <img src={person1} alt="Portrait of Sarah Nimbus" className="rounded-full w-24 h-24" />
                        <div className="ml-4">
                            <h4 className="font-bold">Sarah Nimbus</h4>
                            <p className="text-sm text-gray-500 font-semibold font-poppins text-brown">Advertising</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mx-2">
                    <i className="fas fa-quote-left text-3xl text-brown-500"></i>
                    <p className="mt-4 text-gray-700 font-poppins font-semibold text-balance">"I had the best facial ever at Salon Yehelee. The esthetician was so knowledgeable and gave me great tips for my skincare routine. My skin has never felt so soft and refreshed. Can't wait for my next appointment!"</p>
                    <div className="flex items-center mt-4">
                        <img src={person2} alt="Portrait of Jéssika Jones" className="rounded-full  w-24 h-24" />
                        <div className="ml-4">
                            <h4 className="font-bold">Jéssika Jones</h4>
                            <p className="text-sm text-gray-500 font-semibold font-poppins text-brown">Attorney</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
);
};

export default Team