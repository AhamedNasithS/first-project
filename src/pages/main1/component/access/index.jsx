import React from 'react'

export default function Access({ setIsForm }) {
  return (
    <div className='w-full relative flex flex-col gap-[10px] lg:gap-[30px] items-center mt-[50px] sm:mt-[100px] lg:mt-[150px] my-[20px] lg:my-[100px] px-[20px] lg:px-0'>
      <h2 className='text-[24px] sm:text-[40px] lg:text-[50px] xl:text-[70px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Exclusive Early Access</h2>
      <h3 className='text-[14px] sm:text-[22px] lg:text-[30px] xl:text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Dive into Our AI-Powered Productivity Platform</h3>
      {/* <button className='w-full sm:w-7/12 lg:w-[570px] mx-auto bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] via-[#F8C240] to-[#F8861B] h-[40px] lg:h-[70px] mt-[10px] lg:mt-[20px] rounded-[6px] lg:rounded-[20px] relative  b2' onClick={() => {setIsForm(true)}}><span className='text-[#2A2200] text-[16px] lg:text-[28px] font-medium'>Apply for early access 👋🏻</span><span class="shimmer1"></span></button> */}
      <div className='flex gap-[22px] items-center'>
        <a href='https://app.workfast.ai/' target='_blank' rel='noreferrer'><button className='py-[8px] px-[12px] w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] text-[#2A2200] text-[16px] lg:text-[18px] font-semibold rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] relative'>Sign up for free</button></a>
        <div className='w-[150px] lg:w-[173px] h-[44px] lg:h-[54px] rounded-[10px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] p-[0.5px] md:p-[1px] cursor-pointer' onClick={() => { setIsForm(true) }}>
          <div className='w-full h-full rounded-[10px] bg-[#010306] flex justify-center'>
            <h3 className='text-[#FFFFFF] text-[16px] lg:text-[18px] font-semibold my-auto'>Request Demo</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
