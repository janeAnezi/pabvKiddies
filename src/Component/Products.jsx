import { Link } from 'react-router-dom';
import { products } from './content';
import { TbCurrencyNaira } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  return (
    <main className="bg-white">
      <section className="pt-20">
        <h2 className="text-4xl font-bold text-orange-500 text-center">ALL PRODUCTS</h2>
        <div className="mt-6">
          <form className="flex justify-center gap-4">
            <input
              type="text"
              placeholder="Search by category (e.g., gown)"
              className="border px-4 py-2 rounded-lg w-1/4"
            />
            <input
              type="text"
              placeholder="Search by keyword (e.g., red)"
              className="border px-4 py-2 rounded-lg w-1/4"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
            >
              Search
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center mt-10">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-md font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-500 text-xs pt-2">{product.description}</p>
              <div className='flex justify-between pt-4 px-8'>
                <p className="text-gray-600 flex flex-row items-center text-sm"><TbCurrencyNaira className="text-lg"/>{product.price}</p>
                <button className='flex flex-row items-center gap-1.5 bg-sky-500 hover:bg-sky-600 px-2 rounded-lg text-white text-xs'><FaShoppingCart /> Add to cart</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
