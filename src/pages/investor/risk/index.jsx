import React from 'react'
import GrowthUpIcon from "../../../images/GrowthUpIcon.svg"

export default function HighRisk() {
    return (
        <div className="h-full w-full flex flex-col items-center relative mb-[20px] lg:mb-[60px] xl:mb-[100px] overflow-hidden px-[20px] sm:px-0">
            <h2 className='text-[24px]  sm:text-[40px] xl:text-[60px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-semibold text-center'>Workfast.ai is a high risk high return investments</h2>
            <p className='text-[#FFFFFF] text-[14px]  sm:text-[20px] xl:text-[26px] font-semibold px-[40px] text-center leading-10'>We don't take money from individuals. We will make investments only from seasoned entrepreneurs and professional VCs who have been through an entrepreneurial journey. This journey is very tough and it will have a lot of ups & downs which will not be able to be handled by people who have never gone through this before. Investing money in companies is a huge risk. Even though we have a clear plan and a great execution team, many factors matter. It's a 3 Year plan minimum and a long-term plan. The intention is to build a great company that will touch people's lives in a positive way and money will be a byproduct. We are aiming for a huge impact and returns as well.</p>
            <img src={GrowthUpIcon} alt='GrowthUpIcon' className='my-[40px] sm:my-[90px] w-[30%]'/>
            <h2 className='text-[18px]  sm:text-[24px] xl:text-[35px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-semibold hidden sm:flex'>"We take money only from people who can align with our</h2>
            <h2 className='text-[18px]  sm:text-[24px] xl:text-[35px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-semibold hidden sm:flex'>audacious vision and hold for a long term"</h2>
            <h2 className='text-[18px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-semibold sm:hidden text-center'>"We take money only from people who can align with our audacious vision and hold for a long term"</h2>
        </div>
    )
}
