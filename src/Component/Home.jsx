import { slides } from "./content";
import Carousel from "../Component/Carousel";

const Home = () => {
  return (
    <main className="bg-slate-400">
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
              <div className="w-full h-full bg-black/80 flex flex-col items-center justify-center text-white">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Products Section */}
      <div className="h-screen pt-20">
        <h2 className="text-center text-2xl text-orange-300">OUR PRODUCTS</h2>
        <div className="grid grid-cols-3 gap-4 text-center mt-10">
          {slides.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
