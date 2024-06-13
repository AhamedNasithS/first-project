import React from 'react'

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-[#010306] relative overflow-hidden'>
        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/404ErrorImage.svg' alt='error' className='w-[50%] lg:w-[40%] mx-auto'/>
        <h3 className='text-[#FFFFFF] text-[18px] sm:text-[22px] lg:text-[24px] font-semibold'>Page not found</h3> 
    </div>
  )
}
