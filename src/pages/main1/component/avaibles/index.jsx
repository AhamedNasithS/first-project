import React from 'react'
import Cave from "../../../../images/caves.svg"
import Cave1 from "../../../../images/caves1.svg"


export default function Availbles() {
  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto">
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute -top-[550px]'/>
      <h3 className='text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Available On</h3>
      <img src={Cave} alt='cave' className='absolute top-[40px] right-[20px]'/>
      <img src={Cave1} alt='cave' className='absolute top-[40px] left-[20px]'/>
      <div className='flex gap-12 items-center justify-center mt-[50px] w-full'>
        <div className='flex gap-1.5 items-center'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/apple.svg' alt='apple'/>
            <h2 className='text-[#FFF] font-semibold text-[32px]'>Mac</h2>
        </div>
        <div className='flex gap-1.5 items-center justify-end'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/windows.svg' alt='apple'/>
            <h2 className='text-[#FFF] font-semibold text-[32px]'>Windows</h2>
        </div>
        <div className='flex gap-1.5 items-center'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/android.svg' alt='apple'/>
            <h2 className='text-[#FFF] font-semibold text-[32px]'>Android</h2>
        </div>
        <div className='flex gap-1.5 items-center '>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/wearables.svg' alt='apple'/>
            <h2 className='text-[#FFF] font-semibold text-[32px]'>Wearables</h2>
        </div>
        <div className='flex gap-1.5 items-center justify-end'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/apple.svg' alt='apple'/>
            <h2 className='text-[#FFF] font-semibold text-[32px]'>IOS</h2>
        </div>
        <div className='flex gap-1.5 items-center justify-end'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/web.svg' alt='apple'/>
            <h2 className='text-[#FFF] font-semibold text-[32px]'>Web</h2>
        </div>
      </div>
    </div>
  )
}
