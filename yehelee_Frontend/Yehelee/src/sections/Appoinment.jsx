import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Banner from '../assets/images/lanBg.png';
import Promo from './promo';
import HeaderTwo from '../components/HeaderTwo';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';

const stripePromise = loadStripe('pk_test_51Q5pfgJCw3RRYEaog5gUHbffGaHtT38ORPHEZBxKc1QSzHjezuqt2YsVaZ0EZnZiVo5oyA9y2QxBqHipxPmU3b9e00cAtT2GVz');

function Appointment() {
    const [selectedServices, setSelectedServices] = useState({
        Hair: [],
        Facial: [],
        Bridal: []
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [category, setCategory] = useState('Hair');
    const [services, setServices] = useState({
        Hair: [],
        Facial: [],
        Bridal: []
    });
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        date: '',
        time: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8080/auth/getservices')
            .then(response => {
                const allServices = response.data;

                const categorizedServices = {
                    Hair: allServices.filter(service => service.category === 'Hair'),
                    Facial: allServices.filter(service => service.category === 'Facial'),
                    Bridal: allServices.filter(service => service.category === 'Bridal'),
                };

                setServices(categorizedServices);
            })
            .catch(error => {
                console.error("Error fetching services", error);
                toast.error('Error fetching services. Please try again later.');
            });
    }, []);

    const handleServiceChange = (service) => {
        const categoryServices = selectedServices[category];
        if (categoryServices.includes(service.serviceName)) {
            const updatedServices = categoryServices.filter(s => s !== service.serviceName);
            setSelectedServices({ ...selectedServices, [category]: updatedServices });
            setTotalPrice(totalPrice - service.price);
        } else {
            const updatedServices = [...categoryServices, service.serviceName];
            setSelectedServices({ ...selectedServices, [category]: updatedServices });
            setTotalPrice(totalPrice + service.price);
        }
    };

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
    };

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleConfirmAppointment = async (e) => {
        e.preventDefault();
        
        const appointmentData = {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            date: formData.date,
            time: formData.time,
            totalPrice: totalPrice,
            facilities: Object.keys(selectedServices).flatMap(category =>
                selectedServices[category].map(serviceName => {
                    const service = services[category].find(s => s.serviceName === serviceName);
                    return { service_id: service.serviceId, serviceName: service.serviceName, servicePrice: service.price };
                })
            )
        };

        console.log('Appointment Data:', appointmentData); // Log appointment data

        try {
            // Save the appointment in the database
            const response = await axios.post('http://localhost:8080/auth/reservations', appointmentData);

            handleCheckout();
                toast.success('Appointment saved successfully!');
                // Proceed to payment after saving the appointment
                

        } catch (error) {
            console.error('Error saving appointment:', error);
            toast.error('Error saving appointment! Please check your input.');
        }
    };

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // Call the backend to create a new Checkout session
        try {
            const response = await fetch('http://localhost:8080/auth/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selectedServices: selectedServices,
                    totalPrice: totalPrice,
                }),
            });

            const session = await response.json();

            // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.error(result.error.message);
                toast.error(result.error.message); // Display Stripe error
            }
        } catch (error) {
            console.error('Error creating checkout session:', error);
            toast.error('Error during checkout process!');
        }
    };

    return (
        <>
            <Promo />
            <HeaderTwo />
            <div className="font-syne">
                <div className="relative text-center">
                    <img src={Banner} alt="Appointment Banner" className="w-full h-96 object-cover" />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                        BOOK YOUR APPOINTMENT
                    </h1>
                </div>

                <div className="container mx-auto py-12 flex justify-between gap-12">
                    <div className="w-1/2">
                        <div className="flex mb-6 space-x-4">
                            <button
                                onClick={() => changeCategory('Hair')}
                                className={`${
                                    category === 'Hair' ? 'bg-[#c7a17a] text-white' : 'bg-gray-200 text-gray-700'
                                } py-2 px-4 rounded-md`}
                            >
                                Hair
                            </button>
                            <button
                                onClick={() => changeCategory('Facial')}
                                className={`${
                                    category === 'Facial' ? 'bg-[#c7a17a] text-white' : 'bg-gray-200 text-gray-700'
                                } py-2 px-4 rounded-md`}
                            >
                                Facial
                            </button>
                            <button
                                onClick={() => changeCategory('Bridal')}
                                className={`${
                                    category === 'Bridal' ? 'bg-[#c7a17a] text-white' : 'bg-gray-200 text-gray-700'
                                } py-2 px-4 rounded-md`}
                            >
                                Bridal
                            </button>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-md">
                            <h3 className="text-xl font-semibold mb-4">{category} Services</h3>
                            {services[category].map((service) => (
                                <div key={service.serviceName} className="flex justify-between items-center mb-4 bg-orange-500 py-2 px-3 rounded-3xl text-white">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            onChange={() => handleServiceChange(service)}
                                            checked={selectedServices[category].includes(service.serviceName)}
                                            className="form-checkbox h-5 w-5 text-[#c7a17a] border-gray-300 rounded-3xl focus:ring-[#c7a17a]"
                                        />
                                        <span>{service.serviceName}</span>
                                    </label>
                                    <span>Rs.{service.price}.00</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-1/2 bg-gray-100 p-6 rounded-md">
                        <h3 className="text-xl font-semibold mb-6">Appointment</h3>
                        <div className="mb-6">
                            {Object.keys(selectedServices).map((category) => (
                                selectedServices[category].length > 0 && (
                                    <div key={category} className="space-y-2 mb-4">
                                        <h4 className="font-semibold text-lg">{category} Services</h4>
                                        {selectedServices[category].map(service => (
                                            <div key={service} className="flex justify-between bg-brown py-2 px-5 text-white font-semibold rounded-2xl">
                                                <span>{service}</span>
                                                <span>Rs.{services[category].find(s => s.serviceName === service).price}.00</span>
                                            </div>
                                        ))}
                                    </div>
                                )
                            ))}
                        </div>

                        <div className="space-y-4">
                            <form onSubmit={handleConfirmAppointment} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#c7a17a] text-white py-2 rounded-md"
                                >
                                    Confirm Appointment
                                </button>
                            </form>
                            <p className="text-sm font-semibold">Total Price: Rs.{totalPrice}.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Appointment;
