import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = ({ children: slides }) => {
  const [currSlide, setCurrSlide] = useState(0);

  const next = () => {
    setCurrSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setCurrSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  return (
    <div className="w-screen overflow-hidden relative">
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
        <button onClick={prev}>
          <IoIosArrowBack size={30} />
        </button>
        <button onClick={next}>
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
