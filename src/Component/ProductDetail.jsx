import { useParams, useNavigate } from 'react-router-dom';
import { products } from './content';

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const product = products.find((item) => item.id === id); 

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    navigate('/signin'); 
  };

  const handleOrderNow = () => {
    navigate('/payment');
  };

  return (
    <main className="bg-white">
      <div className="max-w-3xl mx-auto py-10">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-2xl font-semibold mt-6">{product.name}</h2>
        <p className="text-gray-600 mt-4">${product.price}</p>
        <p className="text-gray-500 mt-2">{product.description}</p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-700"
          >
            Add to Cart
          </button>
          <button
            onClick={handleOrderNow}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Order Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
