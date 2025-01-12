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
                    <div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl '></div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ServicesSection
