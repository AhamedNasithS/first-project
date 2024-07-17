import React from 'react'

export default function Guide() {
  return (
    <div className='flex flex-col justify-center items-center w-10/12 relative z-[1] mx-auto'>
        <h2 className='md:text-[26px] lg:text-[32px] xl:text-[40px] bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent inter-bold relative z-[1] hidden md:block'>Beginner's Guide to Product Management</h2>
        <h2 className='text-[26px] lg:text-[32px] xl:text-[40px] text-[#FFFFFF] inter-bold relative z-[1] mt-[15px] hidden md:block'>Everything You Need to Know</h2>
        <h2 className='text-[20px] text-[#FFFFFF] inter-bold relative z-[1] md:hidden'><span className=' bg-gradient-to-r from-[#FFFFFF] to-[#FDD220] bg-clip-text text-transparent'>Beginner's Guide to Product Management </span> Everything You Need to Know</h2>
        <p className='text-[#E4E8EB] font-normal text-[14px] md:text-[16px] lg:text-[20px] xl:text-[26px] mt-[20px] md:mt-[40px] md:w-10/12 mx-auto'>We all have heard about Product management , project management , product managers , project managers and related Roles in organisations . Many teams in organisation work in silos . It is very much important to coordinate all departments and get the work done according to the goal. So this task is generally named management of business or product management.</p>
        <p className='text-[#E4E8EB] font-normal text-[14px] md:text-[16px] lg:text-[20px] xl:text-[26px] mt-[10px] md:mt-[20px] md:w-10/12 mx-auto'>In this blog we will detaily see what is product management , how it is important in an organisation, what are the roles of product managers , Tools to bring efficiency and productivity in product management etc.</p>
        <div className='w-[50px] h-[430px] absolute border-b-[1px] border-r-[1px] border-[#18599F]/[60%] rounded-br-[30px] right-0 top-[232px] hidden sm:block'></div>
    </div>
  )
}