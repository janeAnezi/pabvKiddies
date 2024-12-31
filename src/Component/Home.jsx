import Carousel from "../Component/Carousel"
import hero1 from '../assets/img/hero02.jpeg'
import hero2 from '../assets/img/kid01.jpeg'
import hero3 from '../assets/img/hero03.jpeg'


const slides = [
    {
        id: '1',
        image: hero1,
        title: "Hero 1",
        description: "This is the first slide"
    },
    {
        id: '2',
        image: hero2,
        title: "Hero 2",
        description: "This is the second slide"
    },
    {
        id: '3',
        image: hero3,
        title: "Hero 3",
        description: "This is the third slide "
    },
]

const Home = () => {
  return (
    <main>
        
        <div className="max-w-lg">
            <Carousel autoSlide={true}>
                {slides.map((slide)=> (
                    <div 
                       style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '421px'
                      }}
                       key={slide.id}>
                    
                        <div className="w-full h-full bg-black/80 flex flex-col items-center justify-center text-white">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p> 
                        </div>
                        
                    </div>
                ))}
            </Carousel>
        </div>
    </main>
  )
}

export default Home
