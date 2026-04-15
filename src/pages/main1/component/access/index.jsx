import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function Access({ handleFeatureClick }) {

  return (
    <div className='w-full relative flex flex-col gap-[10px] lg:gap-[30px] items-center mt-[50px] sm:mt-[100px] lg:mt-[150px] my-[20px] lg:my-[100px] px-[20px] lg:px-0'>
      <h2 className='text-[24px] sm:text-[40px] lg:text-[50px] xl:text-[70px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Exclusive Early Access</h2>
      <h3 className='text-[14px] sm:text-[22px] lg:text-[30px] xl:text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Dive into Our AI-Powered Productivity Platform</h3>
      <div className='flex gap-[22px] items-center'>
        <button className='py-[8px] px-[12px] w-[220px] lg:w-[253px] h-[44px] lg:h-[54px] rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] border-[1px] border-[#995900] b1 relative' onClick={(e) => { handleFeatureClick() }}>
          <span className='text text-[#2A2200] text-[16px] lg:text-[18px] font-semibold flex gap-[10px] items-center justify-center'>Get Started. Free Trial <FaArrowRightLong/></span>
          <span class="shimmer"></span>
        </button>
      </div>
    </div>
  )
}
