import React from 'react'

const Carousel = ({children: slides}) => {
  return (
    <div className='w-screen overflow-hidden relative'>
      <div className='flex'>{slides}</div>
    </div>
  )
}

export default Carousel
