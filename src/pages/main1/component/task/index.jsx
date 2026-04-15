import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from "../../../../images/main/security.png"
import { LuLock } from 'react-icons/lu';

export default function Task() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='w-11/12 mx-auto relative lg:flex gap-[20px] items-center mb-[20px] lg:mb-[100px]'>
      {/* <img src={Cave} alt='cave' className='absolute -top-[90px] -right-[20px] hidden lg:block'/> */}
      <div className='absolute -top-[80px] -right-[0px] hidden lg:block w-[100px] lg:w-[340px] h-[40px] lg:h-[55px]'>
        <div className='w-full h-full animationBorder bg-[#3E3E3E] pt-[1px] pr-[1px] relative z-[1] lg:rounded-tr-[50px]'>
          <div className='w-full h-full p-[2px] lg:p-[6px] bg-[#000] relative z-[5] rounded-tr-[50px]'>
          </div>
        </div>
      </div>
      <div className='lg:basis-1/2'>
        <div className='flex gap-2 md:gap-4 items-center'>
          <div className='size-[30px] md:size-[60px] bg-[#FCFCFC17] border-[1px] border-[#FCE05E] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
            <LuLock className='relative z-[1] text-[#FCE05E] text-[20px] md:text-[30px]' />
            <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#FCE05E] blur-[3px] glowTask z-0'></div>
          </div>
          <h2 className='bg-gradient-to-r from-[#D5AA31] to-[#D56C31] bg-clip-text text-transparent text-[24px] lg:text-[60px] font-semibold'>Security</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'>Protect your data with strong authentication and privacy controls.</h3>
      </div>
      <div className='lg:basis-1/2 flex justify-end mt-[15px] sm:mt-0'>
        <img src={banner} alt='channel'
          data-aos="zoom-in-left" data-aos-duration="1000"
        />
      </div>
    </div>
  )
}
