import React from 'react'

export default function Channel() {
  return (
    <div className='w-11/12 mx-auto relative flex gap-[20px] items-center my-[100px]'>
        <div className='basis-1/2'>
            <h2 className='text-[#FFDD09] text-[60px] font-semibold'>Channels</h2>
            <h3 className='mt-[10px] text-[#FFFFFF] font-medium text-[28px]'>A Space to Communicate and get aligned with your team on Projects and tasks </h3>
            <h4 className='mt-[10px] text-[#E4E8EB] font-normal text-[24px]'>A Channel is embedded with main features like pin, copy, reply, react, save, forward, edit , delete and most importantly checkin-checkout options </h4>
        </div>
        <div className='basis-1/2 flex justify-end'>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/channel.gif" alt='channel' />
        </div>
    </div>
  )
}
