import React from 'react'

export default function Task() {
  return (
    <div className='w-11/12 mx-auto relative flex gap-[20px] items-center my-[100px]'>
        <div className='basis-1/2'>
            <h2 className='text-[#FFDD09] text-[60px] font-semibold'>Task</h2>
            <h3 className='mt-[10px] text-[#FFFFFF] font-medium text-[28px]'>Tasks are to-do-list which often completed in a specific time frame </h3>
            <h4 className='mt-[10px] text-[#E4E8EB] font-normal text-[24px]'>personal And professional are set in specific timeframe which is assigned to yourself or any team member by the assignee manager </h4>
        </div>
        <div className='basis-1/2 flex justify-end'>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/taskcopy.svg" alt='channel' />
        </div>
    </div>
  )
}
