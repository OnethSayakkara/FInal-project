import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        const { data: clientSecret } = await axios.post('http://localhost:8080/auth/create-payment-intent', {
            amount: totalPrice * 100, // Convert to cents
        });

        const cardElement = elements.getElement(CardElement);
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    email,
                },
            },
        });

        if (result.error) {
            setErrorMessage(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!');
            }
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-lg mb-2">Enter Payment Details</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <CardElement className="p-4 border rounded-md" />
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            <button
                className="bg-[#c7a17a] text-white py-2 mt-4 w-full rounded-md"
                type="submit"
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

export default CheckoutForm;
