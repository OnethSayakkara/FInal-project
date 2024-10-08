import React, { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import successAnimation from '../assets/Animations/Done.json'; // Replace with your animation file

function SuccessPage() {
    const navigate = useNavigate();  // Initialize the navigation hook

    useEffect(() => {
        // Set a 2 second timer to redirect the user
        const timer = setTimeout(() => {
            navigate('/appoinment'); // Redirect to your desired route after 2 seconds
        }, 2800);

        // Cleanup the timer if the component unmounts before the timer finishes
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className="text-2xl font-bold mb-4">Your Appointment Has Been Successfully!</h1>
            <Player
                autoplay
                loop
                src={successAnimation}
                style={{ height: '300px', width: '300px' }}
            />
            <p className="text-gray-600 mt-4">Check Your Emails for Further Information</p>
        </div>
    );
}

export default SuccessPage;

