import React from 'react'

export default function MainScreen({ setIsForm }) {
  return (
    <div className='flex flex-col justify-center items-center w-10/12 relative'>
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/glow3.svg" alt='glow' className='absolute z-[0] top-[0px] sm:top-auto' />
      <img src='https://dz1x1c630cl14.cloudfront.net/webassets/workfast.svg' alt='logo' className='relative z-[1] w-[40%] sm:w-auto' />
      <h2 className='text-[#FEF9F1] font-semibold text-[26px] md:text-[36px] lg:text-[50px] xl:text-[60px] relative z-[1] mt-[20px]'>One intelligent </h2>
      <h3 className='bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent text-[26px] md:text-[36px] lg:text-[50px] xl:text-[60px] font-semibold relative z-[1] text-center'>Platform for your team to work faster</h3>
      <p className='text-[#FFFFFF] inter-normal text-[14px] lg:text-[18px] md:w-[63%] text-center my-[20px] relative z-[1]'>An app that simplifies workflows with managing tasks and communication in one seamless platform.</p>
      <button className='w-[150px] md:w-[235px] h-[45px] md:h-[55px] rounded-[12px] bg-gradient-to-bl from-[#FDD01F] via-[#F8C240] to-[#F8861B] relative z-[1] text-[#241501] font-semibold text-[16] md:text-[20px]' onClick={() => {setIsForm(true)}}>Join Us</button>
    </div>
  )
}
