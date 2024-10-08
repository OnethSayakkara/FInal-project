import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Basic Hair Cut',
    description: 'Professional haircut tailored to your face shape and style preference.',
    price: 'LKR 1,500',
  },
  {
    title: 'Hair Spa Treatment',
    description: 'Deep conditioning treatment to nourish and revitalize dry or damaged hair.',
    price: 'LKR 3,500',
  },
  {
    title: 'Scalp Treatment',
    description: 'Specialized treatment to address scalp issues such as dandruff, dryness, or oiliness.',
    price: 'LKR 3,000',
  },
  {
    title: 'Hair Coloring',
    description: 'Full hair coloring with professional-grade products.',
    price: 'LKR 5,500',
  },
  {
    title: 'Root Touch-Up',
    description: 'Color touch-up for root regrowth to maintain a consistent hair color.',
    price: 'LKR 2,500',
  },
  {
    title: 'Keratin Treatment',
    description: 'Smoothing treatment to reduce frizz and add shine, making hair easier to manage.',
    price: 'LKR 10,000',
  },
  {
    title: 'Hair Rebonding',
    description: 'Chemical hair straightening treatment for sleek and straight hair.',
    price: 'LKR 12,500',
  },
  {
    title: 'Bridesmaid Makeup',
    description: 'Elegant makeup for bridesmaids, complementing the bride’s look.',
    price: 'LKR 8,500',
  },
];

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 500, 
    });
  }, []);

  return (
    <section id="services" className="w-full py-20">
      
      <h2 className="text-center text-3xl font-bold mb-10">
        OUR <span className="text-[#C89972] font-syne">SERVICES</span>
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-10 lg:px-40">
        {services.map((service, index) => (
          <div
            key={index}
            className=" bg-white p-6 rounded-lg shadow-sm hover:shadow-lg border border-brown  transition-all duration-2000 transform hover:scale-105 h-full flex flex-col justify-between"
            style={{ height: '300px' }} 
            data-aos="zoom-in"
          >
            <div>
              <h3 className="text-lg font-syne font-bold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 font-syne mb-4 text-center">{service.description}</p>
            </div>
            <div>
              <p className="text-[#C89972] font-syne font-bold text-center mb-4">{service.price}</p>
              <button className="w-full py-2 px-4  bg-[#C89972] text-white rounded-lg font-syne hover:bg-[#b47c5e] transition-colors">
              <Link to="appoinment">Schedule Appointment »</Link>
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
