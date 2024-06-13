import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function LastSection() {
    const navigate = useNavigate();
    return (
        <div className="h-full w-full flex flex-col items-center relative overflow-hidden px-[20px] sm:px-[40px] gap-[40px] sm:gap-[70px] lg:gap-[140px]">
            <h2 className='text-[20px]  sm:text-[30px] xl:text-[45px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-semibold'>Together we will create a history</h2>
            <div className='w-11/12 mx-auto flex justify-between relative p-[30px]'>
                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/Confetti.svg' alt='confetti' className='absolute inset-[0px] z-[0]' />
                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/Investors_screenshot.svg' alt='confetti' className='relative z-[1] investors1 w-[25%] xl:w-auto' />
                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/Investors_screenshot1.svg' alt='confetti' className='relative z-[1] investors2  w-[25%] xl:w-auto' />
                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/Investors_screenshot2.svg' alt='confetti' className='relative z-[1] investors1  w-[25%] xl:w-auto' />
                <img src='https://dz1x1c630cl14.cloudfront.net/webassets/Investors_Screenshot3.svg' alt='confetti' className='relative z-[1] investors2  w-[25%] xl:w-auto' />
            </div>
            <button className='w-[200px] h-[38px] sm:h-[44px] lg:w-[300px] lg:h-[50px] rounded-[18px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] border-[1px] border-[#995900] b3 relative mb-[40px] lg:mb-[60px] xl:mb-[100px]' onClick={() => {navigate('/investor/form')}}>
                <span className='text text-[#2A2200] text-[12px] lg:text-[16px] font-semibold'>Apply for Investment</span>
                <span class="shimmer2"></span>
            </button>
        </div>
    )
}
