import React from 'react'
import Cave1 from "../../../../images/caves1.svg"

export default function Chat() {
  return (
    <div className='w-11/12 mx-auto relative flex flex-col-reverse lg:flex-row gap-[20px] items-center sm:items-start lg:items-center my-[20px] lg:my-[100px]'>
      <img src={Cave1} alt='cave' className='absolute -top-[90px] -left-[20px] hidden lg:block'/>
      <div className='lg:basis-1/2 flex justify-start'>
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/chats.svg" alt='channel' />
      </div>
      <div className='lg:basis-1/2 lg:ml-[160px]'>
        <div className='flex gap-2'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/chatIcon.svg' alt='chat' className='w-[40px] lg:w-auto'/>
          <h2 className='bg-gradient-to-r from-[#3973E3] to-[#203F7D] bg-clip-text text-transparent text-[24px] lg:text-[60px] font-semibold'>Chat</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'> A space where one can Dm and group chat with anyone in organisation  officially</h3>
      </div>
    </div>
  )
}
