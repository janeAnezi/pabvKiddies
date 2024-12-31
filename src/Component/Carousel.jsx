import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [currSlide, setCurrSlide] = useState(0);

  const next = () => {
    setCurrSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setCurrSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="w-screen overflow-hidden relative group">
      <div
        className="flex transition-transform ease-out duration-700"
        style={{
          transform: `translateX(-${currSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between text-slate-500 p-4">
        <button onClick={prev} className="hidden group-hover:block" >
          <IoIosArrowBack size={30} />
        </button>
        <button onClick={next} className="hidden group-hover:block">
          <IoIosArrowForward size={30} />
        </button>
      </div>

      <div className="abslute bottom-4 right-0 left-0">
        <div className="flex justify-center items-center gap-2">
            {slides.map((_, i) => (
                <div className={`transition-all w-3 h-3 rounded-full bg-slate-50 ${currSlide === i? 'p-2' : 'bg-opacity-50'}`}>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
