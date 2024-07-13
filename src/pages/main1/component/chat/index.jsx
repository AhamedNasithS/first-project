import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/chats.webp" alt='channel' 
        // data-aos="zoom-in-right" data-aos-duration="1000"
        />
      </div>
      <div className='lg:basis-1/2 lg:ml-[160px]'>
        <div className='flex gap-2'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/chatIcon.svg' alt='chat' className='w-[20px] lg:w-[40px]'/>
          <h2 className='bg-gradient-to-r from-[#3973E3] to-[#203F7D] bg-clip-text text-transparent text-[24px] lg:text-[60px] font-semibold'>Chat</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'>A space where one can DM and group chat with anyone in the organization officially.</h3>
      </div>
    </div>
  )
}
