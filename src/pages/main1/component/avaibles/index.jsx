import React from 'react'
import Cave from "../../../../images/caves.svg"
import Cave1 from "../../../../images/caves1.svg"


export default function Availbles() {
  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto">
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute -top-[100px] sm:-top-[300px] lg:-top-[550px]'/>
      <h3 className='text-[22px] sm:text-[38px] lg:text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Available On</h3>
      <img src={Cave} alt='cave' className='absolute top-[18px] sm:top-[30px] lg:top-[40px] right-0 sm:right-[20px] w-[80px] sm:w-[150px] lg:w-[230px] xl:w-auto'/>
      <img src={Cave1} alt='cave' className='absolute top-[18px] sm:top-[30px] lg:top-[40px] left-0 sm:left-[20px] w-[80px] sm:w-[150px] lg:w-[230px] xl:w-auto'/>
      <div className='grid grid-cols-2 sm:grid-cols-3 xl:flex gap-6 lg:gap-12 items-center justify-center mt-[20px] lg:mt-[50px] w-full'>
        <div className='flex gap-1.5 items-center'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/apple.svg' alt='apple' className='w-[30px] lg:w-auto'/>
            <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Mac</h2>
        </div>
        <div className='flex gap-1.5 items-center sm:justify-center lg:justify-end'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/windows.svg' alt='apple' className='w-[30px] lg:w-auto'/>
            <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Windows</h2>
        </div>
        <div className='flex gap-1.5 items-center ml-0 sm:ml-[80px] lg:ml-0'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/android.svg' alt='apple' className='w-[30px] lg:w-auto'/>
            <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Android</h2>
        </div>
        <div className='flex gap-1.5 items-center'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/wearables.svg' alt='apple' className='w-[30px] lg:w-auto'/>
            <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Wearables</h2>
        </div>
        <div className='flex gap-1.5 items-center ml-0 sm:ml-[40px] xl:ml-0 xl:justify-end'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/apple.svg' alt='apple' className='w-[30px] lg:w-auto'/>
            <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>IOS</h2>
        </div>
        <div className='flex gap-1.5 items-center xl:justify-end ml-0 sm:ml-[80px] lg:ml-0'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/web.svg' alt='apple' className='w-[30px] lg:w-auto'/>
            <h2 className='text-[#FFF] font-semibold text-[18px] lg:text-[32px]'>Web</h2>
        </div>
      </div>
    </div>
  )
}
