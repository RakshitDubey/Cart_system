import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Home = () => {
  const cart=useContext(CartContext)
  console.log("Cart",cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">${product.price}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
           onClick={() => {
            const itemIndex = cart.items.findIndex((item) => item.title === product.title);
            if (itemIndex !== -1) {
              // If item already exists in cart, double the price
              const updatedItems = [...cart.items];
              updatedItems[itemIndex].price *= 2;
              cart.setitems(updatedItems);
            } else {
              // If item is not in cart, add it
              cart.setitems([...cart.items, { img: product.images[0], title: product.title, price: product.price }]);
            }
          }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
