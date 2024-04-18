import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Task() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='w-11/12 mx-auto relative lg:flex gap-[20px] items-center my-[20px] lg:my-[100px]'>
      {/* <img src={Cave} alt='cave' className='absolute -top-[90px] -right-[20px] hidden lg:block'/> */}
      <div className='absolute -top-[80px] -right-[0px] hidden lg:block w-[100px] lg:w-[340px] h-[40px] lg:h-[55px]'>
        <div className='w-full h-full animationBorder bg-[#3E3E3E] pt-[1px] pr-[1px] relative z-[1] lg:rounded-tr-[50px]'>
          <div className='w-full h-full p-[2px] lg:p-[6px] bg-[#000] relative z-[5] rounded-tr-[50px]'>
          </div>
        </div>
      </div>
      <div className='lg:basis-1/2'>
        <div className='flex gap-2'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/taskIcon.svg' alt='task' className='w-[40px] lg:w-auto'/>
          <h2 className='bg-gradient-to-r from-[#D5AA31] to-[#D56C31] bg-clip-text text-transparent text-[24px] lg:text-[60px] font-semibold'>Task</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'>Tasks are to-do-list which often completed in a specific time frame </h3>
      </div>
      <div className='lg:basis-1/2 flex justify-end'>
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Task.webp" alt='channel' data-aos="zoom-in-left" data-aos-duration="1000"/>
      </div>
    </div>
  )
}
