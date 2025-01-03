import React from 'react';
import pabvid from '../assets/img/pabvid.mp4';

const About = () => {
  return (
    <section className="min-h-screen relative">
      <div className="text-center mb-10 w-full relative">
        <div className="h-[50vh] relative overflow-hidden">
          <video 
            src={pabvid} 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 w-full flex flex-col items-center justify-center h-[50vh]">
          <h2 className="text-4xl font-bold text-orange-500">About Us</h2>
          <p className="text-gray-200 mt-4 max-w-2xl">
            Explore the creativity and elegance of PABVkiddies, where African heritage meets modern designs for kids.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
