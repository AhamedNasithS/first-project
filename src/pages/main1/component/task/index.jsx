import React from 'react'
import Cave from "../../../../images/caves.svg"

export default function Task() {
  return (
    <div className='w-11/12 mx-auto relative lg:flex gap-[20px] items-center my-[20px] lg:my-[100px]'>
      <img src={Cave} alt='cave' className='absolute -top-[90px] -right-[20px] hidden lg:block'/>
      <div className='lg:basis-1/2'>
        <div className='flex gap-2'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/taskIcon.svg' alt='task' className='w-[40px] lg:w-auto'/>
          <h2 className='bg-gradient-to-r from-[#D5AA31] to-[#D56C31] bg-clip-text text-transparent text-[24px] lg:text-[60px] font-semibold'>Task</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[14px] lg:text-[28px]'>Tasks are to-do-list which often completed in a specific time frame </h3>
      </div>
      <div className='lg:basis-1/2 flex justify-end'>
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/tasks.svg" alt='channel' />
      </div>
    </div>
  )
}
