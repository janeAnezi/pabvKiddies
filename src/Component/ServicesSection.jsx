import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode, Pagination} from 'swiper/modules'
import { services } from './content';

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
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ServicesSection
