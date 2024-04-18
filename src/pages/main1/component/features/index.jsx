import React from 'react'



export default function Features() {
  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto my-[20px] lg:my-[40px] xl:my-[100px]" id='features'>
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute -top-[50px] sm:-top-[200px] lg:-top-[350px]' />
      <h3 className='text-[22px] sm:text-[38px] lg:text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Prime Features</h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center w-full gap-[30px] lg:gap-[0px] xl:gap-y-[20px] mt-[20px] lg:mt-[60px] relative'>
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_1.svg" alt='border' className='absolute hidden xl:block -top-[47px] -left-[59px]' />
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_circle.svg" alt='circle' className='absolute hidden xl:block -top-[53px] left-[178px]' />
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_2.svg" alt='border' className='absolute hidden xl:block -top-[47px] left-[191px]' />
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_circle.svg" alt='circle' className='absolute hidden xl:block -top-[53px] left-[590px]' />
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_2.svg" alt='border' className='absolute hidden xl:block -top-[47px] left-[605px]' />
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_circle.svg" alt='circle' className='absolute hidden xl:block -top-[53px] right-[180px]' />
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_3.svg" alt='border' className='absolute hidden xl:block -top-[47px] -right-[59px]' />
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_4.svg" alt='border' className='absolute hidden xl:block top-[99px] -left-[51px]' />
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/border_5.svg" alt='border' className='absolute hidden xl:block top-[99px] -right-[51px]' />
        <div className='flex justify-between items-center'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
            <div className='flex gap-2 items-center'>
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/channel_icon.svg" alt='channel'  className='w-[35px]'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Channel</h3>
            </div>
            <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>A Space to Communicate and get aligned with your team on Project and tasks </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block '></div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
            <div className='flex gap-2 items-center'>
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/project_icon.svg" alt='channel' className='w-[35px]'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Project</h3>
            </div>
            <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>A Space to Carefully Plan and Achieve a collection aim. </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
        </div>
        <div className='flex justify-between items-center lg:mt-[40px] xl:mt-0'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
            <div className='flex gap-2 items-center'>
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/task_icon.svg" alt='channel' className='w-[35px]'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Task</h3>
            </div>
            <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>Tasks are to-do-list which often completed in a specific time frame  </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
        </div>
        <div className='flex justify-between items-center lg:mt-[40px] xl:mt-0'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
            <div className='flex gap-2 items-center'>
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/chat_icon.svg" alt='channel' className='w-[35px]'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Chat</h3>
            </div>
            <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>A space where one can Dm and group chat with anyone in organisation  officially  </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
        </div>
        <div className='flex justify-between items-center lg:mt-[40px] xl:mt-0'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
            <div className='flex gap-2 items-center'>
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/ai_icon.svg" alt='channel' className='w-[35px]'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Ai</h3>
            </div>
            <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>Get Intelligence response from 1.ai any data, information, report or summary about your organisation  </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
        </div>
        <div className='flex justify-between items-center lg:mt-[40px] xl:mt-0'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
            <div className='flex gap-2 items-center'>
              <img src="https://dz1x1c630cl14.cloudfront.net/webassets/personalisation_icon.svg" alt='channel' className='w-[35px]'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Personalisation</h3>
            </div>
            <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>Customise the navigation bar according to one’s own need comfort and priority.</h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
        </div>
      </div>
    </div>
  )
}
