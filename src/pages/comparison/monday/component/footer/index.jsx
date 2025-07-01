import React from 'react'
import Logo from "../../../../../images/whiteThemeLogo.svg";

export default function Footer() {
    return (
        <div className='w-full border-t border-[#CECEEA]'>
            <div className='flex justify-between gap-[20px] lg:gap-[60px] lg:w-11/12 mx-auto py-8 px-[20px]'>
                <img src={Logo} alt='logo' className='w-[110px]' />
                <div className="flex flex-col gap-[10px] lg:ml-[40px] w-[140px] sm:w-auto">
                    <h2 className='text-[#292D34] text-[14px] font-medium'>Company</h2>
                    {/* <h3 className='text-[#E2E8FF8C] text-[14px] font-normal mt-[10px]'>About Us</h3> */}
                    <a href='/privacy'><h3 className='text-[#514B81] text-[14px] font-normal cursor-pointer'>Privacy Policy</h3></a>
                    <a href='/terms'><h3 className='text-[#514B81] text-[14px] font-normal cursor-pointer'>Terms And Condition</h3></a>


                    {/* <a href='/refund'><h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer'>Refund Policy </h3></a> */}
                    <a href='/about'><h3 className='text-[#514B81] text-[14px] font-normal cursor-pointer'>About us </h3></a>


                    {/* <a href='/refund'><h3 className='text-[#E2E8FF8C] text-[14px] font-normal cursor-pointer'>Refund Policy</h3></a> */}
                </div>
            </div>
            <div className='mt-[40px] sm:mt-[100px] w-11/12 mx-auto pb-8'>
                <div className='col-span-2'>
                    <p className='text-[#514B81] text-[12px] font-normal'>Copyright © 2024, Pepul Tech Privated Limited. All rights reserved.</p>
                </div>
                {/* <div className='flex items-center gap-[50px]'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Privacy Policy</p>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Terms of Service</p>
                </div> */}
            </div>
            {/* <div className='mt-[20px] grid lg:hidden w-11/12 mx-auto pb-8'>
                <div className='flex flex-col'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal'>Privacy Policy</p>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal mt-[20px]'>Terms of Service</p>
                </div>
                <div className='col-span-2'>
                    <p className='text-[#E2E8FF59] text-[12px] font-normal mt-[20px]'>Copyright © 2023 Realm Software Inc. All rights reserved.</p>
                </div>
            </div> */}
        </div>
    )
}
