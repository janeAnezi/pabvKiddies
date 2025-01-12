import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode, Pagination} from 'swiper/modules'
import { services } from './content';
import { FaLongArrowAltRight } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-sky-500 text-white'>
        <Swiper 
            breakpoints={
                {
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }
            }
            freeMode={true}
            pagination= {{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className='max-w-[90%] lg:max-w-[80%]'
        >
            {services.map((item)=>(
                <SwiperSlide key={item.id}>
                    <div className='flex flex-col group relative shadow-xl text-white cursor-pointer px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]'>
                        <div className='absolute inset-0 bg-cover bg-center rounded-lg' style={{backgroundImage: `url(${item.image})`}} />
                        <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50 rounded-lg' />
                        <div className='relative flex flex-col gap-3'>
                            <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                            <p className='text-sm lg:text-lg'>{item.description}</p>
                            <FaLongArrowAltRight className='absolute -bottom-14 left-5 w-[35px] h-[35px] text-white group-hover:text-sky-500 -rotate-45 group-hover:rotate-[2deg] duration-100'/>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ServicesSection
