import React from 'react'

const Carousel = ({children: slides}) => {
  return (
    <div className='overflow-hidden relative'>
      <div className=''>{slides}</div>
    </div>
  )
}

export default Carousel
