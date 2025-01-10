import { Link } from 'react-router-dom';
import { products } from './content';
import { TbCurrencyNaira } from "react-icons/tb";

const Products = () => {
  return (
    <main className="bg-white">
      <section className="pt-20">
        <h2 className="text-4xl font-bold text-orange-500 text-center">ALL PRODUCTS</h2>
        <div className="grid grid-cols-3 gap-4 text-center mt-10">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-md font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-500 text-sm pt-2">{product.description}</p>
              <div className='flex justify-between py-4 px-8'>
                <p className="text-gray-600 flex flex-row items-center text-sm"><TbCurrencyNaira className="text-lg"/>{product.price}</p>
                <button className='bg-sky-500 hover:bg-sky-600 px-2 rounded-lg text-white text-xs'>Add to cart</button>
              </div>
              
              
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
