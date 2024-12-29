import React, { useState, useEffect } from 'react';

const hero1 = './assets/img/hero01.jpeg';
const hero2 = './assets/img/hero02.jpeg';
const hero3 = './assets/img/hero03.jpeg';

const slides = [
  { id: '1', image: hero1, title: "Hero 1", description: "This is the first hero" },
  { id: '2', image: hero2, title: "Hero 2", description: "This is the second hero" },
  { id: '3', image: hero3, title: "Hero 3", description: "This is the third hero" },
];

const New = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className=" ">
      <div className="max-w-lg relative">
        <div
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px', // Adjust height as needed
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h2>{slides[currentSlide].title}</h2>
            <p>{slides[currentSlide].description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default New;