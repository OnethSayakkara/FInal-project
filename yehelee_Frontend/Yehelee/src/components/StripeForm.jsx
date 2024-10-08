import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your-public-stripe-key'); // Replace with your public Stripe key

const StripeForm = ({ totalPrice, handlePaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        setLoading(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                email: email,
            },
        });

        if (error) {
            console.error(error);
            setLoading(false);
        } else {
            // Send payment details to the backend
            axios.post('http://localhost:8080/auth/confirmPayment', {
                paymentMethodId: paymentMethod.id,
                amount: totalPrice * 100, // Stripe requires amount in cents
                email: email
            })
                .then(response => {
                    setLoading(false);
                    handlePaymentSuccess(response.data); // Callback to handle success in the parent component
                })
                .catch(err => {
                    console.error('Payment failed', err);
                    setLoading(false);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-md"
                />
            </div>
            <div className="my-4">
                <CardElement />
            </div>
            <button
                type="submit"
                disabled={!stripe || loading}
                className="bg-[#c7a17a] text-white py-2 rounded-md w-full"
            >
                {loading ? 'Processing...' : `Pay Rs.${totalPrice}.00`}
            </button>
        </form>
    );
};

const Appointment = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePaymentSuccess = (data) => {
        setPaymentSuccess(true);
        console.log('Payment successful:', data);
    };

    return (
        <div>
            <h3 className="font-semibold text-lg">Total: Rs.{totalPrice}.00</h3>
            <Elements stripe={stripePromise}>
                <StripeForm totalPrice={totalPrice} handlePaymentSuccess={handlePaymentSuccess} />
            </Elements>
        </div>
    );
};

export default Appointment;
