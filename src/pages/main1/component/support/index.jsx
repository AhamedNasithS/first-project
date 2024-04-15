import React from 'react'


export default function Support() {
  return (
    <div className="flex flex-col items-center relative px-[20px] lg:px-0 w-full lg:w-10/12 mx-auto my-[20px] lg:my-[100px]">
      <h3 className='text-[24px] sm:text-[40px] lg:text-[65px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>World-Class Support Team</h3>
      <div className='p-1 lg:p-2 border-[1px] border-[#FDD220] bg-transparent rounded-[5px] lg:rounded-[20px] mt-[10px]'>
        <h1 className='mx-[30px] text-[#FFFFFF] font-semibold text-[14px] lg:text-[26px]'>Contact</h1>
      </div>
      <div className='flex gap-4 items-center justify-center mt-[10px]'>
        <div className='flex gap-1 items-center'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/email.svg' alt='email' className='w-[20px]'/>
            <h2 className='text-[#FFFFFF] text-[18px] font-medium'>Email</h2>
        </div>
        <div className='flex gap-0 items-center'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/mobile.svg' alt='mobile' />
            <h2 className='text-[#FFFFFF] text-[18px] font-medium'>Phone</h2>
        </div>
        <div className='flex gap-0 items-center'>
            <img src='https://dz1x1c630cl14.cloudfront.net/webassets/chatBot.svg' alt='chatbot' />
            <h2 className='text-[#FFFFFF] text-[18px] font-medium'>Chat Bot</h2>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:flex w-full gap-6 lg:gap-16 items-center justify-center mt-[20px] lg:mt-[50px]'>
        <div className='bg-[#FFFFFF14] size-full lg:size-[210px] border-[1px] border-[#FFFFFF0A] rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center p-3' style={{ boxShadow: '0px 2.63px 0px 0px #FFFFFF14 inset' }}>
        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/supports.svg' alt='support' className='w-[50px] lg:w-auto'/>
            <h2 className='font-semibold text-[18px] lg:text-[28px] text-[#FFF] my-[10px] lg:my-[15px]'>24/7</h2>
            <h3 className='font-medium text-[12px] lg:text-[18px] text-[#FFFFFF]'>Support</h3>
        </div>
        <div className='bg-[#FFFFFF14] size-full lg:size-[210px] border-[1px] border-[#FFFFFF0A] rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center p-3' style={{ boxShadow: '0px 2.63px 0px 0px #FFFFFF14 inset' }}>
        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/response.svg' alt='response' className='w-[50px] lg:w-auto'/>
            <h2 className='font-semibold text-[18px] lg:text-[28px] text-[#FFF] my-[10px] lg:my-[15px]'>{"<1h"}</h2>
            <h3 className='font-medium text-[12px] lg:text-[18px] text-[#FFFFFF]'>Response</h3>
        </div>
        <div className='bg-[#FFFFFF14] size-full lg:size-[210px] border-[1px] border-[#FFFFFF0A] rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center p-3' style={{ boxShadow: '0px 2.63px 0px 0px #FFFFFF14 inset' }}>
        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/statisfiction.svg' alt='statisfiction' className='w-[50px] lg:w-auto'/>
            <h2 className='font-semibold text-[18px] lg:text-[28px] text-[#FFF] my-[10px] lg:my-[15px]'>95%</h2>
            <h3 className='font-medium text-[12px] lg:text-[18px] text-[#FFFFFF]'>Satisfaction</h3>
        </div>
        <div className='bg-[#FFFFFF14] size-full lg:size-[210px] border-[1px] border-[#FFFFFF0A] rounded-[20px] lg:rounded-[40px] flex flex-col justify-center items-center p-3' style={{ boxShadow: '0px 2.63px 0px 0px #FFFFFF14 inset' }}>
        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/uptime.svg' alt='uptime' className='w-[50px] lg:w-auto'/>
            <h2 className='font-semibold text-[18px] lg:text-[28px] text-[#FFF] my-[10px] lg:my-[15px]'>99.99%</h2>
            <h3 className='font-medium text-[12px] lg:text-[18px] text-[#FFFFFF]'>Uptime</h3>
        </div>
      </div>
    </div>
  )
}
