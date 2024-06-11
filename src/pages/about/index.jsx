import React from 'react'

export default function About() {
  return (
    <div className='w-full h-screen relative p-10'>
      <img src="https://dz1x1c630cl14.cloudfront.net/webassets/Glowing.svg" alt='glow' className='fixed w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0' />ˀ
        <h1 className='DarkerGrostesqueSemibold text-[30px] sm:text-[40px] lg:text-[80px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent text-center z-[1]'>About us</h1>
        <p className='text-[18px] sm:text-[24px] lg:text-[32px] text-[#FFF] font-normal mt-[30px] z-10 relative'> <span className="bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent">Workfast.ai</span> is a outcome of our own pain points which we as a company were facing day by day by using multiple tools. As a small and power packed company , we felt our focus was drifting away when using multiple tools. And the price of using multiple tools for productivity was costing our purse heavily. When we experimented and shared our pain points to our vast business groups , they shared the same problems we were facing . So we decided to create an internal tool catering our needs for managing projects, tasks, chats and communications, later its well received by many companies and agencies. We believe workfast will help many companies which strives to achieve productivity and team effort.</p>
    </div>
  )
}