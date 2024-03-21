import React from 'react'
import ai from "../../../../images/ai copy.svg";

export default function Ai() {
  return (
    <div className='w-11/12 mx-auto relative flex gap-[20px] items-center my-[100px]'>
        <div className='basis-1/2'>
            <h2 className='text-[#FFDD09] text-[60px] font-semibold'>Ai</h2>
            <h3 className='mt-[10px] text-[#FFFFFF] font-medium text-[28px]'>Get Intelligence response from 1.ai of any data, information, report or summary  </h3>
            <h4 className='mt-[10px] text-[#E4E8EB] font-normal text-[24px]'>For example, Top performer of the quarter, pending approvals, priority list, attendance, work from home status Etc. </h4>
        </div>
        <div className='basis-1/2 flex justify-end'>
            <img src={ai} alt='channel' />
        </div>
    </div>
  )
}
