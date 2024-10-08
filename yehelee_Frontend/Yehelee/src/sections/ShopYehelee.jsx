import React from 'react'
import Footer from '../components/Footer'
import ItemShop from './ItemShop'
import { CartProvider } from '../components/CartContext';
import Cart from '../components/Cart';


function ShopYehelee() {
  return (
    <>
    <CartProvider>
    <ItemShop/>
    <Footer/>
    </CartProvider>
    </>
  )
}

export default ShopYehelee