import React from 'react'
import chat from "../../../../images/chat1.svg";

export default function Chat() {
  return (
    <div className='w-11/12 mx-auto relative flex gap-[20px] items-center my-[100px]'>
         <div className='basis-1/2 flex justify-start'>
            <img src={chat} alt='channel' />
        </div>
        <div className='basis-1/2 ml-[160px]'>
            <h2 className='text-[#FFDD09] text-[60px] font-semibold'>Chat</h2>
            <h3 className='mt-[10px] text-[#FFFFFF] font-medium text-[28px]'> A space where one can Dm and group chat with anyone in organisation  officially</h3>
            <h4 className='mt-[10px] text-[#E4E8EB] font-normal text-[24px]'>if needed the specific chat can be added to ‘Task section’ if it is needed to be completed.further pin and save the chats of your choice</h4>
        </div>
    </div>
  )
}
