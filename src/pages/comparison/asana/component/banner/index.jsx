import React from 'react'
import asanaIcon from "../../../../../images/asanaicon.svg"
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Banner() {
  return (
    <div className='mt-[20px] sm:mt-[60px]'>
        <div className='px-[24px] py-[11px] w-[216px] mx-auto bg-[#F1F1F9] rounded-[120px] text-[#514B81] text-[14px] font-normal'>The #1 Asana Alternative</div>
        <div className='mt-[20px] lg:mt-[40px] flex flex-wrap sm:gap-[12px] justify-center items-center text-[#0A0800] text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[62px] font-bold'>
            <h2>Best alternative to</h2>
            <img src={asanaIcon} alt='asana' className='w-[30px] sm:w-[40px] xl:w-auto ml-[12px] sm:ml-0'/>
            <h2>Asana for your</h2>
        </div>
        <h2 className='text-[#0A0800] text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[62px] font-bold text-center'>team to work faster</h2>
        <h3 className='text-[#8E8E93] text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal text-center w-10/12 lg:w-8/12 mx-auto mt-[20px] lg:mt-[40px]'>Workfast.ai offers channel and chat space for teams to communicate effectively while managing projects and tasks efficiently</h3>
        <div className='bg-gradient-to-br from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[12px] w-[200px] sm:w-[300px] lg:w-[420px] h-[50px] lg:h-[66px] mx-auto mt-[20px] sm:mt-[40px] lg:mt-[60px] flex items-center justify-center sm:gap-[8px] text-[#2A2200] text-[18px] sm:text-[22px] lg:text-[28px] font-semibold'>
            <h4>Sign-up for free</h4><IoIosArrowRoundForward/>
        </div>
    </div>
  )
}
