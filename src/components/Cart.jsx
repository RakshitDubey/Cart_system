import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

function Cart() {
  const cart = useContext(CartContext);

  const removeFromCart = (index) => {
    const updatedItems = [...cart.items];
    updatedItems.splice(index, 1); // Remove the item at the specified index
    cart.setitems(updatedItems); // Update the cart state
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
      {cart.items.map((item, index) => (
        <div key={index} className="flex items-center mb-4">
          <button
            className='bg-black text-white p-2 m-3 rounded-md flex items-end'
            onClick={() => removeFromCart(index)} // Call removeFromCart function with the index
          >
            Remove
          </button>
          <img src={item.img} alt={item.title} className="w-20 h-20 mr-4 rounded-md" />
          <div>
            <p className="text-gray-800 font-semibold">{item.title}</p>
            <p className="text-gray-600">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
