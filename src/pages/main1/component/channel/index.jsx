import React from 'react'
import Cave from "../../../../images/caves.svg"

export default function Channel() {
  return (
    <div className='w-11/12 mx-auto relative lg:flex gap-[20px] items-center my-[20px] lg:my-[100px]'>
      <img src={Cave} alt='cave'  className='absolute -top-[100px] -right-[20px] hidden lg:block'/>
      <div className='lg:basis-1/2'>
        <div className='flex gap-2'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/channelIcon.svg' alt='channel' className='w-[40px] lg:w-auto'/>
          <h2 className='text-[24px] lg:text-[60px] font-semibold bg-gradient-to-r from-[#FFA3B4] to-[#FFA3EB] bg-clip-text text-transparent'>Channels</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'>A Space to Communicate and get aligned with your team on Projects and tasks </h3>
      </div>
      <div className='lg:basis-1/2 flex justify-end mt-[20px] lg:mt-0'>
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/channels.svg" alt='channel' />
      </div>
    </div>
  )
}
