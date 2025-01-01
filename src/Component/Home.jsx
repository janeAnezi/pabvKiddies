import { slides, products } from "./content";
import Carousel from "../Component/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-slate-50">
      {/* Carousel Section */}
        <div className="max-w-lg">
            <Carousel autoSlide={true}>
            {slides.map((slide) => (
                <div
                style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '421px',
                }}
                key={slide.id}
                >
                <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center text-white">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                </div>
                </div>
            ))}
            </Carousel>
        </div>

      {/* Products Section */}
        <section className="pt-20">
            <h2 className="text-center text-2xl text-orange-300">OUR PRODUCTS</h2>
            <div className="grid grid-cols-3 gap-4 text-center mt-10">
            {products.slice(0, 6).map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
                <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                </div>
            ))}
            </div>
            <div className="text-center mt-10">
            <Link to="/products" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700">
                View More
            </Link>
            </div>
        </section>
    </main>
  );
};

export default Home;
