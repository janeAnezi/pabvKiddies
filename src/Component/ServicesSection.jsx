import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { services } from './content';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { div } from 'framer-motion/client';

const ServicesSection = () => {
  return (
    <div className='bg-sky-500 min-h-[80vh]'>
        <h2 className="text-center text-2xl text-orange-300 py-20 font-bold uppercase">Explore Our Expertise</h2>
        <div className="flex flex-col items-center justify-center text-white px-4">    
        <Swiper
            breakpoints={{
            320: {
                slidesPerView: 1, 
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2, 
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3, 
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3, 
                spaceBetween: 25,
            },
            }}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-full max-w-[90%] lg:max-w-[80%]"
        >
            {services.map((item) => (
            <SwiperSlide key={item.id}>
                <div className="relative flex flex-col group shadow-xl text-white cursor-pointer p-6 rounded-lg h-[300px] sm:h-[350px] md:h-[400px]">
                <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 rounded-lg" />
                <div className="relative flex flex-col gap-3 z-10">
                    <h1 className="text-lg sm:text-xl md:text-2xl mt-20 font-bold text-sky-500">
                    {item.title}
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg mb-16">
                    {item.description}
                    </p>
                    <FaLongArrowAltRight className="absolute -bottom-8 left-5 w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] text-white group-hover:text-sky-500 -rotate-45 group-hover:rotate-0 duration-300" />
                </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  );
};

export default ServicesSection;
