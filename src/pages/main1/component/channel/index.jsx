import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LuRocket } from 'react-icons/lu';
import banner from "../../../../images/main/dashboard.png"

export default function Channel() {

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-11/12 mx-auto relative lg:flex gap-[20px] items-center my-[20px] lg:my-[100px]'>
      <div className='absolute -top-[80px] -right-[30px] hidden lg:block w-[100px] lg:w-[340px] h-[40px] lg:h-[55px]'>
        <div className='w-full h-full animationBorder bg-[#3E3E3E] pt-[1px] pr-[1px] relative z-[1] lg:rounded-tr-[50px]'>
          <div className='w-full h-full p-[2px] lg:p-[6px] bg-[#000] relative z-[5] rounded-tr-[50px]'>
          </div>
        </div>
      </div>
      <div className='lg:basis-1/2'>
        <div className='flex gap-2 md:gap-4 items-center'>
          <div className='size-[30px] md:size-[60px] bg-[#FCFCFC17] border-[1px] border-[#F78C9F] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
            <LuRocket className='relative z-[1] text-[#F78C9F] text-[20px] md:text-[30px]' />
            <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#F78C9F] blur-[3px] glow z-0'></div>
          </div>
          <h2 className='text-[24px] lg:text-[60px] font-semibold bg-gradient-to-r from-[#FFA3B4] to-[#FFA3EB] bg-clip-text text-transparent'>Dashboard</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'>Get a clear overview of activities, stats, and updates in one place.</h3>
      </div>
      <div className='lg:basis-1/2 flex justify-end mt-[20px] lg:mt-0'
        data-aos="zoom-in-left" data-aos-duration="4000"
      >
        <img src={banner} alt='channel' />
      </div>
    </div>
  )
}
