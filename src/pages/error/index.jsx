import React from 'react'
import ErrorImg from "../../images/404ErrorImage.svg"

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-[#010306] relative overflow-hidden'>
        <img src={ErrorImg} alt='error' className='w-[50%] lg:w-[40%] mx-auto'/>
        <h3 className='text-[#FFFFFF] text-[18px] sm:text-[22px] lg:text-[24px] font-semibold'>Page not found</h3> 
    </div>
  )
}
