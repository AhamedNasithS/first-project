import React from 'react'
import Cave from "../../../../images/caves.svg"

export default function Ai() {
  return (
    <div className='w-11/12 mx-auto relative flex gap-[20px] items-center my-[100px]'>
      <img src={Cave} alt='cave'  className='absolute right-0 -top-[50px]'/>
        <div className='basis-1/2'>
            <div className='flex gap-2'>
              <img src='https://dz1x1c630cl14.cloudfront.net/webassets/aiIcon.svg' alt='ai' />
            <h2 className='text-[#448EC5] text-[60px] font-semibold'>Ai</h2>
            </div>
            <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[28px]'>Get Intelligence response from 1.ai of any data, information, report or summary  </h3>
        </div>
        <div className='basis-1/2 flex justify-end'>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/ai's.svg" alt='channel' />
        </div>
    </div>
  )
}
