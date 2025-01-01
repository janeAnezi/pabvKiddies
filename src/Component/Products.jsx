import { products } from './content';

const Products = () => {
  return (
    <main className="bg-white">
      <section className="pt-20">
        <h2 className="text-center text-2xl text-orange-300">ALL PRODUCTS</h2>
        <div className="grid grid-cols-3 gap-4 text-center mt-10">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
