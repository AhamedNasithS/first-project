import React from 'react'
import { useNavigate } from 'react-router-dom';




export default function Banner() {
    const navigate = useNavigate();
    return (
        <div className="bg-cover bg-center h-full w-full flex flex-col items-center relative mb-[20px] lg:mb-[60px] xl:mb-[100px] overflow-hidden gap-[20px] lg:gap-[60px] xl:gap-[100px] px-[20px] sm:px-[0px]">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='flex flex-col gap-[20px] lg:gap-[35px] text-center items-center my-[40px]'>
                <h2 className='text-[24px]  sm:text-[40px] xl:text-[70px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent inter-bold'>Investors</h2>
                <div className='hidden sm:flex flex-col gap-[10px] xl:gap-[20px]'>
                    <h2 className='text-[16px] lg:text-[22px] xl:text-[27px] text-[#FFFFFF] font-medium'>We are on a mission to change the world! To accomplish this audacious vision, we are open </h2>
                    <h2 className='text-[16px]  lg:text-[22px] xl:text-[27px] text-[#FFFFFF] font-medium'> to investments with great people, who can travel with us in long term.</h2>
                </div>
                <h2 className='text-[14px] text-[#FFFFFF] font-medium text-center sm:hidden'>We are on a mission to change the world! To accomplish this audacious vision, we are open to investments with great people, who can travel with us in long term.</h2>
                <button className='w-[200px] h-[38px] sm:h-[44px] lg:w-[300px] lg:h-[50px] rounded-[18px] bg-gradient-to-bl from-[#FDD01F] via-[#FDD320] to-[#F8861B] border-[1px] border-[#995900] b3 relative' onClick={() => {navigate('/investor/form')}}>
                    <span className='text text-[#2A2200] text-[12px] lg:text-[16px] font-semibold'>Apply for Investment</span>
                    <span class="shimmer2"></span>
                </button>
            </div>
            <div className='flex flex-col gap-[20px] lg:gap-[75px] text-center items-center relative w-full mb-[40px]'>
                <h2 className='text-[24px]  sm:text-[40px] xl:text-[55px] bg-gradient-to-l from-[#FDD220] to-[#FFFFFF] bg-clip-text text-transparent font-semibold'>Our seed funding investors</h2>
                <div className='sm:w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 sm:flex justify-between items-center'>
                    <div className='flex flex-col gap-[12px] items-center'>
                        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/girish.svg' alt='girish' />
                        <h2 className='text-[#FFDD09] text-[20px] lg:text-[26px] font-semibold text-center'>Girish Mathrubootham</h2>
                        <div className='text-[#FFFFFF] text-[18px] lg:text-[25px] font-medium text-center'>
                            <h2>CEO & Founder of</h2>
                            <h2>Freshworks</h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px] items-center'>
                        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/guns.svg' alt='guns' />
                        <h2 className='text-[#FFDD09] text-[20px] lg:text-[26px] font-semibold text-center'>Gans Subramaniam</h2>
                        <div className='text-[#FFFFFF] text-[18px] lg:text-[25px] font-medium text-center'>
                            <h2>Founder & Managing Partner</h2>
                            <h2>Hourglass Venture Partners</h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px] items-center'>
                        <img src='https://dz1x1c630cl14.cloudfront.net/webassets/paytm.svg' alt='paytm' />
                        <h2 className='text-[#FFDD09] text-[20px] lg:text-[26px] font-semibold text-center'>Vijay Shekhar Sharma</h2>
                        <div className='text-[#FFFFFF] text-[18px] lg:text-[25px] font-medium text-center'>
                            <h2>Founder & CEO of</h2>
                            <h2>Paytm</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
