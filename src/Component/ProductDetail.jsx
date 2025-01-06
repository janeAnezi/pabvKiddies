import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from './content';

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1); 

  const product = products.find((item) => item.id === id); 

  if (!product) {
    return <h2 className="text-center text-xl text-red-500">Product not found</h2>;
  }

  const handleAddToCart = () => {
    navigate('/signin'); 
  };

  const handleOrderNow = () => {
    navigate('/payment');
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto py-12 px-6 sm:px-12 flex flex-col sm:flex-row gap-12">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          <h2 className="text-3xl font-bold mt-6">{product.name}</h2>
          <p className="text-xl text-gray-700 mt-4">${product.price}</p>
          <p className="text-gray-600 mt-2 leading-relaxed">{product.description}</p>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          {/* Quantity Control */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={decrementQuantity}
              className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-700"
            >
              -
            </button>
            <span className="text-lg font-semibold text-gray-800">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-700"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 text-white px-6 py-3 rounded shadow hover:bg-orange-700"
            >
              Add to Cart
            </button>
            <button
              onClick={handleOrderNow}
              className="bg-sky-500 text-white px-6 py-3 rounded shadow hover:bg-green-700"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
