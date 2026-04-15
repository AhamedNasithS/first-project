import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from "../../../../images/main/analytics.png"
import { LuBarChart } from 'react-icons/lu';

export default function Chat() {

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-11/12 mx-auto relative flex flex-col-reverse lg:flex-row gap-[20px] items-center sm:items-start lg:items-center mb-[20px] lg:mb-[100px]'>
      {/* <img src={Cave1} alt='cave' className='absolute -top-[90px] -left-[20px] hidden lg:block'/> */}
      <div className='absolute -top-[80px] -left-[0px] hidden lg:block w-[100px] lg:w-[340px] h-[40px] lg:h-[55px]'>
        <div className='w-full h-full animationBorderLeft bg-[#3E3E3E] pt-[1px] pl-[1px] relative z-[1] lg:rounded-tl-[50px]'>
          <div className='w-full h-full p-[2px] lg:p-[6px] bg-[#000] relative z-[5] rounded-tl-[50px]'>
          </div>
        </div>
      </div>
      <div className='lg:basis-1/2 flex justify-start'>
        <img src={banner} alt='channel'
          data-aos="zoom-in-right" data-aos-duration="1000"
        />
      </div>
      <div className='lg:basis-1/2 lg:ml-[160px]'>
        <div className='flex gap-2 md:gap-4 items-center'>
          <div className='size-[30px] md:size-[60px] bg-[#FCFCFC17] border-[1px] border-[#255DCA] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
            <LuBarChart className='relative z-[1] text-[#255DCA] text-[20px] md:text-[30px]' />
            <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#255DCA] blur-[3px] glowChat z-0'></div>
          </div>
          <h2 className='bg-gradient-to-r from-[#3973E3] to-[#203F7D] bg-clip-text text-transparent text-[24px] lg:text-[60px] font-semibold'>Analytics</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'>Track performance and generate insights with detailed reports.</h3>
      </div>
    </div>
  )
}
