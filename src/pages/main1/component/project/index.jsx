import React from 'react'
import Cave1 from "../../../../images/caves1.svg"

export default function Project() {
  return (
    <div className='w-11/12 mx-auto relative flex gap-[20px] items-center my-[100px]'>
      <img src={Cave1} alt='cave' className='absolute -top-[50px] left-0'/>
      <div className='basis-1/2 flex justify-start'>
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/projects.svg" alt='channel' />
      </div>
      <div className='basis-1/2 ml-[160px]'>
        <div className='flex gap-2'>
          <img src='https://dz1x1c630cl14.cloudfront.net/webassets/projectIcon.svg' alt='project' />
          <h2 className='text-[60px] font-semibold bg-gradient-to-r from-[#2ADABB] to-[#2ADA90] bg-clip-text text-transparent'>Project</h2>
        </div>
        <h3 className='mt-[10px] text-[#E4E8EB] font-medium text-[28px]'>A Space to Carefully Plan and Achieve a collective aim.  </h3>
      </div>
    </div>
  )
}
