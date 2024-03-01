import React from 'react'
import Glow from "../../images/Glowing.svg";

export default function ContactUs() {
  return (
    <div className='w-full h-screen relative p-10'>
        <img src={Glow} alt='glow' className='fixed w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0'/> 
        <h1 className='DarkerGrostesqueSemibold text-[30px] sm:text-[40px] lg:text-[80px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent text-center z-[1]'>Contact Us</h1>
        <h3 className='text-[18px] sm:text-[24px] lg:text-[32px] text-[#FFF] font-bold mt-[30px]'>Last updated on 01-03-2024 15:32:22</h3>
        <h3 className='text-[18px] sm:text-[24px] lg:text-[32px] text-[#FFF] font-semibold mt-[30px] z-10 relative'>You may contact us using the information below:</h3>
        <h4 className='text-[14px] sm:text-[20px] lg:text-[28px] text-[#FFF] font-normal z-10 relative'><span className='text-[18px] sm:text-[24px] lg:text-[32px] text-[#FDD320] font-medium'>Merchant Legal entity name: </span> One.Ai</h4>
        <h4 className='text-[14px] sm:text-[20px] lg:text-[28px] text-[#FFF] font-normal z-10 relative'><span className='text-[18px] sm:text-[24px] lg:text-[32px] text-[#FDD320] font-medium'> Registered Address: </span>PLOT No. 70, Gomathi Nagar, Velachery, Chennai,, Chennai, Tamil Nadu, PIN: 600042</h4>
        <h4 className='text-[14px] sm:text-[20px] lg:text-[28px] text-[#FFF] font-normal z-10 relative'><span className='text-[18px] sm:text-[24px] lg:text-[32px] text-[#FDD320] font-medium'> Operational Address: </span>PLOT No. 70, Gomathi Nagar, Velachery, Chennai,, Chennai, Tamil Nadu, PIN: 600042</h4>
        <h4 className='text-[14px] sm:text-[20px] lg:text-[28px] text-[#FFF] font-normal z-10 relative'><span className='text-[18px] sm:text-[24px] lg:text-[32px] text-[#FDD320] font-medium'> Telephone No: </span> 8925910212</h4>
        <h4 className='text-[14px] sm:text-[20px] lg:text-[28px] text-[#FFF] font-normal z-10 relative mb-[100px]'><span className='text-[18px] sm:text-[24px] lg:text-[32px] text-[#FDD320] font-medium'> E-Mail ID: </span>payments@get1.ai</h4>
    </div>
  )
}