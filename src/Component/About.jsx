import {useEffect} from 'react';
import pabvid from '../assets/img/pabvid.mp4';
import sketch1 from '../assets/img/sketch1.png'
import sketch2 from '../assets/img/sketch2.png'
import sketch3 from '../assets/img/sketch3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out', 
      once: false, 
      mirror: true, 
    });
  }, []);

  return (
    <section className="min-h-screen relative">
      <div className="text-center mb-10 w-full relative">
        <div className="h-[80vh] relative overflow-hidden">
          <video 
            src={pabvid} 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          />
        </div>
        <div data-aos="fade-up" className="absolute top-0 w-full flex flex-col items-center justify-center h-[60vh]">
          <h2 className="text-4xl font-bold text-orange-500">About Us</h2>
          <p className="text-gray-200 mt-4 max-w-2xl">
            Explore the creativity and elegance of PABVkiddies, where African heritage meets modern designs for kids.
          </p>
        </div>
      </div>

      <div> 
        <div className='flex justify-center items-center gap-8 py-5 flex-wrap px-5'>
            <div data-aos="fade-right" className='w-60'><img src={sketch1} alt="" /></div>
            <div data-aos="fade-left" data-aos-duration="4000" className='w-80'>
                <h2 className="text-3xl font-bold text-orange-500">Our Mission</h2>
                <p className='text-sky-400'>We bring Ankara fashion to life for kids.</p>
                <p>At PABVkiddies, we believe in blending culture with creativity. 
                    Our mission is to create beautiful, comfortable, and stylish outfits 
                    for kids that celebrate African heritage.
                </p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-8 bg-orange-50 py-10 my-16 flex-wrap px-5'>
            <div data-aos="fade-left"  className='w-80'>
                <h2 className="text-3xl font-bold text-orange-500">Why Choose Us?</h2>
                <p className='text-sky-400'>Quality, Style, and Affordability.</p>
                <p>Unique Ankara designs crafted for kids.
                    - Premium materials for comfort and durability.
                    - Affordable prices for every family.
                </p>
            </div>
            <div data-aos="fade-right" className='w-60'><img src={sketch2} alt="" className='rounded-xl' /></div>
        </div>
        <div data-aos="fade-up" className='flex justify-center items-center gap-8 py-5 flex-wrap px-5'>
            <div className='w-60' ><img src={sketch3} alt="" /></div>
            <div className='w-80'>
                <h2 className="text-3xl font-bold text-orange-500">Our Services</h2>
                <p className='text-sky-400'>Tailored to perfection.</p>
                <p>Bespoke Ankara outfits for kids.
                    - Premium tailoring materials.
                    - Exclusive fashion styles for special occasions.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
