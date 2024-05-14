import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChannelImg from "../../../../images/channel1.webp";

export default function Channel() {

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-11/12 mx-auto relative lg:flex gap-[20px] items-center mb-[20px] lg:mb-[100px]'>
      <div className='absolute -top-[80px] -right-[30px] hidden lg:block w-[100px] lg:w-[340px] h-[40px] lg:h-[55px]'>
        <div className='w-full h-full animationBorder bg-[#3E3E3E] pt-[1px] pr-[1px] relative z-[1] lg:rounded-tr-[50px]'>
          <div className='w-full h-full p-[2px] lg:p-[6px] bg-[#000] relative z-[5] rounded-tr-[50px]'>
          </div>
        </div>
      </div>
      <div className='lg:basis-1/2'>
        <div className='flex gap-2'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/channelIcon.svg' alt='channel' className='w-[40px] lg:w-auto' />
          <h2 className='text-[24px] lg:text-[60px] font-semibold bg-gradient-to-r from-[#FFA3B4] to-[#FFA3EB] bg-clip-text text-transparent'>Channels</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'>A Space to Communicate and get aligned with your team on Projects and tasks </h3>
      </div>
      <div className='lg:basis-1/2 flex justify-end mt-[20px] lg:mt-0' 
      // data-aos="zoom-in-left" data-aos-duration="4000"
      >
        <img src={ChannelImg} alt='channel' />
      </div>
    </div>
  )
}
