import React from 'react'



export default function Availbles() {

  return (
    <div className="flex flex-col items-center relative w-10/12 mx-auto mb-[20px] lg:mb-[100px]">
      <h3 className='text-[22px] sm:text-[38px] lg:text-[55px] font-semibold bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent'>Available On</h3>
      <div className='absolute top-[18px] sm:top-[30px] lg:top-[40px] right-0 sm:right-[20px] w-[100px] xl:w-[340px] h-[40px] lg:h-[55px] hidden xl:block'>
        <div className='w-full h-full animationBorder bg-[#3E3E3E] pt-[1px] pr-[1px] relative z-[1]  lg:rounded-tr-[50px]'>
          <div className='w-full h-full bg-[#010306] relative z-[5] rounded-tr-[50px]'>
          </div>
        </div>
      </div>
      <div className='absolute top-[18px] sm:top-[30px] lg:top-[40px] left-0 sm:left-[20px] w-[100px] lg:w-[340px] h-[40px] lg:h-[55px] hidden xl:block'>
        <div className='w-full h-full animationBorderLeft bg-[#3E3E3E] pt-[1px] pl-[1px] relative z-[1] rounded-tl-[50px]'>
          <div className='w-full h-full bg-[#000] relative z-[5] rounded-tl-[50px]'>
          </div>
        </div>
      </div>
    </div>
  )
}
