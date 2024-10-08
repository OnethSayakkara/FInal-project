import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const incrementQuantity = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const decrementQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  
  return (

    <div className="flex justify-between">
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
      <div className="w-4/6">
        <div className='bg-green-600 py-2 px-4 flex justify-between items-center'>
          <h2 className='font-bold text-lg text-white'>Check Out</h2>
          <button className='border-2 py-1 px-3 rounded-full flex items-center bg-green-100 border-red-200 font-bold hover:text-white hover:bg-red-600' onClick={() => navigate('/shop')}>
            Back to Stock
          </button>
        </div>
        <div className='h-[calc(100vh-180px)] overflow-y-scroll'>
          {cart.map((item) => (
            <li key={item.id} className="pt-2 flex items-center py-1">
              <div className="bg-white pr-96 rounded shadow flex">
                <img src={item.productImageUrls[0]} alt={item.productName} className="w-32 h-32 object-cover rounded" />
                <div className='pl-5 grid'>
                  <h3 className="text-xl font-bold">{item.productName}</h3>
                  <p className="text-2xl text-red-600 font-bold">${item.price}</p>
                  <div className='flex justify-center items-center rounded'>
                    <button
                      className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 ml-0.5 "
                      onClick={() => decrementQuantity(item.id, item.quantity)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="border-none p-2 w-16 text-center"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      min="1"
                    />
                    <button
                      className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6"
                      onClick={() => incrementQuantity(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default Cart;
