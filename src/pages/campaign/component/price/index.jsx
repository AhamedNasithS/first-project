import React from 'react'
import campaignIcon from "../../../../images/campaignIcon.svg";
import Arrow from "../../../../images/routeArrow.svg";
import whatsapp from "../../../../images/whatsapp.svg";

export default function Price() {
    return (
        <div className='flex flex-col justify-center items-center gap-[30px] sm:gap-[64px] px-[20px] sm:px-0'>
            <div className='flex justify-center items-center flex-col gap-[34px] relative z-[1]'>
                <div className='flex justify-center'>
                    <img src={campaignIcon} alt='campaignIcon' className='w-[100px] sm:w-[150px] lg:w-auto'/>
                    <img src={Arrow} alt='Arrow' />
                    <img src={whatsapp} alt='whatsapp' className='w-[50px] sm:w-[80px] lg:w-auto'/>
                </div>
                <h3 className='text-[#000000] text-[16px] sm:text-[22px] lg:text-[28px] xl:text-[32px] font-medium text-center sm:w-11/12 lg:w-10/12 xl:w-8/12 relative z-[1]'>Why settle for <span className='font-semibold text-[#26AE60]'>WhatsApp</span> to manage your team when <span className='font-semibold text-[#FDB220]'>Workfast.ai</span> delivers a more professional solution for less ?</h3>
                <div className='relative z-[1] px-[27px] py-[10px] lg:py-[17px] rounded-[8px] sm:rounded-[12px] bg-gradient-to-l from-[#FDD01F] via-[#FDD320] to-[#F8861B] cursor-pointer text-[#2A2200] font-semibold text-[14px] sm:text-[18px] lg:text-[22px] '>Sign-up Free</div>
            </div>
            <div className='p-[20px] sm:p-[40px] lg:p-[56px] border-[#FED321] border rounded-[22px] sm:w-[90%] lg:w-[70%] flex flex-col sm:flex-row items-center justify-between' style={{ boxShadow: '0px 0px 17px 0px #FFDD094D' }}>
                <div>
                    <div className='flex items-center gap-[16px]'>
                        <div className='text-[#3D3D3D] font-semibold text-[26px] lg:text-[34px]'>Starter Pack</div>
                        <div className='bg-gradient-to-l from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[4px] px-[27px] py-[7px] font-medium text-[#161616] text-[12px] xl:text-[16px] flex justify-center items-center'>Beta Release</div>
                    </div>
                    <div className='mt-[16px] sm:w-[340px] lg:w-[424px] text-[#3D3D3D] text-[20px] lg:text-[24px] font-normal text-center sm:text-start'>For individuals who value time and focus.</div>
                </div>
                <div className='px-[26px] flex justify-center items-center flex-col'>
                    <div className='flex'>
                        <div className='text-[#3D3D3D] text-[50px] lg:text-[72px] font-bold leading-[54px] lg:leading-[85px]'>$1</div>
                        <div className='text-[#7A7A7A] text-[30px] lg:text-[42px] font-normal relative mt-[9px] lg:mt-[23px]'>$5 <div className='w-[3px] h-[40px] lg:h-[60px] bg-[#282828] rotate-45 absolute top-0 right-[16px] lg:right-[22px]'></div></div>
                    </div>
                    <div className='text-[#000000] text-[10px] lg:text-[13px] font-medium'>Per user / Per month</div>
                    <div className='mt-[11px] bg-[#007AFF] rounded-[8px] py-[5px] px-[30px] lg:px-[40px] font-semibold text-[18px] lg:text-[22px] text-[#FFF]'>Try it Free</div>
                </div>
            </div>
            <div className='flex flex-col gap-[20px] sm:gap-[40px] items-center justify-center sm:w-10/12 mx-auto'>
                <h3 className='text-[#24223E] font-semibold text-[22px] sm:text-[30px] lg:text-[40px] xl:text-[71px] text-center sm:w-11/12'>Use Workfast.ai to Work faster and Smarter</h3>
                <div className='flex flex-col gap-[18px] items-center justify-center'>
                    <h4 className='text-[#383838] font-medium text-[16px] sm:text-[20px] lg:text-[30px] xl:text-[44px] text-center'>New era business needs New tools for Communication </h4>
                    <div className='bg-gradient-to-l from-[#FDD01F] via-[#FDD320] to-[#F8861B] rounded-[11px] px-[34px] py-[6px] sm:py-[10px] lg:py-[17px] font-semibold text-[#2A2200] text-[14px] sm:text-[18px] lg:text-[21px] flex justify-center items-center cursor-pointer'>Try it Free</div>
                </div>
            </div>
        </div>
    )
}
