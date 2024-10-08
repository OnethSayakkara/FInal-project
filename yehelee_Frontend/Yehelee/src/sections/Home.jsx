import React from 'react'
import Header from '../components/Header'
import Hero from './Hero'
import Promo from './promo'
import About from './About'
import Services from './Services'
import Reviews from './Reviews'
import Team from './Team'
import Contact from './Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <main>
    <Promo/>
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Reviews/>
    <Team/>
    <Contact/>
    <Footer/>
    <Info/>
    </main>
    </>
  )
}

export default Home