import React from 'react'
import logo from "../../../../images/one.ai_Logo.svg";

export default function MainScreen() {
  return (
    <div className='flex flex-col justify-center items-center w-10/12 relative'>
        <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute  z-[0]' />
        <img src={logo} alt='logo' className='relative z-[1]'/>
        <h2 className='text-[#FEF9F1] font-semibold text-[60px] relative z-[1] mt-[20px]'>One intelligent </h2>
        <h3 className='bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent text-[60px] font-semibold'>Platform for your team to work faster</h3>
        <p className='text-[#FFFFFF] '>An Intelligent platform that helps your team to organise, collaborate and engage your work in a faster and easy way</p>
    </div>
  )
}
