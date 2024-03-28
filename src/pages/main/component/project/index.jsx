import React from 'react'

export default function Project() {
  return (
    <div className='w-11/12 mx-auto relative flex gap-[20px] items-center my-[100px]'>
         <div className='basis-1/2 flex justify-start'>
            <img src="https://dz1x1c630cl14.cloudfront.net/webassets/project1.gif" alt='channel' />
        </div>
        <div className='basis-1/2 ml-[160px]'>
            <h2 className='text-[#FFDD09] text-[60px] font-semibold'>Project</h2>
            <h3 className='mt-[10px] text-[#FFFFFF] font-medium text-[28px]'>A Space to Carefully Plan and Achieve a collective aim.  </h3>
            <h4 className='mt-[10px] text-[#E4E8EB] font-normal text-[24px]'>For Example Sales and Marketing Projects, Web and App Development Project, HR and Administrative Project Or Any Projects</h4>
        </div>
    </div>
  )
}
