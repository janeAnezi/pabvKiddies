import { IoIosArrowForward,  IoIosArrowBack  } from "react-icons/io";

const Carousel = ({children: slides}) => {
  return (
    <div className='w-screen overflow-hidden relative'>
      <div className='flex'>{slides}</div>
        <div className="absolute inset-0 flex items-center justify-between text-slate-500 ">
            <button>
                < IoIosArrowBack size={30}/>
            </button>
            <button>
                <IoIosArrowForward size={30}/>
            </button>
        </div>
    </div>
  )
}

export default Carousel
