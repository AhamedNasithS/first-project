import React from 'react'
import glow from "../../../../images/glow3.svg"
import channel from "../../../../images/channel_icon.svg";
import project from "../../../../images/project_icon.svg";
import task from "../../../../images/task_icon.svg";
import chat from "../../../../images/chat_icon.svg";
import ai from "../../../../images/ai_icon.svg";
import personalisation from "../../../../images/personalisation_icon.svg";
import border_1 from "../../../../images/border_1.svg";
import border_2 from "../../../../images/border_2.svg";
import border_3 from "../../../../images/border_3.svg";
import border_4 from "../../../../images/border_4.svg";
import border_5 from "../../../../images/border_5.svg";
import circle from "../../../../images/border_circle.svg";



export default function Features() {
  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto">
      <img src={glow} alt='glow' className='absolute -top-[350px]'/>
      <h3 className='text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Prime Features</h3>
      <div className='grid grid-cols-3 items-center w-full gap-y-[20px] mt-[60px] relative'>
        <img src={border_1} alt='border' className='absolute -top-[47px] -left-[59px]'/>
        <img src={circle} alt='circle' className='absolute -top-[53px] left-[178px]'/>
        <img src={border_2} alt='border' className='absolute -top-[47px] left-[191px]'/>
        <img src={circle} alt='circle' className='absolute -top-[53px] left-[590px]'/>
        <img src={border_2} alt='border' className='absolute -top-[47px] left-[605px]'/>
        <img src={circle} alt='circle' className='absolute -top-[53px] right-[180px]'/>
        <img src={border_3} alt='border' className='absolute -top-[47px] -right-[59px]'/>
        <img src={border_4} alt='border' className='absolute top-[99px] -left-[51px]'/>
        <img src={border_5} alt='border' className='absolute top-[99px] -right-[51px]'/>
        <div className='flex justify-between items-center'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
          <div className='ml-[30px] mr-[50px]'>
            <div className='flex gap-2 items-center'>
              <img src={channel} alt='channel'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Channel</h3>
            </div>
            <h3 className='mt-[5px] text-[#E2E8FF8C] text-[17px] inter-normal'>A Space to Communicate and get aligned with your team on Project and tasks </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
          <div className='ml-[30px] mr-[50px]'>
            <div className='flex gap-2 items-center'>
              <img src={project} alt='channel'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Project</h3>
            </div>
            <h3 className='mt-[5px] text-[#E2E8FF8C] text-[17px] inter-normal'>A Space to Carefully Plan and Achieve a collection aim. </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
          <div className='ml-[30px] mr-[50px]'>
            <div className='flex gap-2 items-center'>
              <img src={task} alt='channel'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Task</h3>
            </div>
            <h3 className='mt-[5px] text-[#E2E8FF8C] text-[17px] inter-normal'>Tasks are to-do-list which often completed in a specific time frame  </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
          <div className='ml-[30px] mr-[50px]'>
            <div className='flex gap-2 items-center'>
              <img src={chat} alt='channel'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Chat</h3>
            </div>
            <h3 className='mt-[5px] text-[#E2E8FF8C] text-[17px] inter-normal'>A space where one can Dm and group chat with anyone in organisation  officially  </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
          <div className='ml-[30px] mr-[50px]'>
            <div className='flex gap-2 items-center'>
              <img src={ai} alt='channel'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Ai</h3>
            </div>
            <h3 className='mt-[5px] text-[#E2E8FF8C] text-[17px] inter-normal'>Get Intelligence response from 1.ai any data, information, report or summary about your organisation  </h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
          <div className='ml-[30px] mr-[50px]'>
            <div className='flex gap-2 items-center'>
              <img src={personalisation} alt='channel'/>
              <h3 className='text-[#E2E8FF] text-[19px] font-medum'>Personalisation</h3>
            </div>
            <h3 className='mt-[5px] text-[#E2E8FF8C] text-[17px] inter-normal'>Customise the navigation bar according to one’s own need comfort and priority.</h3>
          </div>
          <div className='h-[30px] w-[2px] bg-[#E2E8FF]'></div>
        </div>
      </div>
    </div>
  )
}
