import { useEffect } from "react";
import { slides, products, services } from "./content";
import Carousel from "../Component/Carousel";
import ServicesSection from "./ServicesSection";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, 
          easing: 'ease-in-out', 
          once: false, 
          mirror: true, 
        });
      }, []);

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
                    height: '400px',
                }}
                key={slide.id}
                >
                    <div 
                        className="w-full h-full bg-black/60 flex flex-col items-center justify-center text-white py-20">
                        <h2 className="font-bold text-4xl text-orange-500 pointer-events-auto">{slide.title}</h2>
                        <p className="text-orange-100 mt-6 w-[60%] text-center text-xl pointer-events-auto">{slide.description}</p>
                        <Link to='/register'>
                            <button className="mt-6 bg-sky-500 text-orange-50 px-4 py-2 text-xs font-bold rounded-md hover:bg-yellow-800 transition pointer-events-auto">
                                Unlock Trending Styles
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
            </Carousel>
        </div>

      {/* Products Section */}
        <section className="py-20 px-4">
            <h2 data-aos="fade-up" className="text-center text-2xl text-orange-300 font-bold">OUR PRODUCTS</h2>
            <div data-aos="fade-up" data-aos-duration="4000" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-10">
                {products.slice(0, 6).map((product) => (
                <div data-aos="zoom-out-down" key={product.id} className="border p-4 rounded-lg shadow-lg bg-white">
                    <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 md:h-60 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                    <p className="text-gray-600 flex flex-row items-center ml-20"><TbCurrencyNaira className="text-lg"/>{product.price}</p>
                </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <Link
                to="/products"
                className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-700"
                >
                View More
                </Link>
            </div>
        </section>
        {/* Services section */}
        <ServicesSection/>
        {/* About section */}
        <section className="bg-orange-50 py-16 px-4 ">
            <div data-aos="fade-up-left" className="max-w-5xl mx-auto text-center w-[60%]">
                <h2 className="text-3xl font-bold text-orange-500">About Us</h2>
                <p className="mt-6 text-gray-700 text-sm">
                Welcome to <span className="font-semibold">PABVkiddies</span>, where fashion meets tradition and creativity! 
                We specialize in creating bespoke Ankara outfits for kids that bring out their unique personalities. 
                Our designs are vibrant, stylish, and made to ensure comfort while showcasing the rich cultural heritage of Africa.
                </p>
                <p data-aos="flip-left" className="mt-4 text-sky-500">
                Whether you're looking for a trendy outfit for a special occasion, quality tailoring materials, or the best 
                fashion styles for your little ones, we’ve got you covered. Let your child stand out and shine in fashion that 
                tells a story.
                </p>
                <div className="mt-8">
                <Link
                    to="about"
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
                >
                    Learn More
                </Link>
                </div>
            </div>
        </section>

    </main>
  );
};

export default Home;
