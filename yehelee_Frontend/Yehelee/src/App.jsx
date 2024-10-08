import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { DarkModeProvider } from './components/DarkModeContext';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Team from './sections/Team';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Promo from './sections/promo';
import Info from './sections/Footerinfo';
import Preloader from './components/Preloader'; // Ensure the path is correct
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from './components/CartContext';
import ShopYehelee from './sections/ShopYehelee';
import Cart from './components/Cart';

// Load your Stripe public key here
const stripePromise = loadStripe('your_public_stripe_key'); // Replace with your actual public Stripe key

function App() {
  const [loading, setLoading] = useState(true); // Track whether loading or not
  const [fadeOut, setFadeOut] = useState(false); // For triggering fade-out

  useEffect(() => {
    // Simulate loading for 3 seconds, then trigger fade-out
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out effect
    }, 2500); // Adjust the time as needed

    // Once fade-out animation completes, hide preloader
    const fadeOutTimer = setTimeout(() => {
      setLoading(false); 
    }, 3500); // 500ms for the fade-out duration

    // Cleanup the timeouts when the component unmounts
    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  // If still loading, display the Preloader component with fade-out
  if (loading) {
    return (
      <div className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <Preloader />
      </div>
    );
  }

  // Once loading is done, display the main content (landing page)
  return (
    <main className='overflow-x-hidden'>
      <DarkModeProvider>
        <Elements stripe={stripePromise}>
          <Promo />
          <Header />
          <Hero />
          <About />
          <Services />
          <Reviews />
          <Team />
          <Contact />
          <Footer />
          <Info />
        </Elements>
      </DarkModeProvider>
    </main>

    
  );
}

export default App;
