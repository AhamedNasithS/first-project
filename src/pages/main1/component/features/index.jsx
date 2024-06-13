import React from 'react'


export default function Features() {
  return (
    <div className="flex flex-col items-center relative w-11/12 mx-auto mb-[20px] lg:mb-[40px] xl:mb-[100px]" id='features'>
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute -top-[50px] sm:-top-[200px] lg:-top-[350px]' />
      <h3 className='text-[22px] sm:text-[38px] lg:text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Features</h3>
      <div className='w-full mt-[20px] lg:mt-[60px] relative'>
        <div className='absolute hidden xl:block -top-[51.5px] left-[20%] -translate-x-[50%] z-[1] w-[10px] h-[10px] rounded-full p-[3px] bg-[#010306]'><div className='w-full h-full rounded-full bg-[#FFF]'></div></div>
        <div className='absolute hidden xl:block -top-[51.5px] left-[80%] -translate-x-[50%] z-[1] w-[10px] h-[10px] rounded-full p-[3px] bg-[#010306]'><div className='w-full h-full rounded-full bg-[#FFF]'></div></div>
        <div className='border-x-[1px] border-t-[1px] hidden xl:block absolute -top-[47px] -inset-x-[0px] border-[#FFF] w-[100%] h-[106px] 2xl:h-[77px] rounded-[14px]'></div>
        <div className='border-r-[1px] border-b-[1px]  absolute hidden xl:block -top-[21px] -right-[0px] border-[#FFF] w-[42px] h-[80px] 2xl:h-[52px] rounded-br-[14px]'></div>
        <div className='border-l-[1px] border-b-[1px]  absolute hidden xl:block -top-[21px] -left-[0px] border-[#FFF] w-[42px] h-[80px]  2xl:h-[52px] rounded-bl-[14px]'></div>
        <div className='border-r-[1px] border-b-[1px]  absolute hidden xl:block top-[105px] 2xl:top-[70px] -right-[0px] border-[#FFF] w-[42px] h-[90px]  2xl:h-[62px] rounded-br-[14px]'></div>
        <div className='border-l-[1px] border-b-[1px]  absolute hidden xl:block top-[105px] 2xl:top-[70px] -left-[0px] border-[#FFF] w-[42px] h-[90px]  2xl:h-[62px] rounded-bl-[14px]'></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-[30px] lg:gap-[0px] xl:gap-y-[20px] w-11/12 mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
            <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
              <div className='flex gap-2 items-center'>
                {/* <img src="https://dz1x1c630cl14.cloudfront.net/webassets/channel_icon.svg" alt='channel'  className='w-[35px]'/> */}
                <div className='w-[35px] h-[35px] bg-[#FCFCFC17] border-[1px] border-[#FFFFFF0A] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/channelIcon.svg" alt='channel' className='relative z-[1]' />
                  <div id='starsGlow'></div>
                  <div id='starsGlow2'></div>
                  <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#F78C9F] blur-[3px] glow z-0'></div>
                </div>
                <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Channel</h3>
              </div>
              <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>A Space to Communicate and get aligned with your team on Project and tasks </h3>
            </div>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block '></div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden'></div>
            <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
              <div className='flex gap-2 items-center'>
                {/* <img src="https://dz1x1c630cl14.cloudfront.net/webassets/project_icon.svg" alt='channel' className='w-[35px]'/> */}
                <div className='w-[35px] h-[35px] bg-[#FCFCFC17] border-[1px] border-[#FFFFFF0A] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/projectIcon.svg" alt='project' className='relative z-[1]' />
                  <div id='starsGlow'></div>
                  <div id='starsGlow2'></div>
                  <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#69E3B0] blur-[3px] glowProject z-0'></div>
                </div>
                <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Project</h3>
              </div>
              <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>A Space to Carefully Plan and Achieve a collection aim. </h3>
            </div>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          </div>
          <div className='flex justify-between items-center lg:mt-[40px] xl:mt-0'>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block xl:hidden'></div>
            <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
              <div className='flex gap-2 items-center'>
                {/* <img src="https://dz1x1c630cl14.cloudfront.net/webassets/task_icon.svg" alt='channel' className='w-[35px]'/> */}
                <div className='w-[35px] h-[35px] bg-[#FCFCFC17] border-[1px] border-[#FFFFFF0A] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/taskIcon.svg" alt='task' className='relative z-[1]' />
                  <div id='starsGlow'></div>
                  <div id='starsGlow2'></div>
                  <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#FCE05E] blur-[3px] glowTask'></div>
                </div>
                <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Task</h3>
              </div>
              <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>Tasks are to-do-list which often completed in a specific time frame  </h3>
            </div>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          </div>
          <div className='flex justify-between items-center lg:mt-[40px] xl:mt-0'>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
            <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
              <div className='flex gap-2 items-center'>
                {/* <img src="https://dz1x1c630cl14.cloudfront.net/webassets/chat_icon.svg" alt='channel' className='w-[35px]'/> */}
                <div className='w-[35px] h-[35px] bg-[#FCFCFC17] border-[1px] border-[#FFFFFF0A] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/chatIcon.svg"alt='chat' className='relative z-[1]' />
                  <div id='starsGlow'></div>
                  <div id='starsGlow2'></div>
                  <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#255DCA] blur-[3px] glowChat'></div>
                </div>
                <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Chat</h3>
              </div>
              <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>A space where one can Dm and group chat with anyone in organisation  officially  </h3>
            </div>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          </div>
          <div className='flex justify-between items-center lg:mt-[40px] xl:mt-0'>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block xl:hidden'></div>
            <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
              <div className='flex gap-2 items-center'>
                <div className='w-[35px] h-[35px] bg-[#FCFCFC17] border-[1px] border-[#FFFFFF0A] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/aiIcon.svg" alt='Ai' className='relative z-[1]' />
                  <div id='starsGlow'></div>
                  <div id='starsGlow2'></div>
                  <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#EA64D1] blur-[3px] glowAi'></div>
                </div>
                <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Ai</h3>
              </div>
              <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>Get Intelligence response from workfast.ai any data, information, report or summary about your organisation  </h3>
            </div>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block'></div>
          </div>
          <div className='flex justify-between items-center lg:mt-[40px] xl:mt-0'>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden'></div>
            <div className='ml-[30px] mr-[50px] hover:scale-[1.1] transition-all duration-500 hover:ml-[40px]'>
              <div className='flex gap-2 items-center'>
                {/* <img src="https://dz1x1c630cl14.cloudfront.net/webassets/personalisation_icon.svg" alt='channel' className='w-[35px]'/> */}
                <div className='w-[35px] h-[35px] bg-[#FCFCFC17] border-[1px] border-[#FFFFFF0A] flex justify-center items-center relative rounded-[10px] overflow-hidden'>
                  <img src="https://dz1x1c630cl14.cloudfront.net/webassets/personalizationIcon.svg" alt='Personalization' className='relative z-[1]' />
                  <div id='starsGlow'></div>
                  <div id='starsGlow2'></div>
                  <div className='absolute -bottom-[38%] -translate-y-[50%] w-[13px] h-[10px] rounded-full bg-[#BC78F1] blur-[3px] glowPersonalization'></div>
                </div>
                <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Personalisation</h3>
              </div>
              <h3 className='mt-[5px] sm:mt-[15px] lg:mt-[5px] text-[#E2E8FF8C] text-[14px] lg:text-[17px] inter-normal'>Customise the navigation bar according to one’s own need comfort and priority.</h3>
            </div>
            <div className='h-[30px] w-[1px] bg-[#E2E8FF] block sm:hidden lg:block '></div>
          </div>
        </div>
      </div>
    </div>
  )
}
