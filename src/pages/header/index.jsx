import React from 'react'
import Logo from "../../images/one_ai-Logo.svg";

export default function Header() {
  return (
    <div className='flex justify-between items-center h-[80px] w-full bg-gradient-to-t from-[#111830] to-[#13131300] p-[24px]'>
        <img src={Logo} alt='logo'/>
        <div className='flex gap-8 px-8 py-4 rounded-[40px] border-[1px] border-[#E2E8FF1A]'>
            <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer'>About</h3>
            <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer'>Features</h3>
            <h3 className='text-[#E2E8FFBF] font-normal text-[14px] cursor-pointer'>Price</h3>
        </div>
        <button className='py-[8px] px-[12px] text-[#1B1600] text-[14px] font-semibold rounded-[8px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B]'>Book a demo</button>
    </div>
  )
}
