import React from 'react'
import Earth from "../../../videos/Earth_rotate.mp4";

export default function Power() {
  return (
    <div className='mb-[40px] sm:mb-[70px] xl:mb-[100px] relative w-full'>
                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Glowing2.svg" alt='glow' className='absolute left-0 -top-[550px] z-[0] hidden sm:block' />
                <div className='sm:w-11/12 ml-auto grid text-center sm:text-start sm:grid-cols-2 gap-[20px] lg:gap-[100px]'>
                    <div className='my-auto'>
                        <h1 className='text-[#FFF] DarkerGrostesqueSemibold text-[30px] lg:text-[45px] xl:text-[60px] leading-7 hidden sm:flex'>Give your people </h1>
                        <h1 className='text-[#FFE269] DarkerGrostesqueSemibold text-[30px] lg:text-[45px] xl:text-[60px] hidden sm:flex'>The power</h1>
                        <h1 className='sm:hidden text-[#FFF] DarkerGrostesqueSemibold text-[26px] leading-7'> Give your people <span className='text-[#FFE269]'>The power</span></h1>
                        <p className='text-[#FEF9F1] DarkerGrostesqueMedium text-[14px] sm:text-[18px] lg:text-[22px] xl:text-[28px] mt-[10px] lg:mt-[20px]'>A transformative journey begins with offering your people the keys to freedom and the might to shape their destinies.</p>
                    </div>
                    <div className='flex justify-center items-center'>
                    <video src={Earth} autoPlay muted loop/>
                    </div>
                </div>
            </div>
  )
}
