import React from 'react'
import banner from "../../images/error.json"
import LoadLottie from '../loadLottie'

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-[#010306] relative overflow-hidden'>
      <div className='w-full flex  justify-center'>
        <div className="w-[200px] lg:w-[400px] flex justify-center">
          <LoadLottie animationData={banner} loop={true} />
        </div>
      </div>
      <h3 className='text-[#FFFFFF] text-[18px] sm:text-[22px] lg:text-[24px] font-semibold'>Page not found</h3>
    </div>
  )
}