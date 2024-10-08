// src/components/PaymentForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ handleClose }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
    
        if (!stripe || !elements) {
            return; // Stripe.js has not loaded yet.
        }
    
        const cardElement = elements.getElement(CardElement);
    
        // Create payment method using Stripe
        const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                email,
                name,
            },
        });
    
        if (stripeError) {
            setError(stripeError.message);
            setIsLoading(false);
            return;
        }
    
        // Send payment details to the backend
        try {
            const response = await fetch('http://localhost:8080/auth/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentMethodId: paymentMethod.id,
                    email,
                    country,
                    name,
                    amount: 1000,  // Add the amount here (in cents for Stripe)
                }),
            });
    
            // Check for non-200 responses
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage || 'Payment failed');
            }
    
            const paymentResponse = await response.json();
    
            if (paymentResponse.error) {
                setError(paymentResponse.error);
            } else {
                console.log('Payment successful:', paymentResponse);
                handleClose(); // Close the form after successful submission
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="bg-white p-1 rounded-md shadow-md "> {/* Increased max width */}
            <h2 className="text-lg font-semibold mb-4">Payment Information</h2>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                    Card Number
                </label>
                <CardElement options={{ hidePostalCode: true }} className="border rounded-md p-3 mb-4" />
            </div>

            <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country/Region
                </label>
                <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Cardholder name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
            </div>

            {error && <div className="text-red-500 mb-4">{error}</div>}

            <button
                type="submit"
                disabled={!stripe || isLoading}
                className={`w-full bg-[#c7a17a] text-white py-2 mt-3 rounded-md ${isLoading ? 'opacity-50' : ''}`}
            >
                {isLoading ? 'Processing...' : 'Pay Now'}
            </button>

        </form>
    );
};

export default PaymentForm;
